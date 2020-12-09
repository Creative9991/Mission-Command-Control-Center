import React from 'react';
import '../../styles/agency.scss';
import {AgencyListId} from "../../services/agencyAPI";




export default class Agency extends React.Component {
  
    state = {
        agenciesId: {},
        loading: true,
        error: false,
    };
  

    async componentDidMount() {
        try {
            const agenciesId = await AgencyListId(this.props.match.params.id);
            this.setState({ agenciesId , loading: false });
        } catch (err) {
            console.log('outside catch', err);
        }
    }

    render(){
        
       
        //const {error, loading, agenciesId } = this.state;
      return(
  <div className="space-agency-details">
      <h1 className="space-header-paragraph"><p className="space-agency-detials-header"><strong>{this.state.agenciesId.imgName}</strong></p> </h1>
          <div className="movie-details-poster-wrapper">
              <img
                  className="movie-details-poster"
                  alt="movie poster"
              />
                <div className="movie-details-info">
                <div className="movie-details-info__overview">
                  <strong>Agency Overview  : </strong>
                  <strong> {this.state.agenciesId.imgName}</strong><br/>
                  <strong>Year Established  : </strong>
                  <strong>{this.state.agenciesId.year}</strong>
                </div>
                <div>
                  <strong>{this.state.agenciesId.content}</strong>
                </div>
              <div>
                 
              </div>
          </div>
          </div>
          </div>
      )
    }
}
