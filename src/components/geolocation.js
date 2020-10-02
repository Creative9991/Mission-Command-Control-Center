import React, {Component} from 'react';
import '../App.css';



const data = {
    content: {
      body: [
        {
          imgName : "nasa",
          imgUrl : require("../assets/nasa.jpg")
        },
        {
             imgName : "esa",
             imgUrl : require("../assets/esa.jpg")
        },
        {
             imgName : "cnsa",
             imgUrl : require("../assets/cnsa.png")
        },
        {
            imgName : "isro",
            imgUrl : require("../assets/isro.jpg")
          }, {
            imgName : "jaxa",
            imgUrl : require("../assets/jaxa.jpg")
          }, {
            imgName : "roscosmos",
            imgUrl : require("../assets/roscosmos.png")
          }, {
            imgName : "spacex",
            imgUrl : require("../assets/spacex.png")
          },
          {
            imgName : "blueorigin",
            imgUrl : require("../assets/blueorigin.png")
          }
      ]
    }
  };


function changeBackground(e) {
    e.target.style.opacity = '80%';
  }

  function outBackground(e) {
    e.target.style.opacity = '100%';
  }

class Geolocation extends Component {

  
    
    render(){
        return (
            <div className="grid-container">
            {data.content.body.map(block =>
            {return (<div onMouseOver={changeBackground} onMouseOut={outBackground} style={{backgroundImage: `url(${block.imgUrl})`}}></div>)})}
          </div>

          
        )
    }
}
export default Geolocation;
