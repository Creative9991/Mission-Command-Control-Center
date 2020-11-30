import React, {Component} from 'react';
import '../../styles/agency.scss';



class Agency extends Component {

    render(){
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
                  <strong>Imp Mission:</strong> dfdff
              </div>
          </div>
          </div>
      )
    }
}

export default Agency;
