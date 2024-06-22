import React, { useState, useEffect, useMemo } from "react";
import * as api from "../../services/nasaApi";
import { Card } from "antd";

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
