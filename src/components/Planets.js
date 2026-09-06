import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../App.css";
import { Card } from "antd";
import { planets } from "../constants/planets";

function changeBackground(e) {
  // currentTarget (not target) so this always affects the Card itself,
  // not whichever child element (e.g. the hover label) triggered the bubble.
  e.currentTarget.style.opacity = "80%";
}

function outBackground(e) {
  e.currentTarget.style.opacity = "100%";
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
      return <Redirect to={`/Planets/${this.state.id}`} />;
    } else {
      return (
        <div className="space-agencies">
          <h1 className="header-agency">Top Space Agencies Around The World</h1>
          <div className="grid-container-planets">
            {planets.map((planet) => (
              <Card
                key={planet.id}
                onClick={() => this.goToAgencyDetails(planet.id)}
                onMouseOver={changeBackground}
                onMouseOut={outBackground}
                style={{ backgroundImage: `url(${planet.imgAsset})` }}
              >
                <span className="planet-label">{planet.imgName}</span>
              </Card>
            ))}
          </div>
        </div>
      );
    }
  }
}
export default Planets;
