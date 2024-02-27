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
import Apply from './pages/Apply';

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

import AddFinCont from './pages/dashboard/industriesdash/Fintech Dash/AddFinCont';
import Fin from './pages/dashboard/industriesdash/Fintech Dash/Fin';
import FinEdit from './pages/dashboard/industriesdash/Fintech Dash/FinEdit';
import AddFinInfo from './pages/dashboard/industriesdash/Fintech Dash/Fintechinfo/AddFinInfo';
import ShowInfo from './pages/dashboard/industriesdash/Fintech Dash/Fintechinfo/ShowInfo';
import EditFinInfo from './pages/dashboard/industriesdash/Fintech Dash/Fintechinfo/EditFinInfo';

import IotPage from './pages/dashboard/industriesdash/Iot Dash/Iotpage';
import ShowIotInfo from './pages/dashboard/industriesdash/Iot Dash/Iotinfo/ShowIotInfo';
import AddIotCont from './pages/dashboard/industriesdash/Iot Dash/AddIotCont';
import IotEdit from './pages/dashboard/industriesdash/Iot Dash/IotEdit';
import AddIotInfo from './pages/dashboard/industriesdash/Iot Dash/Iotinfo/AddIotInfo';
import EditIotInfo from './pages/dashboard/industriesdash/Iot Dash/Iotinfo/EditIotInfo';

import SaasPage from "./pages/dashboard/industriesdash/Saas Dash/SaasPage";
import SaasEdit from "./pages/dashboard/industriesdash/Saas Dash/SaasEdit";
import AddSaasCont from "./pages/dashboard/industriesdash/Saas Dash/AddSaasCont";
import AddSaasInfo from "./pages/dashboard/industriesdash/Saas Dash/Saasinfo/AddSaasInfo";
import EditSaasInfo from "./pages/dashboard/industriesdash/Saas Dash/Saasinfo/EditSaasInfo";
import ShowSaasInfo from "./pages/dashboard/industriesdash/Saas Dash/Saasinfo/ShowSaasInfo";

import AddDevCont from "./pages/dashboard/industriesdash/Dev Dash/AddDevCont";
import DevEdit from "./pages/dashboard/industriesdash/Dev Dash/DevEdit";
import DevPage from "./pages/dashboard/industriesdash/Dev Dash/DevPage";
import AddDevInfo from "./pages/dashboard/industriesdash/Dev Dash/Devinfo/AddDevInfo";
import EditDevInfo from "./pages/dashboard/industriesdash/Dev Dash/Devinfo/EditDevInfo";
import ShowDevInfo from './pages/dashboard/industriesdash/Dev Dash/Devinfo/ShowDevInfo';

import AddCloudCont from "./pages/dashboard/industriesdash/Cloud Dash/AddCloudCont";
import CloudEdit from "./pages/dashboard/industriesdash/Cloud Dash/CloudEdit";
import CloudPage from "./pages/dashboard/industriesdash/Cloud Dash/CloudPage";
import AddCloudInfo from "./pages/dashboard/industriesdash/Cloud Dash/Cloudinfo/AddCloudInfo";
import EditCloudInfo from "./pages/dashboard/industriesdash/Cloud Dash/Cloudinfo/EditCloudInfo";
import ShowCloudInfo from './pages/dashboard/industriesdash/Cloud Dash/Cloudinfo/ShowCloudInfo';

import AddIaasCont from './pages/dashboard/industriesdash/Iaas Dash/AddIaasCont';
import IaasEdit from './pages/dashboard/industriesdash/Iaas Dash/IaasEdit';
import IaasPage from './pages/dashboard/industriesdash/Iaas Dash/IaasPage';
import AddIaasInfo from './pages/dashboard/industriesdash/Iaas Dash/Iaasinfo/AddIaasInfo';
import EditIaasInfo from './pages/dashboard/industriesdash/Iaas Dash/Iaasinfo/EditIaasInfo';
import ShowIaasInfo from './pages/dashboard/industriesdash/Iaas Dash/Iaasinfo/ShowIaasInfo';

