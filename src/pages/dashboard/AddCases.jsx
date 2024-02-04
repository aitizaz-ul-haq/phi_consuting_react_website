import React, { useState } from 'react';
import { Button, Card, Form, Input, Space, Select } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import axios from 'axios';
import { message } from 'antd';
import { Navigate } from 'react-router-dom';

const { Option } = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AddCases = () => {
  const [form] = Form.useForm();
  const [redirectToCases, setRedirectToCases] = useState(false);

  const onFinish = async (values) => {
    const formattedData = {
      title: values.title,
      summary: values.summary,
      imageone: values.imageone,
      imagetwo: values.imagetwo,
      content: values.items.map(item => ({
        type: item.type,
        text: item.text
      }))
    };
  
    try {
      const response = await axios.post('https://prickle-balanced-archaeopteryx.glitch.me/cases', formattedData); // Updated endpoint
      console.log('Case study created successfully:', response.data);
      message.success('Case study added successfully');
      setRedirectToCases(true); // Redirect after successful submission
    } catch (error) {
      console.error('Error creating case study:', error);
      message.error('An error occurred while adding the case study');
    }
  };
  

  const onReset = () => {
    form.resetFields();
  };

  if (redirectToCases) {
    return <Navigate to="/dashboard/Cases" />;
  }

  return (
    <div className="form-container-dash">
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} style={{ maxWidth: 600 }}>
        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="summary" label="Summary" rules={[{ required: true }]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="imageone" label="select company product" rules={[{ required: true }]}>
          <Select placeholder="Select a company for Image One">
            {/* Add options here */}
            <Option value="Atob">Atob</Option>
            <Option value="pallet">pallet</Option>
            <Option value="truckx">truckx</Option>
            <Option value="solar">solar</Option>
            <Option value="bobtail">bobtail</Option>
            <Option value="joyride">joyride</Option>
            <Option value="mudflip">mudflip</Option>
            <Option value="digital ocean">digital ocean</Option>
          </Select>
        </Form.Item>
        <Form.Item name="imagetwo" label="select company logo" rules={[{ required: true }]}>
          <Select placeholder="Select a company for Image Two">
            {/* Add options here */}
            <Option value="Atob">Atob</Option>
            <Option value="pallet">pallet</Option>
            <Option value="truckx">truckx</Option>
            <Option value="solar">solar</Option>
            <Option value="bobtail">bobtail</Option>
            <Option value="joyride">joyride</Option>
            <Option value="mudflip">mudflip</Option>
            <Option value="digital ocean">digital ocean</Option>
          </Select>
        </Form.Item>

        {/* Dynamic Form List for Content */}
        <Form.List name="items">
          {(fields, { add, remove }) => (
            <div style={{ display: 'flex', rowGap: 16, flexDirection: 'column' }}>
              {fields.map((field, index) => (
                <Card size="small" title={`Content Section ${index + 1}`} key={field.key} extra={
                  <CloseOutlined onClick={() => remove(field.name)} />
                }>
                  <Form.Item label="Type" name={[field.name, 'type']} rules={[{ required: true }]}>
                    <Select placeholder="Select type">
                      <Option value="subheading">Subheading</Option>
                      <Option value="paragraph">Paragraph</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Text" name={[field.name, 'text']} rules={[{ required: true }]}>
                    <Input.TextArea placeholder="Text" />
                  </Form.Item>
                </Card>
              ))}
              <Button type="dashed" onClick={() => add()} block>+ Add Content Section</Button>
            </div>
          )}
        </Form.List>

        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">Submit</Button>
            <Button htmlType="button" onClick={onReset}>Reset</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCases;
