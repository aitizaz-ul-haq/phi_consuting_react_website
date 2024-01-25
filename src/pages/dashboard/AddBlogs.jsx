import React from 'react';
import { Button, Card, Form, Input, Space } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import axios from 'axios';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AddBlog = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const formattedData = {
      title: values.title,
      summary: values.summary,
      imageone: values.imageone,
      DatePosted: values.DatePosted,
      ReadTime: values.ReadTime,
      content: values.items.map(item => ({
        type: item.type,
        text: item.text
      }))
    };
  
    try {
      const response = await axios.post('http://localhost:3000/blogs', formattedData); // Adjust the URL to match your server's address
      console.log('Blog created successfully:', response.data);
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };
  const onReset = () => {
    form.resetFields();
  };

  return (
    <div className="form-container-dash">
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} style={{ maxWidth: 600 }}>
        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="summary" label="Summary" rules={[{ required: true }]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="imageone" label="Image URL">
          <Input />
        </Form.Item>
        <Form.Item name="DatePosted" label="Date Posted">
          <Input />
        </Form.Item>
        <Form.Item name="ReadTime" label="Read Time">
          <Input />
        </Form.Item>

        {/* Dynamic Form List */}
        <Form.List name="items">
          {(fields, { add, remove }) => (
            <div style={{ display: 'flex', rowGap: 16, flexDirection: 'column' }}>
              {fields.map((field, index) => (
                <Card size="small" title={`Content Section ${index + 1}`} key={field.key} extra={
                  <CloseOutlined onClick={() => remove(field.name)} />
                }>
                  <Form.Item label="Type" name={[field.name, 'type']} rules={[{ required: true }]}>
                    <Input placeholder="Type (e.g., subheading, paragraph)" />
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

export default AddBlog;
