import React, {useState, useEffect} from 'react';
import { Card } from 'antd';
import { FaSpinner } from 'react-icons/fa';
import * as api from '../services/nasaApi';



const NasaDetailedData = () => {


    const [nasaData, setNasaData] = useState([]);

    useEffect(() => {
        api.nasaDataList().then((data) => {
            setNasaData(data);
        });
    }, [])
return(
    <>
     <h1 style={{ color: 'white', fontSize: '40px' }}>Hej...{sessionStorage.getItem("username")}</h1>
 {
             nasaData.length === 0 ? <FaSpinner icon="spinner" className="spinner" /> :
             <Card>
             <div className="nasa-data">
             <p style={{ color: 'black' }}>
                 {
                     nasaData.date
                 }
                 </p>
                 <p style={{ color: 'black' }}>
                 {
                     nasaData.explanation
                 }
                 </p>
                <img src={nasaData.hdurl} alt={nasaData.hdurl} style={{backgroundSize : 'contain', height : '500px', width : '500px'}}/>
                 <p style={{ color: 'black' }}>
                 {
                     nasaData.copywrite
                 }
                 </p>
                 <p style={{ color: 'black' }}>
                 {
                     nasaData.title
                 }
                 </p>
                 </div> 
                 </Card>}
    </>
)
}

export default NasaDetailedData;