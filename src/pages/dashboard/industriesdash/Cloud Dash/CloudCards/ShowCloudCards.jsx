import React, { useEffect, useState } from 'react';
import { Table, Button, message, Space } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ShowCloudCards = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSaasCards();
  }, []);

  const fetchSaasCards = async () => {
    try {
      const response = await axios.get('https://prickle-balanced-archaeopteryx.glitch.me/devops/cloudcards');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching cloudcards data:', error);
      message.error('Failed to fetch data');
    }
  };

  const handleEdit = (cloudcardsId) => {
    navigate(`/Dashboard/EditCloudCards/${cloudcardsId}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://prickle-balanced-archaeopteryx.glitch.me/devops/cloudcards/${id}`);
      message.success('Entry deleted successfully');
      fetchSaasCards(); // Refresh the data
    } catch (error) {
      console.error('Error deleting cloudcards data:', error);
      message.error('Failed to delete data');
    }
  };

  const columns = [
    {
      title: 'Bar Card Description One',
      dataIndex: 'barcarddesone', // Adjust according to your data structure
      key: 'barcarddesone',
    },

    {
        title: 'Bar Card Description Two',
        dataIndex: 'barcarddestwo', // Adjust according to your data structure
        key: 'barcarddestwo',
      },

      {
        title: 'Bar Card Description Three',
        dataIndex: 'barcarddesthree', // Adjust according to your data structure
        key: 'barcarddesthree',
      },
    // Include other columns as needed
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => handleEdit(record._id)}>Edit</Button>
          <Button onClick={() => handleDelete(record._id)}>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <Table columns={columns} dataSource={data} rowKey="_id" />
  );
};

export default ShowCloudCards;
