import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const ShowSaasBan = () => {
    const [saasBanData, setSaasBanData] = useState([]);

    useEffect(() => {
        const fetchSaasBanData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/saasban'); // Adjust the URL to match your API endpoint
                setSaasBanData(response.data);
            } catch (error) {
                console.error('Failed to fetch SaasBan data:', error);
            }
        };

        fetchSaasBanData();
    }, []);

    const columns = [
        {
            title: 'Heading',
            dataIndex: 'heading', // This should match the data property from your saasban objects
            key: 'heading',
        },
        {
            title: 'Description',
            dataIndex: 'bannerDescription', // Adjust if your saasban objects use a different property name
            key: 'bannerDescription',
        },
    ];

    return (
        <Table columns={columns} dataSource={saasBanData} rowKey="_id" />
    );
}

export default ShowSaasBan;
