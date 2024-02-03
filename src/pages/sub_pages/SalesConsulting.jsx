import React,{ useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import ATOB from '../../assets/img/new_logos_comps/newer/AtoB 2.png';
import bobtail from '../../assets/img/new_logos_comps/bobtail.png';
import joyride from '../../assets/img/new_logos_comps/joyride.png';
import Truckx from '../../assets/img/new_logos_comps/TruckX.png';
import pallet from '../../assets/img/new_logos_comps/newer/Pallet Logo.png';
import digitalOcean from '../../assets/img/new_logos_comps/newer/digital-ocean.png';
import mudflap from '../../assets/img/new_logos_comps/newer/Mudflap.png';
import sungrade from '../../assets/img/new_logos_comps/sungrade solar.png';

import salesone from "../../assets/img/GTM Advisory/sales.png";
import salestwo from "../../assets/img/GTM Advisory/experience.png";
import salesthree from "../../assets/img/GTM Advisory/enablement.png";
// import salesfour from "../../assets/img/black_logos/expansion.png";
// import salesfive from "../../assets/img/black_logos/product led growth.png";
// import salessix from "../../assets/img/black_logos/button.png";

import goal from "../../assets/img/process_icons/goal.png";
import planicon from "../../assets/img/process_icons/plan.png";
import actionicon from "../../assets/img/process_icons/action.png";
import assignicon from "../../assets/img/process_icons/assign.png";
import testicon from "../../assets/img/process_icons/test.png";
import impicon from "../../assets/img/process_icons/implement.png";
import monitoricon from "../../assets/img/process_icons/monitor.png";
import improveicon from "../../assets/img/process_icons/improve.png";

import achiconone from "../../assets/img/achievements-badges/clutch_1.png";
import achicontwo from "../../assets/img/achievements-badges/BBB.png";
import achiconthree from "../../assets/img/achievements-badges/clutch_2.png";

import SmallWorkCard from '../../components/shared/cards/SmallWorkCard';
import caseStudies from '../../data/caseStudies.json';

import useScrollToTop from '../../hooks/useScrollToTop';
import { TypeAnimation } from 'react-type-animation';
import { Tooltip } from 'antd';
import eye from "../../assets/img/eye.png";
import top from "../../assets/img/top Arrow.png";
import { Button, Modal } from 'antd';
import axios from 'axios';

import atobbox from "../../assets/img/api_images/AToB-square.jpg";
import truckxbox from "../../assets/img/api_images/truck-square.png";
import palletbox from "../../assets/img/api_images/palletbox.png";
import solarbox from "../../assets/img/api_images/Solarbox.png";
import bobtailbox from "../../assets/img/api_images/bob.png";
import joybox from "../../assets/img/api_images/joybox.png";
import dobox from "../../assets/img/api_images/digitalocean-square.png";

import atobproduct from "../../assets/img/api_images/atob-card.png"; 
import truckxproduct from "../../assets/img/api_images/truckx-case.png";
import palletproduct from "../../assets/img/api_images/pallet.png";
import solarproduct from "../../assets/img/api_images/solar_one.webp";
import bobtailproduct from "../../assets/img/api_images/Bobtail.png";
import joyrideproduct from "../../assets/img/api_images/joytwo.png";
import doproduct from "../../assets/img/api_images/digitalocean-product.png";


const SalesConsulting = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  // const [isVisibleTesti, setIsVisibleTesti] = useState(false);
  // const testiRef = useRef(null);

  // const [isVisible, setIsVisible] = useState(false);
  // const containerRef = useRef(null);

  // const [isVisibleAch, setIsVisibleAch] = useState(false);
  // const achRef = useRef(null);

  // const [isVisiblecard, setIsVisiblecard] = useState(false);
  // const cardsRef = useRef(null);

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
  
    processDesOne: "",
    processDesTwo: "",
    processDesThree: "",
    processDesFour: "",
    processDesFive: "",
    processDesSix: "",
    processDesSeven: "",
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
  

  const [processNewVisible, setProcessNewVisible] = useState(false);
  const processNewRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [darkMode, setDarkMode] = useState(false);
  const insightsRefs = useRef([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://prickle-balanced-archaeopteryx.glitch.me/gtmpage');
        console.log(`GTM page data`, response.data);
        if (response.data && response.data.length > 0) {
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
            processDesOne: gtmData.processDesOne,
            processDesTwo: gtmData.processDesTwo,
            processDesThree: gtmData.processDesThree,
            processDesFour: gtmData.processDesFour,
            processDesFive: gtmData.processDesFive,
            processDesSix: gtmData.processDesSix,
            processDesSeven: gtmData.processDesSeven,
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
  
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         setIsVisiblecard(entry.isIntersecting);
  //       });
  //     },
  //     { threshold: 0.5 }
  //   );

  //   if (cardsRef.current) {
  //     observer.observe(cardsRef.current);
  //   }

  //   return () => observer.disconnect();
  // }, []);
  
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//         (entries) => {
//             entries.forEach((entry) => setIsVisibleAch(entry.isIntersecting));
//         },
//         { threshold: 0.5 }
//     );

//     observer.observe(achRef.current);
//     return () => observer.disconnect();
// }, []);

// useEffect(() => {
//   const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => setIsVisibleTesti(entry.isIntersecting));
//   }, { threshold: 0.5 });

//   observer.observe(testiRef.current);
//   return () => observer.disconnect();
// }, []);

// useEffect(() => {
//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => setIsVisible(entry.isIntersecting));
//     }, { threshold: 0.5 }); 

//     observer.observe(containerRef.current);
//     return () => observer.disconnect(); 
// }, []);

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

const toggleDarkMode = () => setDarkMode(!darkMode);

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
useScrollToTop();

  const firstThreeCaseStudies = caseStudies.slice(0, 3);
    return (
        <>
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
    
        <section class="hero-container-sales">
          <div class="hero-content-sales">
            
            <h2 class="hero-heading-sales">
            {windowWidth >= 1200 ? <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Your Gateway to Strategic GTM Consultancy',
        7000, 
       
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '40px', display: 'inline-block' }}
      repeat={Infinity}
    /> : 'Your Gateway to Strategic GTM Consultancy'}
              
            </h2>
            <p class="hero-desc-sales">
            {data.bannerDescription}
            </p>
            <div class="consult-button-sales"> <Link to="/contact-us" className='scheduler-set'>Schedule a Free Consultation</Link> </div>
          </div>
        </section>
      </article>

      {/* <!-- sales page banner --> */}
      <article class="sales-solutions" >
        <h2 class="sales-heading" >{data.featuresMainHeading}</h2>
        <p class="sales-banner-desc">
         {data.featuresMainDescription}
        </p>
        <div class="sales-banner-container">
          <div class="sales-cards one-with-white-back">
            <div class="icon-container">
              <img
                src={salesone}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">{data.featuresHeadingOne}</h3>
            <div class="sales-card-description">
            {data.featuresDescriptionOne}
            </div>
          </div>

          <div class="sales-cards one-with-blue-back">
            <div class="icon-container">
              <img
                src={salestwo}
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
                src={salesthree}
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
          {/* <div class="sales-cards one-with-blue-back">
            <div class="icon-container">
              <img
                src={salesfour}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">Sales Expansion</h3>
            <div class="sales-card-description">
              Expand your market reach and drive growth with our Sales Expansion
              strategies tailored to your unique business goals.
            </div>
          </div>

          <div class="sales-cards one-with-white-back">
            <div class="icon-container">
              <img
                src={salesfive}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">Product-led Growth</h3>
            <div class="sales-card-description">
              Leverage your product as a key driver for business growth with our
              Product-led Growth strategies, turning users into loyal customers.
            </div>
          </div>
          <div class="sales-cards one-with-blue-back">
            <div class="icon-container">
              <img
                src={salessix}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <div class="more-info-container">
              <div class="right-button">
                <span>More Info</span>
              </div>
            </div>
          </div> */}
        </div>
      </article>

      {/* <!-- Section path  --> */}
      <article class="path">
        <section class="path-container">
          <h2 class="path-heading">
          Our GTM Advisory Process:
          </h2>
          <p class="sales-process-desc">
          We possess the know-how to identify precise issues and deliver customized solutions in a matter of days rather than weeks. While we recognize your capability to resolve matters on your own, can you afford to wait for two quarters to confirm you’re right? That’s where we fit in - we’ll unravel the puzzle for you here and now.
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
                <h2 class="circle-heading-sales">Define Your Goals</h2>
                <h3 class="circle-text-sales">
                Clearly articulate objectives aligned with your business strategy.
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
                <h2 class="circle-heading-sales">Strategize GTM Roadmap</h2>
                <h3 class="circle-text-sales">
                Craft a comprehensive plan covering sales, customer experience, and sales enablement.
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
                <h2 class="circle-heading-sales">Implement Targeted Actions</h2>
                <h3 class="circle-text-sales">
                Execute precise strategies to optimize market presence, customer experiences, and empower sales teams.
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
                <h2 class="circle-heading-sales">Assign Stakeholders</h2>
                <h3 class="circle-text-sales">
                Define roles for seamless execution, leveraging key stakeholders
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
                <h2 class="circle-heading-sales">Evaluate and Refine</h2>
                <h3 class="circle-text-sales">
                Test, gather insights, and refine the GTM process for maximum impact.
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
                <h2 class="circle-heading-sales">Execute Optimized Plan</h2>
                <h3 class="circle-text-sales">
                Implement refined strategies across sales, customer experience, and sales enablement
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
                <h2 class="circle-heading-sales">Track Performance</h2>
                <h3 class="circle-text-sales">
                Monitor results against goals, measuring success in real-time.
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
                <h2 class="circle-heading-sales">Continuously Refine</h2>
                <h3 class="circle-text-sales">
                Iterate based on insights, ensuring ongoing improvement in the dynamic GTM landscape
                </h3>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* <!-- section new process --> */}
      <article class="process-new">
        <section class="process-new-container">
          <h2 class="path-heading">A Proven Path to Success</h2>
          <p class="work-desc">
            Explore the journey to excellence with Phi Consulting's strategic
            process – your gateway to optimizing sales performance, enhancing
            customer experience, and achieving sustained growth.
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
                  <div class="process-new-heading">Define Your Goals</div>
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
                  <div class="process-new-heading">Plan & Map Your Process</div>
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
                  <div class="process-new-heading">Set Actions</div>
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
                  <div class="process-new-heading">Assign Stakeholders</div>
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
                  <div class="process-new-heading">Test the Process</div>
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
                  <div class="process-new-heading">Implement the Process</div>
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
                  <div class="process-new-heading">Monitor the Results</div>
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
                  <div class="process-new-heading">Make Improvements</div>
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
              42% businesses adopt go-to-market strategies for calculating
              customer value, 28% for business expansion/upgrades, and 61% to
              build customer experience
            </h2>
          </div>
        </section>
      </article>

      {/* <!-- why phi for sale Section --> */}
      <article class="why-phi-for-sales">
        <h2 class="why-phi-heading">{data.whySectionHeading}</h2>
        {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal centered title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal> */}
        <div class="insights-container">
          <div class="insights-bundle" ref={(el) => insightsRefs.current.push(el)}>
            <div class="left-section-insights">
              <div class="overlay-container one-why">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">
                  {data.whyBoxOneHeading}
                  </h2>
                  <p class="overlay-desc">
                  {data.whyBoxOneDescription}
                  </p>
                </div>
              </div>
            </div>
            <div class="right-section-insights">
              <div class="overlay-container two-why">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">
                  {data.whyBoxTwoHeading}
                  </h2>
                  <p class="overlay-desc">
                  {data.whyBoxTwoDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="insights-bundle" ref={(el) => insightsRefs.current.push(el)}>
            <div class="left-section-insights">
              <div class="overlay-container three-why">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">{data.whyBoxThreeHeading}</h2>
                  <p class="overlay-desc">
                  {data.whyBoxThreeDescription}
                  </p>
                </div>
              </div>
            </div>
            <div class="right-section-insights">
              <div class="overlay-container four-why">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">
                  {data.whyBoxFourHeading}
                  </h2>
                  <p class="overlay-desc">
                  {data.whyBoxFourDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="insights-bundle" ref={(el) => insightsRefs.current.push(el)}>
            <div class="left-section-insights-last">
              <div class="overlay-container five-why">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">
                  {data.whyBoxFiveHeading}
                  </h2>
                  <p class="overlay-desc">
                  {data.whyBoxFiveDescription}
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- <div class="right-section-insights"></div> --> */}
          </div>
        </div>
      </article>

        {/* <!-- Clients Section --> */}
        {/* <article className={`clients ${isVisible ? 'animate' : ''}`} ref={containerRef}>
       
        <section class="client-container">
          <div class="client-content">
            <h2 class="client-heading">Trusted by Industry Leaders</h2>
            <p class="client-desc">
              Phi Consulting has empowered startups and SMEs across diverse
              industries. <br />
              Our clients trust us for our deep expertise, personalized service,
              and commitment to delivering tangible results.
            </p>
            <div class="client-logo-container">
              <div class="logo-container-one">
                <div class="image-container">
                  <img
                    src={ATOB}
                    alt="AtoB_logo"
                    title="AtoB"
                    className='client-logos-sectio-hover'
                  />
                </div>
                <div class="image-container">
                  <img
                    src={bobtail}
                    alt="bobtail_logo"
                    title="BoBtail"
                    className='client-logos-sectio-hover'
                  />
                </div>

                <div class="image-container">
                  <img
                    src={joyride}
                    alt="joyride_logo"
                    title="Joyride"
                    className='client-logos-sectio-hover'
                  />
                </div>
                <div class="image-container">
                  <img
                    src={Truckx}
                    alt="truckx_logo"
                    title="TruckX"
                    className='client-logos-sectio-hover'
                  />
                </div>
                <div class="image-container">
                  <img
                    src={pallet}
                    alt="Pallet_logo"
                    title="Pallet"
                    className='client-logos-sectio-hover'
                  />
                </div>
              </div>
              <div class="logo-container-one">
                <div class="image-container-bottom">
                  <img
                    src={digitalOcean}
                    alt="bobtail_logo"
                    title="Digital Ocean"
                    className='client-logos-sectio-hover'
                  />
                </div>

                <div class="image-container-bottom">
                  <img
                    src={mudflap}
                    alt="joyride_logo"
                    title="Mudflap"
                    className='client-logos-sectio-hover'
                  />
                </div>
                <div class="image-container-bottom">
                  <img
                    src={sungrade}
                    alt="truckx_logo"
                    title="Sungrade Solar"
                    className='client-logos-sectio-hover'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </article> */}

      {/* <!-- Work small version Section --> */}
      {/* <article class="work" ref={cardsRef}>
        <section class="work-section">
          <h2 class="work-heading">Client Success Stories</h2>
          <p class="work-desc">
            Explore our portfolio to witness the transformative impact of Phi
            Consulting on businesses like yours. Each success story is a
            testament to our commitment to driving sales excellence.
          </p>
          <div class="work-row">
          {firstThreeCaseStudies.map(study => (
                <SmallWorkCard key={study._id} id={study._id} caseStudy={study} isVisible={isVisiblecard} 
                logo={study.imagetwo.includes('Atob') ? atobbox :
                study.imagetwo.includes('truckx') ? truckxbox :
                study.imagetwo.includes('pallet') ? palletbox :
                study.imagetwo.includes('solar') ? solarbox :
                study.imagetwo.includes('bobtail') ? bobtailbox :
                study.imagetwo.includes('joyride') ? joybox :
                study.imagetwo.includes('digital ocean') ? dobox :
                null}  
                image={study.imageone.includes('Atob') ? atobproduct :
                study.imageone.includes('truckx') ? truckxproduct :
                study.imageone.includes('pallet') ? palletproduct :
                study.imageone.includes('solar') ? solarproduct :
                study.imageone.includes('bobtail') ? bobtailproduct :
                study.imageone.includes('joyride') ? joyrideproduct :
                study.imageone.includes('digital ocean') ? doproduct :
                null} />
            ))}
          </div>

          <div class="right-button spacing-under">
          <span><Link to="/case-studies" className='morcases'>View More Case Studies</Link></span>
          </div>
        </section>
      </article> */}

      {/* <!-- Testimonial Section --> */}
      {/* <article class="testimonial">
        <section className="testimonial-container">
          <h2 class="testi-heading">
          We Have Successfully Retained Our Top 3 Clients For Over 3 Years.
          </h2>
          <p class="testi-desc">
            Our clients speak for the transformative impact of Phi Consulting.
            Partner with us and discover the potential for unprecedented growth,
            reduced costs, and optimized efficiency.
          </p>
        </section>

        <section className="testi-cards-container" ref={testiRef}>
          <div className={`testi-card ${isVisibleTesti ? 'animate' : ''}`}>
            <div class="circleBase type3 testi-one">
              
            </div>

            <p class="testi-quote">
              <q
                ><i
                  >Phi Consulting has delivered the project on time, meeting the client's expectations. They have communicated frequently and promptly via email and virtual meetings, ensuring an effective workflow. Their ability to adapt and willingness to improve the process are hallmarks of their work.
                  </i
                ></q
              >
            </p>
            <h3 class="testi-card-heading">Head of Customer Support - AtoB Financials</h3>
          </div>
          <div className={`testi-card ${isVisibleTesti ? 'animate' : ''}`}>
            <div class="circleBase type3 test-three">
              <img src="" alt="" />
            </div>

            <p class="testi-quote">
              <q
                ><i
                  >Phi Consulting's work meets the client's expectations and has a strong 60 Net Promoter Score. The team has an easy onboarding process and a turn-key nature that has impressed the client.
                  Head of Sales & Business Development - AtoB Financials</i
                ></q
              >
            </p>
            <h3 class="testi-card-heading">Head of Sales & Business Development - AtoB Financials</h3>
          </div>
        </section>
      </article> */}

      {/* <!-- Achievement Section --> */}
      {/* <article class="achievement">
        <section class="achievement-section">
          <h2 class="ach-heading">Our Achievements</h2>
        </section>
        <section class="ach-badges-container" ref={achRef}>
          <div className={`ach-badge ${isVisibleAch ? 'animate' : ''}`}>
            <img
               src={achiconone}
              alt=""
              width="200"
              height="230"
            />
          </div>
          <div className={`ach-badge ${isVisibleAch ? 'animate' : ''}`}>
            <img
               src={achicontwo}
              alt=""
              width="200"
              height="150"
            />
          </div>

          <div className={`ach-badge ${isVisibleAch ? 'animate' : ''}`}>
            <img
             src={achiconthree}
              alt=""
              width="250"
              height="220"
            />
          </div>
        </section>
      </article> */}

      {/* <!-- Call to Action Section --> */}
      <article class="cta-container">
        <section class="cta-sections-container">
          <div class="cta-content">
            <div class="cta-heading">
              Ready to Elevate Your Sales Strategy? Connect with Phi Consulting
              Today!
            </div>
            <div class="cta-descrip">
              Unlock unprecedented sales growth by partnering with Phi
              Consulting. Let's work together to redefine your sales strategy
              and achieve remarkable success. Contact us today to schedule a
              consultation.
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

export default SalesConsulting;