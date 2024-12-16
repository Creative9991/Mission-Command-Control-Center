import React, { useState, useEffect } from "react";
import * as api from "../services/agencyDataAPI";
import { Card } from "antd";
import { FaSpinner } from "react-icons/fa";

const AllPosts = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    api.allPosts().then((data) => {
      return setAllPosts(data);
    });
  }, [allPosts]);
  let listOfPosts = allPosts.map((post) => {
    return (
      <tbody key={post.id}>
        <tr>
          <td>{post.id}</td>
          <td>{post.description}</td>
          <td>{post.postname}</td>
        </tr>
      </tbody>
    );
  });

  return (
    <div className="allposts">
      <h3>List of all Posts</h3>

      {!listOfPosts ||
      listOfPosts.length === 0 ||
      listOfPosts === undefined ||
      listOfPosts === null ? (
        <FaSpinner icon="spinner" className="spinner" />
      ) : (
        <Card>
          <table
            border="5"
            style={{
              backgroundColor: "white",
              width: 1340,
              borderRadius: 20,
              fontWeight: "bold",
            }}
          >
            <tbody>
              <tr>
                <th>ID</th>
                <th>Post</th>
                <th>Description</th>
              </tr>
            </tbody>
            {listOfPosts}
          </table>{" "}
        </Card>
      )}
    </div>
  );
};

export default AllPosts;
