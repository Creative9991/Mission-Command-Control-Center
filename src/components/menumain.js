import React, {Component} from 'react';
import '../App.css';
import { Row , Col,Carousel  } from 'antd';
import { faRocket, faSpaceShuttle } from '@fortawesome/free-solid-svg-icons';
import { faSatellite } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { FontRocket } from '@fortawesome/react-fontawesome';


const carouselData = {
    carouselContent: {
    body: [
      {
        scrollText  : 1,
        imgName : "nasa",
        imgUrl : require("../assets/nasa.jpg")
      },
      {
          scrollText  : 2,
           imgName : "esa",
           imgUrl : require("../assets/esa.jpg")
      },
      {
           scrollText  : 3,
           imgName : "cnsa",
           imgUrl : require("../assets/cnsa.png")
      },
      {
         scrollText  : 4,
          imgName : "isro",
          imgUrl : require("../assets/isro.jpg")
        }
    ]
  }
};


const contentStyle = {
  height: '500px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function changeBackground(e) {
  e.target.style.opacity = '50%'
}

function outBackground(e) {
  e.target.style.opacity = '100%';
}

function menuClick(){
  this.props.history.push(`/geolocation`);
}
console.log(carouselData.carouselContent.body.scrollText);

class MenuMain extends Component {

  
    
    render(){
        return (
          <div>
            <br/><br/><br/>   <br/><br/><br/>
            <Row className = "menuItems">
            <Col className="columnClass" onMouseOver={changeBackground} onMouseOut={outBackground} onClick={menuClick} xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <FontAwesomeIcon icon={faSpaceShuttle} style={{ width :'150px', height : '150px', top : '70px', position: 'relative', color: 'lightsteelblue'}} />
            </Col>
            <Col className="columnClass" onMouseOver={changeBackground} onMouseOut={outBackground}  xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <FontAwesomeIcon icon={faSatellite} style={{ width :'150px', height : '150px', top : '70px', position: 'relative' ,color: 'lightsteelblue'}} />
            </Col>
            <Col className="columnClass" onMouseOver={changeBackground} onMouseOut={outBackground}  xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <FontAwesomeIcon icon={faRocket} style={{ width :'150px', height : '150px', top : '70px', position: 'relative', color: 'lightsteelblue'}} />
            </Col>
          </Row> 
          <br/><br/><br/>   <br/><br/><br/>

          <Carousel autoplay>
            {carouselData.carouselContent.body.map(block =>
            {return (<div style={{backgroundImage: `url(${block.imgUrl})`}}> <h3 style={contentStyle}>{carouselData.carouselContent.body.scrollText}</h3></div>)})}
         </Carousel>
         <br/><br/><br/>   <br/><br/><br/>
          </div>  
        )
    }
}
export default MenuMain;
