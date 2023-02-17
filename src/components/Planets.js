import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../App.css";
import { Card } from "antd";
import { planets } from "../constants/planets";

function changeBackground(e) {
  e.target.style.opacity = "80%";
}

function outBackground(e) {
  e.target.style.opacity = "100%";
}

// const fontAwesomeStyle = {
//   width: "150px",
//   height: "150px",
//   top: "30px",
//   position: "relative",
// };

class Planets extends Component {
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
      return <Redirect to={`/planets/${this.state.id}`} />;
    } else {
      return (
        <div className="space-agencies">
          <h1 className="header-agency">Top Space Agencies Around The World</h1>
          <div className="grid-container">
            {planets.map((block) => (
              <Card
                key={block.id}
                onClick={() => this.goToAgencyDetails(block.id)}
                onMouseOver={changeBackground}
                onMouseOut={outBackground}
                style={{ backgroundImage: `url(${block.imgAsset})` }}
                hoverable
              ></Card>
            ))}
          </div>
        </div>
      );
    }
  }
}
export default Planets;
