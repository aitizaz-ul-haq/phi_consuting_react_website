import React,{ useState, useEffect, useRef } from 'react';
import ServicesHeroSection from '../components/Services_page_Components/Services Hero Section/ServicesHeroSection';
import ServicesCtaSection from '../components/Services_page_Components/Services Cta Section/ServicesCtaSection';
import ServicesPathSection from '../components/Services_page_Components/Services Path Section/ServicesPathSection';
import StretegicSolutionsSection from '../components/Services_page_Components/Services Stretegic Solutions Section/StretegicSolutionsSection';
import planIcon from "../assets/img/process_icons/plan.webp";
import actionIcon from "../assets/img/process_icons/action.webp";
import assignIcon from "../assets/img/process_icons/assign.webp";
import testIcon from "../assets/img/process_icons/test.webp";
import impIcon from "../assets/img/process_icons/implement.webp";
import monitorIcon from "../assets/img/process_icons/monitor.webp";
import improveIcon from "../assets/img/process_icons/improve.webp";
import goalIcon from "../assets/img/process_icons/goal.webp";


import salesicon from "../assets/img/solutions icons/GTM.webp";
import buisnessicon from "../assets/img/solutions icons/Investor Relations.webp";
import financialicon from "../assets/img/solutions icons/fin.webp";
import hricon from "../assets/img/white_icons/human-resources.png";

import { Helmet } from 'react-helmet';
import processback from "../assets/video/home-bg.mp4";
import useScrollToTop from '../hooks/useScrollToTop';

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
    processEightHeading: '',
    processEightDescription: '',
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
          const homepageData = response.data[0];
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
            processSixHeading: homepageData.processsixheading,
            processSixDescription: homepageData.processsixdescription,
            processSevenHeading: homepageData.processsevenheading,
            processSevenDescription: homepageData.processsevendescription,
            processEightHeading: homepageData.processeightheading,
            processEightDescription: homepageData.processeightdescription,
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

  useScrollToTop();

  return (
    <>
       <Helmet>
        <title>Solutions - Phi Consulting</title>
        <meta name="description" content="Drive growth with Phi Consulting's expert solutions in GTM Strategy, HR, Investor Relations & Financial Consulting. Maximize your enterprise potential. Schedule a free consultation now!" />
      </Helmet>
       <Helmet>
      <link rel="canonical" href="https://phiconsulting.org/solutions" />
       </Helmet>


   {/* <!-- Hero Section --> */}
      <ServicesHeroSection 
        heroHeading={data.heroHeading} 
        heroDescription={data.heroDescription} 
        windowWidth={windowWidth} 
        gotoContacts={gotoContacts} 
      />
      

      {/* <!-- Services page section one strategic solutions --> */}
      <StretegicSolutionsSection
         solutionsHeading={data.solutionsHeading}
         solutionsDescription={data.solutionsDescription}
         serviceOneDescription={data.serviceOneDescription}
         serviceTwoDescription={data.serviceTwoDescription}
         serviceThreeDescription={data.serviceThreeDescription}
         serviceFourDescription={data.serviceFourDescription}
         handleTabClickOne={handleTabClickOne}
         handleTabClickThree={handleTabClickThree}
         handleTabClickFour={handleTabClickFour}
         handleTabClickFive={handleTabClickFive}
         salesIcon={salesicon}
         businessIcon={buisnessicon}
         financialIcon={financialicon}
         hrIcon={hricon}
       />

      {/* <!-- Section path  --> */}
      <ServicesPathSection
                servicesPathHeading={data.servicesPathHeading}
                servicesPathDescription={data.servicesPathDescription}
                processOneHeading={data.processOneHeading}
                processOneDescription={data.processOneDescription}
                processTwoHeading={data.processTwoHeading}
                processTwoDescription={data.processTwoDescription}
                processThreeHeading={data.processThreeHeading}
                processThreeDescription={data.processThreeDescription}
                processFourHeading={data.processFourHeading}
                processFourDescription={data.processFourDescription}
                processFiveHeading={data.processFiveHeading}
                processFiveDescription={data.processFiveDescription}
                processSixHeading={data.processSixHeading}
                processSixDescription={data.processSixDescription}
                processSevenHeading={data.processSevenHeading}
                processSevenDescription={data.processSevenDescription}
                processEightHeading={data.processEightHeading}
                processEightDescription={data.processEightDescription}
                goalIcon={goalIcon}
                planIcon={planIcon}
                actionIcon={actionIcon}
                assignIcon={assignIcon}
                testIcon={testIcon}
                impIcon={impIcon}
                monitorIcon={monitorIcon}
                improveIcon={improveIcon}
            />



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
                  <div class="process-new-heading">{data.processSixHeading}</div>
                  <div class="process-new-description-right-side">
                    {data.processSixDescription}
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
                  <div class="process-new-heading">{data.processSevenHeading}</div>
                  <div class="process-new-description">
                    {data.processSevenDescription}
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
                  <div class="process-new-heading">{data.processEightHeading}</div>
                  <div class="process-new-description-right-side">
                   {data.processEightDescription}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>


      {/* <!-- Call to Action Section --> */}
      <ServicesCtaSection
        ctaHeading={data.solutionsctaheading}
        ctaDescription={data.solutionsctadescription}
      />

    </>
  )
}

export default Services;
