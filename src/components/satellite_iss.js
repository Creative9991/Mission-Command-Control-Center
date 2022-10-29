import React, { Component } from 'react';
import '../App.css';
import { Redirect } from 'react-router-dom';


class satellite_Iss extends Component {


  constructor(props) {
    super(props)

    this.state = {
      satellites: [],
      loading: true,
      error: false,
      id: null,
      satelliteDetails: false,
      isroSpacecraft: []
    };
  }
  goTosatelliteDetails = (satelliteId) => {
    if (satelliteId !== null) {
      this.setState({ id: satelliteId, satelliteDetails: true });
    }
  }

  render() {
    if (this.state.id) {
      return (<Redirect to={`/sateliite_iss/${this.state.id}`} />);
    } else {

      return (
        <div>

          <p style={{color: 'white',height : 500}}>Hello</p>

        </div>
      )
    }

  }
}
export default satellite_Iss
