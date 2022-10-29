import React, { useState } from 'react';
import { Card} from 'antd';
import '../styles/isro.css';
import { Redirect } from 'react-router-dom';
import '../App.css';
import {spacecraftInfo} from '../constants/spacecraftInfo';



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

  const cardStyle = {
    hight : '500px',
    width : '1000px'
  }

  // const [redirect, setRedirect] = useState(false);

  const agencyId = props.match.params.id;

  if (info !== null && agencyDetails === true) {
    return (<Redirect to={`/agencyinfo/${agencyId}/${info}`} />);
  } else {
    return (
      <div className="isro-page">
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
                <Meta className = "meta-title" title={block.info}/>
              </Card>
              
            ))
          }
        </div>
      </div>
    )
  }
}


export default Agency;