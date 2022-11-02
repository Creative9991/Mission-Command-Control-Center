import React, { Component } from 'react';
import '../App.css';
import { Row, Col, Carousel } from 'antd';
import { faRocket, faAtom, faSpaceShuttle, faSatellite, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { carouselContent } from '../constants/carouselContent';



//let loginInfo = sessionStorage.getItem("username"); 


const fontAwesomeStyle = {
  width: '150px',
  height: '150px',
  top: '170px',
  position: 'relative',
  color: 'lightsteelblue'
}


function changeBackground(e) {
  e.target.style.opacity = '50%'
}

function outBackground(e) {
  e.target.style.opacity = '100%';
}

class Space_insight extends Component {



  headeragecy = () => {
    return {
      position: 'relative',
      top: '190px',
      color: 'red'
    }
  };

  render() {
    return (
      <div>
        <br /><br /><br />   <br /><br /><br />
        <Row className="menuItems">
          <Col className="columnClass" onMouseOver={changeBackground} onMouseOut={outBackground} xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Link to="/space_agencies">
              <FontAwesomeIcon icon={faSpaceShuttle} style={fontAwesomeStyle} />
              <h3 style={this.headeragecy()}>Agencies</h3>
            </Link>
          </Col>

          <Col className="columnClass" onMouseOver={changeBackground} onMouseOut={outBackground} xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Link to="/satellite_iss">
              <FontAwesomeIcon icon={faSatellite} style={fontAwesomeStyle} />
              <h3 style={this.headeragecy()}>Satellite</h3>
            </Link>
          </Col>
          <Col className="columnClass" onMouseOver={changeBackground} onMouseOut={outBackground} xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Link to="/rockets">
              <FontAwesomeIcon icon={faRocket} style={fontAwesomeStyle} />
              <h3 style={this.headeragecy()}>Rockets</h3>
            </Link>
          </Col>
          <Col className="columnClass" onMouseOver={changeBackground} onMouseOut={outBackground} xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{ marginTop: 80 }}>
            <Link to="/rockets">
              <FontAwesomeIcon icon={faAtom} style={fontAwesomeStyle} />
              <h3 style={this.headeragecy()}>Telescope</h3>
            </Link>
          </Col>
          <Col className="columnClass" onMouseOver={changeBackground} onMouseOut={outBackground} xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{ marginTop: 80 }}>
            <Link to="/rockets">
              <FontAwesomeIcon icon={faMoon} style={fontAwesomeStyle} />

              <h3 style={this.headeragecy()}>Planet Exploration</h3>
            </Link>
          </Col>
          <Col className="columnClass" onMouseOver={changeBackground} onMouseOut={outBackground} xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{ marginTop: 80 }}>
            <Link to="/rockets">
              <FontAwesomeIcon icon={faSun} style={fontAwesomeStyle} />
              <h3 style={this.headeragecy()}>Solar Exploration</h3>
            </Link>
          </Col>
        </Row>
        <br /><br /><br />   <br /><br /><br />

        <Carousel autoplay style={{ height: '500px', color: '#fff', lineHeight: '160px', textAlign: 'center', background: '#364d79', }}>
          {carouselContent.map((headerText, carouselKey) => {
            return (
              <h3 style={{ backgroundImage: `url(${headerText.imgUrl})` }} key={carouselKey}>{headerText.scrollText}</h3>)
          })}
        </Carousel>
        <br /><br /><br />   <br /><br /><br />
      </div>
    )
  }
}
export default Space_insight;
