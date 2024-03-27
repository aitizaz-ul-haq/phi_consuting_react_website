import React, { useState, useEffect } from "react";
import { Table, Button, Space, message } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      const response = await axios.get(
        "https://backend.phiconsulting.org/blogs"
      );
      setBlogs(
        response.data.map((blog) => ({ ...blog, key: blog._id.toString() }))
      );
    } catch (error) {
      console.error("Error fetching blogs:", error);
      message.error("Error fetching blogs");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://backend.phiconsulting.org/blogs/${id}`);
      const updatedBlogs = blogs.filter((blog) => blog._id !== id);
      setBlogs(updatedBlogs);
      message.success("Blog deleted successfully");
    } catch (error) {
      console.error("Error deleting blog:", error);
      message.error("Error deleting blog");
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
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Blog Content",
      dataIndex: "blogContent",
      key: "blogContent",
      render: (text) => <div>{truncateHtml(text, 100)}</div>,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => handleEdit(record._id)}
            icon={<EditOutlined />}
          />
          <Button
            onClick={() => handleDelete(record._id)}
            icon={<DeleteOutlined />}
          />
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
