import React, { useState } from 'react';
import { Button, Card, Form, Input, Space, Select } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import axios from 'axios';
import { message } from 'antd';
import { Navigate } from 'react-router-dom';

const { TextArea } = Input;
const { Option } = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AddJob = () => {
  const [form] = Form.useForm();
  const [redirectToJobs, setRedirectToJobs] = useState(false);

  const onFinish = async (values) => {
    const formattedData = {
      title: values.title,
      role: values.role,
      content: values.items?.map(item => ({ // Use optional chaining here
        type: item.type,
        text: item.text
      })) || [] // Fallback to an empty array if items is undefined
    };
  
    try {
      const response = await axios.post('https://prickle-balanced-archaeopteryx.glitch.me/jobs', formattedData); // Adjust the URL to your API endpoint
      console.log('Job created successfully:', response.data);
      message.success('Job posted successfully');
      setRedirectToJobs(true); // Triggers redirection
    } catch (error) {
      console.error('Error posting job:', error);
      message.error('An error occurred while posting the job');
    }
  };
  
  

  const onReset = () => {
    form.resetFields();
  };

  if (redirectToJobs) {
    return <Navigate to="/dashboard/Jobs" />;
  }

  return (
    <div className="form-container-dash">
    <div className="form-wrapper">
      <div className="heading-form">Add Jobs Below</div>
      <div className="description-form">Given below is the form to enter jobs please enter title of the jobs in title section and its description in role description</div>
      <Form {...layout} form={form} name="add-job" onFinish={onFinish} style={{ maxWidth: 600 }}>
        <Form.Item name="title" label="Job Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="role" label="Role Description" rules={[{ required: true }]}>
          <TextArea />
        </Form.Item>
        {/* Dynamic Form List for Content */}
        <Form.List name="items">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Card size="small" title={`Content Section ${name + 1}`} key={key} extra={
                  <CloseOutlined onClick={() => remove(name)} />
                }>
                  <Form.Item {...restField} name={[name, 'type']} label="Type" rules={[{ required: true }]}>
                    <Select placeholder="Select type">
                      <Option value="subheading">Subheading</Option>
                      <Option value="paragraph">Paragraph</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item {...restField} name={[name, 'text']} label="Text" rules={[{ required: true }]}>
                    <TextArea placeholder="Text" />
                  </Form.Item>
                </Card>
              ))}
              <Button type="dashed"  onClick={() => add()} block>+ Add Content Section</Button>
            </>
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
    </div>
  );
};

export default AddJob;
