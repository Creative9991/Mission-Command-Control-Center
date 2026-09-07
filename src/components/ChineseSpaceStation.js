import React, { useState, useEffect } from "react";
import { chineseTiangongApi } from "../services/chineseSpaceStation";
import { FaSpinner } from "react-icons/fa";
import { Card } from "antd";
import logoIss from "../assets/chineseSpaceStation.jpg";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { text } from "../constants/internationSpaceStations";
import { spaceStationMarkerIcon } from "../constants/mapIcons";
const ChineseSpaceStation = () => {
  const [currentPosition, setCurrentPosition] = useState({});
  // The map's own center is locked once, separately from the live marker
  // position — otherwise binding `center` to the same live coordinates as
  // the marker recenters the map on every poll, so the icon always sits
  // dead-center and never appears to move.
  const [lockedCenter, setLockedCenter] = useState(null);
  useEffect(() => {
    let isMounted = true;
    const fetchPosition = () => {
      chineseTiangongApi().then((data) => {
        if (!isMounted) return;
        if (data.positions[0]) {
          setCurrentPosition(data.positions[0]);
        } else {
          setCurrentPosition(data);
        }
      });
    };

    fetchPosition();
    const intervalId = setInterval(fetchPosition, 30000); // refresh every 30s

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, []);
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const issLatitude = Number(currentPosition.satlatitude);
  const issLongitude = Number(currentPosition.satlongitude);

  const markerPosition = {
    lat: issLatitude, // Latitude
    lng: issLongitude, // Longitude
  };

  useEffect(() => {
    if (!lockedCenter && !Number.isNaN(issLatitude) && !Number.isNaN(issLongitude)) {
      setLockedCenter(markerPosition);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [issLatitude, issLongitude, lockedCenter]);

  return (
    <div className="international-space-station">
      <Card className="international-space-station">
        <h1>Chinese Space Station</h1>
        <p>{text.issInfo}</p>

        <p style={{ fontStyle: "italic", fontSize: 20 }}>{text.moreInfo}.</p>
      </Card>

      <Card className="iss-image">
        <h1 style={{ color: "black" }}>Chinese Space Station Modules</h1>
        <img src={logoIss} alt="LogoIss" style={{ width: "100%" }} />
      </Card>

      {!lockedCenter ? (
        <FaSpinner
          icon="spinner"
          className="spinner"
          style={{ marginTop: 150 }}
        />
      ) : (
        <Card>
          <h1 style={{ color: "black" }}>
            Here is the Current Chinese Space Station Live Location
          </h1>
          <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={lockedCenter}
              zoom={3}
            >
              {/* Marker tracks the live position; the map's own center stays put */}
              <Marker position={markerPosition} icon={spaceStationMarkerIcon} />
            </GoogleMap>
          </LoadScript>
        </Card>
      )}
    </div>
  );
};

export default ChineseSpaceStation;
