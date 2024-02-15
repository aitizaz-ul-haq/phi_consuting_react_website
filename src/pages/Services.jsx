import React,{ useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import CustomerExperience from './sub_pages/CustomerExperienceConsulting';
import FinancialConsulting from './sub_pages/FinancialConsulting';
import BuisnessConsulting from './sub_pages/BuisnessConsulting';
import HrConsulting from './sub_pages/HrAndRecruitmentConsulting';
import SalesConsulting from './sub_pages/SalesConsulting';

import salesicon from "../assets/img/solutions icons/GTM.png";
import buisnessicon from "../assets/img/solutions icons/Investor Relations.png";
import financialicon from "../assets/img/solutions icons/fin.png";
import hricon from "../assets/img/white_icons/human-resources.png";
import cxicon from "../assets/img/white_icons/customer-experience.png";

import goal from "../assets/img/process_icons/goal.png";
import planicon from "../assets/img/process_icons/plan.png";
import actionicon from "../assets/img/process_icons/action.png";
import assignicon from "../assets/img/process_icons/assign.png";
import testicon from "../assets/img/process_icons/test.png";
import impicon from "../assets/img/process_icons/implement.png";
import monitoricon from "../assets/img/process_icons/monitor.png";
import improveicon from "../assets/img/process_icons/improve.png";

import { Helmet } from 'react-helmet';
import achiconone from "../assets/img/achievements-badges/clutch_1.png";
import achicontwo from "../assets/img/achievements-badges/BBB.png";
import achiconthree from "../assets/img/achievements-badges/clutch_2.png";
import SmallWorkCard from '../components/shared/cards/SmallWorkCard';
import { TypeAnimation } from 'react-type-animation';
import caseStudies from "../data/caseStudies.json";
import processback from "../assets/video/home-bg.mp4";

import axios from 'axios';
const Services = () => {

  const [processNewVisible, setProcessNewVisible] = useState(false);
  const processNewRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [data, setData] = useState({
    heroHeading: '',
    heroDescription: '',
    solutionsHeading: '',
    solutionsDescription: '',
    serviceOneDescription: '',
    serviceTwoDescription: '',
    serviceThreeDescription: '',
    serviceFourDescription: '',
    servicesPathHeading: '',
    servicesPathDescription: '',
    processOneHeading: '',
    processOneDescription: '',
    processTwoHeading: '',
    processTwoDescription: '',
    processThreeHeading: '',
    processThreeDescription: '',
    processFourHeading: '',
    processFourDescription: '',
    processFiveHeading: '',
    processFiveDescription: '',
    processSixHeading: '',
    processSixDescription: '',
    processSevenHeading: '',
    processSevenDescription: '',
    insightsHeading: '',
    insightsDescription: '',
    boardHeading: '',
    boardDescription: '',
    testiHeading: '',
    testiDescription: '',
    testiOne: '',
    testiOneDesignation: '',
    testiTwo: '',
    testiTwoDesignation: '',
    testiThree: '',
    testiThreeDesignation: '',
    solutionsctaheading:'',
    solutionsctadescription:''
  });
  

  useEffect(() => {
    const fetchHomePageData = async () => {
      try {
        const response = await axios.get('https://prickle-balanced-archaeopteryx.glitch.me/servicepage');
        console.log(`your data`, response.data);
        if (response.data && response.data.length > 0) {
          const homepageData = response.data[0]; // Assuming the first entry is what we want
          setData({
            heroHeading: homepageData.heroheading,
            heroDescription: homepageData.herodescription,
            solutionsHeading: homepageData.solutionsheading,
            solutionsDescription: homepageData.solutionsdescription,
            serviceOneDescription: homepageData.serviceonedescription,
            serviceTwoDescription: homepageData.servicetwodescription,
            serviceThreeDescription: homepageData.servicethreedescription,
            serviceFourDescription: homepageData.serviceofourdescription,
            servicesPathHeading: homepageData.servicespathheading,
            servicesPathDescription: homepageData.servicesPathDescription,
            processOneHeading: homepageData.processoneheading,
            processOneDescription: homepageData.processonedescription,
            processTwoHeading: homepageData.processtwoheading,
            processTwoDescription: homepageData.processtwodescription,
            processThreeHeading: homepageData.processthreeheading,
            processThreeDescription: homepageData.processthreedescription,
            processFourHeading: homepageData.processfourheading,
            processFourDescription: homepageData.processfourdescription,
            processFiveHeading: homepageData.processfiveheading,
            processFiveDescription: homepageData.processfivedescription,
            processsixheading: homepageData.processsixheading,
            processsixdescription: homepageData.processsixdescription,
            processsevenheading: homepageData.processsevenheading,
            processsevendescription: homepageData.processsevendescription,
            processeightheading: homepageData.processeightheading,
            processeightdescription: homepageData.processeightdescription,
            solutionsctaheading: homepageData.solutionsctaheading,
            solutionsctadescription: homepageData.solutionsctadescription,
          });
        }
      } catch (error) {
        console.error("Error fetching homepage data:", error);
      }
    };

    fetchHomePageData();
  }, []);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      setProcessNewVisible(entry.isIntersecting);
    },
    { threshold: 1 }
  );

  if (processNewRef.current) {
    observer.observe(processNewRef.current);
  }

  return () => observer.disconnect();
}, []);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      setProcessNewVisible(entry.isIntersecting);
    },
    { threshold: 1 }
  );

  if (processNewRef.current) {
    observer.observe(processNewRef.current);
  }

  return () => observer.disconnect();
}, []);


  const handleTabClickOne = () => {
    window.location.href = '/solutions/investors-relation';
  } 


  const handleTabClickThree = () => {
    window.location.href = '/solutions/financial-consulting';
  } 

  const handleTabClickFour = () => {
    window.location.href = '/solutions/hr-recruitment';
  } 

  const handleTabClickFive = () => {
    window.location.href = '/solutions/go-to-market-strategy';
  } 

  const gotoContacts = () => {
    window.location.href = '/contact-us';
  }

  return (
    <>
   <Helmet>
        <title>Drive Growth & Excellence with Phi Consulting</title>
        <meta name="description" content="Drive growth with Phi Consulting's expert solutions in GTM Strategy, HR, Investor Relations & Financial Consulting. Maximize your enterprise potential. Schedule a free consultation now!" />
      </Helmet>
      <Helmet>
      <link rel="canonical" href="https://phi-verse.com/solutions" />
    </Helmet>


   {/* <!-- Hero Section --> */}
      <article class="hero">
        <section class="hero-container-services">
          <div class="hero-content-services-page">
            <h2 class="hero-heading-services-page">
            {windowWidth >= 1200 ? <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Drive Growth & Excellence with Phi Consulting',
        7000, 
       
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '40px', display: 'inline-block' }}
      repeat={Infinity}
    /> : 'Drive Growth & Excellence with Phi Consulting'}
              
            </h2>
            <p class="hero-desc-services-page">
              {data.heroDescription}
            </p>
            <div class="consult-button-services-page" onClick={gotoContacts}>
              Schedule a Free Consultation
            </div>
          </div>
        </section>
      </article>

      {/* <!-- Services page section one strategic solutions --> */}
      <article class="strategic-solutions">
        <h2 class="strategic-heading">
          {data.solutionsHeading}
        </h2>
        <p class="work-desc">
          {data.solutionsDescription}
        </p>
        <div class="services-banner-container">
          <div class="card-row-top">
            <div class="card-service-show sales-tab-one" onClick={handleTabClickFive}>
              <div class="circleBasetwo typetwo">
                <img
                  src={salesicon}
                  alt=""
                  width="100"
                  height="100"
                  class="icon-adjuster"
                />
              </div>
              <h3 class="card-present-title">GTM Strategy</h3>
              <div class="card-present-desc">
                {data.serviceOneDescription}
              </div>
            </div>
            <div class="card-service-show sales-tab-two" onClick={handleTabClickOne}>
              <div class="circleBasetwo typetwo">
                <img
                  src={buisnessicon}
                  alt=""
                  width="100"
                  height="100"
                  class="icon-adjuster"
                />
              </div>
              <h3 class="card-present-title">Investor Relations</h3>
              <div class="card-present-desc">
               {data.serviceTwoDescription}
              </div>
            </div>
            <div class="card-service-show sales-tab-three" onClick={handleTabClickThree}>
              <div class="circleBasetwo typetwo">
                <img
                  src={financialicon}
                  alt=""
                  width="100"
                  height="100"
                  class="icon-adjuster"
                />
              </div>
              <h3 class="card-present-title">Financial Consulting</h3>
              <div class="card-present-desc">
               {data.serviceThreeDescription}
              </div>
            </div>
            <div class="card-service-show sales-tab-four" onClick={handleTabClickFour}>
              <div class="circleBasetwo typetwo">
                <img
                  src={hricon}
                  alt=""
                  width="100"
                  height="100"
                  class="icon-adjuster"
                />
              </div>
              <h3 class="card-present-title">HR & Recruitment</h3>
              <div class="card-present-desc">
               {data.serviceFourDescription}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* <!-- Section path  --> */}
      <article class="path">
        <section class="path-container">
          <h2 class="path-heading">{data.servicesPathHeading}</h2>
          <p class="work-desc">
            {data.servicesPathDescription}
          </p>
          <div class="process-container">
            <div class="circle-container">
              <div class="circle-content">
                <div class="icon-process-container">
                  <img
                    src={goal}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading">{data.processOneHeading}</h2>
                <h3 class="circle-text">
                  {data.processOneDescription}
                </h3>
              </div>
            </div>
            <div class="circle-container">
              <div class="circle-content">
                <div class="icon-process-container">
                  <img
                    src={planicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading">{data.processTwoHeading}</h2>
                <h3 class="circle-text">
                  {data.processTwoDescription}
                </h3>
              </div>
            </div>
            <div class="circle-container">
              <div class="circle-content">
                <div class="icon-process-container">
                  <img
                    src={actionicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading">{data.processThreeHeading}</h2>
                <h3 class="circle-text">
                 {data.processThreeDescription}
                </h3>
              </div>
            </div>
            <div class="circle-container">
              <div class="circle-content">
                <div class="icon-process-container">
                  <img
                    src={assignicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading">{data.processFourHeading}</h2>
                <h3 class="circle-text">
                  {data.processFourDescription}
                </h3>
              </div>
            </div>
            <div class="circle-container">
              <div class="circle-content">
                <div class="icon-process-container">
                  <img
                    src={testicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading">{data.processFiveHeading}</h2>
                <h3 class="circle-text">
                 {data.processFiveDescription}
                </h3>
              </div>
            </div>
            <div class="circle-container">
              <div class="circle-content">
                <div class="icon-process-container">
                  <img
                    src={impicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading">{data.processsixheading}</h2>
                <h3 class="circle-text">
                  {data.processsixdescription}
                </h3>
              </div>
            </div>
            <div class="circle-container">
              <div class="circle-content">
                <div class="icon-process-container">
                  <img
                    src={monitoricon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading">{data.processsevenheading}</h2>
                <h3 class="circle-text">
                 {data.processsevendescription}
                </h3>
              </div>
            </div>
            <div class="circle-container">
              <div class="circle-content">
                <div class="icon-process-container">
                  <img
                    src={improveicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading">{data.processeightheading}</h2>
                <h3 class="circle-text">
                {data.processeightdescription}
                </h3>
              </div>
            </div>
          </div>
        </section>
      </article>

<article class="process-new">
<video
    src={processback}
    autoPlay
    loop
    muted
    className="background-video"
  />
  <div className="white-overlay" />
   {/* <div className="white-overlay" /> */}
   <section class="process-new-container">
          <h2 class="path-heading">{data.servicesPathHeading}</h2>
          <p class="work-desc">
            {data.servicesPathDescription}
          </p>
          <div class="process-new-section">
            <div class="left-process-section" ref={processNewRef}>
              <div className={`tooltip-right ${processNewVisible ? 'fade-in' : ''}`}>
                <img  
                  src="../assets/img/process_icons/goal.png"
                  alt=""
                  class="new-process-icon"
                />
                <div class="text-container">
                  <div class="process-new-heading">{data.processOneHeading}</div>
                  <div class="process-new-description">
                    {data.processOneDescription}
                  </div>
                </div>
              </div>
            </div>
            <div class="right-process-section">
              <div className={`tooltip-left ${processNewVisible ? 'fade-in' : ''}`}>
                <img
                  src="../assets/img/process_icons/plan.png"
                  alt=""
                  class="new-process-icon"
                />
                <div class="text-container">
                  <div class="process-new-heading">{data.processTwoHeading}</div>
                  <div class="process-new-description-right-side">
                   {data.processTwoDescription}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="process-new-section">
            <div class="left-process-section">
              <div className={`tooltip-right ${processNewVisible ? 'fade-in' : ''}`}>
                <img
                  src="../assets/img/process_icons/action.png"
                  alt=""
                  class="new-process-icon"
                />
                <div class="text-container">
                  <div class="process-new-heading">{data.processThreeHeading}</div>
                  <div class="process-new-description">
                    {data.processThreeDescription}
                  </div>
                </div>
              </div>
            </div>
            <div class="right-process-section">
              <div className={`tooltip-left ${processNewVisible ? 'fade-in' : ''}`}>
                <img
                  src="../assets/img/process_icons/assign.png"
                  alt=""
                  class="new-process-icon"
                />
                <div class="text-container">
                  <div class="process-new-heading">{data.processFourHeading}</div>
                  <div class="process-new-description-right-side">
                    {data.processFourDescription}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="process-new-section">
            <div class="left-process-section">
              <div className={`tooltip-right ${processNewVisible ? 'fade-in' : ''}`}>
                <img
                  src="../assets/img/process_icons/test.png"
                  alt=""
                  class="new-process-icon"
                />
                <div class="text-container">
                  <div class="process-new-heading">{data.processFiveHeading}</div>
                  <div class="process-new-description">
                    {data.processFiveDescription}
                  </div>
                </div>
              </div>
            </div>
            <div class="right-process-section">
              <div className={`tooltip-left ${processNewVisible ? 'fade-in' : ''}`}>
                <img
                  src="../assets/img/process_icons/implement.png"
                  alt=""
                  class="new-process-icon"
                />
                <div class="text-container">
                  <div class="process-new-heading">{data.processsixheading}</div>
                  <div class="process-new-description-right-side">
                    {data.processsixdescription}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="process-new-section">
            <div class="left-process-section">
              <div className={`tooltip-right ${processNewVisible ? 'fade-in' : ''}`}>
                <img
                  src="../assets/img/process_icons/monitor.png"
                  alt=""
                  class="new-process-icon"
                />
                <div class="text-container">
                  <div class="process-new-heading">{data.processsevenheading}</div>
                  <div class="process-new-description">
                    {data.processsevendescription}
                  </div>
                </div>
              </div>
            </div>
            <div class="right-process-section">
              <div className={`tooltip-left ${processNewVisible ? 'fade-in' : ''}`}>
                <img
                  src="../assets/img/process_icons/improve.png"
                  alt=""
                  class="new-process-icon"
                />
                <div class="text-container">
                  <div class="process-new-heading">{data.processeightheading}</div>
                  <div class="process-new-description-right-side">
                   {data.processeightdescription}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>


      {/* <!-- Call to Action Section --> */}
      <article class="cta-container">
        <section class="cta-sections-container">
          <div class="cta-content">
            <div class="cta-heading">{data.solutionsctaheading}</div>
            <div class="cta-descrip">
             {data.solutionsctadescription}
            </div>
          </div>
          <div class="cta-button-section">
            <div class="right-button-header">
              <span
                ><Link to="/contact-us" class="inner-header"
                  >Contact Us</Link
                ></span
              >
            </div>
          </div>
        </section>
      </article>

    </>
  )
}

export default Services;
