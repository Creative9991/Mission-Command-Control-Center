import React, { useState, useEffect } from "react";
import * as api from "../../services/nasaApi";
import { Card } from "antd";
import "../../App.css";
import { FaSpinner } from "react-icons/fa";

const Mars = () => {
  console.log("|| Mars Component Console ||");
  const [marsImagesData, setMarsImagesData] = useState([]);
  useEffect(() => {
    api.marsImages().then((data) => {
      return setMarsImagesData(data.photos);
    });
  });
  return (
    <>
      <h1 className="header-agency">Mars Curiosity Rover Images</h1>
      <div className="grid-container">
        {!marsImagesData ||
        marsImagesData.length === 0 ||
        marsImagesData === undefined ||
        marsImagesData === null ? (
          <FaSpinner
            icon="spinner"
            className="spinner"
            style={{
              display: "flex",
              marginLeft: "40vw",
            }}
          />
        ) : (
          marsImagesData.map((image) => (
            <Card
              key={image.id}
              style={{
                backgroundImage: `url(${image.img_src})`,
                backgroundRepeat: "none",
              }}
              hoverable
            ></Card>
          ))
        )}
      </div>
    </>
  );
};

export default Mars;
