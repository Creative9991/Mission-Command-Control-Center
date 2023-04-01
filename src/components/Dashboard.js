import React, { useState } from "react";
import AllPosts from "./AllPosts";
import CreatePost from "./CreatePost";
import axios from "axios";

async function postImage({ image, description }) {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("description", description);

  const result = await axios.post("/images", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return result.data;
}

const Dashboard = () => {
  const [file, setFile] = useState();
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  const submit = async (event) => {
    event.preventDefault();
    const result = await postImage({ image: file, description });
    setImages([result.image, ...images]);
  };

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setFile(file);
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
      <div className="App">
        <form onSubmit={submit}>
          <input onChange={fileSelected} type="file" accept="image/*"></input>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
          ></input>
          <button type="submit">Submit</button>
        </form>

        {images.map((image) => (
          <div key={image}>
            <img src={image}></img>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
