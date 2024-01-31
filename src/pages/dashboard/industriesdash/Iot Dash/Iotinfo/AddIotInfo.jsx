import React, { useState } from 'react';
import { Button, Form, Input, Typography } from 'antd';
import axios from 'axios';
import { message } from 'antd';
import { Navigate } from 'react-router-dom';

const { Title } = Typography;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};


const AddIotInfo = () => {

    const [form] = Form.useForm();
  const [redirectToCases, setRedirectToCases] = useState(false);

  const onFinish = async (values) => {
    const dataToPost = {
      sections: [
        { title: values.section1_title, paragraph: values.section1_paragraph },
        { title: values.section2_title, paragraph: values.section2_paragraph },
        { title: values.section3_title, paragraph: values.section3_paragraph },
        { title: values.section4_title, paragraph: values.section4_paragraph },
      ]
    };

    try {
      const response = await axios.post('http://localhost:3000/iotinfo', dataToPost);
      message.success('iotinfo info entry created successfully');
      setRedirectToCases(true);
    } catch (error) {
      console.error('Error posting data:', error);
      message.error('An error occurred while adding the iotinfo info entry');
    }
  };

  if (redirectToCases) {
    return <Navigate to="/dashboard/ShowIotInfo" />;
  }
    return(
        <div className="form-container-dash">
        <Title level={2}>Add Financial Consulting Case</Title>
        <Form {...layout} form={form} name="add-fin-info" onFinish={onFinish}>
          {/* Four static sections */}
          {[...Array(4)].map((_, index) => (
            <div key={index}>
              {/* Title Field */}
              <Form.Item
                name={`section${index + 1}_title`}
                label={`Section ${index + 1} Title`}
                rules={[{ required: true, message: 'Title is required' }]}
              >
                <Input />
              </Form.Item>
  
              {/* Paragraph Field */}
              <Form.Item
                name={`section${index + 1}_paragraph`}
                label={`Section ${index + 1} Paragraph`}
                rules={[{ required: true, message: 'Paragraph is required' }]}
              >
                <Input.TextArea />
              </Form.Item>
            </div>
          ))}
  
          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
            <Button htmlType="button" onClick={() => form.resetFields()}>Reset</Button>
          </Form.Item>
        </Form>
      </div>
    );
}

export default AddIotInfo;