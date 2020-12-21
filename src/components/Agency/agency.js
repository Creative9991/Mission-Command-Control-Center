import React from 'react';
import '../../styles/agency.scss';
import {AgencyListId} from "../../services/agencyAPI";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link} from 'react-router-dom';
import { Card } from 'antd';


export default class Agency extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            agenciesId : {},
            loading: true,
            error: false,
            currentId : null,
            launches : []
        };

        
    }

    async componentDidMount() {
        try {
            console.log("Id is" , this.props.match.params.id);
            let agenciesId = await AgencyListId(this.props.match.params.id);
            console.log(agenciesId);
            this.setState({ agenciesId, currentId : true, loading: false });
        } catch (err) {
            console.log('outside catch', err);
        }
    }



    render(){
        //const {error, loading, agenciesId } = this.state;
      return(
  <div className="space-agency-details">
      <h1 className="space-header-paragraph">
          <span className='agency-arrow-left'><Link to="/space_agencies"><ArrowLeftOutlined /></Link> </span>
     
          <p className="space-agency-detials-header"><strong>{this.state.agenciesId.imgName}</strong></p> </h1>
          <div className="agency-details-poster-wrapper">
              <img
                  className="agency-details-poster"
                  alt="agency poster"
              />
                <div className="agency-details-info">
                <div className="agency-details-info__overview">
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

          <Card>
          <h1>List of main launches from the : {this.state.agenciesId.imgName}</h1>
          <table id="customers">
                     <tbody>
                    <tr >
                     <th>Mission ID</th>
                     <th>Mission Name</th>
                     <th>Launch Year</th>
                     <th >Mission Status</th>
                    </tr>
                    { 
      //console.log(this.state.agenciesId.launches)
      typeof this.state.agenciesId.launches !== 'undefined' && this.state.agenciesId.launches.map((launch , mission_launches) =>{
          return(
                    <tr key= {mission_launches}>
                    <td>{launch.mission_id}</td>
                    <td>{launch.mission}</td>
                     <td>{launch.launch_year}</td>
                     <td>{launch.status}</td>
                    </tr>
                  )})
    }
              </tbody>
                </table> 
                </Card>
      
          </div>
      )
    }
}
