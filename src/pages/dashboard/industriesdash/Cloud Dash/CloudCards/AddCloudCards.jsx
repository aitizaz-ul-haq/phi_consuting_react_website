import React from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCloudCards = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      await axios.post("https://backend.phiconsulting.org/cloudcards", values);
      message.success("Data submitted successfully");
      // form.resetFields(); // Reset form after submission
      navigate("/dashboard/ShowCloudCards");
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Failed to submit data");
    }
  };

  return (
    <>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        {/* Bar card description fields */}
        {[
          "barcarddesone",
          "barcarddestwo",
          "barcarddesthree",
          "barcarddesfour",
        ].map((field, index) => (
          <Form.Item
            key={field}
            label={`Bar Card Description ${index + 1}`}
            name={field}
            rules={[
              {
                required: true,
                message: `Bar Card Description ${index + 1} is required`,
              },
            ]}
          >
            <Input />
          </Form.Item>
        ))}

        {/* Card fields */}
        {[...Array(4)].map((_, index) => (
          <>
            <Form.Item
              key={`card${index + 1}numericval`}
              label={`Card ${index + 1} Numeric Value`}
              name={`card${index + 1}numericval`}
              rules={[
                {
                  required: true,
                  message: `Card ${index + 1} Numeric Value is required`,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              key={`card${index + 1}heading`}
              label={`Card ${index + 1} Heading`}
              name={`card${index + 1}heading`}
              rules={[
                {
                  required: true,
                  message: `Card ${index + 1} Heading is required`,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              key={`card${index + 1}description`}
              label={`Card ${index + 1} Description`}
              name={`card${index + 1}description`}
              rules={[
                {
                  required: true,
                  message: `Card ${index + 1} Description is required`,
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
          </>
        ))}

        {/* Additional fields */}
        <Form.Item
          label="Bar Card Heading"
          name="barcardheading"
          rules={[{ required: true, message: "Bar Card Heading is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Four Card Heading"
          name="fourcardheading"
          rules={[{ required: true, message: "Four Card Heading is required" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddCloudCards;
