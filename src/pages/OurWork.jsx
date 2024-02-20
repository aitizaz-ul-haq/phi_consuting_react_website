import React,{ useState, useEffect, useRef } from 'react';
import OurWorkCtaSection from '../components/OurWork_page_Components/OurWork Cta Section/OurWorkCtaSection';
import HowWeWork from '../components/OurWork_page_Components/OurWork HowWeWork Section/HowWeWork';
import OurWorkHeroSection from '../components/OurWork_page_Components/OurWork Hero Section/OurWorkHeroSection';
import PhiForSection from '../components/OurWork_page_Components/PhiFor Section/PhiForSection';

import { Helmet } from 'react-helmet';
import backgroundblue from "../assets/img/wrappers/creation.jpg";
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
          const homepageData = response.data[0]; 
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
        const response = await fetch('https://prickle-balanced-archaeopteryx.glitch.me/cases'); 
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
    const handleScroll = () => {
      const offset = window.pageYOffset;
      document.body.style.backgroundPositionY = offset * 0.5 + 'px'; 
    };
    document.body.style.backgroundImage = `url(${backgroundblue})`;
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
    const servicesSection = document.querySelector('.why-phi-for-sales');
    if (servicesSection) {
      servicesSection.style.backgroundColor = 'rgba(173, 216, 230, 0.7)';
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
        <Helmet>
      <link rel="canonical" href="https://phi-verse.com/value-creation" />
        </Helmet>


    {/* <!-- Hero Section --> */}
      <OurWorkHeroSection
         heroHeading={data.heroHeading}
         heroDescription={data.heroDescription}
         windowWidth={windowWidth}
         gotoContacts={gotoContacts}
      />

      {/* <!-- why phi for customer exp Section --> */}
      <PhiForSection
        title={data.valuecreationheading}
        description={data.valuecreationdescription}
        caseStudies={caseStudies}
       />

      {/* <!-- how we work --> */}
      <HowWeWork data={data} />

      {/* <!-- Call to Action Section --> */}
      <OurWorkCtaSection
        ctaHeading={data.ctaheading}
        ctaDescription={data.ctadescription}
      />
    
    </>
  )
}

export default OurWork;