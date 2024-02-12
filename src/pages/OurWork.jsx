import React,{ useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ATOB from '../assets/img/new_logos_comps/newer/AtoB 2.png';
import bobtail from '../assets/img/new_logos_comps/bobtail.png';
import joyride from '../assets/img/new_logos_comps/joyride.png';
import Truckx from '../assets/img/new_logos_comps/TruckX.png';
import pallet from '../assets/img/new_logos_comps/newer/Pallet Logo.png';
import digitalOcean from '../assets/img/new_logos_comps/newer/digital-ocean.png';
import mudflap from '../assets/img/new_logos_comps/newer/Mudflap.png';
import sungrade from '../assets/img/new_logos_comps/sungrade solar.png';
import { Helmet } from 'react-helmet';
import clutchone from '../assets/img/achievements-badges/clutch_1.png';
import BBB from '../assets/img/achievements-badges/BBB.png';
import clutchtwo from '../assets/img/achievements-badges/clutch_2.png';
import backgroundblue from "../assets/img/wrappers/creation.jpg";
import LengthyWorkCard from '../components/shared/cards/LengthyWorkCard';
import { TypeAnimation } from 'react-type-animation';
import useScrollToTop from '../hooks/useScrollToTop';

import axios from 'axios';

const OurWork = () => {
  const [caseStudies, setCaseStudies] = useState([]);
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const [data, setData] = useState({
   
heroheading:"",
herodescription:"",
valuecreationheading:"",
valuecreationdescription:"",
phicreatesheading:"",
ourwayoneheading:"",
ourwayonedescription:"",
ourwaytwoheading:"",
ourwaytwodescription:"",
ourwaythreeheading:"",
ourwaythreedescription:"",
ctaheading:"",
ctadescription:"",

  });

  useEffect(() => {
    const fetchHomePageData = async () => {
      try {
        const response = await axios.get('https://prickle-balanced-archaeopteryx.glitch.me/valuecreationpage');
        console.log(`your data`, response.data);
        if (response.data && response.data.length > 0) {
          const homepageData = response.data[0]; // Assuming the first entry is what we want
          setData({
            heroHeading: homepageData.heroheading,
            heroDescription: homepageData.herodescription,
            valuecreationheading: homepageData.valuecreationheading,
            valuecreationdescription: homepageData.valuecreationdescription,
            phicreatesheading: homepageData.phicreatesheading,
            ourwayoneheading: homepageData.ourwayoneheading,
            ourwayonedescription: homepageData.ourwayonedescription,
            ourwaytwoheading: homepageData.ourwaytwoheading,
            ourwaytwodescription: homepageData.ourwaytwodescription,
            ourwaythreeheading: homepageData.ourwaythreeheading,
            ourwaythreedescription: homepageData.ourwaythreedescription,
            ctaheading: homepageData.ctaheading,
            ctadescription: homepageData.ctadescription,
          });
        }
      } catch (error) {
        console.error("Error fetching homepage data:", error);
      }
    };

    fetchHomePageData();
  }, []);

   useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const response = await fetch('https://prickle-balanced-archaeopteryx.glitch.me/cases'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCaseStudies(data);
      } catch (error) {
        console.error("Error fetching case studies:", error);
      }
    };

    fetchCaseStudies();
  }, []);

  useEffect(() => {
    // Function to handle the parallax effect
    const handleScroll = () => {
      const offset = window.pageYOffset;
      document.body.style.backgroundPositionY = offset * 0.5 + 'px'; // Adjust the speed of the parallax effect by changing the multiplier
    };

    // Set background image on mount
    document.body.style.backgroundImage = `url(${backgroundblue})`;
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
      servicesSection.style.backgroundColor = 'rgba(173, 216, 230, 0.7)';
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


  const gotoContacts = () => {
    window.location.href = '/contact-us';
  }

  useScrollToTop();

  return (
    <>
       <Helmet>
        <title>Empowering Startups and SMEs | Phi Consulting</title>
        <meta name="description" content="Phi Consulting empowers startups and SMEs with expertise in Sales, Finance, and HR Consulting. Our unique investment approach enhances business value through strategic alliances and operational improvements. Trusted by industry leaders. Contact us to unlock your company's full potential." />
      </Helmet>


    {/* <!-- Hero Section --> */}
      <article class="hero">
        <section class="hero-container-our-work">
          <div class="hero-content-our-work">
            <h2 class="hero-heading-our-work">
            {windowWidth >= 1200 ? <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Success is not just a goal but a proven outcome',
        7000, 
       
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '40px', display: 'inline-block' }}
      repeat={Infinity}
    /> : ' Empowering Your Vision, Elevating Your Cloud Strategy'}
              
            </h2>
            <p class="hero-desc-our-work">
             {data.heroDescription}
            </p>
            <div class="consult-button-our-work" id="work-consult" onClick={gotoContacts}>
              Schedule a Free Consultation
            </div>
          </div>
        </section>
      </article>

      {/* <!-- why phi for customer exp Section --> */}
      <article class="why-phi-for-sales">
        <h2 class="why-phi-heading">
          {data.valuecreationheading}
        </h2>
        <p class="why-phi-desc">
          {data.valuecreationdescription}
        </p>
        <div class="insights-container">
        {caseStudies.map(study => (
                <LengthyWorkCard key={study._id} id={study._id}  caseStudy={study} />
            ))}
      
        </div>
      </article>

    

      {/* <!-- how we work --> */}
      <article class="how-work">
        <section class="how-work-section">
          <div class="how-work-container">
            <div class="how-work-section-left">
              <p class="how-we-top-line">HOW PHI CREATES VALUE</p>
              <h2 class="how-we-work-heading">
                {data.phicreatesheading}
              </h2>
              <div class="statement">
                <div class="heading-how-we">1. {data.ourwayoneheading}</div>
                <div class="description-how-we">
                  {data.ourwayonedescription}
                </div>
              </div>
              <div class="statement">
                <div class="heading-how-we">2. {data.ourwaytwoheading}</div>
                <div class="description-how-we">
                 {data.ourwaytwodescription}
                </div>
              </div>
              <div class="statement">
                <div class="heading-how-we">3. {data.ourwaythreeheading}</div>
                <div class="description-how-we">
                  {data.ourwaythreedescription}
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
            <div class="cta-heading">
              {data.ctaheading}
            </div>
            <div class="cta-descrip">
              {data.ctadescription}
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

export default OurWork;