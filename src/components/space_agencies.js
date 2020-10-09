import React, {Component} from 'react';
import {  Link } from 'react-router-dom';
import '../App.css';



const data = {
    content: {
      body: [
        {
            id: 1,
            imgName : "nasa",
            imgAsset : require("../assets/nasa.jpg"),
            agency : '/nasa'
        },
        {
             id: 2,
             imgName : "esa",
             imgAsset : require("../assets/esa.jpg"),
             agency : '/esa'
        },
        { 
             id: 3,
             imgName : "cnsa",
             imgAsset : require("../assets/cnsa.png"),
             agency : '/cnsa'
        },
        {
            id: 4,
            imgName : "isro",
            imgAsset : require("../assets/isro.jpg"),
            agency : '/isro'
          },
           {
            id: 5,
            imgName : "jaxa",
            imgAsset : require("../assets/jaxa.jpg"),
            agency : '/jaxa'
          },
           {
            id: 6,
            imgName : "roscosmos",
            imgAsset : require("../assets/roscosmos.png"),
            agency : '/roscosmos'
          },
           {
            id: 7,
            imgName : "spacex",
            imgAsset : require("../assets/spacex.png"),
            agency : '/spacex'
          },
          {
            id: 8,
            imgName : "blueorigin",
            imgAsset : require("../assets/blueorigin.png"),
            agency : '/nasa'
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

  // function spaceClick(e){
  //   e.preventDefault();
  //   this.props.history.push(block.agency)
  // }

class Space_Agencies extends Component {

  
    
    render(){
        return (
            <div className="grid-container">
            {data.content.body.map(block =>
            {return (<div className = "geolocation" onMouseOver={changeBackground} onMouseOut={outBackground} style={{backgroundImage: `url(${block.imgAsset})`}}></div>)})}
          </div>

          
        )
    }
}
export default Space_Agencies;
