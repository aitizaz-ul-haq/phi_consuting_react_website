import React, { useEffect, useState } from 'react';
import { Table, Space, Button, Spin, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ShowDevInfo = () => {

    const [infoEntries, setInfoEntries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      fetchInfoEntries();
    }, []);
  
    const fetchInfoEntries = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('http://localhost:3000/saasinfo');
        const formattedData = response.data.map(entry => ({
          key: entry._id,
          ...entry.sections.reduce((acc, section, index) => {
            acc[`section${index + 1}`] = `${section.title}: ${section.paragraph}`;
            return acc;
          }, {})
        }));
        setInfoEntries(formattedData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching info entries:', error);
        setIsLoading(false);
      }
    };
  
    const handleEdit = (saasinfoId) => {
      navigate(`/dashboard/EditsaasInfo/${saasinfoId}`); 
    };          
  
    const handleDelete = async (saasinfoId) => {
      setIsLoading(true);
      try {
        await axios.delete(`http://localhost:3000/saasinfo/${saasinfoId}`);
        message.success('Info entry deleted successfully');
        fetchInfoEntries();
      } catch (error) {
        message.error('Error deleting info entry');
        console.error('Error deleting info entry:', error);
      }
      setIsLoading(false);
    };
  
    // Columns setup
    const columns = [...Array(4)].map((_, index) => ({
      title: `Section ${index + 1}`,
      dataIndex: `section${index + 1}`,
      key: `section${index + 1}`,
    })).concat([{
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => handleEdit(record.key)}>Edit</Button>
          <Button type="link" onClick={() => handleDelete(record.key)}>Delete</Button>
        </Space>
      ),
    }]);
    return(
        <Spin spinning={isLoading} delay={300}>
      <Table columns={columns} dataSource={infoEntries} rowKey="key" />
    </Spin>
    );
}

export default ShowDevInfo;