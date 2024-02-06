import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Spin, Divider, Typography, Statistic } from 'antd';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import IndustriesData from './IndustriesData';
const { Title } = Typography;

const DashPage = () => {
    const [blogsCount, setBlogsCount] = useState(0);
    const [jobsCount, setJobsCount] = useState(0);
    const [caseStudiesCount, setCaseStudiesCount] = useState(0);
    const [industryData, setIndustryData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Define industry names based on the provided API endpoints
    const industryNames = ['IoT', 'Cloud', 'DevOps', 'IaaS', 'SaaS'];

    // Define a color palette
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A4DE6C'];
    const data = [
        { name: 'Blogs', count: blogsCount },
        { name: 'Jobs', count: jobsCount },
        { name: 'Case Studies', count: caseStudiesCount },
    ];

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const blogsResponse = await fetch('https://prickle-balanced-archaeopteryx.glitch.me/blogs');
                const blogsData = await blogsResponse.json();
                setBlogsCount(blogsData.length);

                const jobsResponse = await fetch('https://prickle-balanced-archaeopteryx.glitch.me/jobs');
                const jobsData = await jobsResponse.json();
                setJobsCount(jobsData.length);

                const caseStudiesResponse = await fetch('https://prickle-balanced-archaeopteryx.glitch.me/cases');
                const caseStudiesData = await caseStudiesResponse.json();
                setCaseStudiesCount(caseStudiesData.length);

                // Fetch industry data
                const industryApis = [
                    'https://prickle-balanced-archaeopteryx.glitch.me/iot',
                    'https://prickle-balanced-archaeopteryx.glitch.me/cloud',
                    'https://prickle-balanced-archaeopteryx.glitch.me/devops',
                    'https://prickle-balanced-archaeopteryx.glitch.me/iaas',
                    'https://prickle-balanced-archaeopteryx.glitch.me/saas',
                ];
                const industryPromises = industryApis.map(api => fetch(api).then(res => res.json()));
                const industryResults = await Promise.all(industryPromises);
                const industries = industryResults.map((data, index) => ({
                    name: industryNames[index],
                    value: data.length,
                }));
                setIndustryData(industries);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
        <Title level={3}>Posts</Title>
            <Spin spinning={loading} tip="Loading...">
                <Row gutter={16}>
                    <Col span={8}>
                        <Card bordered={false} style={{ background: '#f0f2f5' }}>
                            <Statistic title="Blogs" value={blogsCount} valueStyle={{ color: COLORS[0] }} />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card bordered={false} style={{ background: '#f0f2f5' }}>
                            <Statistic title="Jobs" value={jobsCount} valueStyle={{ color: COLORS[1] }} />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card bordered={false} style={{ background: '#f0f2f5' }}>
                            <Statistic title="Case Studies" value={caseStudiesCount} valueStyle={{ color: COLORS[2] }} />
                        </Card>
                    </Col>
                </Row>
                <Row style={{ marginTop: 20 }}>
                    <Col span={12}>
                        <BarChart width={730} height={250} data={data}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="count" fill="#8884d8" />
                        </BarChart>
                    </Col>
                    <Col span={12}>
                        <PieChart width={400} height={250}>
                            <Pie data={data} cx={200} cy={125} outerRadius={100} fill="#8884d8" dataKey="count" label>
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </Col>
                </Row>
                <Divider />
                
            </Spin>
            <IndustriesData/>
        </>
    );
};

export default DashPage;
