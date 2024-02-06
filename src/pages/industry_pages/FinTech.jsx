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


import achiconone from "../../assets/img/achievements-badges/clutch_1.png";
import achicontwo from "../../assets/img/achievements-badges/BBB.png";
import achiconthree from "../../assets/img/achievements-badges/clutch_2.png";

import SmallWorkCard from '../../components/shared/cards/SmallWorkCard';
import caseStudies from '../../data/caseStudies.json';

import useScrollToTop from '../../hooks/useScrollToTop';
import { TypeAnimation } from 'react-type-animation';
import IndustryServicesSection from '../../components/shared/macroComps/IndustryServicesSection';
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


const FinTech = () => {
  const [sectionOneTitle, setSectionOneTitle] = useState('');
  const [sectionOneParagraph, setSectionOneParagraph] = useState('');
  const [sectionTwoTitle, setSectionTwoTitle] = useState('');
  const [sectionTwoParagraph, setSectionTwoParagraph] = useState('');
  const [sectionThreeTitle, setSectionThreeTitle] = useState('');
  const [sectionThreeParagraph, setSectionThreeParagraph] = useState('');
  const [sectionFourTitle, setSectionFourTitle] = useState('');
  const [sectionFourParagraph, setSectionFourParagraph] = useState('');

  const [heroHeading, setHeroHeading] = useState('');
  const [heroDescription, setHeroDescription] = useState('');


  const apiUrl = import.meta.env.VITE_API_URL_PROD || 'https://prickle-balanced-archaeopteryx.glitch.me';

  const [processNewVisible, setProcessNewVisible] = useState(false);
  const processNewRef = useRef(null);

  const [darkMode, setDarkMode] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const sectionsRef = useRef([]);

  const insightsRefs = useRef([]);

  const diagonalDivRef = useRef(null);

const Fintech = 'fintech';

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
      const response = await axios.get(`https://prickle-balanced-archaeopteryx.glitch.me/fintech`);
      console.log(`response data...`, response.data)
      const simplifiedData = simplifyFintechData(response.data);
      setFintechData(simplifiedData);
    
    } catch (error) {
      console.error('Error fetching fintech data:', error);
    }
  };

  fetchFintechData();
}, []);

