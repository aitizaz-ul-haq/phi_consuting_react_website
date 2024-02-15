import React,{ useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useScrollToTop from '../../hooks/useScrollToTop';
import eye from "../../assets/img/eye.png";
import top from "../../assets/img/top Arrow.png";
import { Tooltip } from 'antd';

import axios from 'axios';
import { Helmet } from 'react-helmet';
import IndustriesArticles from '../../components/shared/macroComps/IndustriesArticles';
import whatback from "../../assets/img/wrappers/burn.webp"; 

import cross from '../../assets/img/barcard-icons/close.png';
import persons from '../../assets/img/barcard-icons/employee.png';
import circular from '../../assets/img/barcard-icons/b2b.png';
import stack from '../../assets/img/barcard-icons/coins-stack.png';

const DevOps = () => {
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

  const apiUrl = import.meta.env.VITE_API_URL_PROD || 'https://prickle-balanced-archaeopteryx.glitch.me';

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


  function simplifyFintechData(data) {
    return data.reduce((acc, entry) => {
      const simplifiedContent = entry.content.map(item => ({
        id: entry._id,
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
        const response = await axios.get(`${apiUrl}/devops`);
        console.log(`response data...`, response.data)
        const simplifiedData = simplifyFintechData(response.data);
        setFintechData(simplifiedData);
      
      } catch (error) {
        console.error('Error fetching saas data:', error);
      }
    };
  
    fetchFintechData();
  }, []);
  
  useEffect(() => {
    const fetchFintechInfo = async () => {
      try {
        const response = await axios.get(`${apiUrl}/devinfo`);
        const sections = response.data[0].sections;
        if (sections.length >= 2) {
          setSectionOneTitle(sections[0].title);
          setSectionOneParagraph(sections[0].paragraph);
          setSectionTwoTitle(sections[1].title);
          setSectionTwoParagraph(sections[1].paragraph);
          setSectionThreeTitle(sections[2].title);
          setSectionThreeParagraph(sections[2].paragraph);
          setSectionFourTitle(sections[3].title);
          setSectionFourParagraph(sections[3].paragraph);
        }
      } catch (error) {
        console.error('Error fetching fintech info:', error);
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
        const response = await axios.get(`${apiUrl}/devban`);
        const lastEntry = response.data[response.data.length - 1];
        setHeroHeading(lastEntry.heading);
        setHeroDescription(lastEntry.bannerDescription);
      } catch (error) {
        console.error('Error fetching cloud ban data:', error);
      }
    };

    fetchCloudBanData();
  }, []);

  useEffect(() => {
    fetchSaasCards();
  }, []);
  
  const fetchSaasCards = async () => {
    try {
      const response = await axios.get('https://prickle-balanced-archaeopteryx.glitch.me/devcards');
      if (response.data && response.data.length > 0) {
        const firstEntry = response.data[0];
        setCardDetails({
          barCardHeading: firstEntry.barcardheading,
          fourCardHeading: firstEntry.fourcardheading,
          ...firstEntry 
        });
      }
      setData(response.data);
    } catch (error) {
      console.error('Error fetching saascards data:', error);
      message.error('Failed to fetch data');
    }
  };
  
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
    return (
        <>
       <Helmet>
        <title>Welcome to the Future of DevOps | Phi Consulting</title>
        <meta name="description" content="Unlock the full potential of your DevOps startup with Phi Consulting's expert DevOps consulting services. From GTM strategy to HR & recruitment solutions, financial consulting, and investor relations, we offer tailored solutions to address the unique challenges faced by DevOps companies. Partner with us to revolutionize your startup's growth journey. Contact us today." />
      </Helmet>

      <Helmet>
      <link rel="canonical" href="https://phi-verse.com/dev-ops-consulting" />
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
        <section class="hero-container-dev">
          <div class="hero-content-dev">
            <h2 class="hero-heading-dev">
             {heroHeading}
            </h2>
            <p class="hero-desc-sales">
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

      <IndustriesArticles Api="devops" />

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

      {/* <!-- why phi for sale Section --> */}
      <article class="why-phi-for-sales">
        <h2 class="why-phi-heading">Why Phi Consulting?</h2>
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
            Ready to Transform Your Startup's DevOps Journey?
            </div>
            <div class="cta-descrip">
            Connect with us today. Let's discuss how Phi Consulting can elevate your startup to new heights with expert DevOps consulting. Your innovation, our expertise – together, we build the future.
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

export default DevOps;