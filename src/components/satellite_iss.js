import React, {Component} from 'react';
import '../App.css';
import {Redirect} from 'react-router-dom';


class satellite_Iss extends Component {


  constructor(props){
    super(props)

    this.state = {
      satellites: [],
      loading: true,
      error: false,
      id: null,
      satelliteDetails: false,
      isroSpacecraft : []
  };
  }
    
     componentDidMount() {
      fetch('https://isro.vercel.app/api/spacecrafts')
      .then((response) => response.json())
      .then(data => {
         console.log(data.spacecrafts);
          this.setState({ isroSpacecraft: data.spacecrafts});
      });
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
              <h1 className="header-agency">Top satellites around the world</h1>
     
         {/* <ul>
         {this.state.isroSpacecraft.map((item) => (
                    <li key={item.id} style={{color : 'white'}}>{item.name}</li>
                ))}
         </ul> */}
         <table id="isro">
                     <tbody id="isro-body">
                    <tr >
                     <th className="isro-tablehead">Mission ID</th>
                     <th className="isro-tablehead">Mission Name</th>
                    </tr>
                    { 
      //console.log(this.state.agenciesId.launches)
      typeof this.state.isroSpacecraft !== 'undefined' && this.state.isroSpacecraft.map((spacecraft , id) =>{
          return(
                    <tr key= {spacecraft.id} className="isro-table-row">
                    <td>{spacecraft.id}</td>
                    <td>{spacecraft.name}</td>
                    </tr>
                  )})
    }
              </tbody>
                </table> 

             </div>
        )
          }
            
    }
}
export default satellite_Iss
