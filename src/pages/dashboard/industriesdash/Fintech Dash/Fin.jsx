import React, { useEffect, useState } from "react";
import { Table, Space, Button, Spin, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      const response = await axios.get(
        "https://backend.phiconsulting.org/fintech"
      );
      setFintechEntries(
        response.data.map((entry) => ({
          key: entry._id,
          headingText: entry.headingText,
          highlighted: entry.highlighted,
          paragraphText: entry.paragraphText,
        }))
      );
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching fintech entries:", error);
      setIsLoading(false);
    }
  };

  const handleEdit = (fintechId) => {
    navigate(`/dashboard/EditFin/${fintechId}`);
  };

  const handleDelete = async (fintechId) => {
    setIsLoading(true);
    try {
      await axios.delete(
        `https://backend.phiconsulting.org/fintech/${fintechId}`
      );
      message.success("Fintech entry deleted successfully");
      fetchFintechEntries();
    } catch (error) {
      message.error("Error deleting fintech entry");
      console.error("Error deleting fintech entry:", error);
    }
    setIsLoading(false);
  };

  const columns = [
    {
      title: "Heading",
      dataIndex: "headingText",
      key: "headingText",
    },
    {
      title: "Highlighted",
      dataIndex: "highlighted",
      key: "highlighted",
    },
    {
      title: "Paragraph",
      dataIndex: "paragraphText",
      key: "paragraphText",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => handleEdit(record.key)}>
            Edit
          </Button>
          <Button type="link" onClick={() => handleDelete(record.key)}>
            Delete
          </Button>
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

export default Fin;
