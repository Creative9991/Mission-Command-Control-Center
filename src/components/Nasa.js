import React, { useState } from 'react';
import { nasaInfo } from '../constants/nasaInfo';
import { Card } from 'antd';
import { Redirect } from 'react-router-dom';



const Nasa = (props) => {

    const [nasaDetails, setNasaAgencyDetails] = useState(false);
    //const agencyId = props.match.params.id;
    const navigateToNasaData = (currentAgency) => {
        if (currentAgency !== null) {
            setNasaAgencyDetails(true);
        }
    }

    if (nasaDetails === true) {
        return (<Redirect to={`/nasaDetailedData`} />);
    } else {

        return (
            <>
                <div className="grid-container">

                    {
                        nasaInfo.map(nasa => (
                            <Card
                                key={nasa.info}
                                style={{ backgroundImage: `url(${nasa.imgAsset})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}
                                onClick={() => navigateToNasaData(nasa.agency)}
                                hoverable
                            >
                                <p className="meta-title" title={nasa.info}></p>
                            </Card>
                        ))
                    }
                </div>
            </>
        )
    }

}

export default Nasa;