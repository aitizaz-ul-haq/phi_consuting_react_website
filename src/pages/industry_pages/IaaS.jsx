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

const IaaS = () => {

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
    
        <section class="hero-container-iaas">
          <div class="hero-content-iaas">
            
            <h2 class="hero-heading-iaas">
            {windowWidth >= 1200 ? <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Expert IaaS Solutions for Startups',
        7000, 
       
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '40px', display: 'inline-block' }}
      repeat={Infinity}
    /> : 'Expert IaaS Solutions for Startups'}
              
            </h2>
            <p class="hero-desc-iaas">
            At Phi Consulting, we understand the unique challenges and immense potential of startups in the cutting-edge sector of IaaS. Our mission is to be your strategic partner, guiding your venture towards scalable growth and operational excellence.

            </p>
            <div class="consult-button-sales"> <Link to="/contact" className='scheduler-set'>Schedule a Free Consultation</Link> </div>
          </div>
        </section>
      </article>

      {/* Services Section */}
      {/* <IndustryServicesSection /> */}

      {/* Specialities Paragraph */}
      {/* <IndustrySpecialities /> */}
      <article className="industry-para-container">
        <section className="industry-para-collection" ref={addToRefs}>
        <div className="para-title-industry">
        <h2 className='title-special'>What is <span className='bluer'> IaaS Consulting</span>?</h2>
        </div>
        <div className="para-desc-industry">
        Our IaaS consulting services are crafted to help businesses assess their infrastructure needs, identify optimal cloud providers, and formulate a scalable, cost-effective strategy. Whether you're migrating existing on-premises infrastructure to the cloud or fine-tuning resource allocation, we've got you covered. Our experts ensure your security and compliance while recommending best practices for seamless management and maintenance.
        </div>
        </section>

        <section className="industry-para-collection" ref={addToRefs}>
        <div className="para-title-industry">
        <h2 className='title-special'>Revolutionize Your <span className='bluer'>Go-To-Market</span> Strategy</h2>
        </div>
        <div className="para-desc-industry">
        In the dynamic world of IoT and tech startups, a well-crafted go-to-market (GTM) strategy is not just advantageous but essential. Our seasoned experts develop custom GTM strategies aligned with your vision, enabling you to not only enter the market but also make a lasting impact.
        </div>
        </section>

        <section className="industry-para-collection" ref={addToRefs}>
        <div className="para-title-industry">
        <h2 className='title-special'><span className='bluer'>Attract, Retain,</span> and <span className='bluer'>Nurture</span> the Best Talent</h2>
        </div>
        <div className="para-desc-industry">
        Your team is the backbone of success. Phi Consulting offers comprehensive HR and recruitment services, assisting you in building a talented workforce aligned with your startup's culture and objectives. From talent acquisition to development, we ensure your human capital is your strongest asset.
        </div>
        </section>

        <section className="industry-para-collection" ref={addToRefs}>
        <div className="para-title-industry">
        <h2 className='title-special'>Navigate <span className='bluer'>Financial Complexities</span> with Ease</h2>
        </div>
        <div className="para-desc-industry">
        Managing finances in a startup environment can be challenging. Our IoT consulting services provide clarity and direction, helping you make informed decisions that secure your company's financial health and fuel its growth.
        </div>
        </section>

        <section className="industry-para-collection" ref={addToRefs}>
        <div className="para-title-industry">
        <h2 className='title-special'><span className='bluer'>Building Bridges</span> Between You and Your Investors</h2>
        </div>
        <div className="para-desc-industry">
        Strong investor relations are vital for startup growth. Our team helps you communicate your vision and progress effectively, fostering trust and understanding with investors. This ensures not only continued financial support but also strategic partnerships that propel your IoT startup forward.
        </div>
        </section>
        </article>
       

        {/* <section className="industry-para-collection" ref={addToRefs}>
        <div className="para-title-industry">
        <h2 className='title-special'>Tailored<span className='bluer'> IaaS</span>  Consulting Services</h2>
        </div>
        <div className="para-desc-industry">
        At Phi Consulting, we understand the unique challenges faced by founders and C-level executives. Our custom consulting services are designed to cater to your specific needs, ensuring your startup scales efficiently while keeping costs in check.
        </div>
        </section>

        <section className="industry-para-collection" ref={addToRefs}>
        <div className="para-title-industry">
        <h2 className='title-special'><span className='bluer'>Go-To-Market</span> Strategy</h2>
        </div>
        <div className="para-desc-industry">
        Your innovation deserves a robust market entry. Our Go-To-Market (GTM) strategies are not just plans, but blueprints for success, designed to capture your target market effectively and efficiently.
        </div>
        </section>

        <section className="industry-para-collection" ref={addToRefs}>
        <div className="para-title-industry">
        <h2 className='title-special'><span className='bluer'>HR & Recruitment </span> Solutions</h2>
        </div>
        <div className="para-desc-industry">
        Talent is the backbone of any startup. We assist you in building a team not just for today, but for the future—a workforce aligned with your vision and ready for the challenges ahead.
        </div>
        </section>

        <section className="industry-para-collection" ref={addToRefs}>
        <div className="para-title-industry">
        <h2 className='title-special'><span className='bluer'>Financial</span> Consulting</h2>
        </div>
        <div className="para-desc-industry">
        Navigate the financial complexities of startup growth with our expert advice. From budgeting to fiscal management, we ensure your financial health is robust, enabling you to focus on innovation.

        </div>
        </section>

        <section className="industry-para-collection" ref={addToRefs}>
        <div className="para-title-industry">
        <h2 className='title-special'><span className='bluer'>Investor Relations</span></h2>
        </div>
        <div className="para-desc-industry">
        Building bridges between your vision and the right investors. Our investor relations services connect you with the right people, ensuring your ideas get the backing they need to soar.
        </div>
        </section> */}
      

    

      {/* <!-- Section path  --> */}
      <article class="path">
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
      </article>

      {/* <!-- why phi for sale Section --> */}
      <article class="why-phi-for-sales">
        <h2 class="why-phi-heading">Why Phi Consulting?
</h2>
        <div class="insights-container">
          <div class="insights-bundle" ref={(el) => insightsRefs.current.push(el)}>
            <div class="left-section-insights">
              <div class="overlay-container one-why">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">
                  Experience in Your Industry
                  </h2>
                  <p class="overlay-desc">
                  Our team brings in-depth knowledge and experience across the IoT, SaaS, IaaS, Fintech, Cloud, and DevOps sectors.

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
                  We recognize the uniqueness of your startup. Our approach is highly personalized, ensuring solutions that fit your specific needs and goals.
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
                  <h2 class="overlay-heading">Efficiency and Cost-Reduction</h2>
                  <p class="overlay-desc">
                  While you innovate, we optimize. Our strategies are designed not only to help you grow but to do so in the most cost-effective way.
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
                  We believe in building lasting relationships. Our success is measured by the sustained growth and success of our clients.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
          
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
            Ready to Scale New Heights?
            </div>
            <div class="cta-descrip">
            Embark on your journey towards unprecedented growth and efficiency with Phi Consulting. Let's discuss how we can transform your startup's potential into real-world success.
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

export default IaaS;