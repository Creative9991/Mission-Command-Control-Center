import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { FaSpinner } from 'react-icons/fa';
import * as api from '../services/nasaApi';



const NasaDetailedData = () => {

    const colors = {
        color: 'black'
    }
    const [nasaData, setNasaData] = useState([]);
    useEffect(() => {
        api.nasaDataList().then((data) => {
            setNasaData(data);
        });
    }, [])
    return (
        <>
            {
                nasaData.length === 0 ? <FaSpinner icon="spinner" className="spinner" /> :
                    <Card>
                        <div className="nasa-data">
                            <p style={{ color: 'red', fontSize: 30 }}>
                                {
                                    nasaData.title
                                }
                            </p>
                            <p style={{ colors }}>
                                {
                                    nasaData.date
                                }
                            </p>
                            <p style={{ colors }}>
                                {
                                    nasaData.explanation
                                }
                            </p>
                            <img src={nasaData.hdurl} alt={nasaData.hdurl} style={{ backgroundSize: 'contain', height: '500px', width: '500px' }} />
                            <p style={{ colors }}>
                                {
                                    nasaData.copywrite
                                }
                            </p>
                        </div>
                    </Card>}
        </>
    )
}

export default NasaDetailedData;