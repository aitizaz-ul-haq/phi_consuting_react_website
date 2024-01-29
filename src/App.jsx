import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Contacts from './pages/Contacts';
import Services from './pages/Services';
import OurWork from './pages/OurWork';
import Header from './components/shared/Header';
import MobileHeader from "./components/shared/MobileHeader";
import Footer from './components/shared/Footer';
import CaseStudyView from './components/view_pages/CaseStudyView';
import BlogView from './components/view_pages/BlogView';
import Spotlight from './pages/Spotlight';

import CustomerExperience from './pages/sub_pages/CustomerExperienceConsulting';
import FinancialConsulting from './pages/sub_pages/FinancialConsulting';
import BuisnessConsulting from './pages/sub_pages/BuisnessConsulting';
import HrConsulting from './pages/sub_pages/HrAndRecruitmentConsulting';
import SalesConsulting from './pages/sub_pages/SalesConsulting';

import Iot from './pages/industry_pages/iot';
import IaaS from './pages/industry_pages/IaaS';
import SaaS from './pages/industry_pages/SaaS';
import DevOps from './pages/industry_pages/DevOps';
import Cloud from './pages/industry_pages/Cloud';
import FinTech from './pages/industry_pages/FinTech';

import Login from './pages/dashboard/login';
import Dashboard from './pages/dashboard/Dashboard';
import Jobs from './pages/dashboard/Jobs';
import AddJobs from './pages/dashboard/AddJobs';

import Blogs from './pages/dashboard/Blogs';
import AddBlogs from './pages/dashboard/AddBlogs';
import EditBlog from './pages/dashboard/BlogEdit';
import EditCases from './pages/dashboard/CasesEdit';
import EditJob from './pages/dashboard/JobsEdit';

import Cases from './pages/dashboard/Cases';
import AddCases from './pages/dashboard/AddCases';
import './assets/css/styles.css';

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const Layout = ({ children }) => (
    <>
      {isMobile ? <MobileHeader /> : <Header />}
      {children}
      <Footer />
    </>
  );


// const App = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const Layout = () => (
//     <>
//       {isMobile ? <MobileHeader /> : <Header />}
//       <Outlet />
//       <Footer />
//     </>
//   );

  return (
    // <Router>
    //   <Routes>
    //     {/* Separate route for login without header and footer */}
    //     <Route path="/phi-remote-login" element={<Login />} />

    //     {/* dashboard */}
    //     <Route path="/dashboard" element={<Dashboard />}>
    //     <Route path="AddJobs" element={<AddJobs />} />
    //     <Route path="AddBlogs" element={<AddBlogs />} />
    //     <Route path="AddCases" element={<AddCases />} />
    //       <Route path="Jobs" element={<Jobs />} />
    //       <Route path="Blogs" element={<Blogs />} />
    //       <Route path="Cases" element={<Cases />} />
    //       <Route path="EditJob/:jobId" element={<EditJob />} />
    //       <Route path="EditBlog/:blogId" element={<EditBlog />} />
    //       <Route path="EditCase/:caseId" element={<EditCases />} />
    //     </Route>

    //     <Route path="/" element={<Navigate replace to="/home" />} />
    //     <Route path="/home" element={<Layout />}>
    //     <Route index element={<HomePage />} />
    //   <Route path="aboutus" element={<AboutUs />} />
    //   <Route path="blogs" element={<Blog />} />
    //   <Route path="casestudies" element={<Spotlight />} />
    //   <Route path="careers" element={<Careers />} />
    //   <Route path="contact" element={<Contacts />} />
    //   <Route path="solutions" element={<Services />} />
    //   <Route path="valuecreation" element={<OurWork />} />
    //   <Route path="viewcasestudy/:id" element={<CaseStudyView/>}/>
    //   <Route path="viewblog/:id" element={<BlogView/>}/>
    //       <Route path="customer-experience" element={<CustomerExperience />} />
    //       <Route path="financial-consulting" element={<FinancialConsulting />} />
    //       <Route path="investor-relations" element={<BuisnessConsulting />} />
    //       <Route path="hr-consulting" element={<HrConsulting />} />
    //       <Route path="GTM-advisory" element={<SalesConsulting />} />
    //       {/* industry pages */}
    //       <Route path="Iot" element={<Iot />} />
    //       <Route path="IaaS" element={<IaaS />} />
    //       <Route path="SaaS" element={<SaaS />} />
    //       <Route path="dev-ops" element={<DevOps />} />
    //       <Route path="Cloud" element={<Cloud />} />
    //       <Route path="FinTech" element={<FinTech />} />
    //    </Route>
    //   </Routes>
    // </Router>

    <Router>
      <Routes>
        {/* Redirect from root to /home */}
        <Route path="/" element={<Navigate replace to="/home" />} />

        {/* Home Page */}
        <Route path="/home" element={<Layout><HomePage /></Layout>} />

        {/* Solutions and its subpages */}
        <Route path="/solutions" element={<Layout><Services /></Layout>} />
        <Route path="/solutions/go-to-market-strategy" element={<Layout><SalesConsulting /></Layout>} />
        <Route path="/solutions/hr-recruitment" element={<Layout><HrConsulting /></Layout>} />
        <Route path="/solutions/investors-relation" element={<Layout><BuisnessConsulting /></Layout>} />
        <Route path="/solutions/financial-consulting" element={<Layout><FinancialConsulting /></Layout>} />

        {/* Insights and its subpages */}
        <Route path="/blogs" element={<Layout><Blog /></Layout>} />
        <Route path="/case-studies" element={<Layout><Spotlight /></Layout>} />
        <Route path="viewcasestudy/:id" element={<Layout><CaseStudyView /></Layout>} />
        <Route path="blog/:id" element={<Layout><BlogView/></Layout>}/>

        {/* Industry and its subpages */}
        <Route path="/iot-consulting" element={<Layout><Iot /></Layout>} />
        <Route path="/iaas-consulting" element={<Layout><IaaS /></Layout>} />
        <Route path="/saas-consulting" element={<Layout><SaaS /></Layout>} />
        <Route path="/dev-ops-consulting" element={<Layout><DevOps /></Layout>} />
        <Route path="/cloud-consulting" element={<Layout><Cloud /></Layout>} />
        <Route path="/fin-tech-consulting" element={<Layout><FinTech /></Layout>} />

        {/* Single Pages */}
        <Route path="/value-creation" element={<Layout><OurWork /></Layout>} />
        <Route path="/about-us" element={<Layout><AboutUs /></Layout>} />
        <Route path="/careers" element={<Layout><Careers /></Layout>} />
        <Route path="/contact-us" element={<Layout><Contacts /></Layout>} />

        {/* Dashboard and its subpages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/AddJobs" element={<AddJobs />} />
        <Route path="/dashboard/AddBlogs" element={<AddBlogs />} />
        <Route path="/dashboard/AddCases" element={<AddCases />} />
        <Route path="/dashboard/Jobs" element={<Jobs />} />
        <Route path="/dashboard/Blogs" element={<Blogs />} />
        <Route path="/dashboard/Cases" element={<Cases />} />
        <Route path="/dashboard/EditJob/:jobId" element={<EditJob />} />
        <Route path="/dashboard/EditBlog/:blogId" element={<EditBlog />} />
        <Route path="/dashboard/EditCase/:caseId" element={<EditCases />} />

        {/* Separate route for login */}
        <Route path="/phi-remote-login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
