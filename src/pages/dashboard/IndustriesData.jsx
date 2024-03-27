import React, { useEffect, useState } from "react";
import { Card, Row, Col, Spin, Divider, Typography, Statistic } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";
const { Title } = Typography;

const IndustriesData = () => {
  const [loading, setLoading] = useState(true);
  const [industryData, setIndustryData] = useState([]);

  useEffect(() => {
    const fetchIndustryData = async () => {
      setLoading(true);
      const industryApis = [
        { url: "https://backend.phiconsulting.org/iot", name: "IoT" },
        { url: "https://backend.phiconsulting.org/cloud", name: "Cloud" },
        { url: "https://backend.phiconsulting.org/devops", name: "DevOps" },
        { url: "https://backend.phiconsulting.org/iaas", name: "IaaS" },
        { url: "https://backend.phiconsulting.org/saas", name: "SaaS" },
      ];

      const data = await Promise.all(
        industryApis.map(async (api) => {
          const response = await fetch(api.url);
          const result = await response.json();
          return { name: api.name, value: result.length };
        })
      );

      setIndustryData(data);
      setLoading(false);
    };

    fetchIndustryData();
  }, []);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A4DE6C"];

  return (
    <Spin spinning={loading} tip="Loading...">
      <Divider />
      <Title level={3}>Industry Data Comparison</Title>
      <ResponsiveContainer width="95%" height={500}>
        <BarChart
          data={industryData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" name="Total Count" fill="#8884d8">
            {industryData.map((entry, index) => (
              <Cell
                key={`cell-${entry.name}-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Spin>
  );
};

export default IndustriesData;