import AddGtm from './pages/dashboard/solutions/GTM Dash/AddGtm';
import EditGtm from './pages/dashboard/solutions/GTM Dash/EditGtm';
import GtmPage from './pages/dashboard/solutions/GTM Dash/GtmPage';

import AddHr from './pages/dashboard/solutions/HR Dash/AddHrrec';
import EditHr from './pages/dashboard/solutions/HR Dash/EditHR';
import HrPage from './pages/dashboard/solutions/HR Dash/HrPage';

import AddInv from './pages/dashboard/solutions/Inv Dash/AddInv';
import EditInv from './pages/dashboard/solutions/Inv Dash/EditInv';
import InvPage from './pages/dashboard/solutions/Inv Dash/InvPage';

import AddFin from './pages/dashboard/solutions/Fin Dash/AddFin';
import EditFin from './pages/dashboard/solutions/Fin Dash/EditFin';
import FinPage from './pages/dashboard/solutions/Fin Dash/FinPage';

import DashPage from './pages/dashboard/DashPage';

import AddSaasBan from './pages/dashboard/Industries Banner/Saas Banner/AddSaasBan';
import ShowSaasBan from './pages/dashboard/Industries Banner/Saas Banner/ShowSaasBan';
import EditSaasBan from './pages/dashboard/Industries Banner/Saas Banner/EditSaasBan';


import AddIaasBan from './pages/dashboard/Industries Banner/Iaas Banner/AddIaasBan';
import ShowIaasBan from "./pages/dashboard/Industries Banner/Iaas Banner/ShowIaasBan";
import EditIaasBan from "./pages/dashboard/Industries Banner/Iaas Banner/EditIaasBan";

import AddIotBan from './pages/dashboard/Industries Banner/Iot Banner/AddIotBan';
import ShowIotBan from './pages/dashboard/Industries Banner/Iot Banner/ShowIotBan';
import EditIotBan from './pages/dashboard/Industries Banner/Iot Banner/EditIotBan';

import AddFintBan from './pages/dashboard/Industries Banner/Fintech Banner/AddFintBan';
import EditFintBan from './pages/dashboard/Industries Banner/Fintech Banner/EditFintBan';
import ShowFintBan from './pages/dashboard/Industries Banner/Fintech Banner/ShowFintBan';

import AddDevBan from './pages/dashboard/Industries Banner/Dev Banner/AddDevBan';
import EditDevBanner from './pages/dashboard/Industries Banner/Dev Banner/EditDevBanner';
import ShowDevBan from './pages/dashboard/Industries Banner/Dev Banner/ShowDevBan';

import AddCloudBan from './pages/dashboard/Industries Banner/Cloud Banner/AddCloudBan';
import EditCloudBan from './pages/dashboard/Industries Banner/Cloud Banner/EditCloudBan';
import ShowCloudBan from './pages/dashboard/Industries Banner/Cloud Banner/ShowCloudBan';

import AddSaasCards from './pages/dashboard/industriesdash/Saas Dash/SaasCards/AddSaasCards';
import EditSaasCards from './pages/dashboard/industriesdash/Saas Dash/SaasCards/EditSaasCards';
import ShowSaasCards from './pages/dashboard/industriesdash/Saas Dash/SaasCards/ShowSaasCards';

import AddIotCards from './pages/dashboard/industriesdash/Iot Dash/IotCards/AddIotCards';
import EditIotCards from './pages/dashboard/industriesdash/Iot Dash/IotCards/EditIotCards';
import ShowIotCards from './pages/dashboard/industriesdash/Iot Dash/IotCards/ShowIotCards';

import AddIaasCards from './pages/dashboard/industriesdash/Iaas Dash/IaasCards/AddIaasCards';
import EditIaasCards from './pages/dashboard/industriesdash/Iaas Dash/IaasCards/EditIaasCards';
import ShowIaasCards from './pages/dashboard/industriesdash/Iaas Dash/IaasCards/ShowIaasCards';

