import React, { useState } from "react";
import { Form, Input, Button, Card, message } from "antd";
import { Navigate } from "react-router-dom";
import axios from "axios";

const AddAboutPageCont = () => {
  const [redirectToBlogs, setRedirectToBlogs] = useState(false);

  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      const response = await axios.post(
        "https://backend.phiconsulting.org/aboutuspage",
        values
      );
      console.log("Data submitted successfully:", response.data);
      message.success("aboutuspage Data submitted successfully");
      setRedirectToBlogs(true); // This triggers redirection
    } catch (error) {
      console.error("Error submitting form:", error);
      console.error("Error creating blog:", error);
      message.error("An error occurred ");
    }
  };

  if (redirectToBlogs) {
    return <Navigate to="/dashboard/ShowAboutPage" />;
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
          name="homepageContent"
          initialValues={{ remember: true }}
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
            name="excellenceheading"
            label="Excellence Heading"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="excellencedescription"
            label="Excellence Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="qualityheading"
            label="Quality Heading"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="qualityonedescription"
            label="Quality One Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="qualitytwodescription"
            label="Quality Two Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="qualitythreedescription"
            label="Quality Three Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="qualityfourdescription"
            label="Quality Four Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="teamheading"
            label="Team Heading"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="teamdescription"
            label="Team Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="locationheading"
            label="Location Heading"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="locationwords"
            label="Location Words"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="maponetitle"
            label="Map One Title"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="maptwotitle"
            label="Map Two Title"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="rewardtwo"
            label="Reward Two"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="livefromphi"
            label="Live From Phi Heading"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="livefromphisubheading"
            label="Live From Phi Sub Heading"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="livefromphidescription"
            label="live from phi description"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="testimonilaheading"
            label="Testimonial Heading"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="testimonialdescription"
            label="Testimonial Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="testione"
            label="Testimonial One"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="testidesignationone"
            label="Testimonial Designation One"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="testitwo"
            label="Testimonial Two"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="testidesignationtwo"
            label="Testimonial Designation Two"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="testithree"
            label="Testimonial Three"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="testidesignationthree"
            label="Testimonial Designation Three"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="achievementsline"
            label="Achievements Line"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="aboutctaheading"
            label="About CTA Heading"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="aboutctadescription"
            label="About CTA Description"
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

export default AddAboutPageCont;
