import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { Navigate } from "react-router-dom";
import axios from "axios";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};

const AddCloudBan = () => {
  const [redirectToCases, setRedirectToCases] = useState(false);
  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      const response = await axios.post(
        "https://backend.phiconsulting.org/cloudban",
        values
      );
      console.log(response);
      message.success("cloudban created successfully");
      setRedirectToCases(true);
    } catch (error) {
      console.error("Error creating cloudban:", error);
      message.error("Failed to create cloudban");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Submit failed!");
  };

  if (redirectToCases) {
    return <Navigate to="/dashboard/ShowCloudBan" />;
  }

  return (
    <div className="form-container">
      <Form
        {...layout}
        name="addSaasBan"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Heading"
          name="heading"
          rules={[{ required: true, message: "Please input the heading!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Banner Description"
          name="bannerDescription"
          rules={[
            { required: true, message: "Please input the banner description!" },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCloudBan;
