import React, { Component } from "react";
import "../App.css";
import { Row, Col, Carousel } from "antd";
import {
  faSpaceShuttle,
  faSatellite,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { carouselContent } from "../constants/carouselContent";

//let loginInfo = sessionStorage.getItem("username");

const fontAwesomeStyle = {
  width: "150px",
  height: "150px",
  top: "170px",
  position: "relative",
  color: "lightsteelblue",
};

function changeBackground(e) {
  e.target.style.opacity = "50%";
}

function outBackground(e) {
  e.target.style.opacity = "100%";
}

class Space_insight extends Component {
  headeragecy = () => {
    return {
      position: "relative",
      top: "190px",
      color: "red",
    };
  };

  render() {
    return (
      <div>
        <Row className="menuItems">
          <Col
            className="columnClass"
            onMouseOver={changeBackground}
            onMouseOut={outBackground}
            xs={{ span: 5, offset: 1 }}
            lg={{ span: 6, offset: 2 }}
          >
            <Link to="/space_agencies">
              <FontAwesomeIcon icon={faSpaceShuttle} style={fontAwesomeStyle} />
              <h3 style={this.headeragecy()}>World Space Agencies</h3>
            </Link>
          </Col>

          <Col
            className="columnClass"
            onMouseOver={changeBackground}
            onMouseOut={outBackground}
            xs={{ span: 11, offset: 1 }}
            lg={{ span: 6, offset: 2 }}
          >
            <Link to="/international-Space-station">
              <FontAwesomeIcon icon={faSatellite} style={fontAwesomeStyle} />
              <h3 style={this.headeragecy()}>International Space Station</h3>
            </Link>
          </Col>
          <Col
            className="columnClass"
            onMouseOver={changeBackground}
            onMouseOut={outBackground}
            xs={{ span: 5, offset: 1 }}
            lg={{ span: 6, offset: 2 }}
          >
            <Link to="/planets">
              <FontAwesomeIcon icon={faSun} style={fontAwesomeStyle} />
              <h3 style={this.headeragecy()}>Planet Exploration</h3>
            </Link>
          </Col>
        </Row>
        <Carousel
          id="carousel"
          autoplay
          style={{
            height: "500px",
            color: "#fff",
            lineHeight: "160px",
            textAlign: "center",
            background: "#364d79",
          }}
        >
          {carouselContent.map((headerText, id) => {
            return (
              <div
                key={id}
                style={{
                  backgroundImage: `url(${headerText.imgUrl})`,
                  height: "500px",
                }}
              >
                {headerText.scrollText}
              </div>
            );
          })}
        </Carousel>
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
      </div>
    );
  }
}
export default Space_insight;
