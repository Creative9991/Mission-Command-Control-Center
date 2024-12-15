import React, { useState, useEffect } from "react";
import * as api from "../../services/nasaApi";
import { Card } from "antd";
import "../../App.css";

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
        {marsImagesData.map((block) => (
          <Card
            key={block.id}
            style={{
              backgroundImage: `url(${block.img_src})`,
              backgroundRepeat: "none",
            }}
            hoverable
          ></Card>
        ))}
      </div>
    </>
  );
};

export default Mars;
