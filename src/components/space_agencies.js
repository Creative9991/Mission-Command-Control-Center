import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import '../App.css';
import { Card } from 'antd';



const data = {
  content: {
    body: [
      {
        id: "nasa",
        imgName : "nasa",
        imgAsset : require("../assets/nasa.jpg"),
        agency : '/nasa'
      },
      {
        id: "esa",
        imgName : "esa",
        imgAsset : require("../assets/esa.jpg"),
        agency : '/esa'
      },
      {
        id: "cnsa",
        imgName : "cnsa",
        imgAsset : require("../assets/cnsa.png"),
        agency : '/cnsa'
      },
      {
        id: "isro",
        imgName : "isro",
        imgAsset : require("../assets/isro.jpg"),
        agency : '/isro'
      },
      {
        id: "jaxa",
        imgName : "jaxa",
        imgAsset : require("../assets/jaxa.jpg"),
        agency : '/jaxa'
      },
      {
        id: "roscosmos",
        imgName : "roscosmos",
        imgAsset : require("../assets/roscosmos.png"),
        agency : '/roscosmos'
      },
      {
        id: "spacex",
        imgName : "spacex",
        imgAsset : require("../assets/spacex.png"),
        agency : '/spacex'
      },
      {
        id: "blueorigin",
        imgName : "blueorigin",
        imgAsset : require("../assets/blueorigin.png"),
        agency : '/nasa'
      },
      {
        id: "Virgin Galatic",
        imgName : "Virgin Galatic",
        imgAsset : require("../assets/virgin-galactic.png"),
        agency : '/virgin-galatic'
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

  


class Space_Agencies extends Component {
  

  state = {
    id: null,
    agencyDetails: false,
  };


  

  goToAgencyDetails = (agencyId) => {
    if (agencyId !== null) {
      this.setState({ id: agencyId, agencyDetails: true });
    }
  }
    render(){
      if(this.state.id){
        return (<Redirect to={`/agency/${this.state.id}`} />);
      }else {

        return (

            <div className="space-agencies">
              <h1 className="header-agency">Top Space Agencies Around The World</h1>
            <div className="grid-container">

              {
                data.content.body.map(block => (
                    <Card
                key={block.id}
                onClick={() => this.goToAgencyDetails(block.id)}
                onMouseOver={changeBackground}
                onMouseOut={outBackground}
                style={{backgroundImage: `url(${block.imgAsset})`}}
                hoverable
                >
                </Card>
                ))
              }
            </div>
            </div>
        )
      }
    }

}
export default Space_Agencies;
