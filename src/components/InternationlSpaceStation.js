import React, { useState, useEffect } from "react";
import "../App.css";
import "../styles/internationalSpaceStation.css";
import { FaSpinner } from "react-icons/fa";
import { Card, Button, Modal } from "antd";
import logoIss from "../assets/iss.png";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { issDataList } from "../services/internationSpaceAPI";
import { text, sizaMass } from "../constants/internationSpaceStations";
const InternationalSpaceStation = () => {
  const [currentPosition, setCurrentPosition] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    issDataList().then((data) => {
      setCurrentPosition(data.iss_position);
    });
  }, [currentPosition]);

  // Map container style
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const issLatitude = Number(currentPosition.latitude);
  const issLongitude = Number(currentPosition.longitude);

  const mapCenter = {
    lat: issLatitude, // Latitude
    lng: issLongitude, // Longitude (San Francisco)
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="international-space-station">
      <Card className="international-space-station">
        <h1>International Space Station</h1>
        <p>{text.issInfo}</p>

        <p style={{ fontStyle: "italic", fontSize: 20 }}>{text.moreInfo}.</p>
        <div className="modal">
          <Button type="primary" onClick={showModal}>
            Want to know More?
          </Button>
          <Modal
            title="International Space Station"
            visible={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            {sizaMass.map((sizemass) => {
              return (
                <ul key={sizemass.id}>
                  <li>{sizemass.statement}</li>
                </ul>
              );
            })}
          </Modal>
        </div>
      </Card>

      <Card className="iss-image">
        <h1 style={{ color: "black" }}>International Space Station Modules</h1>
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
            Here is the Current International Space Station Live Location
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

export default InternationalSpaceStation;
