import React,{ useState, useEffect, useRef } from 'react';
import HeroSection from '../components/Home_page_Components/Hero Section/HeroSection';
import Banner from "../components/Home_page_Components/Banner Section/Banner";
import BlogSection from '../components/Home_page_Components/Blog Section/BlogSection';
import CtaSection from '../components/Home_page_Components/Cta Section/CtaSection';
// import CalculatorSecion from "../components/Home_page_Components/Calculator Section/CalculatorSection";
import ATOB from '../assets/img/new_logos_comps/newer/AtoB 2.webp';
import bobtail from '../assets/img/new_logos_comps/bobtail.webp';
import joyride from '../assets/img/new_logos_comps/joyride.webp';
import Truckx from '../assets/img/new_logos_comps/TruckX.webp';
import pallet from '../assets/img/new_logos_comps/newer/Pallet Logo.webp';
import digitalOcean from '../assets/img/new_logos_comps/newer/digital-ocean.webp';
import mudflap from '../assets/img/new_logos_comps/newer/Mudflap.webp';
import sungrade from '../assets/img/new_logos_comps/sungrade solar.webp';
import axios from 'axios';
import buisness from '../assets/img/services-icons/buisness.webp';
import custExp from '../assets/img/services-icons/customer experience.webp';
import financial from '../assets/img/services-icons/financial.webp';
import hr from '../assets/img/services-icons/hr.webp';
import clutchone from '../assets/img/achievements-badges/clutch_1.webp';
import clutchtwo from '../assets/img/achievements-badges/clutch_2.webp';
import { Tooltip, Slider, Input, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import CaseStudyMacroComps from '../components/shared/macroComps/CaseStudyMacroComps';
import useScrollToTop from '../hooks/useScrollToTop';
import eye from "../assets/img/eye.webp";
import { Helmet } from 'react-helmet';
import atobbox from "../assets/img/api_images/AToB-square.webp";
import truckxbox from "../assets/img/api_images/truck-square.webp";
import palletbox from "../assets/img/api_images/palletbox.webp";
import solarbox from "../assets/img/api_images/Solarbox.webp";
import bobtailbox from "../assets/img/api_images/bob.webp";
import joybox from "../assets/img/api_images/joybox.webp";
import dobox from "../assets/img/api_images/digitalocean-square.webp";
import atobproduct from "../assets/img/api_images/atob-card.webp"; 
import truckxproduct from "../assets/img/api_images/truckx-case.webp";
import palletproduct from "../assets/img/api_images/pallet.webp";
import solarproduct from "../assets/img/api_images/solar_one.webp";
import bobtailproduct from "../assets/img/api_images/Bobtail.webp";
import joyrideproduct from "../assets/img/api_images/joytwo.webp";
import doproduct from "../assets/img/api_images/digitalocean-product.webp";
import backcurls from "../assets/img/wrappers/back_curls.webp";
import whatback from "../assets/img/wrappers/burn.webp";
import graph from "../assets/img/graph.webp";
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

  const [currentSection, setCurrentSection] = useState(null);

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

  useEffect(() => {
    const heroSection = document.querySelector('.hero');
    // const scrollBadgeContainer = document.querySelector('.scroll-badge-container');
    const leftControl = document.querySelector('.left-section-control');
    const rightControl = document.querySelector('.right-section-control');
  
    const checkScroll = () => {
      const { bottom } = heroSection.getBoundingClientRect();
  
      if (bottom <= window.innerHeight) {
        // When the bottom of the hero section is at or above the bottom of the viewport
        leftControl.style.display = 'block';
        rightControl.style.display = 'block';
        // scrollBadgeContainer.style.display = 'none'; 
      } else {
        // When the hero section is fully in view
        leftControl.style.display = 'none';
        rightControl.style.display = 'none';
        // scrollBadgeContainer.style.display = 'block'; 
      }
    };
  
    // Initial check in case the page loads not at the top
    checkScroll();
  
    window.addEventListener('scroll', checkScroll);
  
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
        const sections = document.querySelectorAll('article'); // Assuming your sections are <article> elements
        let closestSection = null;
        let minDistance = Infinity;

        sections.forEach((section) => {
            const distance = Math.abs(section.getBoundingClientRect().top);
            if (distance < minDistance) {
                minDistance = distance;
                closestSection = section.id;
            }
        });

        setCurrentSection(closestSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on component mount in case the page is not at the top

    return () => window.removeEventListener('scroll', handleScroll);
}, []);

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
    const fetchCaseStudies = async () => {
      try {
        const response = await axios.get('https://prickle-balanced-archaeopteryx.glitch.me//cases');
        setCaseStudies(response.data.slice(0, 3));
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching case studies:', error);
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

  const gotoContacts = () => {
    window.location.href = '/contact-us';
  }

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      document.body.style.backgroundPositionY = offset * 0.5 + 'px'; 
    };
    document.body.style.backgroundImage = `url(${whatback})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundAttachment = '';
    };
  }, []);

  useEffect(() => {
    const servicesSection = document.querySelector('.services');
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

  useEffect(() => {
    const workArticle = document.querySelector('.work');
    const handleParallaxScroll = () => {
      const offset = window.pageYOffset - workArticle.offsetTop;
      workArticle.style.backgroundPositionY = `${offset * 0.5}px`;
    };

    if (workArticle) {
      workArticle.style.backgroundImage = `url(${backcurls})`;
      workArticle.style.backgroundSize = 'cover';
      workArticle.style.backgroundPosition = 'center';
      workArticle.style.backgroundRepeat = 'no-repeat';
      window.addEventListener('scroll', handleParallaxScroll);
    }
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
    const servicesSection = document.querySelector('.services');
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

  useEffect(() => {
    const servicesSection = document.querySelector('.testimonial');
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

  useEffect(() => {
    const servicesSection = document.querySelector('.blog');
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



  useScrollToTop();

  return (
    <>
     <Helmet>
       <title>Phi Consulting - Home</title>
       <meta name="description" content="Phi Consulting is your trusted tech consulting partner, specializing in startups & SMEs in IoT, Fintech, SaaS, & IaaS. Expertise in Go-To-Market Strategy, HR, Investor Relations & Financial Consulting. Schedule a free consultation." />
    </Helmet>
     <Helmet>
       <link rel="canonical" href="https://phiconsulting.org/home" />
    </Helmet>

    <div className={`overlayscreen ${darkMode ? 'activate' : ''}`}></div>
    <div className="left-section-control">
   </div>
    <div className="right-section-control">
            <Tooltip placement="leftTop" title="toggle eye protection">
            <button onClick={toggleDarkMode}> <img src={eye} alt="eye icon" width={25} height={25}/></button> 
            </Tooltip>
   </div>


    {/* <!-- Hero Section --> */}
    <HeroSection
      heroHeading={data.heroHeading}
      heroDescription={data.herodescription}
      windowWidth={windowWidth}
      gotoContacts={gotoContacts}
    />


      {/* <!-- Clients Section --> */}
      <article id="clients" className={`clients ${isVisible ? 'animate' : ''}`} ref={containerRef}>
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
      <article id="value" class="value">
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
      <article id="services" className='services'>
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
      <article id="work" class="work">
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
    <CtaSection
      ctaHeading={data.ctaheading}
      ctaDescription={data.ctadescription}
      gotoContacts={gotoContacts}
    />
      
      {/* <!-- Testimonial Section --> */}
      <article id="test" class="testimonial">
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
      <article id="achievement" class="achievement">
        <section class="achievement-section">
          <h2 class="ach-heading">Recognitions</h2>
        </section>
        <section class="ach-badges-container" ref={achRef}>
          <div className={`ach-badge ${isVisibleAch ? 'animate' : ''}`}>
            <img
              src={clutchone}
              alt=""
              // width="600"
              // height="600"
            />
          </div>
          <div className={`ach-badge ${isVisibleAch ? 'animate' : ''}`}>
            <img
              src={iso}
              alt=""
              // width="200"
              // height="150"
            />
          </div>

          <div className={`ach-badge ${isVisibleAch ? 'animate' : ''}`}>
            <img
              src={clutchtwo}
              alt=""
              // width="250"
              // height="220"
            />
          </div>
        </section>
      </article>

      {/* <article className="comparison-calculator">
      <section className="testimonial-container">
          <h2 class="cal-title-heading">
          ROI Calculator
          </h2>
          <p class="cal-title-description">
          The cost of hiring an SDR vs Phi Consulting. No lockups. All month-to-month. As long as we’re getting results, you’ll likely stick with us for a while.
          </p>
        </section>
      <section className="calculator-carrier-section">
 
    <div className="calculator left-calculator">
      <h2 className="calculator-heading">Cost of hiring an SDR:</h2>
      <p className='heading-top-calculator'>Number of Sales Executives:</p>
      <Slider
        min={1}
        max={100}
        value={leftExecutives}
        onChange={(value) => setLeftExecutives(value)}
      />
      <Input
        addonBefore="Executives"
        value={leftExecutives}
        onChange={(e) => setLeftExecutives(Number(e.target.value))}
        style={{ color:'white', width:"80%" }}
      />
      <div className='heading-top-calculator'>Total Pay Per Executive:</div>
      <Slider
        min={1000}
        max={1000000}
        value={leftPayPerExecutive}
        onChange={(value) => setLeftPayPerExecutive(value)}
      />
      <Input
        addonBefore="Pay/Executive"
        value={leftPayPerExecutive}
        onChange={(e) => setLeftPayPerExecutive(Number(e.target.value))}
        className='calc-input-spacing'
      />
    
    </div>

  </section>

  <section className="calculated-total-saving">
  <div className="savings-section">
  <Button className='calculate-button-text' type="primary" onClick={showModal}>
      Calculate
    </Button>
    <Modal
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width="75%"
      className="modal-homepage"
      footer={[
        <Button key="back" onClick={handleCancel}>
          Return
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          OK
        </Button>,
      ]}
    >
      <section className="popup-container">
        <div className="left-section-inpopup">
        <p className='heading-modal-large'>Total Savings with Phi Consulting:</p>
        <p className='heading-modal-large'>${leftTotalPay - rightPayPerExecutive} - USD per year</p>
        </div>
        <div className="right-section-inpopup">
        <p className='heading-modal-smaller'>Selected Number of Sales Executives(SDR):</p>
        <p className='heading-modal-smaller'>{leftExecutives}</p>
        <br />
        <p className='heading-modal-smaller'>Total Cost of Hiring an SDR:</p>
        <p className='heading-modal-smaller'>${leftTotalPay} - USD per year</p>
        <br />
        <p className='heading-modal-smaller'>Same Number of Phi Executives:</p>
        <p className='heading-modal-smaller'>{leftExecutives}</p>
        <br />
        <p className='heading-modal-smaller'>Total Cost of Hiring with Phi Consulting:</p>
        <p className='heading-modal-smaller'>${rightPayPerExecutive * leftExecutives} - USD per year</p>
        <br />
        </div>
      </section>
    </Modal>
    </div>
  </section>
      </article> */}
      

      {/* <!-- Blog Section --> */}
      <BlogSection 
        blogs={blogs.slice(0, 2)}
        insightsHeading={data.insightsheading}
        insightsDescription={data.insightsdescription}
      />

      {/* <!-- banner Section --> */}
      <Banner 
        boardHeading={data.boardheading} 
        boardDescription={data.boarddescription} 
        gotoContacts={gotoContacts} 
      />
    </>
  )
}

export default HomePage;
