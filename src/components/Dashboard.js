import React from 'react';
import AllPosts from './AllPosts';
import CreatePost from './CreatePost';


const Dashboard = () => {

   

    return (
        <>
        <div className="create" style={{margin: 50,position: 'relative', left: 700}}>
        <CreatePost/>
        </div>
       
         <AllPosts/>
        </>

    )
}

export default Dashboard;