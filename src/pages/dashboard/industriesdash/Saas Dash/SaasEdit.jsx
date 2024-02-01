import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Select, Typography, message } from 'antd';
import axios from 'axios';
import { useParams, Navigate } from 'react-router-dom';

const { Option } = Select;
const { Title } = Typography;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const SaasEdit = () => {

    const [form] = Form.useForm();
  const [redirectToCases, setRedirectToCases] = useState(false);
  const { saasId } = useParams(); // Get the fintech ID from the URL

  console.log(`id we are tryin gto get`, saasId);

  useEffect(() => {
    const fetchFintechEntry = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/saas/${saasId}`);
        form.setFieldsValue(response.data); // Set form values with the fetched data
      } catch (error) {
        console.error('Error fetching saas entry:', error);
        message.error('An error occurred while fetching the iot entry');
      }
    };
    fetchFintechEntry();
  }, [saasId, form]);

  const onFinish = async (values) => {
    try {
      const response = await axios.put(`http://localhost:3000/saas/${saasId}`, values);
      console.log('Response:', response.data);
      message.success('saas entry updated successfully');
      setRedirectToCases(true);
    } catch (error) {
      console.error('Error updating data:', error);
      message.error('An error occurred while updating the saas entry');
    }
  };

  if (redirectToCases) {
    return <Navigate to="/dashboard/saas" />;
  }
    return(
        <div className="form-container-dash">
        <Title level={2}>Edit Financial Consulting Case</Title>
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
         {/* Heading Type Field */}
         <Form.Item
            label="Heading Type"
            name="headingType"
            rules={[{ required: true }]}
          >
            <Select>
              <Option value="heading">Heading</Option>
              <Option value="paragraph">Paragraph</Option>
            </Select>
          </Form.Item>
  
          {/* Heading Text Field */}
          <Form.Item
            label="Heading Text"
            name="headingText"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>
  
          {/* Highlighted Field */}
          <Form.Item
            label="Highlighted"
            name="highlighted"
          >
            <Input />
          </Form.Item>
  
          {/* Paragraph Text Field */}
          <Form.Item
            label="Paragraph Text"
            name="paragraphText"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>
  
          <Form.Item {...layout}>
            <Button type="primary" htmlType="submit">Submit</Button>
            <Button htmlType="button" onClick={() => form.resetFields()}>Reset</Button>
          </Form.Item>
        </Form>
      </div>
    );
}

export default SaasEdit;