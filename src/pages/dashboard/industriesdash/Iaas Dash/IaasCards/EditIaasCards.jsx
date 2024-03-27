import React, { useState, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditIaasCards = () => {
  const [form] = Form.useForm();
  const { iaascardsId } = useParams(); // Retrieve the ID from the URL
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the specific Saas Card data by ID and populate the form
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://backend.phiconsulting.org/iaascards/${iaascardsId}`
        );
        // Assuming the response has the data directly
        form.setFieldsValue({
          ...data,
          // Map your data to the form fields here
        });
      } catch (error) {
        console.error("Failed to fetch card data", error);
        message.error("Failed to load card data");
      }
    };
    fetchData();
  }, [iaascardsId, form]);

  const onFinish = async (values) => {
    try {
      await axios.put(
        `https://backend.phiconsulting.org/iaascards/${iaascardsId}`,
        values
      );
      message.success("Card updated successfully");
      navigate("/dashboard/ShowIaasCards"); // Redirect to the cards display page
    } catch (error) {
      console.error("Failed to update card", error);
      message.error("Failed to update card");
    }
  };

  // The form fields should match the `AddSaasCards` component structure
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
            Update
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default EditIaasCards;
