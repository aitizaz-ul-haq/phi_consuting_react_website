import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Typography, message } from 'antd';
import axios from 'axios';
import { useParams, Navigate } from 'react-router-dom';

const { Title } = Typography;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const CloudEdit = () => {
  const [form] = Form.useForm();
  const [redirectToCases, setRedirectToCases] = useState(false);
  const { gtmpageId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://prickle-balanced-archaeopteryx.glitch.me/gtmpage/${gtmpageId}`);
        form.setFieldsValue(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        message.error('An error occurred while fetching the data');
      }
    };

    fetchData();
  }, [gtmpageId, form]);

  const onFinish = async (values) => {
    try {
      await axios.put(`https://prickle-balanced-archaeopteryx.glitch.me/gtmpage/${gtmpageId}`, values);
      message.success('GTM content updated successfully');
      setRedirectToCases(true);
    } catch (error) {
      console.error('Error updating data:', error);
      message.error('An error occurred while updating the GTM content');
    }
  };

  if (redirectToCases) {
    return <Navigate to="/dashboard/gtm" />;
  }

  return (
    <div className="form-container-dash">
      <Title level={2}>Edit GTM Content</Title>
      <Form {...layout} form={form} name="edit-gtm-content" onFinish={onFinish}>
        {/* Add all the form fields as per the provided JSON structure */}
        {/* ... Add other form items here as per your JSON structure */}
        
        {/* Example form items */}
        <Form.Item
          label="Banner Heading"
          name="bannerHeading"
          // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Banner Description"
          name="bannerDescription"
          // rules={[{ required: true }]}
        >
          <Input.TextArea />
          </Form.Item>

          <Form.Item
          label="Features Main Heading"
          name="featuresMainHeading"
          // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Features Main Description"
          name="featuresMainDescription"
           // rules={[{ required: true }]}
        >
         <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Features Heading One"
          name="featuresHeadingOne"
           // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Features Description One"
          name="featuresDescriptionOne"
           // rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>


        <Form.Item
          label="Features Heading Two"
          name="featuresHeadingTwo"
          // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Features Description Two"
          name="featuresDescriptionTwo"
           // rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Features Heading Three"
          name="featuresHeadingThree"
           // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Features Description Three"
          name="featuresDescriptionThree"
           // rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Features Heading Four"
          name="featuresHeadingFour"
           // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Features Description Four"
          name="featuresDescriptionFour"
           // rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Features Heading Five"
          name="featuresHeadingFive"
          // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Features Description Five"
          name="featuresDescriptionFive"
          // rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>


        <Form.Item
          label="Features Heading Six"
          name="featuresHeadingSix"
           // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Features Description Six"
          name="featuresDescriptionSix"
           // rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>


        <Form.Item
          label="Process One Description"
          name="processDesOne"
          // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Process Two Description"
          name="processDesTwo"
           // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Process Three Description"
          name="processDesThree"
           // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Process Four Description"
          name="processDesFour"
           // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Process Five Description"
          name="processDesFive"
           // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Process Six Description"
          name="processDesSix"
           // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Process Seven Description"
          name="processDesSeven"
          // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Process Eight Description"
          name="processDesEight"
           // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Why Section Heading"
          name="whySectionHeading"
           // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Why Section Description"
          name="whySectionDescription"
           // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Why Box One Heading"
          name="whyBoxOneHeading"
          // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Why Section One Description"
          name="whyBoxOneDescription"
           // rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>


        <Form.Item
          label="Why Box Two Heading"
          name="whyBoxTwoHeading"
           // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Why Section Two Description"
          name="whyBoxTwoDescription"
           // rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Why Box Three Heading"
          name="whyBoxThreeHeading"
          // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Why Section Three Description"
          name="whyBoxThreeDescription"
           // rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Why Box Four Heading"
          name="whyBoxFourHeading"
          // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Why Section Four Description"
          name="whyBoxFourDescription"
           // rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Why Box Five Heading"
          name="whyBoxFiveHeading"
          // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Why Section Five Description"
          name="whyBoxFiveDescription"
           // rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Why Box Six Heading"
          name="whyBoxSixHeading"
          // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Why Section Six Description"
          name="whyBoxSixDescription"
          // rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>
       

        <Form.Item>
          <Button type="primary" htmlType="submit">Update</Button>
          <Button htmlType="button" onClick={() => form.resetFields()}>Reset</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CloudEdit;
