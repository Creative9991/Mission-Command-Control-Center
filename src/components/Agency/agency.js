import React from 'react';
import '../../styles/agency.scss';
import {AgencyListId} from "../../services/agencyAPI";



export default class Agency extends React.Component {

    state = {
        agenciesId : true,
        loading: true,
        error: false,
    };

    async componentDidMount() {
        try {
            const agenciesId = await AgencyListId(this.props.match.params.id);
            console.log(agenciesId + 'Inside catch');
            this.setState({ agenciesId, loading: false });
        } catch (err) {
            console.log('outside catch', err);
            this.setState({ loading: false, error: true });
        }
    }

    render(){
        //const {error, loading, agenciesId } = this.state;
      return(
          <div className="movie-details-poster-wrapper">
              <img
                  className="movie-details-poster"
                  alt="movie poster"
              />
          <div className="movie-details-info">
              <div className="movie-details-info__overview">
                  <strong>Agency Overview:</strong>
              </div>
              <div>
                  <strong>Establishied Date:</strong>dfdfd
              </div>
              <div>
                 
              </div>
          </div>
          </div>
      )
    }
}
