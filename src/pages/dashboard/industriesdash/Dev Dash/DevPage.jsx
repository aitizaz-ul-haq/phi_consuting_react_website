import React, { useEffect, useState } from 'react';
import { Table, Space, Button, Spin, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DevPage = () => {
  const [fintechEntries, setFintechEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFintechEntries();
  }, []);

  const fetchFintechEntries = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/devops');
      setFintechEntries(response.data.map(entry => ({
        key: entry._id,
        headingText: entry.headingText,
        highlighted: entry.highlighted,
        paragraphText: entry.paragraphText,
      })));
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching fintech entries:', error);
      setIsLoading(false);
    }
  };

  const handleEdit = (devopsId) => {
    navigate(`/dashboard/EditSaas/${devopsId}`);
  };

  const handleDelete = async (devopsId) => {
    setIsLoading(true);
    try {
      await axios.delete(`http://localhost:3000/devops/${devopsId}`);
      message.success('devops entry deleted successfully');
      fetchFintechEntries();
    } catch (error) {
      message.error('Error deleting devops entry');
      console.error('Error deleting devops entry:', error);
    }
    setIsLoading(false);
  };

  const columns = [
    {
      title: 'Heading',
      dataIndex: 'headingText',
      key: 'headingText',
    },
    {
      title: 'Highlighted',
      dataIndex: 'highlighted',
      key: 'highlighted',
    },
    {
      title: 'Paragraph',
      dataIndex: 'paragraphText',
      key: 'paragraphText',
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
      <Table columns={columns} dataSource={fintechEntries} rowKey="key" />
    </Spin>
  );
};

export default DevPage;
