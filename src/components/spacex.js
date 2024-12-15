import React, { useState, useEffect } from "react";
import { spacexData } from "../services/spacexApi";

const Spacex = () => {
  const [spacexInfo, setSpacexInfo] = useState({});

  useEffect(() => {
    spacexData().then((data) => {
      console.log(data, "KKKKKKKKK");
      setSpacexInfo(data.iss_position);
    });
  }, [spacexInfo]);

  return (
    <>
      <h1>Hello this page is specific to spacex information</h1>
    </>
  );
};

export default Spacex;
