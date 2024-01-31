// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);

  return (
    <div className="sidebar">
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
        <hr />
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
      
    </div>
  );
};

export default Sidebar;
