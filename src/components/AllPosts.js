import React, { useState, useEffect, useRef } from "react";
import * as api from "../services/agencyDataAPI";
import * as d3 from "d3";

const AllPosts = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    api.allPosts().then((data) => {
      return setAllPosts(data);
    });
  }, []);

  console.log(allPosts);

  let listOfPosts = allPosts.map((post) => {
    return (
      <tbody key={post.id}>
        <tr>
          <td>{post.id}</td>
          <td>{post.postname}</td>
          <td>{post.description}</td>
        </tr>
      </tbody>
    );
  });

  return (
    <div className="allposts">
      <h3>List of all Posts</h3>
      <table border="2" style={{ backgroundColor: "white", width: 1340 }}>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </tbody>
        {listOfPosts}
      </table>
    </div>
  );
};

export default AllPosts;
