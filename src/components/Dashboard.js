import React from 'react';


const Dashboard = () => {


    return (
        <>
            <h1 style={{ color: 'white', fontSize: '40px' }}>Hey...{sessionStorage.getItem("username")}</h1>
            </>

)}

export default Dashboard;