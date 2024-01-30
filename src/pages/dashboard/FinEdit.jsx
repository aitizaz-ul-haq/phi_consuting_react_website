import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Card, Space, Select } from 'antd';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import { message } from 'antd';

const { Option } = Select;

const FinEdit = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { finId } = useParams();
  
  useEffect(() => {
    const fetchFintechEntry = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/fintech/${finId}`);
        const entryData = response.data;
        const initialFormValues = {
          items: entryData.content.map((item, index) => ({
            key: index,
            headingType: item.headingType,
            headingText: item.headingText,
            highlighted: item.highlighted,
            paragraphType: 'paragraph',
            paragraphText: item.paragraphText
          }))
        };
        form.setFieldsValue(initialFormValues);
      } catch (error) {
        message.error('Failed to fetch fintech entry');
      }
    };

    fetchFintechEntry();
  }, [finId, form]);

  const onFinish = async (values) => {
    try {
      await axios.put(`http://localhost:3000/fintech/${finId}`, { content: values.items });
      message.success('Fintech entry updated successfully');
      navigate('/dashboard/Fin'); // Update this path as per your routing
    } catch (error) {
      message.error('Failed to update fintech entry');
    }
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.List name="items">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field, index) => (
              <Card 
                key={field.key} 
                title={`Content Section ${index + 1}`} 
                extra={<CloseOutlined onClick={() => remove(field.name)} />}
              >
                <Form.Item
                  {...field}
                  label="Heading Type"
                  name={[field.name, 'headingType']}
                  rules={[{ required: true }]}
                >
                  <Select>
                    <Option value="heading">Heading</Option>
                    <Option value="paragraph">Paragraph</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  {...field}
                  label="Heading Text"
                  name={[field.name, 'headingText']}
                  rules={[{ required: true }]}
                >
                  <Input.TextArea />
                </Form.Item>

                <Form.Item
                  {...field}
                  label="Highlighted"
                  name={[field.name, 'highlighted']}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  {...field}
                  label="Paragraph Type"
                  name={[field.name, 'paragraphType']}
                >
                  <Select disabled>
                    <Option value="paragraph">Paragraph</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  {...field}
                  label="Paragraph Text"
                  name={[field.name, 'paragraphText']}
                  rules={[{ required: true }]}
                >
                  <Input.TextArea />
                </Form.Item>
              </Card>
            ))}
            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
              Add Content Section
            </Button>
          </>
        )}
      </Form.List>

      <Form.Item>
        <Button type="primary" htmlType="submit">Update Entry</Button>
      </Form.Item>
    </Form>
  );
};

export default FinEdit;
