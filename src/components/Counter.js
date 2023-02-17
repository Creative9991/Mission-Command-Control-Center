import React, { useState } from "react";

const Counter = ({ initialCount }) => {
  const [count, setCounter] = useState(initialCount);
  const [userId, setUserId] = useState(0);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState("false");

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    if (count >= 1) {
      setCounter((prev) => prev - 1);
    }
  };

  const restart = () => {
    setCounter(0);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let myValues = { userId, id, title, completed };
    const options = {
      body: myValues,
      headers: { "content-type": "application/json" },
      method: "POST",
    };
    const resposne = fetch(
      `https://www..jsonplaceholder.typicode.com/todos`,
      options
    );
    return resposne;
  };

  return (
    <>
      Count :
      <h3 data-testid="count" style={{ fontSize: "20px", color: "black" }}>
        {count}
      </h3>
      <button type="button" onClick={increment}>
        Increment
      </button>
      <button type="button" onClick={decrement}>
        Decrement
      </button>
      <button type="button" onClick={restart}>
        Restart
      </button>
      <form onSubmit={onSubmit}>
        <label>UserId</label>
        <input
          type="text"
          name="userid"
          userId={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <br />
        <br />
        <label>Id</label>
        <input
          type="text"
          name="id"
          id={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br />
        <br />
        <label>Title</label>
        <input
          type="text"
          name="title"
          title={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <label>Completed</label>
        <input
          type="text"
          name="post"
          completed="true"
          onChange={(e) => setCompleted(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default Counter;
