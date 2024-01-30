import React, { useState } from 'react';
import { Button, Card, Form, Input, Select, Space, Typography } from 'antd';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import { message } from 'antd';
import { Navigate } from 'react-router-dom';

const { Option } = Select;
const { Title } = Typography;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const AddFinCont = () => {
  const [form] = Form.useForm();
  const [redirectToCases, setRedirectToCases] = useState(false);

  const onFinish = async (values) => {
    const formattedData = {
      content: values.items,
    };
  
    try {
      const response = await axios.post('http://localhost:3000/fintech', formattedData); // Replace with your server's URL
      console.log('Response:', response.data);
      message.success('Fintech entry created successfully');
      setRedirectToCases(true); // Redirect or handle the response as needed
    } catch (error) {
      console.error('Error posting data:', error);
      message.error('An error occurred while adding the fintech entry');
    }
  };
  

  if (redirectToCases) {
    return <Navigate to="/dashboard/Cases" />;
  }

  return (
    <div className="form-container-dash">
      <Title level={2}>Add Financial Consulting Case</Title>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.List name="items" initialValue={[{ headingType: 'heading' }]}>
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => (
                <Card 
                  size="small" 
                  title={`Content Section ${index + 1}`} 
                  key={field.key} 
                  extra={<CloseOutlined onClick={() => remove(field.name)} />}
                >
                  {/* Heading Type Field */}
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

                  {/* Heading Text Field */}
                  <Form.Item
                    {...field}
                    label="Heading Text"
                    name={[field.name, 'headingText']}
                    rules={[{ required: true }]}
                  >
                    <Input.TextArea />
                  </Form.Item>

                  {/* Highlighted Field */}
                  <Form.Item
                    {...field}
                    label="Highlighted"
                    name={[field.name, 'highlighted']}
                  >
                    <Input />
                  </Form.Item>

                  {/* Paragraph Type Field (non-editable) */}
                  <Form.Item
                    {...field}
                    label="Paragraph Type"
                    name={[field.name, 'paragraphType']}
                    initialValue="paragraph"
                  >
                    <Select disabled>
                      <Option value="paragraph">Paragraph</Option>
                    </Select>
                  </Form.Item>

                  {/* Paragraph Text Field */}
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

        <Form.Item {...layout}>
          <Space>
            <Button type="primary" htmlType="submit">Submit</Button>
            <Button htmlType="button" onClick={() => form.resetFields()}>Reset</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddFinCont;
