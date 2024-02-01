// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);
  const [dropdown5, setDropdown5] = useState(false);
  const [dropdown6, setDropdown6] = useState(false);
  const [dropdown7, setDropdown7] = useState(false);
  const [dropdown8, setDropdown8] = useState(false);
  const [dropdown9, setDropdown9] = useState(false);

  const [dropdown10, setDropdown10] = useState(false);
  const [dropdown11, setDropdown11] = useState(false);
  const [dropdown12, setDropdown12] = useState(false);
  const [dropdown13, setDropdown13] = useState(false);

  return (
    <div className="sidebar">
      <div>
        <h4 className='Dash-Heading'>Posts</h4>
      </div>
      <div>
        <button className='dash-options' onClick={() => setDropdown1(!dropdown1)}>Job Postings</button>
        {dropdown1 && (
          <div className='list-container'>
            <Link className='list-elements-dash' to="/dashboard/Jobs">Jobs</Link>
            <Link className='list-elements-dash' to="/dashboard/AddJobs">Add Jobs</Link>
          </div>
        )}
      </div>
      <div>
        <button className='dash-options' onClick={() => setDropdown2(!dropdown2)}>Blog Postings</button>
        {dropdown2 && (
          <div className='list-container'>
            <Link className='list-elements-dash' to="/dashboard/Blogs">Blogs</Link>
            <Link className='list-elements-dash' to="/dashboard/AddBlogs">Add Blogs</Link>
          </div>
        )}
      </div>
      <div>
        <button className='dash-options' onClick={() => setDropdown3(!dropdown3)}>Case Study Postings</button>
        {dropdown3 && (
          <div className='list-container'>
          <Link className='list-elements-dash' to="/dashboard/Cases">Cases</Link>
          <Link className='list-elements-dash' to="/dashboard/AddCases">Add Cases</Link>
        </div>
        )}
      </div>
      <div>
        <div>
        <h4 className='Dash-Heading'>Industries</h4>
      </div>
      </div>
      <div>
        <button className='dash-options' onClick={() => setDropdown4(!dropdown4)}>Fintech Content</button>
        {dropdown4 && (
          <div className='list-container'>
          <Link className='list-elements-dash' to="/dashboard/fin">Fintech</Link>
          <Link className='list-elements-dash' to="/dashboard/AddFin">Add Content</Link>
          <Link className='list-elements-dash' to="/dashboard/ShowFinInfo">Show Info</Link>
          <Link className='list-elements-dash' to="/dashboard/AddFinInfo">Add Info</Link>
        </div>
        )}
      </div>
      <div>
        <button className='dash-options' onClick={() => setDropdown5(!dropdown5)}>Iot Content</button>
        {dropdown5 && (
          <div className='list-container'>
          <Link className='list-elements-dash' to="/dashboard/iot">Iot</Link>
          <Link className='list-elements-dash' to="/dashboard/AddIot">Add Content</Link>
          <Link className='list-elements-dash' to="/dashboard/ShowIotInfo">Show Info</Link>
          <Link className='list-elements-dash' to="/dashboard/AddIotInfo">Add Info</Link>
        </div>
        )}
      </div>
      <div>
        <button className='dash-options' onClick={() => setDropdown6(!dropdown6)}>SaaS Content</button>
        {dropdown6 && (
          <div className='list-container'>
          <Link className='list-elements-dash' to="/dashboard/saas">SaaS</Link>
          <Link className='list-elements-dash' to="/dashboard/AddSaas">Add Content</Link>
          <Link className='list-elements-dash' to="/dashboard/ShowSaasInfo">Show Info</Link>
          <Link className='list-elements-dash' to="/dashboard/AddSaasInfo">Add Info</Link>
        </div>
        )}
      </div>
      <div>
        <button className='dash-options' onClick={() => setDropdown7(!dropdown7)}>Devops Content</button>
        {dropdown7 && (
          <div className='list-container'>
          <Link className='list-elements-dash' to="/dashboard/dev">DevOps</Link>
          <Link className='list-elements-dash' to="/dashboard/AddDev">Add Content</Link>
          <Link className='list-elements-dash' to="/dashboard/ShowDevInfo">Show Info</Link>
          <Link className='list-elements-dash' to="/dashboard/AddDevInfo">Add Info</Link>
        </div>
        )}
      </div>
      <div>
        <button className='dash-options' onClick={() => setDropdown8(!dropdown8)}>Cloud Content</button>
        {dropdown8 && (
          <div className='list-container'>
          <Link className='list-elements-dash' to="/dashboard/cloud">Cloud</Link>
          <Link className='list-elements-dash' to="/dashboard/AddCloud">Add Content</Link>
          <Link className='list-elements-dash' to="/dashboard/ShowCloudInfo">Show Info</Link>
          <Link className='list-elements-dash' to="/dashboard/AddDevInfo">Add Info</Link>
        </div>
        )}
      </div>
      <div>
        <button className='dash-options' onClick={() => setDropdown9(!dropdown9)}>Iaas Content</button>
        {dropdown9 && (
          <div className='list-container'>
          <Link className='list-elements-dash' to="/dashboard/iaas">IaaS</Link>
          <Link className='list-elements-dash' to="/dashboard/AddIaas">Add Content</Link>
          <Link className='list-elements-dash' to="/dashboard/ShowIaasInfo">Show Info</Link>
          <Link className='list-elements-dash' to="/dashboard/AddIaasInfo">Add Info</Link>
        </div>
        )}
      </div>
      <div>
        <div>
        <h4 className='Dash-Heading'>Solutions</h4>
      </div>
      </div>
      <div>
        <button className='dash-options' onClick={() => setDropdown10(!dropdown10)}>GTM Content</button>
        {dropdown10 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddGTM">Add GTM</Link>
            <Link className='list-elements-dash' to="/dashboard/gtm">Show Info</Link>
           
        </div>
        )}
      </div>
      <div>
        <button className='dash-options' onClick={() => setDropdown11(!dropdown11)}>HR & Recruitment Content</button>
        {dropdown11 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddHR">Add HR</Link>
            <Link className='list-elements-dash' to="/dashboard/hr">Show Info</Link>
           
        </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
