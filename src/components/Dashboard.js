import React, { useState, useEffect } from 'react';
import * as api from '../services/nasaApi';

const Dashboard = () => {

    const [nasaData, setNasaData] = useState([]);

    useEffect(() => {

        api.nasaDataList().then((data) => {
            setNasaData(data);
        });
    }, [])
    return (
        <>
            <h1 style={{ color: 'white', fontSize: '40px' }}>Hej...{sessionStorage.getItem("username")}</h1>
            <table>

                <tbody>
                    <tr>
                        <th>Date</th>
                    </tr>
                    <tr>
                        <td style={{ color: 'white' }}>
                            {
                                nasaData.date
                            }
                        </td>

                    </tr>

                </tbody>

            </table>

        </>
    )
}

export default Dashboard;