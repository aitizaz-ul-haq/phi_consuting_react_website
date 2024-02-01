import React, { useState } from 'react';
import { Button, Form, Input, Select, Typography } from 'antd';
import axios from 'axios';
import { message } from 'antd';
import { Navigate } from 'react-router-dom';

const { Option } = Select;
const { Title } = Typography;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const AddIaasCont = () => {

    const [form] = Form.useForm();
    const [redirectToCases, setRedirectToCases] = useState(false);
  
    const onFinish = async (values) => {
      try {
        const response = await axios.post('http://localhost:3000/iaas', values);
        console.log('Response:', response.data);
        message.success('iaas entry created successfully');
        setRedirectToCases(true);
      } catch (error) {
        console.error('Error posting data:', error);
        message.error('An error occurred while adding the cloud entry');
      }
    };
  
    if (redirectToCases) {
      return <Navigate to="/dashboard/iaas" />;
    }
  

    return(
        <div className="form-container-dash">
        <Title level={2}>Add Financial Consulting Case</Title>
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

export default AddIaasCont;