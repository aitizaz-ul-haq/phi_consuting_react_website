import React, { useEffect, useState } from 'react';
import { Table, Space, Button, message, Spin  } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 3000);

    try {
      const response = await axios.get('http://localhost:3000/blogs');
      clearTimeout(timer);
      setBlogs(response.data.map(blog => ({ ...blog, key: blog._id.toString() })));
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      clearTimeout(timer);
      setIsLoading(false);
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

  const handleEdit = (blogId) => {
    console.log('pressed...')
    navigate(`/dashboard/EditBlog/${blogId}`);
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
          <Button type="link" onClick={() => handleEdit(record._id)}>Edit</Button>
          <Button type="link" onClick={() => handleDelete(record._id)}>Delete</Button>
        </Space>
      ),
    },
  ];

  const onEditClick = (blogId) => {
    handleEdit(blogId);
  };

  return (
    <Spin spinning={isLoading} delay={300}>
    <Table columns={columns} dataSource={blogs} rowKey="_id" />
  </Spin>
  );
};

export default Blogs;
