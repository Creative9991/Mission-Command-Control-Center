import React, { useState } from "react";
import AllPosts from "./AllPosts";
import CreatePost from "./CreatePost";
import axios from "axios";

const Dashboard = () => {
  const [file, setFile] = useState(null);
  const submit = async (event) => {
    event.preventDefault();

    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("myFile", setFile(file));

    // Request made to the backend api
    // Send formData object
    axios.post("localhost:3100/images", formData);
  };
  return (
    <>
      <div
        className="create"
        style={{ margin: 50, position: "relative", left: 700 }}
      >
        <CreatePost />
      </div>
      <AllPosts />
      <form onSubmit={submit}>
        <input
          filename={file}
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          accept="image/*"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Dashboard;
