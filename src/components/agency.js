import React, { useState } from "react";
import { Card } from "antd";
import "../styles/isro.css";
import { Redirect } from "react-router-dom";
import "../App.css";
import { spacecraftInfo } from "../constants/spacecraftInfo";
import { spaceAgencies } from "../constants/spaceAgency";
import Nasa from "./Nasa";

function Agency(props) {
  const { Meta } = Card;
  const [info, setInfo] = useState(null);
  const [agencyDetails, setAgencyDetails] = useState(false);

  const navigateToAgencyData = (currentAgency) => {
    if (currentAgency !== null) {
      setInfo(currentAgency);
      setAgencyDetails(true);
    }
  };

  const agencyId = props.match.params.id;

  if (info !== null && agencyDetails === true) {
    if (agencyId === "SPACEX") {
      return <Redirect to={`/Spacex`} />;
    } else {
      return <Redirect to={`/agencyinfo/${agencyId}/${info}`} />;
    }
  } else {
    return (
      <div className="isro-page">
        <Card style={{ borderRadius: 20 }}>
          {spaceAgencies.map((agency) => {
            const newBackground = agency.imgAsset;
            const currentCountryFlag = agency.countryFlag;
            if (agency.id === agencyId) {
              return (
                <div className="agency-details" key={agency.id}>
                  <Meta
                    className="meta-agency-details-title"
                    title={agency.id}
                  />
                  <p
                    style={{
                      display: "inline-block",
                      height: "300px",
                      width: "300px",
                      textAlign: "center",
                      float: "left",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      backgroundImage: `url(${newBackground})`,
                    }}
                  ></p>
                  <p
                    style={{
                      height: "300px",
                      display: "inline-block",
                      width: "300px",
                      backgroundSize: "contain",
                      float: "right",
                      backgroundRepeat: "no-repeat",
                      backgroundImage: `url(${currentCountryFlag})`,
                    }}
                  ></p>

                  <p style={{ fontFamily: "verdana", fontSize: "20px" }}>
                    {agency.details}
                  </p>
                </div>
              );
            } else {
              return null;
            }
          })}
        </Card>

        <h1 className="header-agency">
          Top Spacecraft - Launchers - Satellites from {agencyId}
        </h1>
        <div className="grid-container">
          {spacecraftInfo.map((block) => (
            <Card
              key={block.info}
              style={{
                backgroundImage: `url(${block.imgAsset})`,
                backgroundSize: "contain",
              }}
              onClick={() => navigateToAgencyData(block.agency)}
              hoverable
            >
              <p className="meta-title" title={block.info}></p>
            </Card>
          ))}
        </div>

        {/*  The below code is to add some more extra components in Nasa agency*/}
        {agencyId === "NASA" ? <Nasa agencyDetails={agencyDetails} /> : null}
      </div>
    );
  }
}

export default Agency;
