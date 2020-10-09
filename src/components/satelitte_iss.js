import React, {Component} from 'react';
import '../App.css';




const data = {
    content: {
      body: [
        {
          imgName : "nasa",
          imgUrl : require("../assets/voyager-1.png")
        },
        {
             imgName : "esa",
             imgUrl : require("../assets/voyager-2.jpg")
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

class Satelitte_Iss extends Component {

  
    
    render(){
        return (
            <div className="grid-container">
            {data.content.body.map(block =>
            {return (<div className="satellite-iss" onMouseOver={changeBackground} onMouseOut={outBackground} style={{backgroundImage: `url(${block.imgUrl})`}}></div>)})}
          </div>

          
        )
    }
}
export default Satelitte_Iss
