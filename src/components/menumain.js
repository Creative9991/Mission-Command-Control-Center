import React, {Component} from 'react';
import '../App.css';
import { Row , Col,Carousel  } from 'antd';
import { faRocket, faSpaceShuttle } from '@fortawesome/free-solid-svg-icons';
import { faSatellite } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {  Link } from 'react-router-dom';

//let loginInfo = sessionStorage.getItem("username"); 

const carouselData = {
    carouselContent: {
    body: [
      {
        scrollText  : 'The private spaceflight company is planning to send four astronauts to the International space station',
        imgName : "nasa",
        imgUrl : require("../assets/nasa.jpg")
      },
      {
          scrollText  : 'There’s Water and Ice on the Moon, and in More Places Than NASA Thought',
           imgName : "esa",
           imgUrl : require("../assets/esa.jpg")
      },
      {
           scrollText  : 'The China National Space Administration released mid-flight images of Mars probe Tianwen-1 as the country National Day coincided with the Mid-Autumn Festival on Thursday',
           imgName : "cnsa",
           imgUrl : require("../assets/cnsa.png")
      },
      {
         scrollText  : 'ISRO releases draft policy to regulate space communication by private players',
          imgName : "isro",
          imgUrl : require("../assets/isro.jpg")
        }
    ]
  }
};

function changeBackground(e) {
  e.target.style.opacity = '50%'
}

function outBackground(e) {
  e.target.style.opacity = '100%';
}

class MenuMain extends Component {

 
  
  headeragecy = () => {
    return{
   position : 'relative',
   top : '190px',
   color : 'red'
    }
};
    
    render(){
        return (
          <div>
            <br/><br/><br/>   <br/><br/><br/>
            <Row className = "menuItems">
            <Col className="columnClass" onMouseOver={changeBackground} onMouseOut={outBackground} xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Link to="/space_agencies">
            <FontAwesomeIcon icon={faSpaceShuttle} style={{ width :'150px', height : '150px', top : '170px', position: 'relative', color: 'lightsteelblue'}} />
            <h3 style = {this.headeragecy()}>Agencies</h3>
            </Link>
            </Col>
          
            <Col className="columnClass" onMouseOver={changeBackground} onMouseOut={outBackground}  xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Link to="/satellite_iss">
            <FontAwesomeIcon icon={faSatellite} style={{ width :'150px', height : '150px', top : '170px', position: 'relative' ,color: 'lightsteelblue'}} />
            <h3 style = {this.headeragecy()}>Satellite</h3>
            </Link>
            </Col>
            <Col className="columnClass" onMouseOver={changeBackground} onMouseOut={outBackground}  xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <FontAwesomeIcon icon={faRocket} style={{ width :'150px', height : '150px', top : '170px', position: 'relative', color: 'lightsteelblue'}} />
            <h3 style = {this.headeragecy()}>Rockets</h3>
            </Col>
          </Row> 
          <br/><br/><br/>   <br/><br/><br/>

          <Carousel autoplay style={{ height: '500px',color: '#fff',lineHeight: '160px',textAlign: 'center',background: '#364d79',}}>
            {carouselData.carouselContent.body.map((headerText, carouselKey) =>
            {return (
            <h3 style={{backgroundImage: `url(${headerText.imgUrl})`}} key={carouselKey}>{headerText.scrollText}</h3>)})}
         </Carousel>
         <br/><br/><br/>   <br/><br/><br/>
          </div>  
        )
    }
}
export default MenuMain;
