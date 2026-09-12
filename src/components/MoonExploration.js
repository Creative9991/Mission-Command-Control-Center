import React, { useEffect, useState } from "react";
import { Card, Tag } from "antd";
import { FaSpinner } from "react-icons/fa";
import { getMoonPhaseData, getUpcomingLunarMissions } from "../services/moonExplorationAPI";
import "../styles/moonExploration.css";

function formatDate(iso) {
  if (!iso) return "TBD";
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function findPhen(moondata, phen) {
  return moondata?.find((entry) => entry.phen === phen)?.time || "—";
}

const MoonExploration = () => {
  const [phase, setPhase] = useState(null);
  const [missions, setMissions] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    getMoonPhaseData()
      .then((data) => {
        if (isMounted) setPhase(data);
      })
      .catch(() => {
        if (isMounted) setError("Unable to reach the Moon phase service right now.");
      });

    // Missions are a secondary panel -- fail quietly so a Launch Library
    // hiccup doesn't block the phase data above from showing.
    getUpcomingLunarMissions()
      .then((data) => {
        if (isMounted) setMissions(data);
      })
      .catch(() => {});

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="moon-exploration">
      <Card title="Moon Exploration" bordered={false} className="moon-header-card">
        <p>
          Live lunar phase and illumination data from the{" "}
          <a href="https://aa.usno.navy.mil/data/api" target="_blank" rel="noopener noreferrer">
            US Naval Observatory
          </a>
          , plus real upcoming lunar missions from{" "}
          <a href="https://thespacedevs.com/llapi" target="_blank" rel="noopener noreferrer">
            The Space Devs&apos; Launch Library
          </a>
          .
        </p>
      </Card>

      {error && (
        <Card className="moon-error" bordered={false}>
          {error}
        </Card>
      )}

      {!phase && !error && (
        <FaSpinner icon="spinner" className="spinner" style={{ marginTop: 60 }} />
      )}

      {phase && (
        <Card title="Today's Moon" className="moon-phase-card">
          <div className="moon-phase-grid">
            <div className="moon-stat">
              <span className="moon-stat-label">Phase</span>
              <span className="moon-stat-value">{phase.today.curphase}</span>
            </div>
            <div className="moon-stat">
              <span className="moon-stat-label">Illumination</span>
              <span className="moon-stat-value">{phase.today.fracillum}</span>
            </div>
            <div className="moon-stat">
              <span className="moon-stat-label">Moonrise</span>
              <span className="moon-stat-value">{findPhen(phase.today.moondata, "Rise")}</span>
            </div>
            <div className="moon-stat">
              <span className="moon-stat-label">Moonset</span>
              <span className="moon-stat-value">{findPhen(phase.today.moondata, "Set")}</span>
            </div>
          </div>
          <p className="moon-note">
            Times local to Kennedy Space Center, FL — the launch site for most US lunar missions.
          </p>

          <div className="moon-upcoming-phases">
            <h3>Upcoming phases</h3>
            <div className="moon-phase-chips">
              {phase.upcomingPhases.map((p, i) => (
                <span key={i} className="moon-phase-chip">
                  {p.phase} — {p.month}/{p.day}/{p.year}
                </span>
              ))}
            </div>
          </div>
        </Card>
      )}

      {missions && missions.length > 0 && (
        <Card title="Upcoming Lunar Missions" className="moon-missions-card">
          {missions.map((m) => (
            <div key={m.id} className="moon-mission">
              <div className="moon-mission-header">
                <span className="moon-mission-name">{m.name}</span>
                <Tag color={m.status === "Go for Launch" ? "cyan" : "default"}>{m.status}</Tag>
              </div>
              <div className="moon-mission-meta">
                {m.provider} · target {formatDate(m.date)}
              </div>
              {m.description && (
                <p className="moon-mission-desc">
                  {m.description.length > 220
                    ? `${m.description.slice(0, 220)}…`
                    : m.description}
                </p>
              )}
            </div>
          ))}
        </Card>
      )}
    </div>
  );
};

export default MoonExploration;
