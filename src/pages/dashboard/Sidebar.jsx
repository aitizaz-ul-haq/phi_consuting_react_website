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

  const [dropdown14, setDropdown14] = useState(false);
  const [dropdown15, setDropdown15] = useState(false);
  const [dropdown16, setDropdown16] = useState(false);
  const [dropdown17, setDropdown17] = useState(false);
  const [dropdown18, setDropdown18] = useState(false);
  const [dropdown19, setDropdown19] = useState(false);

  return (
    <div className="sidebar">
       <div>
      <button className='dash-options-butt'> <Link className='list-elements-dash' to="/dashboard/ShowDash">Dashboard</Link></button>
      </div>
      <div>
        <h4 className='Dash-Heading'>Posts</h4>
      </div>
     
      <div>
        <button className='dash-options' onClick={() => setDropdown1(!dropdown1)}>Jobs</button>
        {dropdown1 && (
          <div className='list-container'>
            <Link className='list-elements-dash' to="/dashboard/Jobs">Jobs</Link>
            <Link className='list-elements-dash' to="/dashboard/AddJobs">Add Jobs</Link>
          </div>
        )}
      </div>
      <div>
        <button className='dash-options' onClick={() => setDropdown2(!dropdown2)}>Blogs</button>
        {dropdown2 && (
          <div className='list-container'>
            <Link className='list-elements-dash' to="/dashboard/Blogs">Blogs</Link>
            <Link className='list-elements-dash' to="/dashboard/AddBlogs">Add Blogs</Link>
          </div>
        )}
      </div>
      <div>
        <button className='dash-options' onClick={() => setDropdown3(!dropdown3)}>Case Studies</button>
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
        <button className='dash-options' onClick={() => setDropdown4(!dropdown4)}>Fintech</button>
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
        <button className='dash-options' onClick={() => setDropdown5(!dropdown5)}>Iot</button>
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
        <button className='dash-options' onClick={() => setDropdown6(!dropdown6)}>SaaS</button>
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
        <button className='dash-options' onClick={() => setDropdown7(!dropdown7)}>Devops</button>
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
        <button className='dash-options' onClick={() => setDropdown8(!dropdown8)}>Cloud</button>
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
        <button className='dash-options' onClick={() => setDropdown9(!dropdown9)}>Iaas</button>
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
        <button className='dash-options' onClick={() => setDropdown10(!dropdown10)}>GTM</button>
        {dropdown10 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddGTM">Add GTM</Link>
            <Link className='list-elements-dash' to="/dashboard/gtm">Show Info</Link>
           
        </div>
        )}
      </div>
      <div>
        <button className='dash-options' onClick={() => setDropdown11(!dropdown11)}>HR & Recruitment</button>
        {dropdown11 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddHR">Add HR</Link>
            <Link className='list-elements-dash' to="/dashboard/hr">Show Info</Link>
           
        </div>
        )}
      </div>
      <div>
        <button className='dash-options' onClick={() => setDropdown12(!dropdown12)}>Investor Relations</button>
        {dropdown12 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddInv">Add Investor</Link>
            <Link className='list-elements-dash' to="/dashboard/inv">Show Info</Link>
           
        </div>
        )}
      </div>
      <div>
        <button className='dash-options' onClick={() => setDropdown13(!dropdown13)}>Financial</button>
        {dropdown13 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddFinc">Add Financial</Link>
            <Link className='list-elements-dash' to="/dashboard/fint">Show Info</Link>
           
        </div>
        )}
      </div>
      <div>
        <div>
        <h4 className='Dash-Heading'>Banners</h4>
      </div>
      </div>
      <div>
        <button className='dash-options' onClick={() => setDropdown14(!dropdown14)}>SaaS</button>
        {dropdown14 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddSaasBan">Add Saas Banner</Link>
            <Link className='list-elements-dash' to="/dashboard/ShowSaasBan">Show Banner Info</Link>
        </div>
        )}
      </div>

      <div>
        <button className='dash-options' onClick={() => setDropdown15(!dropdown15)}>IaaS</button>
        {dropdown15 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddIaasBan">Add Iaas Banner</Link>
            <Link className='list-elements-dash' to="/dashboard/ShowIaasBan">Show Banner Info</Link>
        </div>
        )}
      </div>
      <div>
        <button className='dash-options' onClick={() => setDropdown16(!dropdown16)}>IoT</button>
        {dropdown16 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddIotBan">Add IoT Banner</Link>
            <Link className='list-elements-dash' to="/dashboard/ShowIotBan">Show Banner Info</Link>
        </div>
        )}
      </div>
      <div>
        <button className='dash-options' onClick={() => setDropdown17(!dropdown17)}>Fintech</button>
        {dropdown17 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddFintBan">Add Fintech Banner</Link>
            <Link className='list-elements-dash' to="/dashboard/ShowFintBan">Show Banner Info</Link>
        </div>
        )}
      </div>
      <div>
        <button className='dash-options' onClick={() => setDropdown18(!dropdown18)}>Devops</button>
        {dropdown18 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddDevBan">Add Devops Banner</Link>
            <Link className='list-elements-dash' to="/dashboard/ShowDevBan">Show Banner Info</Link>
        </div>
        )}
      </div>
      <div>
        <button className='dash-options' onClick={() => setDropdown19(!dropdown19)}>Cloud</button>
        {dropdown19 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddCloudBan">Add Cloud Banner</Link>
            <Link className='list-elements-dash' to="/dashboard/ShowCloudBan">Show Banner Info</Link>
        </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
