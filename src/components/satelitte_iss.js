import React, {Component} from 'react';
import '../App.css';
import ReusableGrid from './Reusable-Grid/reusable-grid';
import {SateliiteList} from '../services/agencyAPI';
import {Redirect} from 'react-router-dom';


class Satelitte_Iss extends Component {

    state = {
        satelittes: [],
        loading: true,
        error: false,
        id: null,
        satelitteDetails: false,
    };
 

    async componentDidMount() {
        try {
            const satelittes = await SateliiteList();
            this.setState({ satelittes , loading: false });
        } catch (err) {
            console.log('outside catch', err);
        }
    }

    goToSatelitteDetails = (satelitteId) => {
        console.log('click satelitte details')
        if (satelitteId !== null) {
          this.setState({ id: satelitteId, satelitteDetails: true });
        }
      }
  
    
    render(){
        if(this.state.id){
            return (<Redirect to={`/sateliite_iss/${this.state.id}`} />);
          }else {
   
        return (
            <div className="space-agencies">
              <h1 className="header-agency">Top Satelitte Around The World</h1>
              <div className="grid-container">
            { typeof this.state.satelittes !== 'undefined' &&  this.state.satelittes.map(satelitte => (
                    <ReusableGrid
                    key={satelitte.id}
                    onClick={this.goToSatelitteDetails}
                    hoverable/>    
                )
                )
            }
             </div>
             </div>
        )
          }
            
    }
}
export default Satelitte_Iss
