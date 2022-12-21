import React,{useState, useEffect} from 'react';
import * as api from '../services/isroApi';

const AllPosts = () => { 

const [allPosts, setAllPosts] = useState([]);


useEffect(() => {
    api.allPosts().then((data) => {
        data.Items.map(specificAgency => {
            if(specificAgency.agency === 'posts'){
                specificAgency.posts.map(post => {
                    return setAllPosts(post);
                })
               
            }
                
        })
    });
}, [])
return(
    <div className="allposts">
        <h3>List of all Posts</h3>
                 <table border='2'>
                 <tbody key={allPosts.postname}>
                     <tr>
                     <th>Name</th>
                     <th>Description</th>
                     </tr>
                         <tr>
                         <td>{allPosts.postname}</td>
                             <td>
                                 {allPosts.description}
                             </td>
                         </tr>
                     </tbody>
                 </table>
    </div>
)

}

export default AllPosts;

