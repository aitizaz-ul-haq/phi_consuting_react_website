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

import goal from "../../assets/img/process_icons/goal.png";
import planicon from "../../assets/img/process_icons/plan.png";
import actionicon from "../../assets/img/process_icons/action.png";
import assignicon from "../../assets/img/process_icons/assign.png";
import testicon from "../../assets/img/process_icons/test.png";
import impicon from "../../assets/img/process_icons/implement.png";
import monitoricon from "../../assets/img/process_icons/monitor.png";
import improveicon from "../../assets/img/process_icons/improve.png";

// import workone from "../../assets/img/atob-card.png";
// import worktwo from "../../assets/img/comp_logos/AToB-square.jpg";
// import workthree from "../../assets/img/digitalocean-product.png";
// import workfour from "../../assets/img/comp_logos/digitalocean-square.png";
// import workfive from "../../assets/img/truckx-case.png";
// import worksix from "../../assets/img/comp_logos/truck-square.png";

import achiconone from "../../assets/img/achievements-badges/clutch_1.png";
import achicontwo from "../../assets/img/achievements-badges/BBB.png";
import achiconthree from "../../assets/img/achievements-badges/clutch_2.png";

import SmallWorkCard from '../../components/shared/cards/SmallWorkCard';

import hriconone from "../../assets/img/hr_icons/hr service.png";
import hricontwo from "../../assets/img/hr_icons/Payroll & Benefits.png";
import hriconthree from "../../assets/img/hr_icons/Talent Development.png";
import hriconfour from "../../assets/img/hr_icons/executive.png";
import hriconfive from "../../assets/img/hr_icons/Organization Development.png";
import hriconsix from "../../assets/img/financial_consulting_icons/strategy (1).png";

import caseStudies from '../../data/caseStudies.json';
import useScrollToTop from '../../hooks/useScrollToTop';
import { Tooltip } from 'antd';
import eye from "../../assets/img/eye.png";
import top from "../../assets/img/top Arrow.png";
import { TypeAnimation } from 'react-type-animation';

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


const HrAndRecruitmentConsulting = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  // const [isVisibleTesti, setIsVisibleTesti] = useState(false);
  // const testiRef = useRef(null);
 
  //  const [isVisible, setIsVisible] = useState(false);
  //  const containerRef = useRef(null);
 
  //  const [isVisibleAch, setIsVisibleAch] = useState(false);
  //  const achRef = useRef(null);
 
  //  const [isVisiblecard, setIsVisiblecard] = useState(false);
  //  const cardsRef = useRef(null);
 
   const [processNewVisible, setProcessNewVisible] = useState(false);
   const processNewRef = useRef(null);
 
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const [darkMode, setDarkMode] = useState(false);
   const insightsRefs = useRef([]);

   useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/cases');
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
   
 
 
  //  useEffect(() => {
  //    const observer = new IntersectionObserver(
  //      (entries) => {
  //        entries.forEach((entry) => {
  //          setIsVisiblecard(entry.isIntersecting);
  //        });
  //      },
  //      { threshold: 0.5 }
  //    );
 
  //    if (cardsRef.current) {
  //      observer.observe(cardsRef.current);
  //    }
 
  //    return () => observer.disconnect();
  //  }, []);
   
 
//    useEffect(() => {
//      const observer = new IntersectionObserver(
//          (entries) => {
//              entries.forEach((entry) => setIsVisibleAch(entry.isIntersecting));
//          },
//          { threshold: 0.5 }
//      );
 
//      observer.observe(achRef.current);
//      return () => observer.disconnect();
//  }, []);
 
//  useEffect(() => {
//    const observer = new IntersectionObserver(entries => {
//        entries.forEach(entry => setIsVisibleTesti(entry.isIntersecting));
//    }, { threshold: 0.5 });
 
//    observer.observe(testiRef.current);
//    return () => observer.disconnect();
//  }, []);
 
 
//  useEffect(() => {
//      const observer = new IntersectionObserver(entries => {
//          entries.forEach(entry => setIsVisible(entry.isIntersecting));
//      }, { threshold: 0.5 }); 
 
