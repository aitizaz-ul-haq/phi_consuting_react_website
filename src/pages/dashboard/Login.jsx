import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import phiremotelogo from "../../assets/img/phi_logo.webp";

const apiUrl = import.meta.env.VITE_API_URL || 'https://phi-email-service.vercel.app';
const onFinish = async (values) => {
  try {
      const response = await fetch(`${apiUrl}/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values)
      });

      if (response.ok) {
          const data = await response.json();
          // Store the token, e.g., in localStorage
          localStorage.setItem('token', data.token);
          // Redirect to the dashboard
          window.location.href = '/dashboard';
      } else {
          console.log('Login failed');
      }
  } catch (error) {
      console.log('Error:', error);
  }
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


const Login = () => (

  
    <>
    <article className="login-container">
      <div className="log-remote-container"></div>
        <section className="login-remote">
        <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
        </section>
    </article>
    
    </>
);
export default Login;