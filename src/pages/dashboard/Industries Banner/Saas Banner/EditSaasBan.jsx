import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

const EditSaasBan = () => {
    const [redirectToCases, setRedirectToCases] = useState(false);
    const [form] = Form.useForm();
    const { saasbanId  } = useParams(); // Assuming your route parameter is named `saasBanId`
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSaasBanData = async () => {
            try {
                const response = await axios.get(`https://prickle-balanced-archaeopteryx.glitch.me/saasban/${saasbanId }`); // Adjust the URL to match your API endpoint
                form.setFieldsValue({
                    heading: response.data.heading,
                    bannerDescription: response.data.bannerDescription,
                });
            } catch (error) {
                console.error('Failed to fetch SaasBan data:', error);
                message.error('Failed to fetch data for editing');
            }
        };

        fetchSaasBanData();
    }, [saasbanId , form]);

    const onFinish = async (values) => {
        try {
            await axios.put(`https://prickle-balanced-archaeopteryx.glitch.me/saasban/${saasbanId }`, values); // Adjust the URL to match your API endpoint
            message.success('SaasBan updated successfully');
            setRedirectToCases(true);
        } catch (error) {
            console.error('Failed to update SaasBan:', error);
            message.error('Failed to update SaasBan');
        }
    };

    
  if (redirectToCases) {
    return <Navigate to="/dashboard/ShowSaasBan" />;
  }

    return (
        <Form
            form={form}
            name="editSaasBan"
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            autoComplete="off"
        >
            <Form.Item
                label="Heading"
                name="heading"
                rules={[{ required: true, message: 'Please input the heading!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Banner Description"
                name="bannerDescription"
                rules={[{ required: true, message: 'Please input the banner description!' }]}
            >
                <Input.TextArea />
            </Form.Item>

            <Form.Item
                wrapperCol={{ offset: 8, span: 16 }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default EditSaasBan;
