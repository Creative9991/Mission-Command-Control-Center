import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "../App.css";
import { Card } from "antd";
import { spaceAgencies } from "../constants/spaceAgency";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function changeBackground(e) {
  e.target.style.opacity = "80%";
}

function outBackground(e) {
  e.target.style.opacity = "100%";
}

const fontAwesomeStyle = {
  width: "150px",
  height: "150px",
  top: "30px",
  position: "relative",
};
const Space_Agencies = () => {
  const [id, setId] = useState(null);
  const [agencyDetails, setAgencyDetails] = useState(false);

  const goToAgencyDetails = (agencyId) => {
    if (agencyId !== null && agencyDetails !== true) {
      setId(agencyId);
      setAgencyDetails(true);
    }
  };
  //console.log(this.state.id)
  if (id) {
    return <Redirect to={`/agency/${id}`} />;
  } else {
    return (
      <div className="space-agencies">
        <h1 className="header-agency">Top Space Agencies Around The World</h1>
        <div className="grid-container">
          {spaceAgencies.map((block) => (
            <Card
              key={block.id}
              onClick={() => goToAgencyDetails(block.id)}
              onMouseOver={changeBackground}
              onMouseOut={outBackground}
              style={{ backgroundImage: `url(${block.imgAsset})` }}
              hoverable
            ></Card>
          ))}

          {sessionStorage.username === "mukesh" ? (
            <Card hoverable>
              <FontAwesomeIcon icon={faPlus} style={fontAwesomeStyle} />
            </Card>
          ) : null}
        </div>
      </div>
    );
  }
};
export default Space_Agencies;
