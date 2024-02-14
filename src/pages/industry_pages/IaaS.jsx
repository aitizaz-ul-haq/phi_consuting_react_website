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
import IndustryServicesSection from '../../components/shared/macroComps/IndustryServicesSection';
import IndustrySpecialities from '../../components/shared/macroComps/industrySpecialities';
import { TypeAnimation } from 'react-type-animation';
import eye from "../../assets/img/eye.png";
import top from "../../assets/img/top Arrow.png";
import { Tooltip } from 'antd';

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
import { Helmet } from 'react-helmet';
import IndustriesArticles from '../../components/shared/macroComps/IndustriesArticles';
import whatback from "../../assets/img/wrappers/burn.webp"; 
import cross from '../../assets/img/barcard-icons/close.png';
import persons from '../../assets/img/barcard-icons/employee.png';
import circular from '../../assets/img/barcard-icons/b2b.png';
import stack from '../../assets/img/barcard-icons/coins-stack.png';

const IaaS = () => {
  const [sectionOneTitle, setSectionOneTitle] = useState('');
  const [sectionOneParagraph, setSectionOneParagraph] = useState('');
  const [sectionTwoTitle, setSectionTwoTitle] = useState('');
  const [sectionTwoParagraph, setSectionTwoParagraph] = useState('');
  const [sectionThreeTitle, setSectionThreeTitle] = useState('');
  const [sectionThreeParagraph, setSectionThreeParagraph] = useState('');
  const [sectionFourTitle, setSectionFourTitle] = useState('');
  const [sectionFourParagraph, setSectionFourParagraph] = useState('');
  const [sectionFiveTitle, setSectionFiveTitle] = useState('');
  const [sectionFiveParagraph, setSectionFiveParagraph] = useState('');

  const [heroHeading, setHeroHeading] = useState('');
  const [heroDescription, setHeroDescription] = useState('');

  const [processNewVisible, setProcessNewVisible] = useState(false);
  const processNewRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [darkMode, setDarkMode] = useState(false);

  const sectionsRef = useRef([]);

  const insightsRefs = useRef([]);

  const [data, setData] = useState([]);
  const [cardDetails, setCardDetails] = useState({
    barCardHeading: '',
    fourCardHeading: '',
    barcarddesone: '',
    barcarddestwo: '',
    barcarddesthree: '',
    barcarddesfour: '',
    card1numericval: '',
    card1heading: '',
    card1description: '',
    card2numericval: '',
    card2heading: '',
    card2description: '',
    card3numericval: '',
    card3heading: '',
    card3description: '',
    card4numericval: '',
    card4heading: '',
    card4description: '',
  });

  const apiUrl = import.meta.env.VITE_API_URL_PROD || 'https://prickle-balanced-archaeopteryx.glitch.me';

  function simplifyFintechData(data) {
    return data.reduce((acc, entry) => {
      const simplifiedContent = entry.content.map(item => ({
        id: entry._id, // Keeping track of the parent entry ID, if needed
        headingText: item.headingText,
        highlighted: item.highlighted,
        paragraphText: item.paragraphText
      }));
      return acc.concat(simplifiedContent);
    }, []);
  }
  
  useEffect(() => {
    const fetchFintechData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/iaas`);
        console.log(`response data...`, response.data)
        const simplifiedData = simplifyFintechData(response.data);
        setFintechData(simplifiedData);
      
      } catch (error) {
        console.error('Error fetching iaas data:', error);
      }
    };
  
    fetchFintechData();
  }, []);

  useEffect(() => {
    fetchSaasCards();
  }, []);

  const fetchSaasCards = async () => {
    try {
      const response = await axios.get('https://prickle-balanced-archaeopteryx.glitch.me/iaascards');
      if (response.data && response.data.length > 0) {
        const firstEntry = response.data[0];
        setCardDetails({
          barCardHeading: firstEntry.barcardheading,
          fourCardHeading: firstEntry.fourcardheading,
          ...firstEntry // This spreads the properties of the first entry into cardDetails
        });
      }
      setData(response.data);
    } catch (error) {
      console.error('Error fetching saascards data:', error);
      message.error('Failed to fetch data');
    }
  };
  
  useEffect(() => {
    const fetchFintechInfo = async () => {
      try {
        const response = await axios.get(`${apiUrl}/iaasinfo`);
        // Assuming the first element of the array has the sections
        const sections = response.data[0].sections;
  
        if (sections.length >= 2) {
          // Update state variables based on your data structure
          setSectionOneTitle(sections[0].title);
          setSectionOneParagraph(sections[0].paragraph);
          setSectionTwoTitle(sections[1].title);
          setSectionTwoParagraph(sections[1].paragraph);
          setSectionThreeTitle(sections[2].title);
          setSectionThreeParagraph(sections[2].paragraph);
          setSectionFourTitle(sections[3].title);
          setSectionFourParagraph(sections[3].paragraph);
          // ... set more states for other sections ...
        }
      } catch (error) {
        console.error('Error fetching fintech info:', error);
        // Handle the error appropriately
      }
    };
  
    fetchFintechInfo();
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
    const fetchCloudBanData = async () => {
      try {
        const response = await axios.get(`https://prickle-balanced-archaeopteryx.glitch.me/iaasban`);
        // Assuming the response data is an array and we want the last item
        const lastEntry = response.data[response.data.length - 1];
        // Update state with the last entry's heading and paragraph
        setHeroHeading(lastEntry.heading);
        setHeroDescription(lastEntry.bannerDescription);
      } catch (error) {
        console.error('Error fetching cloud ban data:', error);
      }
    };

    fetchCloudBanData();
  }, []);
  
 
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            {
                rootMargin: '0px',
                threshold: 0.3
            }
        );

        const elements = sectionsRef.current;
        elements.forEach(el => observer.observe(el));

        return () => elements.forEach(el => observer.unobserve(el));
    }, []);

    const addToRefs = el => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
        }
    };

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
      const servicesSection = document.querySelector('.why-phi-for-sales');
      
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
<Helmet>
        <title>Expert IaaS Solutions for Startups | Phi Consulting</title>
        <meta name="description" content="Unlock the potential of your startup with Phi Consulting's expert IaaS consulting services. Our team guides startups in assessing infrastructure needs, formulating scalable strategies, and navigating financial complexities. Explore our customized solutions for go-to-market strategies, talent acquisition, and investor relations to propel your venture towards success." />
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
    
        <section class="hero-container-iaas">
          <div class="hero-content-iaas">
            
            <h2 class="hero-heading-iaas">
            {/* {windowWidth >= 1200 ? <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Expert IaaS Solutions for Startups',
        7000, 
       
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '40px', display: 'inline-block' }}
      repeat={Infinity}
    /> : 'Expert IaaS Solutions for Startups'} */}
              {heroHeading}
            </h2>
            <p class="hero-desc-iaas">
            {heroDescription}
            </p>
            <div class="consult-button-sales"> <Link to="/contact-us" className='scheduler-set'>Schedule a Free Consultation</Link> </div>
          </div>
        </section>
      </article>

      <article className="bar-card-container">
            <section className="bar-content-section">

               <div className="heading-of-barcard">
                <h2 className="barcard-title">
                {cardDetails.barCardHeading}
                </h2>
               </div>

               <div className="barcard-bar">
                <div className="barcard-bar-section">
                    <div className="icon-barcard-container">
                        <img src={cross} alt="barcard icon" className='barcard-icon-image' />
                    </div>
                    <div className="title-barcard-container">
                        <h3 className="barcard-description-inner">
                        {cardDetails.barcarddesone}
                        </h3>
                    </div>
                </div>
                <div className="barcard-bar-section border-left-and-right">
                    <div className="icon-barcard-container">
                        <img src={persons} alt="barcard icon" className='barcard-icon-image'/>
                    </div>
                    <div className="title-barcard-container">
                        <h3 className="barcard-description-inner">
                        {cardDetails.barcarddestwo}
                        </h3>
                    </div>
                </div>
                <div className="barcard-bar-section border-right">
                    <div className="icon-barcard-container">
                        <img src={circular} alt="barcard icon" className='barcard-icon-image'/>
                    </div>
                    <div className="title-barcard-container">
                        <h3 className="barcard-description-inner">
                        {cardDetails.barcarddesthree}
                        </h3>
                    </div>
                </div>
                <div className="barcard-bar-section">
                    <div className="icon-barcard-container">
                        <img src={stack} alt="barcard icon" className='barcard-icon-image'/>
                    </div>
                    <div className="title-barcard-container">
                        <h3 className="barcard-description-inner">
                        {cardDetails.barcarddesfour}
                        </h3>
                    </div>
                </div>
               </div>
            </section>
        </article>

      <IndustriesArticles Api="iaas" />

      <article className="four-card-container">