import AddCloudCards from './pages/dashboard/industriesdash/Cloud Dash/CloudCards/AddCloudCards';
import EditCloudCards from './pages/dashboard/industriesdash/Cloud Dash/CloudCards/EditCloudCards';
import ShowCloudCards from './pages/dashboard/industriesdash/Cloud Dash/CloudCards/ShowCloudCards';

import AddDevCards from './pages/dashboard/industriesdash/Dev Dash/DevCards/AddDevCards';
import EditDevCards from './pages/dashboard/industriesdash/Dev Dash/DevCards/EditDevCards';
import ShowDevCards from './pages/dashboard/industriesdash/Dev Dash/DevCards/ShowDevCards';

import AddFinCards from './pages/dashboard/industriesdash/Fintech Dash/FintechCards/AddFinCards';
import EditFinCards from './pages/dashboard/industriesdash/Fintech Dash/FintechCards/EditFinCards';
import ShowFinCards from './pages/dashboard/industriesdash/Fintech Dash/FintechCards/ShowFinCards';

import AddAboutPageCont from './pages/dashboard/Other Pages/about us/AddAboutPageCont';
import EditAboutPageCont from './pages/dashboard/Other Pages/about us/EditAboutPageCont';
import ShowAboutPageCont from './pages/dashboard/Other Pages/about us/ShowAboutPageCont';

import AddCarPageCont from "./pages/dashboard/Other Pages/careers/AddCarPageCont";
import EditCarPageCont from "./pages/dashboard/Other Pages/careers/EditCarPageCont";
import ShowCarPageCont from './pages/dashboard/Other Pages/careers/ShowCarPageCont';

import AddHomPageCont from './pages/dashboard/Other Pages/homepage/AddHomPageCont';
import EditHomPageCont from './pages/dashboard/Other Pages/homepage/EditHomPageCont';
import ShowHomPageCont from './pages/dashboard/Other Pages/homepage/ShowHomPageCont';

import AddServPageCont from './pages/dashboard/Other Pages/services/AddServPageCont';
import EditSercPageCont from './pages/dashboard/Other Pages/services/EditServPageCont';
import ShowServPageCont from './pages/dashboard/Other Pages/services/ShowServPageCont';

import AddValPageCont from './pages/dashboard/Other Pages/value creation/AddValPageCont';
import EditValPageCont from './pages/dashboard/Other Pages/value creation/EditValPageCont';
import ShowValPageCont from './pages/dashboard/Other Pages/value creation/ShowValPageCont';

import { Helmet } from 'react-helmet';

import HomepageBackgroundImage from "./assets/img/building-consulting-business.gif";

import ServicesBackgroundImage from "./assets/img/services_page_img/services_image_3.webp";
import GtmBackgroundImage from "./assets/img/gtm-strategy-phi-consulting.webp"; 
import FinanceBackgroundImage from "./assets/img/financial-phi-consulting.webp";
import HrBackgroundImage from "./assets/img/hr-recruitment-phi-consulting.webp";
import BuisnessBackgroundImage from "./assets/img/investor-relation-phi-consulting.webp";

import FintechBackgroundImage from "./assets/img/industry_backgrounds/fintech_background.webp";
import DevopsBackgroundImage from "./assets/img/industry_backgrounds/DevOps-background.webp";
import CloudBackgroundImage from "./assets/img/industry_backgrounds/Cloud_background.webp";
import IaasBackgroundImage from "./assets/img/industry_backgrounds/iaas_background.webp";
import IotBackgroundImage from "./assets/img/industry_backgrounds/iot-background.webp";
import SaasBackGroundImage from "./assets/img/industry_backgrounds/SaaS_background.webp";

import OurWorkBackgroundImage from "./assets/img/our_work_page_img/our_work.webp";
import AboutPageBackgroundImage from "./assets/img/about-us-phi-consulting.webp";
import CareersPagebackgrounImage from "./assets/img/careers_banner.webp";
import BlogPageBackgroundImage from "./assets/img/blog_banner.webp";
import caseStudyBackgroundImage from "./assets/img/wrappers/casestudyblueback.webp";
import jill from "./assets/img/wrappers/jill.webp";


