import React, {Component} from 'react';
import { Route , withRouter} from 'react-router-dom';
import '../App.css';






function changeBackground(e) {
    e.target.style.opacity = '80%';
  }

  function outBackground(e) {
    e.target.style.opacity = '100%';
  }

  


class Space_Agencies extends Component {

  constructor(){
    super();

  }
  newRoutes = (orgName) => {
    this.props.history.push('/agency' + orgName);
  console.log(this.props.data.content.body);
  }
    render(){
      // let match=this.props.match
      // let id = this.props.id
      console.log('check the props: ', this.props.data);
       
        return (
            <div className="grid-container">
           {this.props.data.content.body.map(block =>
            {return (<div className = "geolocation"  onClick={() =>  this.newRoutes(block.agency)} onMouseOver={changeBackground} onMouseOut={outBackground} style={{backgroundImage: `url(${block.imgAsset})`}}></div>)})}
          </div>
        )
    }
}
export default withRouter(Space_Agencies);
