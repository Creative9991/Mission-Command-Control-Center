import React, { Component } from 'react';
import '../App.css';
import '../styles/internationalSpaceStation.css';
import {internationSpaceStationData} from '../constants/internationSpaceStations';
import { Card } from 'antd';
import '../styles/internationalSpaceStation.css';

const { Meta } = Card;

class InternationaSpaceStation extends Component {

  render() {
      return (
        <div>

<h1 className="header-agency">International Space Station</h1>
            <div className="grid-container">
              {
                internationSpaceStationData.map(iss => (
                    <Card
                key={iss.id}
                // onClick={() => this.goToAgencyDetails(block.id)}
                // onMouseOver={changeBackground}
                // onMouseOut={outBackground}
                style={{backgroundImage: `url(${iss.imgAsset})`, backgroundSize : 'contain', backgroundRepeat : 'no-repeat' }}
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
