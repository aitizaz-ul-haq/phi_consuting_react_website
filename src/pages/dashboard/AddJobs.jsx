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
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} style={{ maxWidth: 600 }}>
      <Form.Item name="title" label="Title" rules={[{ required: true }]} >
        <Input />
      </Form.Item>

      <Form.Item name="role" label="Role" rules={[{ required: true }]} >
        <Input />
      </Form.Item>

      {/* Dynamic Form List */}
      <Form.List name="items">
        {(fields, { add, remove }) => (
          <div style={{ display: 'flex', rowGap: 16, flexDirection: 'column' }}>
            {fields.map((field) => (
              <Card size="small" title={`Item ${field.name + 1}`} key={field.key} extra={
                <CloseOutlined onClick={() => remove(field.name)} />
              }>
                <Form.Item label="Name" name={[field.name, 'name']} >
                  <Input />
                </Form.Item>

                {/* Nest Form.List */}
                <Form.Item label="List">
                  <Form.List name={[field.name, 'list']}>
                    {(subFields, subOpt) => (
                      <div style={{ display: 'flex', flexDirection: 'column', rowGap: 16 }}>
                        {subFields.map((subField) => (
                          <Space key={subField.key}>
                            <Form.Item noStyle name={[subField.name, 'first']}>
                              <Input placeholder="first" />
                            </Form.Item>
                            <Form.Item noStyle name={[subField.name, 'second']}>
                              <Input placeholder="second" />
                            </Form.Item>
                            <CloseOutlined onClick={() => subOpt.remove(subField.name)} />
                          </Space>
                        ))}
                        <Button type="dashed" onClick={() => subOpt.add()} block>
                          + Add Sub Item
                        </Button>
                      </div>
                    )}
                  </Form.List>
                </Form.Item>
              </Card>
            ))}
            <Button type="dashed" onClick={() => add()} block>+ Add Item</Button>
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
  );
};

export default AddJobs;
