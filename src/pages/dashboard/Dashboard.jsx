// Dashboard.js
import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import DashFooter from './common/DashFooter';
import DashHeader from './common/DashHeader';
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <DashHeader />
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard-content">
          <Outlet /> {/* This will render the selected page */}
        </div>
      </div>
      <DashFooter />
    </div>
  );
};

export default Dashboard;
