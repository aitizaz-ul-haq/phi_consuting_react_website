import React, { useEffect, useState } from 'react';
import { Table, Space, Button, Spin, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GtnPage = () => {
  const [cloudEntries, setCloudEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCloudEntries();
  }, []);

  const fetchCloudEntries = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/gtmpage');
      setCloudEntries(response.data.map(entry => ({
        key: entry._id,
        bannerHeading: entry.bannerHeading,
        bannerDescription: entry.bannerDescription,
        featuresMainHeading: entry.featuresMainHeading,
        featuresMainDescription: entry.featuresMainDescription,
        featuresHeadingOne: entry.featuresHeadingOne,
        featuresDescriptionOne: entry.featuresDescriptionOne,
      })));
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching cloud entries:', error);
      setIsLoading(false);
    }
  };

  const handleEdit = (cloudId) => {
    navigate(`/dashboard/EditCloud/${cloudId}`);
  };

  const handleDelete = async (cloudId) => {
    setIsLoading(true);
    try {
      await axios.delete(`http://localhost:3000/cloud/${cloudId}`);
      message.success('Cloud entry deleted successfully');
      fetchCloudEntries();
    } catch (error) {
      message.error('Error deleting cloud entry');
      console.error('Error deleting cloud entry:', error);
    }
    setIsLoading(false);
  };

  const columns = [
    {
      title: 'Banner Heading',
      dataIndex: 'bannerHeading',
      key: 'bannerHeading',
    },
    {
      title: 'Banner Description',
      dataIndex: 'bannerDescription',
      key: 'bannerDescription',
    },
    {
      title: 'Features Main Heading',
      dataIndex: 'featuresMainHeading',
      key: 'featuresMainHeading',
    },
    {
      title: 'Features Main Description',
      dataIndex: 'featuresMainDescription',
      key: 'featuresMainDescription',
    },
    {
      title: 'Features Heading One',
      dataIndex: 'featuresHeadingOne',
      key: 'featuresHeadingOne',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => handleEdit(record.key)}>Edit</Button>
          <Button type="link" onClick={() => handleDelete(record.key)}>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <Spin spinning={isLoading} delay={300}>
      <Table columns={columns} dataSource={cloudEntries} rowKey="key" />
    </Spin>
  );
};

export default GtnPage;
