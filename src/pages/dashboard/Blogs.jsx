// import React, { useEffect, useState } from 'react';
// import { Table, Space, Button, message, Spin  } from 'antd';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Blogs = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const fetchBlogs = async () => {
//     setIsLoading(true);
//     const timer = setTimeout(() => setIsLoading(false), 3000);

//     try {
//       const response = await axios.get('https://prickle-balanced-archaeopteryx.glitch.me/blogs');
//       clearTimeout(timer);
//       setBlogs(response.data.map(blog => ({ ...blog, key: blog._id.toString() })));
//       setIsLoading(false);
//     } catch (error) {
//       console.error('Error fetching blogs:', error);
//       clearTimeout(timer);
//       setIsLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`https://prickle-balanced-archaeopteryx.glitch.me/blogs/${id}`); // Adjust this URL to your API endpoint
//       const updatedBlogs = blogs.filter(blog => blog._id !== id);
//       setBlogs(updatedBlogs); // Update the state to trigger re-render
//       message.success('Blog deleted successfully');
//     } catch (error) {
//       console.error('Error deleting blog:', error);
//       message.error('Error deleting blog');
//     }
//   };

//   const handleEdit = (blogId) => {
//     console.log('pressed...')
//     navigate(`/dashboard/EditBlog/${blogId}`);
//   };

//   const columns = [
//     {
//       title: 'Title',
//       dataIndex: 'title',
//       key: 'title',
//       render: text => <a>{text}</a>,
//     },
//     {
//       title: 'Summary',
//       dataIndex: 'summary',
//       key: 'summary',
//       render: summary => <p>{summary}</p>,
//     },
//     {
//       title: 'Date Posted',
//       dataIndex: 'DatePosted',
//       key: 'DatePosted',
//     },
//     {
//       title: 'Read Time',
//       dataIndex: 'ReadTime',
//       key: 'ReadTime',
//     },
//     {
//       title: 'Action',
//       key: 'action',
//       render: (_, record) => (
//         <Space size="middle">
//           <Button type="link" onClick={() => handleEdit(record._id)}>Edit</Button>
//           <Button type="link" onClick={() => handleDelete(record._id)}>Delete</Button>
//         </Space>
//       ),
//     },
//   ];

//   const onEditClick = (blogId) => {
//     handleEdit(blogId);
//   };

//   return (
//     <Spin spinning={isLoading} delay={300}>
//     <Table columns={columns} dataSource={blogs} rowKey="_id" />
//   </Spin>
//   );
// };

// export default Blogs;



import React, { useState, useEffect } from 'react';
import { Table, Button, Space, message } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
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
        try {
            const response = await axios.get('https://prickle-balanced-archaeopteryx.glitch.me/blogs');
            setBlogs(response.data.map(blog => ({ ...blog, key: blog._id.toString() })));
        } catch (error) {
            console.error('Error fetching blogs:', error);
            message.error('Error fetching blogs');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://prickle-balanced-archaeopteryx.glitch.me/blogs/${id}`);
            const updatedBlogs = blogs.filter(blog => blog._id !== id);
            setBlogs(updatedBlogs);
            message.success('Blog deleted successfully');
        } catch (error) {
            console.error('Error deleting blog:', error);
            message.error('Error deleting blog');
        }
    };

    const handleEdit = (id) => {
        navigate(`/dashboard/EditBlog/${id}`);
    };

    const truncateHtml = (htmlContent, maxLength = 100) => {
      const div = document.createElement("div");
      div.innerHTML = htmlContent;
      let textContent = div.textContent || div.innerText || "";
  
      if (textContent.length > maxLength) {
          return textContent.substring(0, maxLength) + "...";
      } else {
          return textContent;
      }
  };
  

    const columns = [
      {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
      },
      {
          title: 'Blog Content',
          dataIndex: 'blogContent',
          key: 'blogContent',
          render: text => <div>{truncateHtml(text, 100)}</div>,
      },
      {
          title: 'Actions',
          key: 'actions',
          render: (_, record) => (
              <Space size="middle">
                  <Button onClick={() => handleEdit(record._id)} icon={<EditOutlined />} />
                  <Button onClick={() => handleDelete(record._id)} icon={<DeleteOutlined />} />
              </Space>
          ),
      },
  ];

    return (
        <Table
            columns={columns}
            dataSource={blogs}
            rowKey="_id"
            loading={isLoading}
        />
    );
};

export default Blogs;

