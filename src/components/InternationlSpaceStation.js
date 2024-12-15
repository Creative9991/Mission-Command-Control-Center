import React, { useState, useEffect } from "react";
import "../App.css";
import "../styles/internationalSpaceStation.css";
import { Card, Button, Modal, Collapse } from "antd";
import logoIss from "../assets/iss.png";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { issDataList } from "../services/internationSpaceAPI";
import { text, sizaMass } from "../constants/internationSpaceStations";

const { Panel } = Collapse;

const InternationalSpaceStation = () => {
  const [currentPosition, setCurrentPosition] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    issDataList().then((data) => {
      console.log(data, "JJJJJJJ");
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

  if (!currentPosition) {
    return null;
  }

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
        {/* <p style={{ marginTop: 20, fontWeight: "bold" }}>
          Current position of International Space Station -- Latitude{" "}
          <span style={{ color: "green", fontSize: 30 }}>{issLatitude}</span>
          ,Longitude{" "}
          <span style={{ color: "green", fontSize: 30 }}>{issLongitude}</span>
        </p> */}
        <p style={{ fontStyle: "italic", fontSize: 20 }}>{text.moreInfo}.</p>
        <div className="modal">
          <Button type="primary" onClick={showModal}>
            Fun Facts
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
      <Card>
        <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={mapCenter}
            zoom={1}
          >
            {/* Marker can be added to indicate a location */}
            <Marker position={mapCenter} />
          </GoogleMap>
        </LoadScript>
      </Card>
    </div>
  );
};

export default InternationalSpaceStation;
