import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Typography, message } from 'antd';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const { Title } = Typography;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const EditIaasInfo = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { iaasinfoId } = useParams();
  console.log(`saas info id`, iaasinfoId)


    useEffect(() => {
      if (iaasinfoId) {
        axios.get(`https://prickle-balanced-archaeopteryx.glitch.me/iaasinfo/${iaasinfoId}`)
          .then(response => {
            const data = response.data;
            const formData = data.sections.reduce((acc, section, index) => {
              acc[`section${index + 1}_title`] = section.title;
              acc[`section${index + 1}_paragraph`] = section.paragraph;
              return acc;
            }, {});
            form.setFieldsValue(formData);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            message.error('Error fetching data for editing');
          });
      }
    }, [iaasinfoId, form]);

    
  
    const onFinish = async (values) => {
      const updatedSections = Object.keys(values).reduce((acc, key) => {
        const match = key.match(/section(\d+)_(title|paragraph)/);
        if (match) {
          const index = parseInt(match[1]) - 1;
          const type = match[2];
          acc[index] = acc[index] || {};
          acc[index][type] = values[key];
        }
        return acc;
      }, []);
  
      const dataToPut = { sections: updatedSections };
  
      try {
        await axios.put(`http://localhost:3000/iaasinfo/${iaasinfoId}`, dataToPut);
        message.success('iaasinfo info entry updated successfully');
        navigate('/dashboard/ShowIaasInfo');
      } catch (error) {
        console.error('Error updating data:', error);
        message.error('An error occurred while updating the devops info entry');
      }
    };
    return(
        <div className="form-container-dash">
        <Title level={2}>Edit Financial Consulting Case</Title>
        <Form {...layout} form={form} onFinish={onFinish}>
          {/* Four static sections */}
          {[...Array(4)].map((_, index) => (
            <div key={index}>
              <Form.Item
                name={`section${index + 1}_title`}
                label={`Section ${index + 1} Title`}
                rules={[{ required: true, message: 'Title is required' }]}
              >
                <Input />
              </Form.Item>
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
            <Button type="primary" htmlType="submit">Update</Button>
            <Button htmlType="button" onClick={() => form.resetFields()}>Reset</Button>
          </Form.Item>
        </Form>
      </div>
    );
}

export default EditIaasInfo;