import React, { useEffect, useState } from "react";
import { Card, Tag, Empty } from "antd";
import { FaSpinner } from "react-icons/fa";
import { deepSpaceNetworkData } from "../services/deepSpaceNetworkAPI";
import "../styles/deepSpaceNetwork.css";

// Placeholder target names the feed uses for a dish that isn't tracking a
// real spacecraft (under maintenance, idle, etc).
const NON_SPACECRAFT_TARGETS = new Set(["DSN", "DSS"]);

function formatDataRate(bitsPerSecond) {
  if (!bitsPerSecond) return null;
  const units = ["bps", "kbps", "Mbps", "Gbps"];
  let value = bitsPerSecond;
  let unitIndex = 0;
  while (value >= 1000 && unitIndex < units.length - 1) {
    value /= 1000;
    unitIndex += 1;
  }
  return `${value.toFixed(value < 10 ? 2 : 0)} ${units[unitIndex]}`;
}

function formatDistance(km) {
  if (!km || km < 0) return null;
  if (km >= 1e6) return `${(km / 1e6).toFixed(2)} million km`;
  return `${Math.round(km).toLocaleString()} km`;
}

function DishStatus({ dish }) {
  const isTracking = dish.upSignals.some((s) => s.active) || dish.downSignals.some((s) => s.active);

  const spacecraftNames = [
    ...new Set(
      [
        ...dish.upSignals.map((s) => s.spacecraft),
        ...dish.downSignals.map((s) => s.spacecraft),
        ...dish.targets.map((t) => t.name),
      ].filter((name) => name && !NON_SPACECRAFT_TARGETS.has(name))
    ),
  ];

  const distance = dish.targets.map((t) => formatDistance(t.downlegRangeKm)).find(Boolean);
  const activeSignals = [
    ...dish.downSignals.filter((s) => s.active).map((s) => ({ ...s, direction: "down" })),
    ...dish.upSignals.filter((s) => s.active).map((s) => ({ ...s, direction: "up" })),
  ];

  return (
    <div className={`dsn-dish ${isTracking ? "active" : "idle"}`}>
      <div className="dsn-dish-header">
        <span className="dsn-dish-name">{dish.name}</span>
        <Tag color={isTracking ? "cyan" : "default"}>{dish.activity}</Tag>
      </div>

      {spacecraftNames.length > 0 && (
        <div className="dsn-dish-target">
          Tracking <strong>{spacecraftNames.join(", ")}</strong>
          {distance && <span className="dsn-dish-distance"> — {distance} away</span>}
        </div>
      )}

      {activeSignals.length > 0 && (
        <div className="dsn-signals">
          {activeSignals.map((signal, index) => (
            <span key={index} className={`dsn-signal ${signal.direction}`}>
              {signal.direction === "down" ? "↓" : "↑"} {signal.band}-band
              {formatDataRate(signal.dataRate) ? ` · ${formatDataRate(signal.dataRate)}` : ""}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

const DeepSpaceNetwork = () => {
  const [stations, setStations] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = () => {
      deepSpaceNetworkData()
        .then((data) => {
          if (!isMounted) return;
          setStations(data.stations);
          setError(null);
        })
        .catch(() => {
          if (isMounted) setError("Unable to reach the Deep Space Network feed right now.");
        });
    };

    fetchData();
    const intervalId = setInterval(fetchData, 20000); // refresh every 20s

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="dsn">
      <Card title="Deep Space Network" bordered={false} className="dsn-header-card">
        <p>
          Live status of NASA&apos;s Deep Space Network — the array of giant radio
          antennas in Goldstone (USA), Madrid (Spain), and Canberra (Australia) that
          communicate with spacecraft across the solar system. Sourced directly from
          JPL&apos;s public{" "}
          <a href="https://eyes.nasa.gov/dsn/dsn.html" target="_blank" rel="noopener noreferrer">
            DSN Now
          </a>{" "}
          feed, refreshed every 20 seconds.
        </p>
      </Card>

      {error && (
        <Card className="dsn-error" bordered={false}>
          {error}
        </Card>
      )}

      {!stations && !error && (
        <FaSpinner icon="spinner" className="spinner" style={{ marginTop: 60 }} />
      )}

      <div className="dsn-stations">
        {stations &&
          stations.map((station) => (
            <Card key={station.name} title={station.friendlyName} className="dsn-station-card">
              {station.dishes.length === 0 ? (
                <Empty description="No dish data" />
              ) : (
                station.dishes.map((dish) => <DishStatus key={dish.name} dish={dish} />)
              )}
            </Card>
          ))}
      </div>
    </div>
  );
};

export default DeepSpaceNetwork;