<section className="four-card-header">
    <h2 className="four-card-heading">
    {cardDetails.fourCardHeading}:
    </h2>
    </section>    
    <section className="four-card-cards">
        <div className="four-card-tab">
            <div className="four-card-inner-numeric">
                <h2 className="numeric-heading-four-card">{cardDetails.card1numericval}</h2>
            </div>
            <hr />
            <div className="inner-heading-four-card">
                <h3 className="card-four-title">{cardDetails.card1heading}</h3>

            </div>
            <div className="inner-four-card-description">
            {cardDetails.card1description}
            </div>
        </div>
        <div className="four-card-tab">
            <div className="four-card-inner-numeric">
                <h2 className="numeric-heading-four-card">{cardDetails.card2numericval}</h2>
            </div>
            <hr />
            <div className="inner-heading-four-card">
                <h3 className="card-four-title">{cardDetails.card2heading}</h3>

            </div>
            <div className="inner-four-card-description">
            {cardDetails.card2description}
            </div>
        </div>
        <div className="four-card-tab">
            <div className="four-card-inner-numeric">
                <h2 className="numeric-heading-four-card">{cardDetails.card3numericval}</h2>
            </div>
            <hr />
            <div className="inner-heading-four-card">
                <h3 className="card-four-title">{cardDetails.card3heading}</h3>

            </div>
            <div className="inner-four-card-description">
            {cardDetails.card3description}
            </div>
        </div>
        <div className="four-card-tab">
            <div className="four-card-inner-numeric">
                <h2 className="numeric-heading-four-card">{cardDetails.card4numericval}</h2>
            </div>
            <hr />
            <div className="inner-heading-four-card">
                <h3 className="card-four-title">{cardDetails.card4heading}</h3>

            </div>
            <div className="inner-four-card-description">
            {cardDetails.card4description}
            </div>
        </div>
        </section>        
        </article>
    

      {/* <!-- Section path  --> */}
      {/* <article class="path">
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
      </article> */}

      {/* <!-- why phi for sale Section --> */}
      <article class="why-phi-for-sales">
        <h2 class="why-phi-heading">Why Phi Consulting?