//      observer.observe(containerRef.current);
//      return () => observer.disconnect(); 
//  }, []);

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
        <section class="hero-container-hr-consul">
          <div class="hero-content-hr-consul">
            <h2 class="hero-heading-hr-consul">
            {windowWidth >= 1200 ? <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        ' Hiring that’s efficient on cost and effective on value',
        7000, 
       
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '40px', display: 'inline-block' }}
      repeat={Infinity}
    /> : ' Hiring that’s efficient on cost and effective on value'}
           

            </h2>
            <p class="hero-desc-hr-consul">
            Phi Consulting connects emerging startups with top talent in a 5-stage hiring process. We ensure that the talent selected is not only highly skilled but also global-ready.
            </p>
            <div class="consult-button-hr-consul">
            <Link to="/contact-us" className='scheduler-set'> Schedule a Free Consultation</Link>
             
            </div>
          </div>
        </section>
      </article>

      {/* <!-- sales page banner --> */}
      <article class="sales-solutions">
        <h2 class="sales-heading">Vetted at par with the international standards of the top companies around the world.</h2>
        {/* <p class="sales-banner-desc">
          Elevate your workforce potential with Phi Consulting's HR services –
          where strategic solutions meet talent excellence for a future-ready
          organization.
        </p> */}
        <div class="sales-banner-container">
          <div class="sales-cards one-with-white-back">
            <div class="icon-container">
              <img
                src={hriconone}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">360 Degree HR Service</h3>
            <div class="sales-card-description">
            Phi Consulting provides holistic HR solutions, covering everything from employee onboarding to engagement and retention strategies. Enhance your workforce management with our comprehensive 360-degree HR Service.
            </div>
          </div>

          <div class="sales-cards one-with-blue-back">
            <div class="icon-container">
              <img
                src={hricontwo}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">Payroll & Benefits</h3>
            <div class="sales-card-description">
            Streamline payroll processes and optimize benefits administration with Phi Consulting. Ensure accurate and efficient financial management, leaving you more time to focus on your core business.
            </div>
          </div>
          <div class="sales-cards one-with-white-back">
            <div class="icon-container">
              <img
                src={hriconthree}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">Talent Development</h3>
            <div class="sales-card-description">
            Invest in your team's growth with Phi Consulting's Talent Development services. Tailored training programs and skill enhancement initiatives ensure your workforce is prepared for current and future challenges.
            </div>
          </div>
        </div>
        <div class="sales-banner-container down-spacing">
          <div class="sales-cards one-with-blue-back">
            <div class="icon-container">
              <img
                src={hriconfour}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">Executive Search</h3>
            <div class="sales-card-description">
            For critical leadership roles, trust Phi Consulting's Executive Search services. We specialize in identifying and securing top-tier executives to lead your organization to new heights.
            </div>
          </div>

          <div class="sales-cards one-with-white-back">
            <div class="icon-container">
              <img
                src={hriconfive}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">Organization Development</h3>
            <div class="sales-card-description">
            Phi Consulting aids in developing agile and efficient organizations. From restructuring to cultural transformation, we provide strategic guidance for sustainable organizational development.
            </div>
          </div>
          {/* <div class="sales-cards one-with-blue-back">
            <div class="icon-container">
              <img
                src={hriconsix}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">Strategy Management</h3>
            <div class="sales-card-description">
              Align your organizational goals, enhance decision-making
              processes, and drive sustainable growth through strategic
              initiatives.
            </div>
          </div> */}
        </div>
      </article>

      {/* <!-- Section path  --> */}
      <article class="path">
        <section class="path-container">
          <h2 class="path-heading">Our Process</h2>
          <p class="sales-process-desc">
            Phi Consulting follows a structured process to ensure the success of
            your HR and Recruitment strategies
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
                  Collaboratively outline your HR and recruitment objectives.
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
                <h2 class="circle-heading-sales">Plan & Map Your Process</h2>
                <h3 class="circle-text-sales">
                  Develop a customized roadmap tailored to your business needs.
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
                <h2 class="circle-heading-sales">Set Actions</h2>
                <h3 class="circle-text-sales">
                  Implement strategic actions for effective talent management.
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
                  Clearly define roles and responsibilities for flawless
                  execution.
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
                <h2 class="circle-heading-sales">Test the Process</h2>
                <h3 class="circle-text-sales">
                  Rigorously evaluate and fine-tune the proposed strategies.
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
                <h2 class="circle-heading-sales">Implementation</h2>
                <h3 class="circle-text-sales">
                  Execute the optimized HR and recruitment plans with precision.
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
                <h2 class="circle-heading-sales">Monitor the Results</h2>
                <h3 class="circle-text-sales">
                  Continuously track and analyze the impact on your workforce.
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
                <h2 class="circle-heading-sales">Iterate the Process</h2>
                <h3 class="circle-text-sales">
                  Adapt and refine strategies based on real-time results and
                  changing business landscapes.
                </h3>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* <!-- section new process --> */}
      <article class="process-new">
        <section class="process-new-container">
          <h2 class="path-heading">Every talent in our network is pre-vetted and qualified on the below parameters.</h2>
          <p class="work-desc">
          Right Matchmaking is at the core of everything that Phi does, hence, we put in a great deal of time and effort to ensure that the first shortlisted talent matches your requirements.
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
                  <div class="process-new-heading">Profile Screening & Shortlisting</div>
                  <div class="process-new-description">
                  We review tons of applications against our minimum criteria, their professional journey, and holistic background checks.
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
                  <div class="process-new-heading">Language Proficiency</div>
                  <div class="process-new-description-right-side">
                  AI-powered communication assessment tests a candidate's reading, writing, pronunciation, clarity, fluency, and speed of speech.

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
                  <div class="process-new-heading">Aptitude Evaluation</div>
                  <div class="process-new-description">
                  We conduct a scientifically designed aptitude test to check their reasoning and problem-solving ability.
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
                  <div class="process-new-heading">Technical Assessment</div>
                  <div class="process-new-description-right-side">
                  We have curated one of the toughest and most advanced technical assessments to vet talent's capabilities, these are role-based extremely stringent tests that filter the top 10% of talents.
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
                  <div class="process-new-heading">Culture-Fit</div>
                  <div class="process-new-description">
                  Our Talent Acquisition experts conduct the final interview understanding the candidate's preferences and expectations to do the right matchmaking.
                  </div>
                </div>
              </div>
            </div>
            <div class="right-process-section">
              {/* <div className={`tooltip-left ${processNewVisible ? 'fade-in' : ''}`}>
                <img
                  src="../assets/img/process_icons/implement.png"
                  alt=""
                  class="new-process-icon"
                />
                <div class="text-container">
                  <div class="process-new-heading">Implement the Process</div>
                  <div class="process-new-description-right-side">
                    Execute strategies flawlessly with our hands-on approach,
                    bringing the plan to life.
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div class="process-new-section">
            {/* <div class="left-process-section">
              <div className={`tooltip-right ${processNewVisible ? 'fade-in' : ''}`}>
                <img
                  src="../assets/img/process_icons/monitor.png"
                  alt=""
                  class="new-process-icon"
                />
                <div class="text-container">
                  <div class="process-new-heading">Monitor the Results</div>
                  <div class="process-new-description">
                    Continuously track key metrics, assess performance, and
                    ensure strategies yield desired outcomes.
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div class="right-process-section">
              <div className={`tooltip-left ${processNewVisible ? 'fade-in' : ''}`}>
                <img
                  src="../assets/img/process_icons/improve.png"
                  alt=""
                  class="new-process-icon"
                />
                <div class="text-container">
                  <div class="process-new-heading">Make Improvements</div>
                  <div class="process-new-description-right-side">
                    Identify areas for improvement based on results, refining
                    strategies for ongoing optimization.
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </article>

       {/* <!-- full scale banner --> */}
       <article class="full-scale-banner">
        <section class="banner-full-exp">
          <div class="overlay"></div>
          <div class="banner-new-full-scale-container">
            <h2 class="full-banner-call">
            In United States, 32% of organizations delegate at least one HR activity to external providers and 51% of organizations choose to outsource administration. Impressively, remarkable 97% satisfaction rate.
            </h2>
          </div>
        </section>
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

        {/* <!-- why phi for customer exp Section --> */}
        <article class="why-phi-for-sales">
          <h2 class="why-phi-heading">
          Why Choose Phi?
          </h2>
          <p class="why-phi-desc">
            {/* At Phi Consulting, we understand that your people are your greatest
            asset. <br />Our HR & Recruitment Consulting services are designed to
            not only meet your <br />
            immediate talent needs but to strategically shape the future of your
            workforce. */}
            At Phi Consulting, we understand that your people are your greatest asset. Our HR and recruitment Consulting services are designed to meet your immediate talent needs and strategically shape your workforce's future.
          </p>
          <div class="insights-container">
            <div class="insights-bundle" ref={(el) => insightsRefs.current.push(el)}>
              <div class="left-section-insights">
                <div class="overlay-container one-hr-consul">
                  <div class="overlay"></div>
                  <div class="content">
                    <h2 class="overlay-heading">Fast Hiring</h2>
                    <p class="overlay-desc">
                    Accelerate your hiring processes with Phi Consulting's efficient methods
                    </p>
                  </div>
                </div>
              </div>
              <div class="right-section-insights">
                <div class="overlay-container two-hr-consul">
                  <div class="overlay"></div>
                  <div class="content">
                    <h2 class="overlay-heading">Top 3% Vetted Talent</h2>
                    <p class="overlay-desc">
                    Gain access to a pool of highly qualified and thoroughly vetted candidates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="insights-bundle" ref={(el) => insightsRefs.current.push(el)}>
              <div class="left-section-insights">
                <div class="overlay-container three-hr-consul">
                  <div class="overlay"></div>
                  <div class="content">
                    <h2 class="overlay-heading">Timezone Aligned</h2>
                    <p class="overlay-desc">
                    Flawlessly align recruitment efforts with your business's operational timezone
                    </p>
                  </div>
                </div>
              </div>
              <div class="right-section-insights">
                <div class="overlay-container four-hr-consul">
                  <div class="overlay"></div>
                  <div class="content">
                    <h2 class="overlay-heading">Culturally Fit</h2>
                    <p class="overlay-desc">
                    Compatible to adapt, understand, & adjust accordingly with the company’s core values, vision, principles, and identity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="insights-bundle" ref={(el) => insightsRefs.current.push(el)}>
              <div class="left-section-insights">
                <div class="overlay-container five-hr-consul">
                  <div class="overlay"></div>
                  <div class="content">
                    <h2 class="overlay-heading">Technically Robust</h2>
                    <p class="overlay-desc">
                    Each candidate goes through a rigorous skill assessment curated uniquely as per the role.
                    </p>
                  </div>
                </div>
              </div>
              <div class="right-section-insights">
                <div class="overlay-container six-hr-consul">
                  <div class="overlay"></div>
                  <div class="content">
                    <h2 class="overlay-heading">Excellent Communication</h2>
                    <p class="overlay-desc">
                    Speaking, listening, reading, writing, pronunciation, fluency, clarity of expression, and speed of speech.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

      {/* <article class="work" ref={cardsRef}>
        <section class="work-section">
          <h2 class="work-heading">Portfolio</h2>
          <p class="work-desc">
          Explore our portfolio to witness the transformative impact of Phi Consulting on businesses like yours. Each success story is a testament to our commitment to driving sales excellence.
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
          <p class="testi-desc">
          Explore Phi Consulting's hall of achievements – where revenue surges, operational efficiency peaks, and client success stories converge, defining a legacy of transformative impact.
          </p>
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
              Ready to Improve Your Workforce Strategies?
            </div>
            <div class="cta-descrip">
            Partner with Phi Consulting for unparalleled HR and Recruitment Consulting services. Transform your talent management and recruitment processes. Contact us today to embark on a journey toward building a skilled and dynamic workforce.
            </div>
          </div>
          <div class="cta-button-section">
            <div class="right-button-header">
              <span
                ><Link to="/contact" class="inner-header"
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

export default HrAndRecruitmentConsulting;