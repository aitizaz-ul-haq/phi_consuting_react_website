import React,{ useState, useEffect, useRef } from 'react';
import ATOB from '../assets/img/new_logos_comps/newer/AtoB 2.png';
import bobtail from '../assets/img/new_logos_comps/bobtail.png';
import joyride from '../assets/img/new_logos_comps/joyride.png';
import Truckx from '../assets/img/new_logos_comps/TruckX.png';
import pallet from '../assets/img/new_logos_comps/newer/Pallet Logo.png';
import digitalOcean from '../assets/img/new_logos_comps/newer/digital-ocean.png';
import mudflap from '../assets/img/new_logos_comps/newer/Mudflap.png';
import sungrade from '../assets/img/new_logos_comps/sungrade solar.png';
import valuegraph from '../assets/img/Traditional Growth mark_2.png';

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
import caseStudies from "../data/caseStudies.json";
import useScrollToTop from '../hooks/useScrollToTop';
import david from "../assets/video/world.mp4";
import eye from "../assets/img/eye.png";
import top from "../assets/img/top Arrow.png";


const HomePage = () => {

  const [darkMode, setDarkMode] = useState(false);
  
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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  const toggleDarkMode = () => setDarkMode(!darkMode);

    const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const firstThreeCaseStudies = caseStudies.slice(0, 3);

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
    window.location.href = '/investor-relations';
  } 

  const handleTabClickTwo = () => {
    window.location.href = '/GTM-advisory';
  } 

  const handleTabClickThree = () => {
    window.location.href = '/financial-consulting';
  } 

  const handleTabClickFour = () => {
    window.location.href = '/hr-consulting';
  } 

  const handleTabClickFive = () => {
    window.location.href = '/sales-consulting';
  } 

  const gotoContacts = () => {
    window.location.href = '/contact';
  }

  const firstTwoBlogs = blogs.slice(0, 2);
  useScrollToTop();
  return (
    <>
    <div className={`overlayscreen ${darkMode ? 'activate' : ''}`}></div>
        <div className="left-section-control"></div>
            <div className="right-section-control">
            <Tooltip placement="leftTop" title="toggle eye protection">
            <button onClick={toggleDarkMode}> <img src={eye} alt="eye icon" width={42} height={42}/></button> 
            </Tooltip>
                 {/* Back to Top Button */}
                 <Tooltip placement="leftTop" title="back to top">
    <button className="back-to-top" onClick={scrollToTop}>
    <img src={top} alt="eye icon" width={42} height={42}/>
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
              Phi Consulting is your dedicated technology consulting partner,
              committed to delivering comprehensive business solutions tailored
              for Startups and SMEs in the dynamic realms of IoT, Fintech, SaaS,
              and IaaS. We empower clients to achieve operational excellence,
              foster business expansion, and enhance the overall customer
              experience.
            </p>
            <div class="consult-button" onClick={gotoContacts}><Tooltip title="Contact Page">Schedule a Free Consultation</Tooltip></div>
          </div>
        </section>
      </article>

      {/* <!-- Clients Section --> */}
      <article className={`clients ${isVisible ? 'animate' : ''}`} ref={containerRef}>
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
      </article>

      {/* <!-- Value Statement Section  --> */}
      <article class="value">
        <section class="value-container" ref={firstRef}>
          <div class="value-content">
            <div class="new-values">
              <div className={`new-value-left-section ${isVisibleFirst ? 'visible-left' : ''}`}>
                <h2 class="value-heading">Drive Success with Phi Consulting</h2>
                <p class="value-desc">
                  We specialize in driving growth by increasing revenue and
                  driving sales while simultaneously reducing costs and time.
                </p>
              </div>
              <div  className={`new-value-right-section ${isVisibleFirst ? 'visible-right' : ''}`}>
                <img
                  src={valuegraph}
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
            We have the solutions to propel your success.
          </h2>
          <p class="services-desc">
            Choose Phi Consulting for end-to-end services tailored to grow your
            business. Our expertise spans diverse industries, focusing on
            Fintech, IoT, SaaS, and IaaS.
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
                      <h3 class="title-third">HR & Recruitment Consulting</h3>
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
                  <Link to="/services" class="explore-more-services">Explore More</Link>
                    
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
            Redefining Success Through Strategic Partnerships
          </h2>
          <p class="work-desc">
            Our hands-on approach ensures that startups and SMEs thrive in
            building their consumer base. From launching new products to
            improving existing ones, we are ready to roll up our sleeves and
            help you achieve your goals.
          </p>
          {firstThreeCaseStudies.map((study, index) => (
                <CaseStudyMacroComps
                    key={study.id}
                    id={study.id}
                    title={study.title}
                    summary={study.summary}
                    logo={study.imagetwo}
                    image={study.imageone}
                    isRight={index % 2 === 0}
                />
            ))}
         
          <div class="right-button spacing-under">
            <div class="case-button-more">
              <Link to="/casestudies" className='morcases'>View More Case Studies</Link>
             </div>
          </div>
        </section>
      </article>

      {/* <!-- Call to Action Section --> */}
      <article class="cta-container">
        <section class="cta-sections-container">
          <div class="cta-content">
            <div class="cta-heading">Ready to Scale Your Business?</div>
            <div class="cta-descrip">
              Discover the potential for unprecedented growth, reduced costs,
              and optimized efficiency. Partner with Phi Consulting – Let's
              Start the Journey Together.
            </div>
          </div>
          <div class="cta-button-section">
            <div class="right-button-header">
              <span
                ><Link to="/contact" class="inner-header" 
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
              {/* <!-- <img src="./assets/img/testimonial_one.webp" alt="" /> --> */}
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
            <div class="circleBase type3 test-two">
              <img src="" alt="" />
            </div>

            <p class="testi-quote">
              <q
                ><i
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam atque iste aut magni harum nobis quasi impedit enim
                  laborum distinctio, accusamus ducimus dolorem illum, mollitia
                  aperiam deserunt voluptate quaerat totam!</i
                ></q
              >
            </p>
            <h3 class="testi-card-heading">-lenny pepridge (CTO)</h3>
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
      </article>

      {/* <!-- Achievement Section --> */}
      <article class="achievement">
        <section class="achievement-section">
          <h2 class="ach-heading">Our Achievements</h2>
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
              src={BBB}
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

          {/* <div className={`ach-badge ${isVisibleAch ? 'animate' : ''}`}>
            <img
              src={clutchone}
              alt=""
              width="200"
              height="230"
            />
          </div>
          <div className={`ach-badge ${isVisibleAch ? 'animate' : ''}`}>
            <img
              src={BBB}
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
          </div> */}
        </section>
      </article>

      {/* <!-- Blog Section --> */}
      <article class="blog">
        <section class="blog-container">
          <h2 class="blog-title">Explore Our Insights</h2>
          <p class="blog-desc">
            Dive into the world of business consulting, financial strategies,
            and industry trends through our blog. Stay informed and inspired as
            we share our knowledge and expertise.
          </p>
        </section>
        <section class="blog-cards-container">
        
        {firstTwoBlogs.map(study => (
                <BlogCard key={study.id} blogs={study} />
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
            Phi Consulting isn't just an outsource & offshore consulting firm –
            we're your dedicated partner in success.
          </h2>

          <p class="banner-desc"></p>

          <p class="banner-desc second-para">
            Phi Consulting stands out in the consulting landscape, offering a
            unique blend of expertise, innovation, and personalized service that
            sets us apart from the rest. Choose Phi Consulting for a partnership
            that's defined by accountability, adaptability, and a relentless
            commitment to your success. Together, let's redefine what's possible
            for your business.
          </p>

          <div class="right-button" onClick={gotoContacts}>
            <span>Contact us</span>
          </div>
        </section>
      </article>

      {/* <ScrollToTopButton /> */}
    </>
  )
}

export default HomePage;
