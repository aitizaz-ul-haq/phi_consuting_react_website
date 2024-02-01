import React, { useEffect, useState } from 'react';
import { Table, Space, Button, Spin, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const InvPage = () => {
  const [cloudEntries, setCloudEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCloudEntries();
  }, []);

  const fetchCloudEntries = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/invpage');
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
      console.error('Error fetching invpage entries:', error);
      setIsLoading(false);
    }
  };

  const handleEdit = (invId) => {
    navigate(`/dashboard/EditInv/${invId}`);
  };

  const handleDelete = async (invId) => {
    setIsLoading(true);
    try {
      await axios.delete(`http://localhost:3000/invpage/${invId}`);
      message.success('invpage entry deleted successfully');
      fetchCloudEntries();
    } catch (error) {
      message.error('Error deleting invpage entry');
      console.error('Error deleting invpage entry:', error);
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

export default InvPage;
