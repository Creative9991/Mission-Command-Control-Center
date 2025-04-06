import React, { useState, useEffect } from "react";
import { chineseTiangongApi } from "../services/chineseSpaceStation";
import { FaSpinner } from "react-icons/fa";
import { Card } from "antd";
import logoIss from "../assets/chineseSpaceStation.jpg";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { text } from "../constants/internationSpaceStations";
const ChineseSpaceStation = () => {
  const [currentPosition, setCurrentPosition] = useState({});
  useEffect(() => {
    chineseTiangongApi().then((data) => {
      if (data.positions[0]) {
        setCurrentPosition(data.positions[0]);
      } else {
        setCurrentPosition(data);
      }
    });
  }, [currentPosition]);
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const issLatitude = Number(currentPosition.satlatitude);
  const issLongitude = Number(currentPosition.satlongitude);

  const mapCenter = {
    lat: issLatitude, // Latitude
    lng: issLongitude, // Longitude (San Francisco)
  };

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

      {mapCenter.length === 0 ||
      !currentPosition ||
      currentPosition === undefined ? (
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
              center={mapCenter}
              zoom={3}
            >
              {/* Marker can be added to indicate a location */}
              <Marker position={mapCenter} />
            </GoogleMap>
          </LoadScript>
        </Card>
      )}
    </div>
  );
};

export default ChineseSpaceStation;
