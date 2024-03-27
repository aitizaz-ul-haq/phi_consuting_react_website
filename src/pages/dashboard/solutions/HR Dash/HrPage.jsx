import React, { useEffect, useState } from "react";
import { Table, Space, Button, Spin, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HrPage = () => {
  const [cloudEntries, setCloudEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCloudEntries();
  }, []);

  const fetchCloudEntries = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://backend.phiconsulting.org/hrpage"
      );
      setCloudEntries(
        response.data.map((entry) => ({
          key: entry._id,
          bannerHeading: entry.bannerHeading,
          bannerDescription: entry.bannerDescription,
          featuresMainHeading: entry.featuresMainHeading,
          featuresMainDescription: entry.featuresMainDescription,
          featuresHeadingOne: entry.featuresHeadingOne,
          featuresDescriptionOne: entry.featuresDescriptionOne,
        }))
      );
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching hrpage entries:", error);
      setIsLoading(false);
    }
  };

  const handleEdit = (hrpageId) => {
    navigate(`/dashboard/EditHr/${hrpageId}`);
  };

  const handleDelete = async (hrpageId) => {
    setIsLoading(true);
    try {
      await axios.delete(
        `https://backend.phiconsulting.org/hrpage/${hrpageId}`
      );
      message.success("hrpage entry deleted successfully");
      fetchCloudEntries();
    } catch (error) {
      message.error("Error deleting hrpage entry");
      console.error("Error deleting hrpage entry:", error);
    }
    setIsLoading(false);
  };

  const columns = [
    {
      title: "Banner Heading",
      dataIndex: "bannerHeading",
      key: "bannerHeading",
    },
    {
      title: "Banner Description",
      dataIndex: "bannerDescription",
      key: "bannerDescription",
    },
    {
      title: "Features Main Heading",
      dataIndex: "featuresMainHeading",
      key: "featuresMainHeading",
    },
    {
      title: "Features Main Description",
      dataIndex: "featuresMainDescription",
      key: "featuresMainDescription",
    },
    {
      title: "Features Heading One",
      dataIndex: "featuresHeadingOne",
      key: "featuresHeadingOne",
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
      <Table columns={columns} dataSource={cloudEntries} rowKey="key" />
    </Spin>
  );
};

export default HrPage;
