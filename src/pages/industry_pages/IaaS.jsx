import React,{ useState, useEffect, useRef } from 'react';
import IaasHeroSection from '../../components/Industries_page_componenets/Iaas/Iaas Hero Section/IaasHeroSection';
import IaasBarCardSection from '../../components/Industries_page_componenets/Iaas/Iaas BarCard Section/IaasBarCardSection';
import IaasFourCardSection from '../../components/Industries_page_componenets/Iaas/Iaas FourCard Section/IaasFourCardSection';
import IaasCtaSection from '../../components/Industries_page_componenets/Iaas/Iaas Cta Section/IaasCtaSection';

import useScrollToTop from '../../hooks/useScrollToTop';
import eye from "../../assets/img/eye.png";
import top from "../../assets/img/top Arrow.png";
import { Tooltip } from 'antd';

import axios from 'axios';
import { Helmet } from 'react-helmet';
import IndustriesArticles from '../../components/shared/macroComps/IndustriesArticles';
import whatback from "../../assets/img/wrappers/burn.webp"; 

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
    const fetchFintechInfo = async () => {
      try {
        const response = await axios.get(`${apiUrl}/iaasinfo`);
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
        const response = await axios.get(`https://prickle-balanced-archaeopteryx.glitch.me/iaasban`);
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
        <title>Expert IaaS Solutions for Startups | Phi Consulting</title>
        <meta name="description" content="Unlock the potential of your startup with Phi Consulting's expert IaaS consulting services. Our team guides startups in assessing infrastructure needs, formulating scalable strategies, and navigating financial complexities. Explore our customized solutions for go-to-market strategies, talent acquisition, and investor relations to propel your venture towards success." />
      </Helmet>

      <Helmet>
      <link rel="canonical" href="https://phiconsulting.org/iaas-consulting" />
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
      <IaasHeroSection heroHeading={heroHeading} heroDescription={heroDescription} />

       {/* Bar Card Section */}
      <IaasBarCardSection cardDetails={cardDetails} />

       {/* Industries Articals section */}
      <IndustriesArticles Api="iaas" />

       {/* Four Card Section */}
      <IaasFourCardSection cardDetails={cardDetails} />
    
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
      <IaasCtaSection />
        </>
    )
}

export default IaaS;