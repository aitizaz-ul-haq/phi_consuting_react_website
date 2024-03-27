import React, { useEffect, useState } from "react";
import { Form, Input, Button, Card, message } from "antd";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";

const EditValPageCont = () => {
  const [form] = Form.useForm();
  const [redirectToShowHomePage, setRedirectToShowHomePage] = useState(false);
  const { valuecreationpageId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://backend.phiconsulting.org/valuecreationpage/${valuecreationpageId}`
        );
        console.log(response.data);
        form.setFieldsValue(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        message.error(
          "An error occurred while fetching valuecreationpage data"
        );
      }
    };

    fetchData();
  }, [valuecreationpageId, form]);

  const onFinish = async (values) => {
    try {
      await axios.put(
        `https://backend.phiconsulting.org/valuecreationpage/${valuecreationpageId}`,
        values
      );
      message.success("valuecreationpage data updated successfully");
      setRedirectToShowHomePage(true);
    } catch (error) {
      console.error("Error updating servicepage data:", error);
      message.error("An error occurred while updating servicepage data");
    }
  };

  if (redirectToShowHomePage) {
    return <Navigate to="/dashboard/ShowSValuecPage" />;
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card style={{ width: "60%" }}>
        <Form
          form={form}
          name="editValPageContent"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          style={{ width: "60%", margin: "0 auto" }}
        >
          <Form.Item
            name="heroheading"
            label="Hero Heading"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="herodescription"
            label="Hero Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="valuecreationheading"
            label="Value Creation Heading"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="valuecreationdescription"
            label="Value Creation Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="phicreatesheading"
            label="Phi Creates Heading"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="ourwayoneheading"
            label="Our Way One Heading"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="ourwayonedescription"
            label="Our Way One Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="ourwaytwoheading"
            label="Our Way Two Heading"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="ourwaytwodescription"
            label="Our Way Two Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="ourwaythreeheading"
            label="Our Way Three Heading"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="ourwaythreedescription"
            label="Our Way Three Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="ctaheading"
            label="Val Cta Heading"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="ctadescription"
            label="Val Cta Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default EditValPageCont;
