import React, { useEffect, useState } from 'react';
import '../styles/isro.css';
import '../App.css';
import { FaSpinner } from 'react-icons/fa';

const AgencyInfo = (props) => {


    const [isroSpaceCraft, setIsroSpaceCraft] = useState([]);
    useEffect(() => {
        fetch(`https://isro.vercel.app/api/spacecrafts`)
            .then((response) =>
                response.json())
            .then((data) =>
                setIsroSpaceCraft(data.spacecrafts)
            )
    }, [])

    return (
        <>
            <div className="spacecrafts" style={{ color: 'red' }}>
                <div className="space-agencies">
                    <h1 className="header-agency">Top satellites from {props.match.params.info}</h1>

                    {
                        isroSpaceCraft.length === 0 ? <FaSpinner icon="spinner" className="spinner" /> :

                            <table id="isro" border="2">
                                <tbody id="isro-body">
                                    <tr >
                                        <th className="isro-tablehead">Mission ID</th>
                                        <th className="isro-tablehead">Mission Name</th>
                                    </tr>
                                    {
                                        //console.log(this.state.agenciesId.launches)
                                        isroSpaceCraft.map((spacecraft) => {
                                            return (

                                                <tr key={spacecraft.id} className="isro-table-row">
                                                    <td>{spacecraft.id}</td>
                                                    <td>{spacecraft.name}</td>
                                                </tr>
                                            )


                                        })
                                    }
                                </tbody>
                            </table>

                    }



                </div>
            </div>
        </>
    )
}

export default AgencyInfo;