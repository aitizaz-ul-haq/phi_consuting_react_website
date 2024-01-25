import React from 'react';
import { Button, Card, Form, Input, Space, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AddJobs = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const formattedData = {
        title: values.title,
        role: values.role,
        content: values.items.map(item => ([
          { type: "subheading", text: item.subHeading },
          { type: "paragraph", text: item.paragraph }
        ])).flat()
      };
      console.log(formattedData);
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

      <Form.Item name="role" label="Role" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      {/* Dynamic Form List */}
      <Form.List name="items">
        {(fields, { add, remove }) => (
          <div style={{ display: 'flex', rowGap: 16, flexDirection: 'column' }}>
            {fields.map((field) => (
              <Card size="small" title={`Section ${field.name + 1}`} key={field.key} extra={
                <CloseOutlined onClick={() => remove(field.name)} />
              }>
                
                {/* Title and Message */}
                <Form.Item label="subheading" name={[field.name, 'subHeading']}>
                  <Input placeholder="subheading" />
                </Form.Item>
                <Form.Item label="Paragraph" name={[field.name, 'paragraph']}>
                  <Input.TextArea placeholder="Paragraph text here..." />
                </Form.Item>
              </Card>
            ))}
            <Button type="dashed" onClick={() => add()} block>+ Add Section</Button>
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

export default AddJobs;
