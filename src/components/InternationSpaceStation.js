import React, { Component } from 'react';
import '../App.css';
import {internationSpaceStationData} from '../constants/internationSpaceStations';
import { Card } from 'antd';

class InternationaSpaceStation extends Component {

  render() {
   

      return (
        <div>

<h1 className="header-agency">International Space Station</h1>
            <div className="grid-container">


              {
                internationSpaceStationData.map(block => (
                    <Card
                key={block.id}
                // onClick={() => this.goToAgencyDetails(block.id)}
                // onMouseOver={changeBackground}
                // onMouseOut={outBackground}
                style={{backgroundImage: `url(${block.imgAsset})`, backgroundSize : 'contain', backgroundRepeat : 'no-repeat' }}
                hoverable
                >
                </Card>
                ))
              }
            </div>

        </div>
      )
    }

}
export default InternationaSpaceStation;