useEffect(() => {
  const fetchFintechInfo = async () => {
    try {
      const response = await axios.get(`https://prickle-balanced-archaeopteryx.glitch.me/fintechinfo`);
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
        const response = await axios.get(`http://localhost:3000/fintban`);
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
      if (entries[0].isIntersecting) {
        diagonalDivRef.current.classList.add('fill-effect');
      }
    },
    { threshold: 0.5 } // Adjust this threshold as needed
  );

  if (diagonalDivRef.current) {
    observer.observe(diagonalDivRef.current);
  }

  return () => {
    if (diagonalDivRef.current) {
      observer.unobserve(diagonalDivRef.current);
    }
  };
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
        <title>Empowering Your FinTech Startup to Scale Efficiently | Phi Consulting</title>
        <meta name="description" content="Unlock the full potential of your FinTech startup with Phi Consulting's expert consulting services. From GTM strategy to HR & recruitment solutions, financial consulting, and investor relations, we offer tailored solutions to address the unique challenges faced by FinTech companies. Partner with us to revolutionize your startup's growth journey. Contact us today." />
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
        <section class="hero-container-fin">
          <div class="hero-content-fin">
            <h2 class="hero-heading-fin">
            {/* {windowWidth >= 1200 ? <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Empowering Your FinTech Startup to Scale Efficiently',
        7000, 
       
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '40px', display: 'inline-block' }}
      repeat={Infinity}
    /> : 'Empowering Your FinTech Startup to Scale Efficiently'} */}
              {heroHeading}
            </h2>
            <p class="hero-desc-fin">
            {heroDescription}
            </p>
            <div class="consult-button-sales"> <Link to="/contact-us" className='scheduler-set'>Schedule a Free Consultation</Link> </div>
          </div>
        </section>
      </article>

      {/* <IndustryServicesSection /> */}

      {/* <article className="industry-para-container" ref={diagonalDivRef}> */}
        {/* <section className="industry-para-collection" ref={addToRefs}>
        <div className="para-title-industry">
        <h2 className='title-special'>What is <span className='bluer'> Fintech  Consulting</span>?</h2>
        </div>
        <div className="para-desc-industry">
        In the realm of financial technology (FinTech), consulting involves offering specialized advisory services tailored to organizations within this sector. FinTech, driven by innovative technologies, aims to deliver financial services in a more efficient, convenient, and disruptive manner. Our FinTech consulting services are designed to assist financial institutions, startups, and businesses in navigating this rapidly evolving landscape.

        </div>
        </section>
        <section className="industry-para-collection" ref={addToRefs}>
        <div className="para-title-industry">
        <h2 className='title-special'>Revolutionize Your <span className='bluer'>Go-To-Market</span> Strategy</h2>
        </div>
        <div className="para-desc-industry">
        Navigating the FinTech landscape requires a robust Go-To-Market (GTM) strategy. Phi Consulting provides a comprehensive approach, offering market analysis, competitive positioning, and tailored marketing strategies. We ensure your launch is impactful and sets the stage for sustained success.
        </div>
        </section>

        <section className="industry-para-collection" ref={addToRefs}>
        <div className="para-title-industry">
        <h2 className='title-special'><span className='bluer'>Attract, Retain,</span> and <span className='bluer'>Nurture</span> the Best Talent</h2>
        </div>
        <div className="para-desc-industry">
        Your team is your greatest asset. We help you build a formidable team of innovators and leaders through strategic HR consulting and recruitment services, ensuring you have the right talent to drive your business forward.
        </div>
        </section>

        <section className="industry-para-collection" ref={addToRefs}>
        <div className="para-title-industry">
        <h2 className='title-special'>Navigate <span className='bluer'>Financial Complexities</span> with Ease</h2>
        </div>
        <div className="para-desc-industry">
        In the fast-paced FinTech world, financial clarity and strategic planning are paramount. Phi Consulting's financial consulting services provide insights and strategies for effective financial management, covering aspects from cash flow management to financial modeling.
        </div>
        </section>

        <section className="industry-para-collection">
        <div className="para-title-industry">
        <h2 className='title-special'><span className='bluer'>Building Bridges</span> Between You and Your Investors</h2>
        </div>
        <div className="para-desc-industry">
        Building and maintaining strong relationships with investors are vital to your startup's growth. We assist in developing compelling investor relations strategies, ensuring consistent communication, and fostering trust with your investors.
        </div>
        </section> */}
       
       {/* {fintechData.map((item, index) => (
  <section className="industry-para-collection" key={index} ref={addToRefs}>
    <div className="para-title-industry">
      <h2 className='title-special'>{item.headingText} <span className='bluer'>{item.highlighted}</span></h2>
    </div>
    <div className="para-desc-industry">
      {item.paragraphText}
    </div>
  </section>
))}
    
       </article> */}

       <IndustriesArticles Api="fintech" />
   

      {/* <!-- why phi for sale Section --> */}
      <article class="why-phi-for-sales">
        <h2 class="why-phi-heading">Why Phi Consulting?</h2>
        <div class="insights-container">
          <div class="insights-bundle" ref={(el) => insightsRefs.current.push(el)}>
            <div class="left-section-insights">
              <div class="overlay-container one-why">
                <div class="overlay"></div>
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
              <div class="overlay-container two-why">
                <div class="overlay"></div>
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
              <div class="overlay-container three-why">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">{sectionThreeTitle}</h2>
                  <p class="overlay-desc">
                  {sectionThreeParagraph}
                  </p>
                </div>
              </div>
            </div>
            <div class="right-section-insights">
              <div class="overlay-container four-why">
                <div class="overlay"></div>
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
            Ready to Transform Your FinTech Startup?
            </div>
            <div class="cta-descrip">
            Contact us today to schedule a consultation and start your journey towards efficient scaling and strategic growth.
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

export default FinTech;