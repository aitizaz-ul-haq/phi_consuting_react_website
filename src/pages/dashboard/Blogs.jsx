import React, { useEffect, useState } from 'react';
import { Table, Space, Button, message } from 'antd';
import axios from 'axios';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:3000/blogs'); // Adjust this URL to your API endpoint
      setBlogs(response.data);
      // console.log(response);
      setBlogs(response.data.map(blog => ({ ...blog, key: blog._id.toString() }))); // Convert _id to string
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/blogs/${id}`); // Adjust this URL to your API endpoint
      const updatedBlogs = blogs.filter(blog => blog._id !== id);
      setBlogs(updatedBlogs); // Update the state to trigger re-render
      message.success('Blog deleted successfully');
    } catch (error) {
      console.error('Error deleting blog:', error);
      message.error('Error deleting blog');
    }
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Summary',
      dataIndex: 'summary',
      key: 'summary',
      render: summary => <p>{summary}</p>,
    },
    {
      title: 'Date Posted',
      dataIndex: 'DatePosted',
      key: 'DatePosted',
    },
    {
      title: 'Read Time',
      dataIndex: 'ReadTime',
      key: 'ReadTime',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Edit</a>
          <Button type="link" onClick={() => handleDelete(record._id)}>Delete</Button>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={blogs} rowKey="_id" />;
};

export default Blogs;