const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const imageUrls = [
      HomepageBackgroundImage,
      ServicesBackgroundImage,
      FinanceBackgroundImage,
      HrBackgroundImage,
      BuisnessBackgroundImage,
      FintechBackgroundImage,
      DevopsBackgroundImage,
      CloudBackgroundImage,
      IaasBackgroundImage,
      IotBackgroundImage,
      SaasBackGroundImage,
      OurWorkBackgroundImage,
      AboutPageBackgroundImage,
      CareersPagebackgrounImage,
      BlogPageBackgroundImage,
      caseStudyBackgroundImage,
      jill,
      GtmBackgroundImage
    ];
    const preloadImages = (imageUrls) => {
      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    };

    preloadImages(imageUrls);
  }, []);

  const Layout = ({ children }) => (
    <>
      {isMobile ? <MobileHeader /> : <Header />}
      {children}
      <Footer />
    </>
  );

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token');
  return isAuthenticated ? children : <Navigate to="/phi-remote-login" />;
};

const breadcrumbSchema =   {
  "@context": "https://schema.org/", 
  "@type": "BreadcrumbList", 
  "itemListElement": [{
    "@type": "ListItem", 
    "position": 1, 
    "name": "Phi Consulting | Home",
    "item": "https://phiconsulting.org/home"  
  },{
    "@type": "ListItem", 
    "position": 2, 
    "name": "Solutions",
    "item": "https://phiconsulting.org/solutions"  
  },{
    "@type": "ListItem", 
    "position": 3, 
    "name": "Blogs",
    "item": "https://phiconsulting.org/blogs"  
  },{
    "@type": "ListItem", 
    "position": 4, 
    "name": "About Us",
    "item": "https://phiconsulting.org/about-us"  
  }]
};

  return (
    <>
    <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
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
        <Route path="casestudy/:companyName" element={<Layout><CaseStudyView /></Layout>} />
        <Route path="blog/:urlName" element={<Layout><BlogView/></Layout>}/>
        {/* <Route path="casestudy/:id" element={<Layout><CaseStudyView /></Layout>} /> */}
        {/* <Route path="/viewcasestudy/:caseId" element={<Layout><ViewCasestudy /></Layout>} /> */}
        {/* <Route path="casedetails/:id" element={<Layout><CaseDetails /></Layout>} /> */}
        {/* <Route path="blog/:id" element={<Layout><BlogView/></Layout>}/> */}

        {/* Industry and its subpages */}
        <Route path="/iot-consulting" element={<Layout><Iot /></Layout>} />
        <Route path="/iaas-consulting" element={<Layout><IaaS /></Layout>} />
        <Route path="/saas-consulting" element={<Layout><SaaS /></Layout>} />
        <Route path="/dev-ops-consulting" element={<Layout><DevOps /></Layout>} />
        <Route path="/cloud-consulting" element={<Layout><Cloud /></Layout>} />
        <Route path="/fin-tech-consulting" element={<Layout><FinTech /></Layout>} />

        {/* Single Pages */}
        {/* <Route path="/value-creation" element={<Layout><OurWork /></Layout>} /> */}
        {/* <Route path="value/:id" element={<Layout><Value /></Layout>} /> */}
        <Route path="/about-us" element={<Layout><AboutUs /></Layout>} />
        <Route path="/careers" element={<Layout><Careers /></Layout>} />
        <Route path="/contact-us" element={<Layout><Contacts /></Layout>} />
        <Route path="/apply" element={<Layout><Apply /></Layout>} />

         {/* Separate route for login */}
         <Route path="/phi-remote-login" element={<Login />} />
         <Route path="/LandingPage" element={<EditGtm />} />

        {/* Dashboard and its subpages */}
        <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }>
          <Route index element={<Navigate replace to="/dashboard/ShowDash" />} />

          <Route path="Jobs" element={<Jobs />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="Cases" element={<Cases />} />

          <Route path="AddJobs" element={<AddJobs />} />  
          <Route path="AddBlogs" element={<AddBlogs />} />
          <Route path="AddCases" element={<AddCases />} />
          {/* ----------------- */}
          <Route path="AddFin" element={<AddFinCont />} />
          <Route path="AddFinInfo" element={<AddFinInfo />} />
          
          {/* ----------------- */}
          <Route path="AddIot" element={<AddIotCont />} />
          <Route path="AddIotInfo" element={<AddIotInfo />} />

          {/* ----------------- */}
          <Route path="AddSaas" element={<AddSaasCont />} />
          <Route path="AddSaasInfo" element={<AddSaasInfo />} />

           {/* ----------------- */}
           <Route path="AddDev" element={<AddDevCont />} />
          <Route path="AddDevInfo" element={<AddDevInfo />} />

           {/* ----------------- */}
           <Route path="AddCloud" element={<AddCloudCont />} />
          <Route path="AddCloudInfo" element={<AddCloudInfo />} />
          
           {/* ----------------- */}
           <Route path="AddIaas" element={<AddIaasCont />} />
          <Route path="AddIaasInfo" element={<AddIaasInfo />} />

          {/* ----------------- */}
          <Route path="AddGTM" element={<AddGtm />} />
          <Route path="AddHR" element={<AddHr />} />
          <Route path="AddInv" element={<AddInv />} />
          <Route path="AddFinc" element={<AddFin />} />


          {/* ----------------- */}
          <Route path="fin" element={<Fin />} />
          <Route path="iot" element={<IotPage />} />
          <Route path="saas" element={<SaasPage />} />
          <Route path="dev" element={<DevPage />} />
          <Route path="cloud" element={<CloudPage />} />
          <Route path="iaas" element={<IaasPage />} />
          <Route path="gtm" element={<GtmPage />} />
          <Route path="hr" element={<HrPage />} />
          <Route path="inv" element={<InvPage />} />
          <Route path="fint" element={<FinPage />} />

          {/* ----------------- */}
          <Route path="ShowFinInfo" element={<ShowInfo />} />
          <Route path="ShowIotInfo" element={<ShowIotInfo />} />
          <Route path="ShowSaasInfo" element={<ShowSaasInfo />} />
          <Route path="ShowDevInfo" element={<ShowDevInfo />} />
          <Route path="ShowCloudInfo" element={<ShowCloudInfo />} />
          <Route path="ShowIaasInfo" element={<ShowIaasInfo />} />
          
          <Route path="EditJob/:jobId" element={<EditJob />} />
          <Route path="EditBlog/:blogId" element={<EditBlog />} />
          <Route path="EditCase/:caseId" element={<EditCases />} />

          <Route path="EditFinInfo/:infoId" element={<EditFinInfo />} />
          <Route path="EditFin/:fintechId" element={<FinEdit />} />

          <Route path="EditiotInfo/:iotInfoId" element={<EditIotInfo />} />
          <Route path="EditIot/:iotId" element={<IotEdit />} />

          <Route path="EditsaasInfo/:saasinfoId" element={<EditSaasInfo />} />
          <Route path="EditSaas/:saasId" element={<SaasEdit />} />

          <Route path="EditdevInfo/:devinfoId" element={<EditDevInfo />} />
          <Route path="EditDev/:devopsId" element={<DevEdit />} />

          <Route path="EditcloudInfo/:cloudinfoId" element={<EditCloudInfo />} />
          <Route path="EditCloud/:cloudId" element={<CloudEdit />} />

          <Route path="EditiaasInfo/:iaasinfoId" element={<EditIaasInfo />} />
          <Route path="EditIaas/:iaasId" element={<IaasEdit />} />

          <Route path="EditGtm/:gtmpageId" element={<EditGtm />} />
          <Route path="EditHr/:hrpageId" element={<EditHr />} />
          <Route path="EditInv/:invId" element={<EditInv />} />
          <Route path="EditFino/:finId" element={<EditFin />} />

          <Route path="ShowDash" element={<DashPage />} />

          {/* ---------------------------------------------- */}
                         {/* Banner Dashborad Routes */}
          {/*------------------------------------------------*/}
          <Route path="EditSaa/:saasbanId" element={<EditSaasBan />} />
          <Route path="AddSaasBan" element={<AddSaasBan />} />
          <Route path="ShowSaasBan" element={<ShowSaasBan />} />
          
          <Route path="EditIaa/:iaasbanId" element={<EditIaasBan />} />
          <Route path="AddIaasBan" element={<AddIaasBan />} />
          <Route path="ShowIaasBan" element={<ShowIaasBan />} />
          
          <Route path="EditIo/:iotbanId" element={<EditIotBan />} />
          <Route path="AddIotBan" element={<AddIotBan />} />
          <Route path="ShowIotBan" element={<ShowIotBan />} />

          <Route path="EditFi/:fintbanId" element={<EditFintBan/>} />
          <Route path="AddFintBan" element={<AddFintBan />} />
          <Route path="ShowFintBan" element={<ShowFintBan />} />

          <Route path="Editde/:devbanId" element={<EditDevBanner/>} />
          <Route path="AddDevBan" element={<AddDevBan />} />
          <Route path="ShowDevBan" element={<ShowDevBan />} />

          <Route path="Editcl/:cloudbanId" element={<EditCloudBan/>} />
          <Route path="AddCloudBan" element={<AddCloudBan />} />
          <Route path="ShowCloudBan" element={<ShowCloudBan />} />
         
         {/* --------------------------------------------------------- */}

          <Route path="EditSaasCards/:saascardsId" element={<EditSaasCards/>} />
          <Route path="AddSaasCards" element={<AddSaasCards />} />
          <Route path="ShowSaasCards" element={<ShowSaasCards />} />

          <Route path="EditIotCards/:iotcardsId" element={<EditIotCards/>} />
          <Route path="AddIotCards" element={<AddIotCards />} />
          <Route path="ShowIotCards" element={<ShowIotCards />} />

          <Route path="EditIaasCards/:iaascardsId" element={<EditIaasCards/>} />
          <Route path="AddIaasCards" element={<AddIaasCards />} />
          <Route path="ShowIaasCards" element={<ShowIaasCards />} />

          <Route path="EditCloudCards/:cloudcardsId" element={<EditCloudCards/>} />
          <Route path="AddCloudCards" element={<AddCloudCards />} />
          <Route path="ShowCloudCards" element={<ShowCloudCards />} />

          <Route path="EditDevCards/:devcardsId" element={<EditDevCards/>} />
          <Route path="AddDevCards" element={<AddDevCards />} />
          <Route path="ShowDevCards" element={<ShowDevCards />} />

          <Route path="EditFinCards/:fincardsId" element={<EditFinCards/>} />
          <Route path="AddFinCards" element={<AddFinCards />} />
          <Route path="ShowFinCards" element={<ShowFinCards />} />

{/* ---------------------------------------------------------------------- */}

          <Route path="EditAboutPage/:aboutuspageId" element={<EditAboutPageCont/>} />
          <Route path="AddAboutPage" element={<AddAboutPageCont />} />
          <Route path="ShowAboutPage" element={<ShowAboutPageCont />} />

          <Route path="EditCareerPage/:careerspageId" element={<EditCarPageCont/>} />
          <Route path="AddCareerPage" element={<AddCarPageCont />} />
          <Route path="ShowCareerPage" element={<ShowCarPageCont />} />

          <Route path="EditHomePage/:homepageId" element={<EditHomPageCont/>} />
          <Route path="AddHomePage" element={<AddHomPageCont />} />
          <Route path="ShowHomePage" element={<ShowHomPageCont />} />

          <Route path="EditServicePage/:servicespageId" element={<EditSercPageCont/>} />
          <Route path="AddServicePage" element={<AddServPageCont />} />
          <Route path="ShowServicePage" element={<ShowServPageCont />} />

          <Route path="EditValuecPage/:valuecreationpageId" element={<EditValPageCont/>} />
          <Route path="AddValuecPage" element={<AddValPageCont />} />
          <Route path="ShowSValuecPage" element={<ShowValPageCont />} />

        </Route>

      </Routes>
    </Router>
    </>
    
  );
};

export default App;
