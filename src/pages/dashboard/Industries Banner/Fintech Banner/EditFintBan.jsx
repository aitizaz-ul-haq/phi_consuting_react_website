import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

const EditFintBan = () => {
    const [redirectToCases, setRedirectToCases] = useState(false);
    const [form] = Form.useForm();
    const { fintbanId  } = useParams(); // Assuming your route parameter is named `saasBanId`
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSaasBanData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/fintban/${fintbanId }`); // Adjust the URL to match your API endpoint
                form.setFieldsValue({
                    heading: response.data.heading,
                    bannerDescription: response.data.bannerDescription,
                });
            } catch (error) {
                console.error('Failed to fetch fintban data:', error);
                message.error('Failed to fetch data for editing');
            }
        };

        fetchSaasBanData();
    }, [fintbanId , form]);

    const onFinish = async (values) => {
        try {
            await axios.put(`http://localhost:3000/fintban/${fintbanId }`, values); // Adjust the URL to match your API endpoint
            message.success('fintban updated successfully');
            setRedirectToCases(true);
        } catch (error) {
            console.error('Failed to update fintban:', error);
            message.error('Failed to update fintban');
        }
    };

    
  if (redirectToCases) {
    return <Navigate to="/dashboard/ShowFintBan" />;
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

export default EditFintBan;
