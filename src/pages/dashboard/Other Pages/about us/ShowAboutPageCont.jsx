import React, { useEffect, useState } from "react";
import { Table, Button, Space } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For redirection

const ShowAboutPageCont = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from your database
    const fetchData = async () => {
      try {
        // Make sure the endpoint matches your actual API route
        const response = await axios.get(
          "https://backend.phiconsulting.org/aboutuspage"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (aboutuspageId) => {
    // Redirect to edit page with homepageId
    navigate(`/Dashboard/EditAboutPage/${aboutuspageId}`);
  };

  const handleDelete = async (aboutuspageId) => {
    try {
      // Adjust the endpoint to match your API, ensuring correct ID handling
      await axios.delete(
        `https://backend.phiconsulting.org/aboutuspage/${aboutuspageId}`
      );
      // Refresh data to reflect deletion
      setData(data.filter((item) => item._id !== aboutuspageId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const columns = [
    { title: "Hero Heading", dataIndex: "heroheading", key: "heroheading" }, // Corrected dataIndex
    {
      title: "Hero Description",
      dataIndex: "herodescription",
      key: "herodescription",
    }, // Corrected dataIndex

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => handleEdit(record._id)}>Edit</Button>
          <Button onClick={() => handleDelete(record._id)}>Delete</Button>
        </Space>
      ),
    },
  ];
  return <Table columns={columns} dataSource={data} rowKey="_id" />;
};

export default ShowAboutPageCont;
