import React,{useState, useEffect} from 'react';
import { Button, Card, Form, Input, Space, Select } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import axios from 'axios';
import moment from 'moment';
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

const AddBlog = () => {
  const [form] = Form.useForm();
  const [redirectToBlogs, setRedirectToBlogs] = useState(false);

  const onFinish = async (values) => {
    const formattedData = {
      title: values.title,
      summary: values.summary,
      companyName: values.companyName,
      DatePosted: values.DatePosted,
      ReadTime: values.ReadTime,
      content: values.items.map(item => ({
        type: item.type,
        text: item.text
      }))
    };
  
    try {
      const response = await axios.post('https://prickle-balanced-archaeopteryx.glitch.me/blogs', formattedData);
      console.log('Blog created successfully:', response.data);
      message.success('Blog edited successfully');
      setRedirectToBlogs(true); // This triggers redirection
    } catch (error) {
      console.error('Error creating blog:', error);
      message.error('An error occurred while updating the blog');
    }
  };
  const onReset = () => {
    form.resetFields();
  };

  if (redirectToBlogs) {
    return <Navigate to="/dashboard/Blogs" />;
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
        <Form.Item name="companyName" label="Company Name" rules={[{ required: true }]}>
          <Select placeholder="Select a company">
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
        <Form.Item name="DatePosted" label="Date Posted" initialValue={moment().format("DD/MM/YYYY")}>
          <Input />
        </Form.Item>
        <Form.Item name="ReadTime" label="Read Time" rules={[{ required: true }]}>
          <Select placeholder="Select read time">
            <Option value="2 min">2 min</Option>
            <Option value="3 min">3 min</Option>
            <Option value="4 min">4 min</Option>
            <Option value="5 min">5 min</Option>
            <Option value="6 min">6 min</Option>
            <Option value="7 min">7 min</Option>
            <Option value="8 min">8 min</Option>
          </Select>
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

export default AddBlog;
