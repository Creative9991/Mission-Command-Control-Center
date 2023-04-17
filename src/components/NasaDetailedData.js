import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { FaSpinner } from "react-icons/fa";
import * as api from "../services/nasaApi";
import "../styles/nasaDetailed.css";

const NasaDetailedData = () => {
  const [nasaData, setNasaData] = useState([]);
  const colors = {
    color: "black",
  };

  useEffect(() => {
    api.nasaDataList().then((data) => {
      setNasaData(data);
    });
  }, []);

  if (!nasaData) {
    return null;
  }

  return (
    <>
      {nasaData.length === 0 ? (
        <FaSpinner icon="spinner" className="spinner" />
      ) : (
        <Card className="nasaInfo">
          <div className="nasa-data">
            <p style={{ color: "red", fontSize: 30 }}>{nasaData.title}</p>
            <p style={{ colors }}>{nasaData.date}</p>
            <p style={{ colors }}>{nasaData.explanation}</p>
            <figure>
              <img
                className="nasaDetailedImage"
                src={nasaData.hdurl}
                alt={nasaData.hdurl}
              />
              <figcaption>{nasaData.title}</figcaption>
            </figure>

            <p style={{ colors }}>{nasaData.copywrite}</p>
          </div>
        </Card>
      )}
    </>
  );
};

export default NasaDetailedData;