</h2>
        <div class="insights-container">
          <div class="insights-bundle" ref={(el) => insightsRefs.current.push(el)}>
            <div class="left-section-insights">
              <div class="overlay-container">
                {/* <div class="overlay"></div> */}
                <div class="content">
                  <h2 class="overlay-heading">
                  {sectionOneTitle}
                  </h2>
                  <p class="overlay-desc">
                  {sectionOneParagraph}

                  </p>
                </div>
              </div>
            </div>
            <div class="right-section-insights">
              <div class="overlay-container">
                {/* <div class="overlay"></div> */}
                <div class="content">
                  <h2 class="overlay-heading">
                  {sectionTwoTitle}
                  </h2>
                  <p class="overlay-desc">
                  {sectionTwoParagraph}
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
                  <h2 class="overlay-heading">{sectionThreeTitle}</h2>
                  <p class="overlay-desc">
                  {sectionThreeParagraph}
                  </p>
                </div>
              </div>
            </div>
            <div class="right-section-insights">
              <div class="overlay-container">
                {/* <div class="overlay"></div> */}
                <div class="content">
                  <h2 class="overlay-heading">
                  {sectionFourTitle}
                  </h2>
                  <p class="overlay-desc">
                  {sectionFourParagraph}
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
            Ready to Scale New Heights?
            </div>
            <div class="cta-descrip">
            Embark on your journey towards unprecedented growth and efficiency with Phi Consulting. Let's discuss how we can transform your startup's potential into real-world success.
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

export default IaaS;