import React, {useState, useEffect} from 'react';
import '../App.css';
import '../styles/internationalSpaceStation.css';
import { Card } from 'antd';
import logoIss from '../assets/iss.jpeg';
import {issDataList} from '../services/internationSpaceAPI';

const InternationaSpaceStation = () =>{

  const [currentPosition, setCurrentPosition] = useState({});


  useEffect(() => {
    issDataList().then((data) => {
      setCurrentPosition(data.iss_position);
    });
  },[currentPosition])

  const issLatitude = currentPosition.latitude;
  const issLongitude = currentPosition.longitude;


    return (
      <div className='international-space-station'>
      <h1 className="iss-header">International Space Station</h1>
        <Card className="international-space-station">The International Space Station (ISS) is the largest modular space station currently in low Earth orbit.
        It is a multinational collaborative project involving five participating space agencies: NASA (United States), Roscosmos (Russia),
        JAXA (Japan), ESA (Europe), and CSA (Canada). The ownership and use of the space station is established by intergovernmental
        treaties and agreements. The station serves as a microgravity and space environment research laboratory in which scientific research
        is conducted in astrobiology, astronomy, meteorology, physics, and other fields. The ISS is suited for testing the spacecraft
        systems and equipment required for possible future long-duration missions to the Moon and Mars</Card>
        <Card className="long-lat">
          <p>Current postion of International Space Station -- Latitude {issLatitude},Longitude {issLongitude}</p>
          </Card> 
          <Card className="iss-image">
          <img src={logoIss} alt="LogoIss" />
          </Card>

      </div>
    )
}

export default InternationaSpaceStation;