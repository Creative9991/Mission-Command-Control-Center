import React, { Component } from "react";
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

class Space_Agencies extends Component {
  state = {
    id: null,
    agencyDetails: false,
  };

  createNewAgency = () => {
    console.log("I clicked");
  };

  goToAgencyDetails = (agencyId) => {
    if (agencyId !== null) {
      this.setState({ id: agencyId, agencyDetails: true });
    }
  };
  render() {
    //console.log(this.state.id)
    if (this.state.id) {
      return <Redirect to={`/agency/${this.state.id}`} />;
    } else {
      return (
        <div className="space-agencies">
          <h1 className="header-agency">Top Space Agencies Around The World</h1>
          <div className="grid-container">
            {spaceAgencies.map((block) => (
              <Card
                key={block.id}
                onClick={() => this.goToAgencyDetails(block.id)}
                onMouseOver={changeBackground}
                onMouseOut={outBackground}
                style={{ backgroundImage: `url(${block.imgAsset})` }}
                hoverable
              ></Card>
            ))}

            {sessionStorage.username === "mukesh" ? (
              <Card onClick={() => this.createNewAgency} hoverable>
                <FontAwesomeIcon icon={faPlus} style={fontAwesomeStyle} />
              </Card>
            ) : null}
          </div>
        </div>
      );
    }
  }
}
export default Space_Agencies;
