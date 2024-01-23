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
import { TypeAnimation } from 'react-type-animation';
import IndustryServicesSection from '../../components/shared/macroComps/IndustryServicesSection';



const FinTech = () => {

  const [isVisibleTesti, setIsVisibleTesti] = useState(false);
  const testiRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const [isVisibleAch, setIsVisibleAch] = useState(false);
  const achRef = useRef(null);

  const [isVisiblecard, setIsVisiblecard] = useState(false);
  const cardsRef = useRef(null);

  const [processNewVisible, setProcessNewVisible] = useState(false);
  const processNewRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const sectionsRef = useRef([]);

  const insightsRefs = useRef([]);

  const diagonalDivRef = useRef(null);
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
        entries.forEach((entry) => {
          setIsVisiblecard(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => observer.disconnect();
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
        entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, { threshold: 0.5 }); 

    observer.observe(containerRef.current);
    return () => observer.disconnect(); 
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

useScrollToTop();

  const firstThreeCaseStudies = caseStudies.slice(0, 3);
    return (
        <>
      {/* <!-- Hero Section --> */}
      <article class="hero">
        <section class="hero-container-fin">
          <div class="hero-content-fin">
            <h2 class="hero-heading-fin">
            {windowWidth >= 1200 ? <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Empowering Your FinTech Startup to Scale Efficiently',
        7000, 
       
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '40px', display: 'inline-block' }}
      repeat={Infinity}
    /> : 'Empowering Your FinTech Startup to Scale Efficiently'}
              
            </h2>
            <p class="hero-desc-fin">
            We recognize the unique challenges and immense potential in the FinTech sector. Our mission is to guide you through the complexities of scaling efficiently while optimizing cost-effectiveness. We're dedicated to transforming your ambitious vision into a thriving reality.
            </p>
            <div class="consult-button-sales"> <Link to="/contact" className='scheduler-set'>Schedule a Free Consultation</Link> </div>
          </div>
        </section>
      </article>

      <IndustryServicesSection />

      <article className="industry-para-container" ref={diagonalDivRef}>
        <section className="industry-para-collection" ref={addToRefs}>
        <div className="para-title-industry">
        <h2 className='title-special'>What is <span className='bluer'> Fintech  Consulting</span>?</h2>
        </div>
        <div className="para-desc-industry">
        In the realm of financial technology (FinTech), consulting involves offering specialized advisory services tailored to organizations within this sector. FinTech, driven by innovative technologies, aims to deliver financial services in a more efficient, convenient, and disruptive manner. Our FinTech consulting services are designed to assist financial institutions, startups, and businesses in navigating this rapidly evolving landscape.

        </div>
        </section>
      
       </article>
   

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
                  Industry Expertise
                  </h2>
                  <p class="overlay-desc">
                  Our team comprises industry veterans who understand the nuances of FinTech startups.
                  </p>
                </div>
              </div>
            </div>
            <div class="right-section-insights">
              <div class="overlay-container two-why">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">
                  Customized Solutions
                  </h2>
                  <p class="overlay-desc">
                  We don’t believe in one-size-fits-all. Our solutions are tailored to address your unique challenges and goals.
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
                  <h2 class="overlay-heading">Proven Track Record</h2>
                  <p class="overlay-desc">
                  We've helped numerous startups in the FinTech sector achieve scalable growth and financial efficiency.
                  </p>
                </div>
              </div>
            </div>
            <div class="right-section-insights">
              <div class="overlay-container four-why">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">
                  Long-Term Partnership
                  </h2>
                  <p class="overlay-desc">
                  We're committed to being your trusted advisors, supporting you at every stage of your journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="insights-bundle">
            <div class="left-section-insights">
              <div class="overlay-container five-why">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">
                  Results-Driven
                  </h2>
                  <p class="overlay-desc">
                  We measure our success by your success. Our commitment is to deliver tangible results that propel your startup to new heights.
                  </p>
                </div>
              </div>
            </div>
           
          </div> */}
        </div>
      </article>

        {/* <!-- full scale banner --> */}
        <article class="full-scale-banner">
        <section class="banner-full-exp">
          <div class="overlay"></div>
          <div class="banner-new-full-scale-container">
            <h2 class="full-banner-call">
              42% businesses adopt go-to-market strategies for calculating
              customer value, 28% for business expansion/upgrades, and 61% to
              build customer experience
            </h2>
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

      {/* <!-- Work small version Section --> */}
      <article class="work" ref={cardsRef}>
        <section class="work-section">
          <h2 class="work-heading">Client Success Stories</h2>
          <p class="work-desc">
            Explore our portfolio to witness the transformative impact of Phi
            Consulting on businesses like yours. Each success story is a
            testament to our commitment to driving sales excellence.
          </p>
          <div class="work-row">
          {firstThreeCaseStudies.map(study => (
                <SmallWorkCard key={study.id} caseStudy={study} isVisible={isVisiblecard} />
            ))}
          </div>

          <div class="right-button spacing-under">
          <span><Link to="/casestudies" className='morcases'>View More Case Studies</Link></span>
          </div>
        </section>
      </article>

      {/* <!-- Testimonial Section --> */}
      <article class="testimonial">
        <section className="testimonial-container">
          <h2 class="testi-heading">
            We have not lost a top 3 client in over 3 years
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
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam atque iste aut magni harum nobis quasi impedit enim
                  laborum distinctio, accusamus ducimus dolorem illum, mollitia
                  aperiam deserunt voluptate quaerat totam!</i
                ></q
              >
            </p>
            <h3 class="testi-card-heading">-Rob Robinson (CEO)</h3>
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
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam atque iste aut magni harum nobis quasi impedit enim
                  laborum distinctio, accusamus ducimus dolorem illum, mollitia
                  aperiam deserunt voluptate quaerat totam!</i
                ></q
              >
            </p>
            <h3 class="testi-card-heading">-linda bigaloo (finance)</h3>
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

export default FinTech;