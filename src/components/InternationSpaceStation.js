import React, { Component } from 'react';
import '../App.css';
import '../styles/internationalSpaceStation.css';
import { internationSpaceStationData } from '../constants/internationSpaceStations';
import { Card } from 'antd';
import '../styles/internationalSpaceStation.css';

const { Meta } = Card;

class InternationaSpaceStation extends Component {

  render() {
    return (
      <div>

        <Card className="international-space-station">The International Space Station (ISS) is the largest modular space station currently in low Earth orbit.
        It is a multinational collaborative project involving five participating space agencies: NASA (United States), Roscosmos (Russia),
        JAXA (Japan), ESA (Europe), and CSA (Canada).[8][9] The ownership and use of the space station is established by intergovernmental
        treaties and agreements.[10] The station serves as a microgravity and space environment research laboratory in which scientific research
        is conducted in astrobiology, astronomy, meteorology, physics, and other fields.[11][12][13] The ISS is suited for testing the spacecraft
        systems and equipment required for possible future long-duration missions to the Moon and Mars</Card>
        <div className="grid-container">
          {
            internationSpaceStationData.map(iss => (
              <Card
                key={iss.id}
                // onClick={() => this.goToAgencyDetails(block.id)}
                // onMouseOver={changeBackground}
                // onMouseOut={outBackground}
                style={{ backgroundImage: `url(${iss.imgAsset})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
                hoverable
              >
                <Meta className="iss-meta" title={iss.info} description="dfsfdsf" />
              </Card>
            ))
          }
        </div>

      </div>
    )
  }

}
export default InternationaSpaceStation;
