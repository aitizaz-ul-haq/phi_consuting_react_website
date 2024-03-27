import React, { useState, useEffect } from "react";
import { Table, Button, Popconfirm, message } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ShowCloudBan = () => {
  const [saasBanData, setSaasBanData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSaasBanData = async () => {
      try {
        const response = await axios.get(
          "https://backend.phiconsulting.org/cloudban"
        );
        setSaasBanData(response.data);
      } catch (error) {
        console.error("Failed to fetch cloudban data:", error);
        message.error("Failed to fetch data");
      }
    };

    fetchSaasBanData();
  }, []);

  const handleEdit = (cloudbanId) => {
    navigate(`/dashboard/Editcl/${cloudbanId}`);
  };

  const handleDelete = async (cloudbanId) => {
    try {
      await axios.delete(
        `https://backend.phiconsulting.org/cloudban/${cloudbanId}`
      );
      setSaasBanData(saasBanData.filter((item) => item._id !== cloudbanId));
      message.success("Record deleted successfully");
    } catch (error) {
      console.error("Failed to delete cloudban data:", error);
      message.error("Failed to delete record");
    }
  };

  const columns = [
    {
      title: "Heading",
      dataIndex: "heading",
      key: "heading",
    },
    {
      title: "Description",
      dataIndex: "bannerDescription",
      key: "bannerDescription",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <span>
          <Button onClick={() => handleEdit(record._id)} type="link">
            Edit
          </Button>
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record._id)}
          >
            <Button type="link">Delete</Button>
          </Popconfirm>
        </span>
      ),
    },
  ];

  return <Table columns={columns} dataSource={saasBanData} rowKey="_id" />;
};

export default ShowCloudBan;
