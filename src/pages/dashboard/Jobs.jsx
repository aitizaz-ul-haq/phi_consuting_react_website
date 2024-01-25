import React from 'react';
import { Table, Space } from 'antd';

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: 'Content',
    dataIndex: 'content',
    key: 'content',
    render: (content) => (
      <>
        {content.map((item, index) => (
          <p key={index}>
            <strong>{item.type === 'subheading' ? item.text : ''}</strong>
            {item.type === 'paragraph' ? item.text : ''}
          </p>
        ))}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    title: "Outbound Account Executive",
    role: "As an Outbound Account Executive, you will have the opportunity to work with Phis largest line of revenue. We are looking For sales professionals who are competitive, driven, strong communicators, and consistently practice refining their skill set. You should be humble, coachable, and relentless toward hitting your goals and targets.",
    content: [
      {"type": "subheading", "text": "About Us"},
      {"type": "paragraph", "text": "Phi Consulting constructs innovation involving the most recent progressions in Information Technology..."},
      // ... more content
    ]
  },
  // ... more data
];

const Jobs = () => <Table columns={columns} dataSource={data} />;

export default Jobs;
