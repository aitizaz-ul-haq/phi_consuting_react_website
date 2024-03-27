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

const AddSaasBan = () => {
  const [redirectToCases, setRedirectToCases] = useState(false);
  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      const response = await axios.post(
        "https://backend.phiconsulting.org/iaasban",
        values
      );
      console.log(response);
      message.success("IaasBan created successfully");
      setRedirectToCases(true);
    } catch (error) {
      console.error("Error creating IaasBan:", error);
      message.error("Failed to create IaasBan");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Submit failed!");
  };

  if (redirectToCases) {
    return <Navigate to="/dashboard/ShowIaasBan" />;
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

export default AddSaasBan;
