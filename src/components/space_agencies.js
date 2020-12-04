import React, {Component} from 'react';
//import { Route , withRouter} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import '../App.css';
import { Card } from 'antd';



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
      //console.log();
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
