import React, { useEffect, useState } from "react";
import { Table, Space, Button, message, Spin } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://backend.phiconsulting.org/jobs"
      );
      setJobs(
        response.data.map((job) => ({ ...job, key: job._id.toString() }))
      );
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://backend.phiconsulting.org/jobs/${id}`);
      const updatedJobs = jobs.filter((job) => job._id !== id);
      setJobs(updatedJobs);
      message.success("Job deleted successfully");
    } catch (error) {
      console.error("Error deleting job:", error);
      message.error("Error deleting job");
    }
  };

  const handleEdit = (jobId) => {
    navigate(`/dashboard/EditJob/${jobId}`);
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Role Description",
      dataIndex: "role",
      key: "role",
      render: (role) => <p>{role}</p>,
    },
    // Add more columns as needed based on your job data structure
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => handleEdit(record._id)}>
            Edit
          </Button>
          <Button type="link" onClick={() => handleDelete(record._id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Spin spinning={isLoading} delay={300}>
      <Table columns={columns} dataSource={jobs} rowKey="_id" />
    </Spin>
  );
};

export default Jobs;
