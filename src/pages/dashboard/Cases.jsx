import React, { useEffect, useState } from 'react';
import { Table, Space, Button, Spin, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/cases');
      setCaseStudies(response.data.map(cs => ({ ...cs, key: cs._id })));
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching case studies:', error);
      setIsLoading(false);
    }
  };

  const handleEdit = (caseId) => {
    navigate(`/dashboard/EditCase/${caseId}`);
  };

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      await axios.delete(`http://localhost:3000/cases/${id}`);
      message.success('Case study deleted successfully');
      fetchCaseStudies(); // Refresh the list after deletion
    } catch (error) {
      message.error('Error deleting case study');
      console.error('Error deleting case study:', error);
    }
    setIsLoading(false);
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Summary',
      dataIndex: 'summary',
      key: 'summary',
    },
    // Additional columns for other properties can be added here
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

  return (
    <Spin spinning={isLoading} delay={300}>
      <Table columns={columns} dataSource={caseStudies} rowKey="_id" />
    </Spin>
  );
};

export default CaseStudies;
