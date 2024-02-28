import React,{ useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import goal from "../../assets/img/process_icons/goal.webp";
import planicon from "../../assets/img/process_icons/plan.webp";
import actionicon from "../../assets/img/process_icons/action.webp";
import assignicon from "../../assets/img/process_icons/assign.webp";
import testicon from "../../assets/img/process_icons/test.webp";
import impicon from "../../assets/img/process_icons/implement.webp";
import monitoricon from "../../assets/img/process_icons/monitor.webp";
import improveicon from "../../assets/img/process_icons/improve.webp";
import bcone from "../../assets/img/investor-realtions-icons/Awareness.webp";
import bctwo from "../../assets/img/investor-realtions-icons/equity.webp";
import bcthree from "../../assets/img/investor-realtions-icons/liquidity.webp";
import bcfour from "../../assets/img/investor-realtions-icons/low hanging fruits.webp";
import bcfive from "../../assets/img/investor-realtions-icons/content.webp";
import bcsix from "../../assets/img/investor-realtions-icons/brand.webp";
import useScrollToTop from '../../hooks/useScrollToTop';
import { TypeAnimation } from 'react-type-animation';
import { Tooltip } from 'antd';
import eye from "../../assets/img/eye.webp";
import top from "../../assets/img/top Arrow.webp";
import axios from 'axios';
import whatback from "../../assets/img/wrappers/burn.webp"; 
import processback from "../../assets/video/home-bg.mp4";

import { Helmet } from 'react-helmet';
const BuisnessConsulting = () => {

   const [processNewVisible, setProcessNewVisible] = useState(false);
   const processNewRef = useRef(null);

   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const [darkMode, setDarkMode] = useState(false);
   const insightsRefs = useRef([]);

   const [data, setData] = useState({
    bannerHeading: "",
    bannerDescription: "",
  
    featuresMainHeading: "",
    featuresMainDescription: "",
  
    featuresHeadingOne: "",
    featuresDescriptionOne: "",
  
    featuresHeadingTwo: "",
    featuresDescriptionTwo: "",
  
    featuresHeadingThree: "",
    featuresDescriptionThree: "",
  
    featuresHeadingFour: "",
    featuresDescriptionFour: "",
  
    featuresHeadingFive: "",
    featuresDescriptionFive: "",
  
    featuresHeadingSix: "",
    featuresDescriptionSix: "",

    processMainHeading:"",
    processMainDesc:"",
  
    processHedOne:"",
    processDesOne: "",

    processHedTwo:"",
    processDesTwo: "",
    
    processHedThree:"",
    processDesThree: "",

    processHedFour:"",
    processDesFour: "",

    processHedFive:"",
    processDesFive: "",

    processHedSix:"",
    processDesSix: "",

    processHedSeven:"",
    processDesSeven: "",

    processHedEight:"",
    processDesEight: "",
  
    whySectionHeading: "",
    whySectionDescription: "",
  
    whyBoxOneHeading: "",
    whyBoxOneDescription: "",
  
    whyBoxTwoHeading: "",
    whyBoxTwoDescription: "",
  
    whyBoxThreeHeading: "",
    whyBoxThreeDescription: "",
  
    whyBoxFourHeading: "",
    whyBoxFourDescription: "",
  
    whyBoxFiveHeading: "",
    whyBoxFiveDescription: "",
  
    whyBoxSixHeading: "",
    whyBoxSixDescription: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://prickle-balanced-archaeopteryx.glitch.me/invpage');
        console.log(`GTM page data`, response.data);
        if (response.data && response.data.length > 0) {
          console.log(`dat arecieved on inv page....`,response.data);
          const gtmData = response.data[0]; // Assuming the first entry is what we want
  
          setData({
            bannerHeading: gtmData.bannerHeading,
            bannerDescription: gtmData.bannerDescription,
            featuresMainHeading: gtmData.featuresMainHeading,
            featuresMainDescription: gtmData.featuresMainDescription,
            featuresHeadingOne: gtmData.featuresHeadingOne,
            featuresDescriptionOne: gtmData.featuresDescriptionOne,
            featuresHeadingTwo: gtmData.featuresHeadingTwo,
            featuresDescriptionTwo: gtmData.featuresDescriptionTwo,
            featuresHeadingThree: gtmData.featuresHeadingThree,
            featuresDescriptionThree: gtmData.featuresDescriptionThree,
            featuresHeadingFour: gtmData.featuresHeadingFour,
            featuresDescriptionFour: gtmData.featuresDescriptionFour,
            featuresHeadingFive: gtmData.featuresHeadingFive,
            featuresDescriptionFive: gtmData.featuresDescriptionFive,
            featuresHeadingSix: gtmData.featuresHeadingSix,
            featuresDescriptionSix: gtmData.featuresDescriptionSix,

            processMainHeading:gtmData.processMainHeading,
            processMainDesc: gtmData.processMainDesc,

            processHedOne:gtmData.processHedOne,
            processDesOne: gtmData.processDesOne,
            processHedTwo:gtmData.processHedTwo,
            processDesTwo: gtmData.processDesTwo,
            processHedThree:gtmData.processHedThree,
            processDesThree: gtmData.processDesThree,
            processHedFour:gtmData.processHedFour,
            processDesFour: gtmData.processDesFour,
            processHedFive:gtmData.processHedFive,
            processDesFive: gtmData.processDesFive,
            processHedSix:gtmData.processHedSix,
            processDesSix: gtmData.processDesSix,
            processHedSeven:gtmData.processHedSeven,
            processDesSeven: gtmData.processDesSeven,
            processHedEight:gtmData.processHedEight,
            processDesEight: gtmData.processDesEight,
            whySectionHeading: gtmData.whySectionHeading,
            whySectionDescription: gtmData.whySectionDescription,
            whyBoxOneHeading: gtmData.whyBoxOneHeading,
            whyBoxOneDescription: gtmData.whyBoxOneDescription,
            whyBoxTwoHeading: gtmData.whyBoxTwoHeading,
            whyBoxTwoDescription: gtmData.whyBoxTwoDescription,
            whyBoxThreeHeading: gtmData.whyBoxThreeHeading,
            whyBoxThreeDescription: gtmData.whyBoxThreeDescription,
            whyBoxFourHeading: gtmData.whyBoxFourHeading,
            whyBoxFourDescription: gtmData.whyBoxFourDescription,
            whyBoxFiveHeading: gtmData.whyBoxFiveHeading,
            whyBoxFiveDescription: gtmData.whyBoxFiveDescription,
            whyBoxSixHeading: gtmData.whyBoxSixHeading,
            whyBoxSixDescription: gtmData.whyBoxSixDescription,
          });
        }
      } catch (error) {
        console.error("Error fetching GTM Page data:", error);
      }
    };
  
    fetchData();
  }, []);

   useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const response = await axios.get('https://prickle-balanced-archaeopteryx.glitch.me/cases');
        setCaseStudies(response.data.slice(0, 3)); // Fetch only the first three case studies
      } catch (error) {
        console.error('Error fetching case studies:', error);
      }
    };
  
    fetchCaseStudies();
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
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    },
    {
      threshold: 0.5, // Adjust as needed
    }
  );

  const elements = insightsRefs.current;
  elements.forEach((el) => {
    if (el) observer.observe(el);
  });

  return () => {
    elements.forEach((el) => {
      if (el) observer.unobserve(el);
    });
  };
  }, []);

   useEffect(() => {
  const handleScroll = () => {
    const offset = window.pageYOffset;
    document.body.style.backgroundPositionY = offset * 0.5 + 'px'; 
  };

  // Set background image on mount
  document.body.style.backgroundImage = `url(${whatback})`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundAttachment = 'fixed'; // This is necessary for the parallax effect

  window.addEventListener('scroll', handleScroll);

  // Clean up function to remove the event listener and revert styles on unmount
  return () => {
    window.removeEventListener('scroll', handleScroll);
    document.body.style.backgroundImage = '';
    document.body.style.backgroundSize = '';
    document.body.style.backgroundPosition = '';
    document.body.style.backgroundAttachment = '';
  };
  }, []);

   useEffect(() => {
  const servicesSection = document.querySelector('.why-phi-for-sales');
  
  if (servicesSection) {
    servicesSection.style.backgroundColor = 'rgba(173, 216, 230, 0.5)';
    servicesSection.style.borderTop = '2px solid #add8e6'; 
    servicesSection.style.borderBottom = '2px solid #add8e6'; 
  }

  return () => {
    if (servicesSection) {
      servicesSection.style.backgroundColor = '';
      servicesSection.style.borderTop = '';
      servicesSection.style.borderBottom = '';
    }
  };
  }, []); 

