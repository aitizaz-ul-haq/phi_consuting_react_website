import React, { useEffect, useState } from "react";
import { Form, Input, Button, Card, message } from "antd";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";

const EditServPageCont = () => {
  const [form] = Form.useForm();
  const [redirectToShowHomePage, setRedirectToShowHomePage] = useState(false);
  const { servicespageId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://backend.phiconsulting.org/servicepage/${servicespageId}`
        );
        console.log(response.data);
        form.setFieldsValue(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        message.error("An error occurred while fetching servicepage data");
      }
    };

    fetchData();
  }, [servicespageId, form]);

  const onFinish = async (values) => {
    try {
      await axios.put(
        `https://backend.phiconsulting.org/servicepage/${servicespageId}`,
        values
      );
      message.success("servicepage data updated successfully");
      setRedirectToShowHomePage(true);
    } catch (error) {
      console.error("Error updating servicepage data:", error);
      message.error("An error occurred while updating servicepage data");
    }
  };

  if (redirectToShowHomePage) {
    return <Navigate to="/dashboard/ShowServicePage" />;
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
          name="editServicePageContent"
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
            name="solutionsheading"
            label="Solutions Heading"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="solutionsdescription"
            label="solutions Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="serviceonedescription"
            label="Service One Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="servicetwodescription"
            label="Service Two Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="servicethreedescription"
            label="Service Three Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="serviceofourdescription"
            label="Service Four Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="servicespathheading"
            label="Services Path Heading"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="servicesPathDescription"
            label="Services Path Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="processoneheading"
            label="Process One Heading"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="processonedescription"
            label="Process One Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="processtwoheading"
            label="Process Two Heading"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="processtwodescription"
            label="Process Two Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="processthreeheading"
            label="Process Three Heading"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="processthreedescription"
            label="Process Three Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="processfourheading"
            label="Process Four Heading"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="processfourdescription"
            label="Process Four Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="processfiveheading"
            label="Process Five Heading"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="processfivedescription"
            label="Process Five Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="processsixheading"
            label="Process Six Heading"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="processsixdescription"
            label="Process Six Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="processsevenheading"
            label="Process Seven Heading"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="processsevendescription"
            label="Process Seven Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="processeightheading"
            label="Process Eight Heading"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="processeightdescription"
            label="Process Eight Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="solutionsctaheading"
            label="Solutions CTA Heading"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="solutionsctadescription"
            label="Solutions CTA Description"
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

export default EditServPageCont;
