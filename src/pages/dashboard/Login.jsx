import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import phiremotelogo from "../../assets/img/phi_logo.webp";
import "../../assets/css/login.css";

const apiUrl = import.meta.env.VITE_API_URL_PROD || 'https://prickle-balanced-archaeopteryx.glitch.me';
const onFinish = async (values) => {
  try {
      const response = await fetch(`https://prickle-balanced-archaeopteryx.glitch.me/login`, {
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
          <div className="logo-login-container">
            <img src={phiremotelogo} alt="phi-consulting logo" width={160} height={130} />
            <h2 className="login-heading">Welcome To Phi Remote</h2>
            <p className="login-description">Please login enter admin username and password <br /> to get access to the content dashboard.</p>
          </div>
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
        Log In
      </Button>
    </Form.Item>
  </Form>
        </section>
    </article>
    
    </>
);
export default Login;