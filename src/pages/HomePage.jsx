import React,{ useState, useEffect, useRef } from 'react';
import ATOB from '../assets/img/new_logos_comps/newer/AtoB 2.png';
import bobtail from '../assets/img/new_logos_comps/bobtail.png';
import joyride from '../assets/img/new_logos_comps/joyride.png';
import Truckx from '../assets/img/new_logos_comps/TruckX.png';
import pallet from '../assets/img/new_logos_comps/newer/Pallet Logo.png';
import digitalOcean from '../assets/img/new_logos_comps/newer/digital-ocean.png';
import mudflap from '../assets/img/new_logos_comps/newer/Mudflap.png';
import sungrade from '../assets/img/new_logos_comps/sungrade solar.png';
// import valuegraph from '../assets/img/Traditional Growth mark_2.png';
import axios from 'axios';

import buisness from '../assets/img/services-icons/buisness.png';
import custExp from '../assets/img/services-icons/customer experience.png';
import financial from '../assets/img/services-icons/financial.png';
import hr from '../assets/img/services-icons/hr.png';
import sales from '../assets/img/services-icons/sales.png';

import clutchone from '../assets/img/achievements-badges/clutch_1.png';
import BBB from '../assets/img/achievements-badges/BBB.png';
import clutchtwo from '../assets/img/achievements-badges/clutch_2.png';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import CaseStudyMacroComps from '../components/shared/macroComps/CaseStudyMacroComps';
import BlogCard from '../components/shared/cards/BlogCard';
import CustomVideo from '../components/shared/videoComp/CustomVideo';
import { TypeAnimation } from 'react-type-animation';
import ScrollToTopButton from '../components/shared/buttons/ScrollToTopButton';
import blogs from "../data/blogs.json";
// import caseStudies from "../data/caseStudies.json";
import useScrollToTop from '../hooks/useScrollToTop';
import david from "../assets/video/world.mp4";
import eye from "../assets/img/eye.png";
import top from "../assets/img/top Arrow.png";
import { Helmet } from 'react-helmet';

import atobbox from "../assets/img/api_images/AToB-square.jpg";
import truckxbox from "../assets/img/api_images/truck-square.png";
import palletbox from "../assets/img/api_images/palletbox.png";
import solarbox from "../assets/img/api_images/Solarbox.png";
import bobtailbox from "../assets/img/api_images/bob.png";
import joybox from "../assets/img/api_images/joybox.png";
import dobox from "../assets/img/api_images/digitalocean-square.png";

import atobproduct from "../assets/img/api_images/atob-card.png"; 
import truckxproduct from "../assets/img/api_images/truckx-case.png";
import palletproduct from "../assets/img/api_images/pallet.png";
import solarproduct from "../assets/img/api_images/solar_one.webp";
import bobtailproduct from "../assets/img/api_images/Bobtail.png";
import joyrideproduct from "../assets/img/api_images/joytwo.png";
import doproduct from "../assets/img/api_images/digitalocean-product.png";

import backwrapper from "../assets/img/wrappers/website_background_wrapper_one.jpg";
import bactwo from "../assets/img/wrappers/background_wrapper_two.jpg";
import backthree from "../assets/img/wrappers/back_three.jpg";
import backClient from "../assets/img/wrappers/client_back.jpg";
import backcurls from "../assets/img/wrappers/back_curls.jpg";
import segmented from "../assets/img/wrappers/segemented.jpg";
import whatback from "../assets/img/wrappers/burn.webp";
import graph from "../assets/img/graph.png";
import iso from "../assets/img/recognitions/iso.webp";

