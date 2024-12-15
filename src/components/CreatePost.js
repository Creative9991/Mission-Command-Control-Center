import React, { useState } from "react";
import { Form, Modal, Input, Button } from "antd";

import axios from "axios";
import "../App.css";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const CreatePost = () => {
  const { TextArea } = Input;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const onNameChange = (e) => setName(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);

  const handleSubmit = (e) => {
    let enteredValues = { name, description };
    enteredValues = JSON.stringify(enteredValues);

    const headers = {
      "Content-Type": "application/json",
    };

    axios
      .post(`http://localhost:3100/posts`, enteredValues, { headers })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="create-post">
      {sessionStorage.username === "mukesh" ? (
        <Button type="primary" onClick={showModal} id="createpost">
          Create Post
        </Button>
      ) : null}
      <Modal
        title="Create an amazing post...."
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        inert
      >
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          aria-hidden="true"
        >
          <Form.Item
            label="Post Name"
            name="name"
            id="postName"
            value={name}
            onChange={onNameChange}
            rules={[
              {
                required: true,
                message: "Please write post name...",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <TextArea
            rows={4}
            placeholder="maxLength is 6"
            maxLength={100}
            value={description}
            onChange={onDescriptionChange}
          />

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CreatePost;