const toggleDarkMode = () => setDarkMode(!darkMode);

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

useScrollToTop();
    return (
        <>
        <Helmet>
        <title>Investor Relations - Phi Consulting</title>
        <meta name="description" content="Nurture investor confidence with Phi Consulting's Investor Relations expertise. Enhance communication, build trust, and foster long-term relationships for sustainable growth." />
        </Helmet>

        <Helmet>
        <link rel="canonical" href="https://phiconsulting.org/solutions/investors-relation" />
       </Helmet>


        <div className={`overlayscreen ${darkMode ? 'activate' : ''}`}></div>
        <div className="left-section-control"></div>
            <div className="right-section-control">
            <Tooltip placement="leftTop" title="toggle eye protection">
            <button onClick={toggleDarkMode}> <img src={eye} alt="eye icon" width={25} height={25}/></button> 
            </Tooltip>
                 {/* Back to Top Button */}
                 <Tooltip placement="leftTop" title="back to top">
                        <button className="back-to-top" onClick={scrollToTop}>
                           <img src={top} alt="eye icon" width={25} height={25}/>
                        </button>
                 </Tooltip>
            </div>


      {/* <!-- Hero Section --> */}
      <article class="hero">
        <section class="hero-container-bui-consul">
          <div class="hero-content-bui-consul">
            <h1 class="hero-heading-bui-consul">
            {windowWidth >= 1200 ? <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        ' Boost Your Investor Relations Impact',
        7000, 
       
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '40px', display: 'inline-block' }}
      repeat={Infinity}
    /> : ' Boost Your Investor Relations Impact'}
           
            </h1>
            <p class="hero-desc-bui-consul">
            {data.bannerDescription}
            </p>
            <div class="consult-button-bui-consul">
            <Link to="/contact-us" className='scheduler-set'> Schedule a Free Consultation</Link>
            </div>
          </div>
        </section>
      </article>

      {/* <!-- sales page banner --> */}
      <article class="sales-solutions">
        <h2 class="sales-heading">{data.featuresMainHeading}</h2>
        <p class="sales-banner-desc">
        {data.featuresMainDescription}
        </p>
        <div class="sales-banner-container">
          <div class="sales-cards one-with-white-back">
            <div class="icon-container">
              <img
                src={bcone}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title"> {data.featuresHeadingOne}</h3>
            <div class="sales-card-description">
            {data.featuresDescriptionOne}
            </div>
          </div>

          <div class="sales-cards one-with-blue-back">
            <div class="icon-container">
              <img
                src={bctwo}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">{data.featuresHeadingTwo}</h3>
            <div class="sales-card-description">
            {data.featuresDescriptionTwo}
            </div>
          </div>
          <div class="sales-cards one-with-white-back">
            <div class="icon-container">
              <img
                src={bcthree}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">{data.featuresHeadingThree}</h3>
            <div class="sales-card-description">
            {data.featuresDescriptionThree}
            </div>
          </div>
        </div>
        <div class="sales-banner-container down-spacing">
          <div class="sales-cards one-with-blue-back">
            <div class="icon-container">
              <img
                src={bcfour}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">{data.featuresHeadingFour}</h3>
            <div class="sales-card-description">
            {data.featuresDescriptionFour}
            </div>
          </div>

          <div class="sales-cards one-with-white-back">
            <div class="icon-container">
              <img
                src={bcfive}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">{data.featuresHeadingFive}</h3>
            <div class="sales-card-description">
            {data.featuresDescriptionFive}
            </div>
          </div>
          <div class="sales-cards one-with-blue-back">
            <div class="icon-container">
              <img
                src={bcsix}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">{data.featuresHeadingSix}</h3>
            <div class="sales-card-description">
            {data.featuresDescriptionSix}
            </div>
          </div>
        </div>
      </article>

      {/* <!-- Section path  --> */}
      <article class="path">
        <section class="path-container">
          
          <h2 class="path-heading">{data.processMainHeading}</h2>
          <p class="sales-process-desc">
          {data.processMainDesc}
          </p>
          <div class="process-container">
            <div class="circle-container-sales">
              <div class="circle-content-sales">
                <div class="icon-process-container">
                  <img
                   src={goal}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading-sales">{data.processHedOne}</h2>
                <h3 class="circle-text-sales">
                {data.processDesOne}
                </h3>
              </div>
            </div>
            <div class="circle-container-sales">
              <div class="circle-content-sales">
                <div class="icon-process-container">
                  <img
                     src={planicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading-sales">{data.processHedTwo}</h2>
                <h3 class="circle-text-sales">
                {data.processDesTwo}
                </h3>
              </div>
            </div>
            <div class="circle-container-sales">
              <div class="circle-content-sales">
                <div class="icon-process-container">
                  <img
                     src={actionicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading-sales">{data.processHedThree}</h2>
                <h3 class="circle-text-sales">
                {data.processDesThree}
                </h3>
              </div>
            </div>
            <div class="circle-container-sales">
              <div class="circle-content-sales">
                <div class="icon-process-container">
                  <img
                   src={assignicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading-sales">{data.processHedFour}</h2>
                <h3 class="circle-text-sales">
                {data.processDesFour}
                </h3>
              </div>
            </div>
            <div class="circle-container-sales">
              <div class="circle-content-sales">
                <div class="icon-process-container">
                  <img
                     src={testicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading-sales">{data.processHedFive}</h2>
                <h3 class="circle-text-sales">
                {data.processDesFive}
                </h3>
              </div>
            </div>
            <div class="circle-container-sales">
              <div class="circle-content-sales">
                <div class="icon-process-container">
                  <img
                   src={impicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading-sales">{data.processHedSix}</h2>
                <h3 class="circle-text-sales">
                {data.processDesSix}
                </h3>
              </div>
            </div>

            <div class="circle-container-sales">
              <div class="circle-content-sales">
                <div class="icon-process-container">
                  <img
                    src={monitoricon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading-sales">{data.processHedSeven}</h2>
                <h3 class="circle-text-sales">
                {data.processDesSeven}
                </h3>
              </div>
            </div>
            <div class="circle-container-sales">
              <div class="circle-content-sales">
                <div class="icon-process-container">
                  <img
                    src={improveicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading-sales">{data.processHedEight}</h2>
                <h3 class="circle-text-sales">
                {data.processDesEight}
                </h3>
              </div>
            </div>
          </div>
        </section>
      </article>

       {/* <!-- section new process --> */}
       <article class="process-new">
       <video
    src={processback}
    autoPlay
    loop
    muted
    className="background-video"
  />
  <div className="white-overlay" />

        <section class="process-new-container">
          <h2 class="path-heading">{data.processMainHeading}</h2>
          <p class="work-desc">
          {data.processMainDesc}
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
                  <div class="process-new-heading">{data.processHedOne}</div>
                  <div class="process-new-description">
                  {data.processDesOne}
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
                  <div class="process-new-heading">{data.processHedTwo}</div>
                  <div class="process-new-description-right-side">
                  {data.processDesTwo}

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
                  <div class="process-new-heading">{data.processHedThree}</div>
                  <div class="process-new-description">
                  {data.processDesThree}
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
                  <div class="process-new-heading">{data.processHedFour}</div>
                  <div class="process-new-description-right-side">
                  {data.processDesFour}
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
                  <div class="process-new-heading">{data.processHedFive}</div>
                  <div class="process-new-description">
                  {data.processDesFive}
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
                  <div class="process-new-heading">{data.processHedSix}</div>
                  <div class="process-new-description-right-side">
                  {data.processDesSix}
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
                  <div class="process-new-heading">{data.processHedSeven}</div>
                  <div class="process-new-description">
                  {data.processDesSeven}
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
                  <div class="process-new-heading">{data.processHedEight}</div>
                  <div class="process-new-description-right-side">
                  {data.processDesEight}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* <!-- full scale banner --> */}
      <article class="full-scale-banner">
        <section class="banner-full-exp">
          <div class="overlay"></div>
          <div class="banner-new-full-scale-container">
            <h2 class="full-banner-call">
            Shareholder registration is the most outsourced IR activity, with 77 percent of investor relations teams relying on external providers. Shareholder identification and annual report design follow closely at 64 percent and 58 percent, respectively.
            </h2>
          </div>
        </section>
      </article>

      {/* <!-- why phi for customer exp Section --> */}
      <article class="why-phi-for-sales">
        <h2 class="why-phi-heading">
        {data.whySectionHeading}
        </h2>
        <p class="why-phi-desc">
        {data.whySectionDescription}
        </p>
        <div class="insights-container">
          <div class="insights-bundle" ref={(el) => insightsRefs.current.push(el)}>
            <div class="left-section-insights">
              <div class="overlay-container">
                {/* <div class="overlay"></div> */}
                <div class="content">
                  <h2 class="overlay-heading">{data.whyBoxOneHeading}</h2>
                  <p class="overlay-desc">
                  {data.whyBoxOneDescription}
                  </p>
                </div>
              </div>
            </div>
            <div class="right-section-insights">
              <div class="overlay-container">
                {/* <div class="overlay"></div> */}
                <div class="content">
                  <h2 class="overlay-heading">{data.whyBoxTwoHeading}</h2>
                  <p class="overlay-desc">
                  {data.whyBoxTwoDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="insights-bundle" ref={(el) => insightsRefs.current.push(el)}>
            <div class="left-section-insights">
              <div class="overlay-container">
                {/* <div class="overlay"></div> */}
                <div class="content">
                  <h2 class="overlay-heading">{data.whyBoxThreeHeading}</h2>
                  <p class="overlay-desc">
                  {data.whyBoxThreeDescription}
                  </p>
                </div>
              </div>
            </div>
            <div class="right-section-insights">
              <div class="overlay-container">
                {/* <div class="overlay"></div> */}
                <div class="content">
                  <h2 class="overlay-heading">{data.whyBoxFourHeading}</h2>
                  <p class="overlay-desc">
                  {data.whyBoxFourDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="insights-bundle" ref={(el) => insightsRefs.current.push(el)}>
            <div class="left-section-insights">
              <div class="overlay-container">
                {/* <div class="overlay"></div> */}
                <div class="content">
                  <h2 class="overlay-heading">{data.whyBoxFiveHeading}</h2>
                  <p class="overlay-desc">
                  {data.whyBoxFiveDescription}
                  </p>
                </div>
              </div>
            </div>
            <div class="right-section-insights">
              <div class="overlay-container">
                {/* <div class="overlay"></div> */}
                <div class="content">
                  <h2 class="overlay-heading">{data.whyBoxSixHeading}</h2>
                  <p class="overlay-desc">
                  {data.whyBoxSixDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* <!-- Call to Action Section --> */}
      <article class="cta-container">
        <section class="cta-sections-container">
          <div class="cta-content">
            <div class="cta-heading">
            Ready to boost your financial narrative?
            </div>
            <div class="cta-descrip">
            Stand out in the market and capture investor attention with our proven strategies. Contact Phi Consulting now and let's embark on a journey of financial success together!
            </div>
          </div>
          <div class="cta-button-section">
            <div class="right-button-header">
              <span
                ><Link to="/contact-us" class="inner-header"
                  >Get in Touch</Link
                ></span
              >
            </div>
          </div>
        </section>
      </article>
        
        </>
    ) 
}

export default BuisnessConsulting;