import React, { useEffect, useState } from 'react';
import { Table, Space, Button, Spin, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Fin = () => {
  const [fintechEntries, setFintechEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFintechEntries();
  }, []);

  const fetchFintechEntries = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/fintech');
      setFintechEntries(response.data.map(entry => ({
        ...entry,
        key: entry._id,
        heading: entry.content.find(item => item.headingType === 'heading')?.headingText || 'No Heading',
        paragraph: entry.content.find(item => item.paragraphType === 'paragraph')?.paragraphText || 'No Paragraph'
      })));
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching fintech entries:', error);
      setIsLoading(false);
    }
  };

  const handleEdit = (fintechId) => {
    navigate(`/dashboard/EditFin/${fintechId}`);
  };

  const handleDelete = async (fintechId) => {
    setIsLoading(true);
    try {
      await axios.delete(`http://localhost:3000/fintech/${fintechId}`);
      message.success('Fintech entry deleted successfully');
      fetchFintechEntries(); // Refresh the list after deletion
    } catch (error) {
      message.error('Error deleting fintech entry');
      console.error('Error deleting fintech entry:', error);
    }
    setIsLoading(false);
  };

  const columns = [
    {
      title: 'Heading',
      dataIndex: 'heading',
      key: 'heading',
    },
    {
      title: 'Paragraph',
      dataIndex: 'paragraph',
      key: 'paragraph',
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

  return (
    <Spin spinning={isLoading} delay={300}>
      <Table columns={columns} dataSource={fintechEntries} rowKey="_id" />
    </Spin>
  );
};

export default Fin;
