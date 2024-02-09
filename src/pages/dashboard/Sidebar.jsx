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

  const [dropdown20, setDropdown20] = useState(false);
  const [dropdown21, setDropdown21] = useState(false);
  const [dropdown22, setDropdown22] = useState(false);
  const [dropdown23, setDropdown23] = useState(false);
  const [dropdown24, setDropdown24] = useState(false);

  const [postsDropdown, setPostsDropdown] = useState(false);
  const [industriesDropdown, setIndustriesDropdown] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);
  const [bannersDropdown, setBannersDropdown] = useState(false);
  const [otherPagesDropdown, setOtherPagesDropdown] = useState(false);

  return (
    <div className="sidebar">
       <div>
      <button className='dash-options-butt'> <Link className='list-elements-dash' to="/dashboard/ShowDash">Dashboard</Link></button>
      </div>

      <div >
        <button className='dash-options' onClick={() => setPostsDropdown(!postsDropdown)}>Posts</button>
        {postsDropdown && (
          <div className='dash-pane'>
            <div className='listed-options'>
              <button className='dash-options' onClick={() => setDropdown1(!dropdown1)}>Jobs</button>
              {dropdown1 && (
                <div className='list-container'>
                  <Link className='list-elements-dash' to="/dashboard/Jobs">Jobs</Link>
                  <Link className='list-elements-dash' to="/dashboard/AddJobs">Add Jobs</Link>
                </div>
              )}
            </div>
            <div className='listed-options'>
        <button className='dash-options' onClick={() => setDropdown2(!dropdown2)}>Blogs</button>
        {dropdown2 && (
          <div className='list-container'>
            <Link className='list-elements-dash' to="/dashboard/Blogs">Blogs</Link>
            <Link className='list-elements-dash' to="/dashboard/AddBlogs">Add Blogs</Link>
          </div>
        )}
      </div>
      <div className='listed-options'>
        <button className='dash-options' onClick={() => setDropdown3(!dropdown3)}>Case Studies</button>
        {dropdown3 && (
          <div className='list-container'>
          <Link className='list-elements-dash' to="/dashboard/Cases">Cases</Link>
          <Link className='list-elements-dash' to="/dashboard/AddCases">Add Cases</Link>
        </div>
        )}
      </div>
          </div>
        )}
      </div>


      <div>
        <button className='dash-options' onClick={() => setIndustriesDropdown(!industriesDropdown)}>Industries</button>
        {industriesDropdown && (
          <div className='dash-pane'>
          <div className='listed-options'>
        <button className='dash-options' onClick={() => setDropdown4(!dropdown4)}>Fintech</button>
        {dropdown4 && (
          <div className='list-container'>
          <Link className='list-elements-dash' to="/dashboard/fin">Fintech</Link>
          <Link className='list-elements-dash' to="/dashboard/AddFin">Add Content</Link>
          <Link className='list-elements-dash' to="/dashboard/ShowFinInfo">Show Info</Link>
          <Link className='list-elements-dash' to="/dashboard/AddFinInfo">Add Info</Link>
          <Link className='list-elements-dash' to="/dashboard/AddFinCards">Add Cards Info</Link>
          <Link className='list-elements-dash' to="/dashboard/ShowFinCards">Show Cards Info</Link>
         
        </div>
        )}
      </div>
      <div className='listed-options'>
        <button className='dash-options' onClick={() => setDropdown5(!dropdown5)}>Iot</button>
        {dropdown5 && (
          <div className='list-container'>
          <Link className='list-elements-dash' to="/dashboard/iot">Iot</Link>
          <Link className='list-elements-dash' to="/dashboard/AddIot">Add Content</Link>
          <Link className='list-elements-dash' to="/dashboard/ShowIotInfo">Show Info</Link>
          <Link className='list-elements-dash' to="/dashboard/AddIotInfo">Add Info</Link>
          <Link className='list-elements-dash' to="/dashboard/AddIotCards">Add Cards Info</Link>
          <Link className='list-elements-dash' to="/dashboard/ShowIotCards">Show Cards Info</Link>
        </div>
        )}
      </div>
      <div className='listed-options'>
        <button className='dash-options' onClick={() => setDropdown6(!dropdown6)}>SaaS</button>
        {dropdown6 && (
          <div className='list-container'>
          <Link className='list-elements-dash' to="/dashboard/saas">SaaS</Link>
          <Link className='list-elements-dash' to="/dashboard/AddSaas">Add Content</Link>
          <Link className='list-elements-dash' to="/dashboard/ShowSaasInfo">Show Info</Link>
          <Link className='list-elements-dash' to="/dashboard/AddSaasInfo">Add Info</Link>
          <Link className='list-elements-dash' to="/dashboard/AddSaasCards">Add Cards Info</Link>
          <Link className='list-elements-dash' to="/dashboard/ShowSaasCards">Show Cards Info</Link>
        </div>
        )}
      </div>
      <div className='listed-options'>
        <button className='dash-options' onClick={() => setDropdown7(!dropdown7)}>Devops</button>
        {dropdown7 && (
          <div className='list-container'>
          <Link className='list-elements-dash' to="/dashboard/dev">DevOps</Link>
          <Link className='list-elements-dash' to="/dashboard/AddDev">Add Content</Link>
          <Link className='list-elements-dash' to="/dashboard/ShowDevInfo">Show Info</Link>
          <Link className='list-elements-dash' to="/dashboard/AddDevInfo">Add Info</Link>
          <Link className='list-elements-dash' to="/dashboard/AddDevCards">Add Cards Info</Link>
          <Link className='list-elements-dash' to="/dashboard/ShowDevCards">Show Cards Info</Link>
        </div>
        )}
      </div>
      <div className='listed-options'>
        <button className='dash-options' onClick={() => setDropdown8(!dropdown8)}>Cloud</button>
        {dropdown8 && (
          <div className='list-container'>
          <Link className='list-elements-dash' to="/dashboard/cloud">Cloud</Link>
          <Link className='list-elements-dash' to="/dashboard/AddCloud">Add Content</Link>
          <Link className='list-elements-dash' to="/dashboard/ShowCloudInfo">Show Info</Link>
          <Link className='list-elements-dash' to="/dashboard/AddCloudInfo">Add Info</Link>
          <Link className='list-elements-dash' to="/dashboard/AddCloudCards">Add Cards Info</Link>
          <Link className='list-elements-dash' to="/dashboard/ShowCloudCards">Show Cards Info</Link>
        </div>
        )}
      </div>
      <div className='listed-options'>
        <button className='dash-options' onClick={() => setDropdown9(!dropdown9)}>Iaas</button>
        {dropdown9 && (
          <div className='list-container'>
          <Link className='list-elements-dash' to="/dashboard/iaas">IaaS</Link>
          <Link className='list-elements-dash' to="/dashboard/AddIaas">Add Content</Link>
          <Link className='list-elements-dash' to="/dashboard/ShowIaasInfo">Show Info</Link>
          <Link className='list-elements-dash' to="/dashboard/AddIaasInfo">Add Info</Link>
          <Link className='list-elements-dash' to="/dashboard/AddIaasCards">Add Cards Info</Link>
          <Link className='list-elements-dash' to="/dashboard/ShowIaasCards">Show Cards Info</Link>
        </div>
        )}
      </div>
      <div>
      </div>
          </div>
        )}
      </div>

      <div>
        <button className='dash-options' onClick={() => setSolutionsDropdown(!solutionsDropdown)}>Solutions</button>
        {solutionsDropdown && (
          <div className='dash-pane'>
         <div className='listed-options'>
        <button className='dash-options' onClick={() => setDropdown10(!dropdown10)}>GTM</button>
        {dropdown10 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddGTM">Add GTM</Link>
            <Link className='list-elements-dash' to="/dashboard/gtm">Show Info</Link>
           
        </div>
        )}
      </div>
      <div className='listed-options'>
        <button className='dash-options' onClick={() => setDropdown11(!dropdown11)}>HR & Recruitment</button>
        {dropdown11 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddHR">Add HR</Link>
            <Link className='list-elements-dash' to="/dashboard/hr">Show Info</Link>
           
        </div>
        )}
      </div>
      <div className='listed-options'>
        <button className='dash-options' onClick={() => setDropdown12(!dropdown12)}>Investor Relations</button>
        {dropdown12 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddInv">Add Investor</Link>
            <Link className='list-elements-dash' to="/dashboard/inv">Show Info</Link>
           
        </div>
        )}
      </div>
      <div className='listed-options'>
        <button className='dash-options' onClick={() => setDropdown13(!dropdown13)}>Financial</button>
        {dropdown13 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddFinc">Add Financial</Link>
            <Link className='list-elements-dash' to="/dashboard/fint">Show Info</Link>
           
        </div>
        )}
      </div>
          </div>
        )}
      </div>


  <div>
        <button className='dash-options' onClick={() => setOtherPagesDropdown(!otherPagesDropdown)}>Other Pages</button>
        {otherPagesDropdown && (
          <div className='dash-pane'>
        <div className='listed-options'>
        <button className='dash-options' onClick={() => setDropdown20(!dropdown20)}>Home Page</button>
        {dropdown20 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddHomePage">Add Home Page Content</Link>
            <Link className='list-elements-dash' to="/dashboard/ShowHomePage">Show Home Page Content</Link>
        </div>
        )}
      </div>
      <div className='listed-options'>
        <button className='dash-options' onClick={() => setDropdown21(!dropdown21)}>Service Page</button>
        {dropdown21 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddServicePage">Add Service Page Content</Link>
            <Link className='list-elements-dash' to="/dashboard/ShowServicePage">Show Service Page Content</Link>
        </div>
        )}
      </div>
      <div className='listed-options'>
        <button className='dash-options' onClick={() => setDropdown22(!dropdown22)}>Careers Page</button>
        {dropdown22 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddCareerPage">Add Careers Page Content</Link>
            <Link className='list-elements-dash' to="/dashboard/ShowCareerPage">Show Careers Page Content</Link>
        </div>
        )}
      </div>
      <div className='listed-options'>
        <button className='dash-options' onClick={() => setDropdown23(!dropdown23)}>About Us Page</button>
        {dropdown23 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddAboutPage">Add About Us Page Content</Link>
            <Link className='list-elements-dash' to="/dashboard/ShowAboutPage">Show About Us Page Content</Link>
        </div>
        )}
      </div>
      <div className='listed-options'>
        <button className='dash-options' onClick={() => setDropdown24(!dropdown24)}>Value Creation Page</button>
        {dropdown24 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddValuecPage">Add Value Page Content</Link>
            <Link className='list-elements-dash' to="/dashboard/ShowSValuecPage">Show Value Page Content</Link>
        </div>
        )}
      </div>
          </div>
        )}
      </div>




      <div>
        <button className='dash-options' onClick={() => setBannersDropdown(!bannersDropdown)}>Banners</button>
        {bannersDropdown && (
         <div className='dash-pane'>
         <div className='listed-options'>
        <button className='dash-options' onClick={() => setDropdown14(!dropdown14)}>SaaS</button>
        {dropdown14 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddSaasBan">Add Saas Banner</Link>
            <Link className='list-elements-dash' to="/dashboard/ShowSaasBan">Show Banner Info</Link>
        </div>
        )}
      </div>

      <div className='listed-options'>
        <button className='dash-options' onClick={() => setDropdown15(!dropdown15)}>IaaS</button>
        {dropdown15 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddIaasBan">Add Iaas Banner</Link>
            <Link className='list-elements-dash' to="/dashboard/ShowIaasBan">Show Banner Info</Link>
        </div>
        )}
      </div>
      <div className='listed-options'>
        <button className='dash-options' onClick={() => setDropdown16(!dropdown16)}>IoT</button>
        {dropdown16 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddIotBan">Add IoT Banner</Link>
            <Link className='list-elements-dash' to="/dashboard/ShowIotBan">Show Banner Info</Link>
        </div>
        )}
      </div>
      <div className='listed-options'>
        <button className='dash-options' onClick={() => setDropdown17(!dropdown17)}>Fintech</button>
        {dropdown17 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddFintBan">Add Fintech Banner</Link>
            <Link className='list-elements-dash' to="/dashboard/ShowFintBan">Show Banner Info</Link>
        </div>
        )}
      </div>
      <div className='listed-options'>
        <button className='dash-options' onClick={() => setDropdown18(!dropdown18)}>Devops</button>
        {dropdown18 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddDevBan">Add Devops Banner</Link>
            <Link className='list-elements-dash' to="/dashboard/ShowDevBan">Show Banner Info</Link>
        </div>
        )}
      </div>
      <div className='listed-options'>
        <button className='dash-options' onClick={() => setDropdown19(!dropdown19)}>Cloud</button>
        {dropdown19 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddCloudBan">Add Cloud Banner</Link>
            <Link className='list-elements-dash' to="/dashboard/ShowCloudBan">Show Banner Info</Link>
        </div>
        )}
      </div>
          </div>
        )}
      </div>





      {/* <div>
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
      </div> */}
      {/* <div>
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
          <Link className='list-elements-dash' to="/dashboard/AddFinCards">Add Cards Info</Link>
          <Link className='list-elements-dash' to="/dashboard/ShowFinCards">Show Cards Info</Link>
         
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
          <Link className='list-elements-dash' to="/dashboard/AddIotCards">Add Cards Info</Link>
          <Link className='list-elements-dash' to="/dashboard/ShowIotCards">Show Cards Info</Link>
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
          <Link className='list-elements-dash' to="/dashboard/AddSaasCards">Add Cards Info</Link>
          <Link className='list-elements-dash' to="/dashboard/ShowSaasCards">Show Cards Info</Link>
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
          <Link className='list-elements-dash' to="/dashboard/AddDevCards">Add Cards Info</Link>
          <Link className='list-elements-dash' to="/dashboard/ShowDevCards">Show Cards Info</Link>
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
          <Link className='list-elements-dash' to="/dashboard/AddCloudInfo">Add Info</Link>
          <Link className='list-elements-dash' to="/dashboard/AddCloudCards">Add Cards Info</Link>
          <Link className='list-elements-dash' to="/dashboard/ShowCloudCards">Show Cards Info</Link>
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
          <Link className='list-elements-dash' to="/dashboard/AddIaasCards">Add Cards Info</Link>
          <Link className='list-elements-dash' to="/dashboard/ShowIaasCards">Show Cards Info</Link>
        </div>
        )}
      </div> */}
      {/* <div>
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
      </div> */}
      {/* <div>
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
      </div> */}
      {/* <div>
        <div>
        <h4 className='Dash-Heading'>Other Pages</h4>
      </div>
      </div>
      <div>
        <button className='dash-options' onClick={() => setDropdown20(!dropdown20)}>Home Page</button>
        {dropdown20 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddHomePage">Add Home Page Content</Link>
            <Link className='list-elements-dash' to="/dashboard/ShowHomePage">Show Home Page Content</Link>
        </div>
        )}
      </div>
      <div>
        <button className='dash-options' onClick={() => setDropdown21(!dropdown21)}>Service Page</button>
        {dropdown21 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddServicePage">Add Service Page Content</Link>
            <Link className='list-elements-dash' to="/dashboard/ShowServicePage">Show Service Page Content</Link>
        </div>
        )}
      </div>
      <div>
        <button className='dash-options' onClick={() => setDropdown22(!dropdown22)}>Careers Page</button>
        {dropdown22 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddCareerPage">Add Careers Page Content</Link>
            <Link className='list-elements-dash' to="/dashboard/ShowCareerPage">Show Careers Page Content</Link>
        </div>
        )}
      </div>
      <div>
        <button className='dash-options' onClick={() => setDropdown23(!dropdown23)}>About Us Page</button>
        {dropdown23 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddAboutPage">Add About Us Page Content</Link>
            <Link className='list-elements-dash' to="/dashboard/ShowAboutPage">Show About Us Page Content</Link>
        </div>
        )}
      </div>
      <div>
        <button className='dash-options' onClick={() => setDropdown24(!dropdown24)}>Value Creation Page</button>
        {dropdown24 && (
          <div className='list-container'>
             <Link className='list-elements-dash' to="/dashboard/AddValuecPage">Add Value Page Content</Link>
            <Link className='list-elements-dash' to="/dashboard/ShowSValuecPage">Show Value Page Content</Link>
        </div>
        )}
      </div> */}
    </div>
  );
};

export default Sidebar;
