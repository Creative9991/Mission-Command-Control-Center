import React, {Component} from 'react';
import '../App.css';
import {Redirect} from 'react-router-dom';
//import {isroApi} from '../services/agencyAPI';


class Rockets extends Component {


    constructor(props){
        super(props)

        this.state = {
            satellites: [],
            loading: true,
            error: false,
            id: null,
            satelliteDetails: false,
        };
    }

    goTosatelliteDetails = (satelliteId) => {
        if (satelliteId !== null) {
            this.setState({ id: satelliteId, satelliteDetails: true });
        }
    }



    render(){
        if(this.state.id){
            return (<Redirect to={`/sateliite_iss/${this.state.id}`} />);
        }else {

            return (
                <div className="space-agencies">
                    <h1 className="header-agency">Top satellite Around The World</h1>
                    <div className="grid-container">
                      <p>Hej</p>
                    </div>
                </div>
            )
        }

    }
}
export default Rockets;
