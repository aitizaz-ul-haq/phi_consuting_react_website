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
// import VantaAnimation from '../../components/shared/vantun';



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

useScrollToTop();

  const firstThreeCaseStudies = caseStudies.slice(0, 3);
    return (
        <>
      {/* <!-- Hero Section --> */}
      <article class="hero">
    
        <section class="hero-container-iaas">
          <div class="hero-content-iaas">
            
            <h2 class="hero-heading-iaas">
              {/* <!-- Transforming Possibilities <br />
              into Profits --> */}
              Expert IaaS Solutions for Startups
            </h2>
            <p class="hero-desc-iaas">
            At Phi Consulting, we understand the unique challenges and immense potential of startups in the cutting-edge sector of IaaS. Our mission is to be your strategic partner, guiding your venture towards scalable growth and operational excellence.
            </p>
            <div class="consult-button-sales"> <Link to="/contact" className='scheduler-set'>Schedule a Free Consultation</Link> </div>
          </div>
        </section>
      </article>

      {/* <VantaAnimation/> */}

      {/* <!-- sales page banner --> */}
      <article class="sales-solutions" >
        <h2 class="sales-heading" >Tailored IaaS Consulting Services </h2>
        {/* <p class="sales-banner-desc">
          Phi Consulting transforms possibilities into profits through tailored
          sales consulting services, including Inbound and Outbound Sales, Sales
          Enablement, Sales Expansion, and strategic Product-led Growth
          solutions.
        </p> */}
        <div class="sales-banner-container">
          <div class="sales-cards one-with-white-back">
            <div class="icon-container">
              <img
                src={salesone}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">Go-To-Market Strategy</h3>
            <div class="sales-card-description">
            Your innovation deserves a robust market entry. Our Go-To-Market (GTM) strategies are not just plans, but blueprints for success, designed to capture your target market effectively and efficiently.
            </div>
          </div>

          <div class="sales-cards one-with-blue-back">
            <div class="icon-container">
              <img
                src={salestwo}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">HR & Recruitment Solutions</h3>
            <div class="sales-card-description">
            Talent is the backbone of any startup. We help you build a team not just for today, but for the future – a workforce aligned with your vision and equipped for the challenges ahead.
            </div>
          </div>
          <div class="sales-cards one-with-white-back">
            <div class="icon-container">
              <img
                src={salesthree}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">Financial Consulting</h3>
            <div class="sales-card-description">
            Navigate the financial complexities of startup growth with our expert advice. From budgeting to fiscal management, we ensure your financial health is robust, enabling you to focus on innovation.
            </div>
          </div>
          <div class="sales-cards one-with-white-back">
            <div class="icon-container">
              <img
                src={salesthree}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">Investor Relations</h3>
            <div class="sales-card-description">
            Building bridges between your vision and the right investors. Our investor relations services connect you with the right people, ensuring your ideas get the backing they need to soar.
            </div>
          </div>
        </div>
        <div class="sales-banner-container down-spacing">
          {/* <div class="sales-cards one-with-blue-back">
            <div class="icon-container">
              <img
                src={salesfour}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">Sales Expansion</h3>
            <div class="sales-card-description">
              Expand your market reach and drive growth with our Sales Expansion
              strategies tailored to your unique business goals.
            </div>
          </div>

          <div class="sales-cards one-with-white-back">
            <div class="icon-container">
              <img
                src={salesfive}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">Product-led Growth</h3>
            <div class="sales-card-description">
              Leverage your product as a key driver for business growth with our
              Product-led Growth strategies, turning users into loyal customers.
            </div>
          </div>
          <div class="sales-cards one-with-blue-back">
            <div class="icon-container">
              <img
                src={salessix}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <div class="more-info-container">
              <div class="right-button">
                <span>More Info</span>
              </div>
            </div>
          </div> */}
        </div>
      </article>

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

      {/* <!-- section new process --> */}
      {/* <article class="process-new">
        <section class="process-new-container">
          <h2 class="path-heading">A Proven Path to Success</h2>
          <p class="work-desc">
            Explore the journey to excellence with Phi Consulting's strategic
            process – your gateway to optimizing sales performance, enhancing
            customer experience, and achieving sustained growth.
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
                  <div class="process-new-heading">Define Your Goals</div>
                  <div class="process-new-description">
                    Understand your unique challenges, aspirations, and
                    opportunities to set the foundation for our strategic
                    approach.
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
                  <div class="process-new-heading">Plan & Map Your Process</div>
                  <div class="process-new-description-right-side">
                    Craft a tailored roadmap aligned with your goals, ensuring a
                    clear path forward.
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
                  <div class="process-new-heading">Set Actions</div>
                  <div class="process-new-description">
                    Define clear, measurable, and achievable steps, creating a
                    roadmap for success.
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
                  <div class="process-new-heading">Assign Stakeholders</div>
                  <div class="process-new-description-right-side">
                    Foster collaboration by assigning key individuals
                    responsible for successful execution.
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
                  <div class="process-new-heading">Test the Process</div>
                  <div class="process-new-description">
                    Rigorously test and refine strategies before full
                    implementation for effectiveness and adaptability.
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
                  <div class="process-new-heading">Implement the Process</div>
                  <div class="process-new-description-right-side">
                    Execute strategies flawlessly with our hands-on approach,
                    bringing the plan to life.
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
                  <div class="process-new-heading">Monitor the Results</div>
                  <div class="process-new-description">
                    Continuously track key metrics, assess performance, and
                    ensure strategies yield desired outcomes.
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
                  <div class="process-new-heading">Make Improvements</div>
                  <div class="process-new-description-right-side">
                    Identify areas for improvement based on results, refining
                    strategies for ongoing optimization.
                  </div>
                </div>
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
          <div class="insights-bundle">
            <div class="left-section-insights">
              <div class="overlay-container one-why">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">
                  Industry-Specific Expertise
                  </h2>
                  <p class="overlay-desc">
                  Our team specializes in your field, offering insights and strategies that resonate with your industry's unique landscape.

                  </p>
                </div>
              </div>
            </div>
            <div class="right-section-insights">
              <div class="overlay-container two-why">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">
                  Cost-Effective Scaling
                  </h2>
                  <p class="overlay-desc">
                  Efficiency is at the heart of what we do. We help you scale your operations while optimizing resources, ensuring a lean yet powerful growth trajectory.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="insights-bundle">
            <div class="left-section-insights">
              <div class="overlay-container three-why">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">Personalized Approach</h2>
                  <p class="overlay-desc">
                  Your startup is unique, and so is our approach. We offer customized solutions that align with your vision and business goals.
                  </p>
                </div>
              </div>
            </div>
            <div class="right-section-insights">
              <div class="overlay-container four-why">
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
            Let's Shape the Future Together
            </div>
            <div class="cta-descrip">
            Ready to accelerate your startup's journey? Contact us to discuss how we can partner in your growth. At Phi Consulting, your vision is our mission.
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