const HomePage = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [caseStudies, setCaseStudies] = useState([]);
  const [blogs, setBlogs] = useState([]);
  
 const [isVisibleTesti, setIsVisibleTesti] = useState(false);
 const testiRef = useRef(null);

  const [isVisibleServices, setIsVisibleServices] = useState(false);
  const servicesRef = useRef(null);

  const [isVisibleFirst, setIsVisibleFirst] = useState(false);
  const firstRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const [isVisibleAch, setIsVisibleAch] = useState(false);
  const achRef = useRef(null);

  const [animateServices, setAnimateServices] = useState(false);
  const [animateTabs, setAnimateTabs] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const [data, setData] = useState({
    _id: '',
    heroHeading: '',
    heroDescription: '',
    clientHeading: '',
    clientDescription: '',
    valueHeading: '',
    valueDescription: '',
    servicesHeading: '',
    servicesDescription: '',
    caseStudyHeading: '',
    caseStudyDescription: '',
    ctaHeading: '',
    ctaDescription: '',
    testiHeading: '',
    testiDescription: '',
    testiOne: '',
    testiOneDesignation: '',
    testiTwo: '',
    testiTwoDesignation: '',
    testiThree: '',
    testiThreeDesignation: '',
    insightsHeading: '',
    insightsDescription: '',
    boardHeading: '',
    boardDescription: '',
  });

    const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  };

  useEffect(() => {
    const fetchHomePageData = async () => {
      try {
        const response = await axios.get('https://prickle-balanced-archaeopteryx.glitch.me/homepage');
        console.log(`your data`, response.data);
        if (response.data && response.data.length > 0) {
          const homepageData = response.data[0]; // Assuming the first entry is what we want
          setData({
            _id: homepageData._id,
            heroheading: homepageData.heroheading,
            herodescription: homepageData.herodescription,
            clientheading: homepageData.clientheading,
            clientdescription: homepageData.clientdescription,
            valueheading: homepageData.valueheading,
            valuedescription: homepageData.valuedescription,
            servicesheading: homepageData.servicesheading,
            servicesDescription: homepageData.servicesDescription,
            casestudyheading: homepageData.casestudyheading,
            casestudyDescription: homepageData.casestudyDescription,
            ctaheading: homepageData.ctaheading,
            ctadescription: homepageData.ctadescription,
            testiheading: homepageData.testiheading,
            testidescription: homepageData.testidescription,
            testione: homepageData.testione,
            testonedesignation: homepageData.testonedesignation,
            testitwo: homepageData.testitwo,
            testtwodesignation: homepageData.testtwodesignation,
            testithree: homepageData.testithree,
            testthreedesignation: homepageData.testthreedesignation,
            insightsheading: homepageData.insightsheading,
            insightsdescription: homepageData.insightsdescription,
            boardheading: homepageData.boardheading,
            boarddescription: homepageData.boarddescription,
            // Set other fields based on your API response structure
          });
        }
      } catch (error) {
        console.error("Error fetching homepage data:", error);
      }
    };

    fetchHomePageData();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get('https://prickle-balanced-archaeopteryx.glitch.me/blogs'); 
        setBlogs(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    // Fetch case studies from API
    const fetchCaseStudies = async () => {
      try {
        const response = await axios.get('https://prickle-balanced-archaeopteryx.glitch.me//cases');
        setCaseStudies(response.data.slice(0, 3)); // Store only the first three entries
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching case studies:', error);
        // Optionally, handle errors, e.g., set an error state
      }
    };

    fetchCaseStudies();
    // ... other useEffect hooks ...
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
      const observer = new IntersectionObserver(
          (entries) => {
              entries.forEach((entry) => setIsVisibleAch(entry.isIntersecting));
          },
          { threshold: 0.5 }
      );

      observer.observe(achRef.current);
      return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setIsVisibleTesti(entry.isIntersecting));
    }, { threshold: 0.5 });

    observer.observe(testiRef.current);
    return () => observer.disconnect();
}, []);

  useEffect(() => {
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisibleFirst(entry.isIntersecting));
  }, { threshold: 0.5 });

  observer.observe(firstRef.current);
  return () => observer.disconnect();
}, []);

  useEffect(() => {
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => setIsVisible(entry.isIntersecting));
      }, { threshold: 0.5 }); 

      observer.observe(containerRef.current);
      return () => observer.disconnect(); 
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setIsVisibleServices(entry.isIntersecting));
    }, { threshold: 0.6 }); // Adjust threshold as needed

    observer.observe(servicesRef.current);
    return () => observer.disconnect();
}, []);

  useEffect(() => {
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              setAnimateServices(true);
              // Delay the tab animations to start after the services animation
              setTimeout(() => setAnimateTabs(true), 500); // Adjust the delay as needed
          } else {
              setAnimateServices(false);
              setAnimateTabs(false);
          }
      });
  }, { threshold: 0.5 });

  observer.observe(servicesRef.current);
  return () => observer.disconnect();
}, []);

  const handleTabClickOne = () => {
    window.location.href = '/solutions/investors-relation';
  } 

  const handleTabClickTwo = () => {
    window.location.href = '/solutions/go-to-market-strategy';
  } 

  const handleTabClickThree = () => {
    window.location.href = '/solutions/financial-consulting';
  } 

  const handleTabClickFour = () => {
    window.location.href = '/solutions/hr-recruitment';
  } 

  const handleTabClickFive = () => {
    window.location.href = '/sales-consulting';
  } 

  const gotoContacts = () => {
    window.location.href = '/contact-us';
  }

  const firstTwoBlogs = blogs.slice(4, 6);
  useScrollToTop();

  useEffect(() => {
    // Function to handle the parallax effect
    const handleScroll = () => {
      const offset = window.pageYOffset;
      document.body.style.backgroundPositionY = offset * 0.5 + 'px'; // Adjust the speed of the parallax effect by changing the multiplier
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
    // Setting the background color with a transparent effect for the services section
    const servicesSection = document.querySelector('.services');
    
    if (servicesSection) {
      // Apply light blue background color with transparency
      servicesSection.style.backgroundColor = 'rgba(173, 216, 230, 0.5)';
      // Apply top and bottom borders
      servicesSection.style.borderTop = '2px solid #add8e6'; // Light blue color
      servicesSection.style.borderBottom = '2px solid #add8e6'; // Light blue color
      // Ensure content inside is not affected by the background color
      // This is inherently the case with the background color property
      // but ensure text and other elements have enough contrast
    }

    // Cleanup function to revert styles
    return () => {
      if (servicesSection) {
        servicesSection.style.backgroundColor = '';
        servicesSection.style.borderTop = '';
        servicesSection.style.borderBottom = '';
      }
    };
  }, []); 

  useEffect(() => {
    const workArticle = document.querySelector('.work');

    // Function to handle the parallax scrolling effect
    const handleParallaxScroll = () => {
      // Adjust the speed of the parallax by changing the multiplier (0.5 in this case)
      const offset = window.pageYOffset - workArticle.offsetTop;
      workArticle.style.backgroundPositionY = `${offset * 0.5}px`;
    };

    if (workArticle) {
      workArticle.style.backgroundImage = `url(${backcurls})`;
      workArticle.style.backgroundSize = 'cover';
      workArticle.style.backgroundPosition = 'center';
      // workArticle.style.backgroundAttachment = 'fixed'; // Needed for parallax effect
      workArticle.style.backgroundRepeat = 'no-repeat';

      // Add the event listener for the scroll event to create the parallax effect
      window.addEventListener('scroll', handleParallaxScroll);
    }

    // Cleanup function to revert styles and remove the event listener
    return () => {
      if (workArticle) {
        workArticle.style.backgroundImage = '';
        workArticle.style.backgroundSize = '';
        workArticle.style.backgroundPosition = '';
        // workArticle.style.backgroundAttachment = '';
        workArticle.style.backgroundRepeat = '';

        window.removeEventListener('scroll', handleParallaxScroll);
      }
    };
  }, []); 

  useEffect(() => {
    // Setting the background color with a transparent effect for the services section
    const servicesSection = document.querySelector('.services');
    
    if (servicesSection) {
      // Apply light blue background color with transparency
      servicesSection.style.backgroundColor = 'rgba(173, 216, 230, 0.5)';
      // Apply top and bottom borders
      servicesSection.style.borderTop = '2px solid #add8e6'; // Light blue color
      servicesSection.style.borderBottom = '2px solid #add8e6'; // Light blue color
      // Ensure content inside is not affected by the background color
      // This is inherently the case with the background color property
      // but ensure text and other elements have enough contrast
    }

    // Cleanup function to revert styles
    return () => {
      if (servicesSection) {
        servicesSection.style.backgroundColor = '';
        servicesSection.style.borderTop = '';
        servicesSection.style.borderBottom = '';
      }
    };
  }, []); 

  useEffect(() => {
    // Setting the background color with a transparent effect for the services section
    const servicesSection = document.querySelector('.testimonial');
    
    if (servicesSection) {
      // Apply light blue background color with transparency
      servicesSection.style.backgroundColor = 'rgba(173, 216, 230, 0.5)';
      // Apply top and bottom borders
      servicesSection.style.borderTop = '2px solid #add8e6'; // Light blue color
      servicesSection.style.borderBottom = '2px solid #add8e6'; // Light blue color
      // Ensure content inside is not affected by the background color
      // This is inherently the case with the background color property
      // but ensure text and other elements have enough contrast
    }

    // Cleanup function to revert styles
    return () => {
      if (servicesSection) {
        servicesSection.style.backgroundColor = '';
        servicesSection.style.borderTop = '';
        servicesSection.style.borderBottom = '';
      }
    };
  }, []);

  useEffect(() => {
    // Setting the background color with a transparent effect for the services section
    const servicesSection = document.querySelector('.blog');
    
    if (servicesSection) {
      // Apply light blue background color with transparency
      servicesSection.style.backgroundColor = 'rgba(173, 216, 230, 0.5)';
      // Apply top and bottom borders
      servicesSection.style.borderTop = '2px solid #add8e6'; // Light blue color
      servicesSection.style.borderBottom = '2px solid #add8e6'; // Light blue color
      // Ensure content inside is not affected by the background color
      // This is inherently the case with the background color property
      // but ensure text and other elements have enough contrast
    }

    // Cleanup function to revert styles
    return () => {
      if (servicesSection) {
        servicesSection.style.backgroundColor = '';
        servicesSection.style.borderTop = '';
        servicesSection.style.borderBottom = '';
      }
    };
  }, []);

  return (
    <>
<Helmet>
<title>Phi Consulting - Home</title>
  <meta name="description" content="Phi Consulting is your trusted tech consulting partner, specializing in startups & SMEs in IoT, Fintech, SaaS, & IaaS. Expertise in Go-To-Market Strategy, HR, Investor Relations & Financial Consulting. Schedule a free consultation." />
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
        <section class="hero-container">
          <div class="hero-content">
          {/* <CustomVideo src={david} /> */}
          {windowWidth >= 1200 && <CustomVideo src={david} />}
            {/* <!-- <h3 class="line-top">Leadership Through Partnership</h3> --> */}
            <h2 class="hero-heading">
              <span class="phi">
              {windowWidth >= 1200 ? <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Leadership Through Partnership',
        7000, 
       
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '40px', display: 'inline-block' }}
      repeat={Infinity}
    /> : 'Leadership Through Partnership'}
                </span>
            </h2>
            <p class="hero-desc">
            {data.herodescription}
            </p>
            <div class="consult-button" onClick={gotoContacts}><Tooltip title="Contact Page">Schedule a Free Consultation</Tooltip></div>
          </div>
        </section>
      </article>

      {/* <!-- Clients Section --> */}
      <article className={`clients ${isVisible ? 'animate' : ''}`} ref={containerRef}>
        <section class="client-container">
          <div class="client-content">
            <h2 class="client-heading">{data.clientheading}</h2>
            <p class="client-desc">
            {data.clientdescription}
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
      </article>

      {/* <!-- Value Statement Section  --> */}
      <article class="value">
        <section class="value-container" ref={firstRef}>
          <div class="value-content">
            <div class="new-values">
              <div className={`new-value-left-section ${isVisibleFirst ? 'visible-left' : ''}`}>
                <h2 class="value-heading">{data.valueheading}</h2>
                <p class="value-desc">
                {data.valuedescription}
                </p>
              </div>
              <div  className={`new-value-right-section ${isVisibleFirst ? 'visible-right' : ''}`}>
                <img
                  src={graph}
                  alt=""
                  class="graph-biz"
                  title='Unpresedented growth insured with phi consulting'
                />
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* <!-- services section --> */}
      <article className='services'>
        <section className={`services-container ${isVisibleServices ? 'visible' : ''}`} ref={servicesRef}>
          <h2 class="services-heading">
          {data.servicesheading}
          </h2>
          <p class="services-desc">
          {data.servicesDescription}
          </p>
          <div class="services-material">
            <div class="services-content">
              <div class="services-tab-container-one">
              
              <div className="services-tab second-tab" onClick={handleTabClickOne}>
                  <div class="tab-icon">
                    <img
                      src={buisness}
                      alt="services icons"
                      class="tab-image"
                    />
                  </div>
                  <div class="tab-info-container">
                    <div class="tab-title">
                      <h3 class="title-third">Investor Relations</h3>
                    </div>
                  </div>
                </div>
              
              <div class="services-tab third-tab" onClick={handleTabClickTwo}>
                  <div class="tab-icon">
                    <img
                      src={custExp}
                      alt="services icons"
                      class="tab-image"
                      width="80"
                      height="80"
                    />
                  </div>
                  <div class="tab-info-container">
                    <div class="tab-title">
                      <h3 class="title-third">GTM Advisory</h3>
                    </div>
                  </div>
                </div>
                
              <div class="services-tab fourth-tab" onClick={handleTabClickThree}>
                  <div class="tab-icon">
                    <img
                      src={financial}
                      alt="services icons"
                      class="tab-image"
                      width="80"
                      height="80"
                    />
                  </div>
                  <div class="tab-info-container">
                    <div class="tab-title">
                      <h3 class="title-third">Financial Consulting</h3>
                    </div>
                    {/* <!-- <div class="tab-desc">
                      Drive profitability and responsibility through strategic
                      financial guidance
                    </div> --> */}
                  </div>
                </div>
               
              <div class="services-tab fifth-tab" onClick={handleTabClickFour}>
                  <div class="tab-icon">
                    <img
                      src={hr}
                      alt="services icons"
                      class="tab-image"
                      width="80"
                      height="80"
                    />
                  </div>
                  <div class="tab-info-container">
                    <div class="tab-title">
                      <h3 class="title-third">HR & Recruitment</h3>
                    </div>
                    {/* <!-- <div class="tab-desc">
                      Build a dynamic and skilled workforce with our specialized
                      HR solutions
                    </div> --> */}
                  </div>
                </div>
                
              {/* <div class="services-tab sixth-tab" onClick={handleTabClickFive}>
                  <div class="tab-icon">
                    <img
                      src={sales}
                      alt="services icons"
                      class="tab-image"
                      width="80"
                      height="80"
                    />
                  </div>
                  <div class="tab-info-container">
                    <div class="tab-title">
                      <h3 class="title-third">Sales Consulting</h3>
                    </div>
                  </div>
                </div> */}
               
                <div class="services-button-container">
                  <div class="explore-more-button">
                  <Link to="/solutions" class="explore-more-services">Explore More</Link>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* <!-- Work Section --> */}
      <article class="work">
        <section class="work-section">
          <h2 class="work-heading">
          {data.casestudyheading}
          </h2>
          <p class="work-desc">
          {data.casestudyDescription}
          </p>
          {caseStudies.map((study, index) => {
  

  return (
                <CaseStudyMacroComps
                    key={study.id}
                    id={study._id}
                    title={study.title}
                    summary={study.summary}
                    cname={study.imagetwo.includes('Atob') ? 'Atob' :
                    study.imagetwo.includes('truckx') ? 'truckx' :
                    study.imagetwo.includes('pallet') ? 'pallet' :
                    study.imagetwo.includes('solar') ? 'solar' :
                    study.imagetwo.includes('bobtail') ? 'bobtail' :
                    study.imagetwo.includes('joyride') ? 'joyride' :
                    study.imagetwo.includes('digitalocean') ? 'digitalocean' :
                    null}
                    logo={study.imagetwo.includes('Atob') ? atobbox :
                    study.imagetwo.includes('truckx') ? truckxbox :
                    study.imagetwo.includes('pallet') ? palletbox :
                    study.imagetwo.includes('solar') ? solarbox :
                    study.imagetwo.includes('bobtail') ? bobtailbox :
                    study.imagetwo.includes('joyride') ? joybox :
                    study.imagetwo.includes('digitalocean') ? dobox :
                    null}
                    image={study.imageone.includes('Atob') ? atobproduct :
                    study.imageone.includes('truckx') ? truckxproduct :
                    study.imageone.includes('pallet') ? palletproduct :
                    study.imageone.includes('solar') ? solarproduct :
                    study.imageone.includes('bobtail') ? bobtailproduct :
                    study.imageone.includes('joyride') ? joyrideproduct :
                    study.imageone.includes('digitalocean') ? doproduct :
                    null}
                    isRight={index % 2 === 0}
                    urltag={study.imageone.includes('Atob') ? 'Atob' :
                    study.imageone.includes('truckx') ? 'truckx' :
                    study.imageone.includes('pallet') ? 'pallet' :
                    study.imageone.includes('solar') ? 'solar' :
                    study.imageone.includes('bobtail') ? 'bobtail' :
                    study.imageone.includes('joyride') ? 'joyride' :
                    study.imageone.includes('digital ocean') ? 'digital ocean' :
                    null}
                    />
                    );
                  })}
          <div class="right-button spacing-under">
            <div class="case-button-more">
              <Link to="/case-studies" className='morcases'>View More Case Studies</Link>
             </div>
          </div>
        </section>
      </article>

      {/* <!-- Call to Action Section --> */}
      <article class="cta-container">
        <section class="cta-sections-container">
          <div class="cta-content">
            <div class="cta-heading">{data.ctaheading}</div>
            <div class="cta-descrip">
            {data.ctadescription}
            </div>
          </div>
          <div class="cta-button-section">
            <div class="right-button-header">
              <span
                ><Link to="/contact-us" class="inner-header" 
                  >Get a Free Consultation</Link
                ></span
              >
            </div>
          </div>
        </section>
      </article>
      
      {/* <!-- Testimonial Section --> */}
      <article class="testimonial">
        <section className="testimonial-container">
          <h2 class="testi-heading">
          {data.testiheading}
          </h2>
          <p class="testi-desc">
          {data.testidescription}
          </p>
        </section>

        <section className="testi-cards-container" ref={testiRef}>
          <div className={`testi-card ${isVisibleTesti ? 'animate' : ''}`}>
            <div class="circleBase type3 testi-one">
             
            </div>

            <p class="testi-quote wide-first">
              <q
                ><i
                  >{data.testione}
                  </i
                ></q
              >
            </p>
            <h3 class="testi-card-heading">{data.testonedesignation}</h3>
          </div>

          

          <div className={`testi-card ${isVisibleTesti ? 'animate' : ''}`}>
            <div class="circleBase type3 test-three">
              <img src="" alt="" />
            </div>

            <p class="testi-quote wider">
              <q
                ><i
                  >{data.testithree}</i
                ></q
              >
            </p>
            <h3 class="testi-card-heading">{data.testthreedesignation}</h3>
          </div>

          <div className={`testi-card ${isVisibleTesti ? 'animate' : ''}`}>
            <div class="circleBase type3 test-two">
              <img src="" alt="" />
            </div>

            <p class="testi-quote">
              <q
                ><i
                  >{data.testitwo}</i
                ></q
              >
            </p>
            <h3 class="testi-card-heading">{data.testtwodesignation}</h3>
          </div>
        </section>
      </article>

      {/* <!-- Achievement Section --> */}
      <article class="achievement">
        <section class="achievement-section">
          <h2 class="ach-heading">Recognitions</h2>
        </section>
        <section class="ach-badges-container" ref={achRef}>
          <div className={`ach-badge ${isVisibleAch ? 'animate' : ''}`}>
            <img
              src={clutchone}
              alt=""
              width="200"
              height="230"
            />
          </div>
          <div className={`ach-badge ${isVisibleAch ? 'animate' : ''}`}>
            <img
              src={iso}
              alt=""
              width="200"
              height="150"
            />
          </div>

          <div className={`ach-badge ${isVisibleAch ? 'animate' : ''}`}>
            <img
              src={clutchtwo}
              alt=""
              width="250"
              height="220"
            />
          </div>
        </section>
      </article>

      {/* <!-- Blog Section --> */}
      <article class="blog">
        <section class="blog-container">
          <h2 class="blog-title">{data.insightsheading}</h2>
          <p class="blog-desc">
          {data.insightsdescription}
          </p>
        </section>
        <section class="blog-cards-container">
        
        {firstTwoBlogs.map(study => (
                <BlogCard key={study._id} id={study._id} blogs={study} />
            ))}

        </section>
        <section class="button-readmore">
          <div class="right-button">
          <span><Link to="/blogs" className='morcases'>Read More</Link></span>
          </div>
        </section>
      </article>

      {/* <!-- banner Section --> */}
      <article class="banner">
        <section class="banner-container">
          <h3 class="line-top">
            Proven Expertise | Personalized Service | Innovation at Core
          </h3>
          <h2 class="banner-title">
            {data.boardheading}
          </h2>

          <p class="banner-desc"></p>

          <p class="banner-desc second-para">
            {data.boarddescription}
          </p>

          <div class="right-button" onClick={gotoContacts}>
            <span>Contact us</span>
          </div>
        </section>
      </article>
    </>
  )
}

export default HomePage;
