import React, { useState } from 'react';
import { Card} from 'antd';
import '../styles/isro.css';
import { Redirect } from 'react-router-dom';
import '../App.css';
import {spacecraftInfo} from '../constants/spacecraftInfo';
import {spaceAgencies} from '../constants/spaceAgency';



function Agency(props) {
  const { Meta } = Card;
  const [info, setInfo] = useState(null);
  const [agencyDetails, setAgencyDetails] = useState(false);

  const navigateToAgencyData = (currentAgency) => {
    if (currentAgency !== null) {
      setInfo(currentAgency);
      setAgencyDetails(true);
    }
  }


  // const [redirect, setRedirect] = useState(false);

  const agencyId = props.match.params.id;

  if (info !== null && agencyDetails === true) {
    return (<Redirect to={`/agencyinfo/${agencyId}/${info}`} />);
  } else {
    return (
      <div className="isro-page">
        
            {
              spaceAgencies.map(agency => {
                if(agency.id === agencyId){
                  return(
                    <div className="agency-details" key={agency.id}>
                       <Card> 
                         <p style={{height : '300px', width : 'width', backgroundImage: `url(${agency.imgAsset})`}}></p>
                    <Meta className = "meta-agency-details-title" title={agency.id}/>
                  <p style={{fontFamily : 'verdana', fontSize : '20px'}}>{agency.details}</p>
                  </Card>
                  </div>
                  )
                }else{
                  return null;
                }
               
              })
            }


        
        <h1 className="header-agency">Top Spacecraft - Launchers - Satellites from {agencyId}</h1>
        <div className="grid-container">
          {
            spacecraftInfo.map(block => (
              <Card
                key={block.info}
                style={{ backgroundImage: `url(${block.imgAsset})` }}
                onClick={() => navigateToAgencyData(block.agency)}
                hoverable
              >
                <p className = "meta-title" title={block.info}></p>
              </Card>
              
            ))
          }
        </div>
      </div>
    )
  }
}


export default Agency;