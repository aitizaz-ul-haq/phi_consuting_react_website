import React,{ useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import CustomerExperience from './sub_pages/CustomerExperienceConsulting';
import FinancialConsulting from './sub_pages/FinancialConsulting';
import BuisnessConsulting from './sub_pages/BuisnessConsulting';
import HrConsulting from './sub_pages/HrAndRecruitmentConsulting';
import SalesConsulting from './sub_pages/SalesConsulting';

import salesicon from "../assets/img/solutions icons/GTM.png";
import buisnessicon from "../assets/img/solutions icons/Investor Relations.png";
import financialicon from "../assets/img/solutions icons/fin.png";
import hricon from "../assets/img/white_icons/human-resources.png";
import cxicon from "../assets/img/white_icons/customer-experience.png";

import goal from "../assets/img/process_icons/goal.png";
import planicon from "../assets/img/process_icons/plan.png";
import actionicon from "../assets/img/process_icons/action.png";
import assignicon from "../assets/img/process_icons/assign.png";
import testicon from "../assets/img/process_icons/test.png";
import impicon from "../assets/img/process_icons/implement.png";
import monitoricon from "../assets/img/process_icons/monitor.png";
import improveicon from "../assets/img/process_icons/improve.png";


import achiconone from "../assets/img/achievements-badges/clutch_1.png";
import achicontwo from "../assets/img/achievements-badges/BBB.png";
import achiconthree from "../assets/img/achievements-badges/clutch_2.png";
import SmallWorkCard from '../components/shared/cards/SmallWorkCard';
import { TypeAnimation } from 'react-type-animation';
import caseStudies from "../data/caseStudies.json";


const Services = () => {

//   const [isVisiblecard, setIsVisiblecard] = useState(false);
//   const cardsRef = useRef(null);

//   const [isVisibleTesti, setIsVisibleTesti] = useState(false);
//  const testiRef = useRef(null);

 const [isVisibleAch, setIsVisibleAch] = useState(false);
  const achRef = useRef(null);

  const [processNewVisible, setProcessNewVisible] = useState(false);
  const processNewRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


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

  // useEffect(() => {
  //   const observer = new IntersectionObserver(entries => {
  //       entries.forEach(entry => setIsVisibleTesti(entry.isIntersecting));
  //   }, { threshold: 0.5 });
  
  //   observer.observe(testiRef.current);
  //   return () => observer.disconnect();
  // }, []);

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

  const handleTabClickOne = () => {
    window.location.href = '/investor-relations';
  } 

  const handleTabClickTwo = () => {
    window.location.href = '/customer-experience';
  } 

  const handleTabClickThree = () => {
    window.location.href = '/financial-consulting';
  } 

  const handleTabClickFour = () => {
    window.location.href = '/hr-consulting';
  } 

  const handleTabClickFive = () => {
    window.location.href = '/GTM-advisory';
  } 

  const gotoContacts = () => {
    window.location.href = '/contact';
  }

  const firstThreeCaseStudies = caseStudies.slice(0, 3);
  return (
    <>
   {/* <!-- Hero Section --> */}
      <article class="hero">
        <section class="hero-container-services">
          <div class="hero-content-services-page">
            <h2 class="hero-heading-services-page">
            {windowWidth >= 1200 ? <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Drive Growth & Excellence with Phi Consulting',
        7000, 
       
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '40px', display: 'inline-block' }}
      repeat={Infinity}
    /> : 'Drive Growth & Excellence with Phi Consulting'}
              
            </h2>
            <p class="hero-desc-services-page">
              Unlock the complete potential of your enterprise through Phi
              Consulting's comprehensive suite of solutions. Our expertise spans
              GTM Strategy, HR & Recruitment, Investor Relations & Financial Consulting. We are not just consultants; we are your
              dedicated partners in navigating challenges and ensuring
              sustainable growth.
            </p>
            <div class="consult-button-services-page" onClick={gotoContacts}>
              Schedule a Free Consultation
            </div>
          </div>
        </section>
      </article>

      {/* <!-- Services page section one strategic solutions --> */}
      <article class="strategic-solutions">
        <h2 class="strategic-heading">
          Strategic Solutions Tailored to Your Needs
        </h2>
        <p class="work-desc">
          From fine-tuning sales strategies to optimizing financial health,
          cultivating a dynamic workforce, and enhancing customer experiences –
          we are your catalyst for achieving unparalleled growth.
        </p>
        <div class="services-banner-container">
          <div class="card-row-top">
            <div class="card-service-show sales-tab-one" onClick={handleTabClickFive}>
              <div class="circleBasetwo typetwo">
                <img
                  src={salesicon}
                  alt=""
                  width="100"
                  height="100"
                  class="icon-adjuster"
                />
              </div>
              <h3 class="card-present-title">GTM Strategy</h3>
              <div class="card-present-desc">
                Scale your sales operations with precision and excellence,
                targeting the right customers and optimizing sales cycles.
              </div>
            </div>
            <div class="card-service-show sales-tab-two" onClick={handleTabClickOne}>
              <div class="circleBasetwo typetwo">
                <img
                  src={buisnessicon}
                  alt=""
                  width="100"
                  height="100"
                  class="icon-adjuster"
                />
              </div>
              <h3 class="card-present-title">Investor Relations</h3>
              <div class="card-present-desc">
                Navigate challenges, optimize strategies, and achieve
                sustainable growth with our proven expertise.
              </div>
            </div>
            <div class="card-service-show sales-tab-three" onClick={handleTabClickThree}>
              <div class="circleBasetwo typetwo">
                <img
                  src={financialicon}
                  alt=""
                  width="100"
                  height="100"
                  class="icon-adjuster"
                />
              </div>
              <h3 class="card-present-title">Financial Consulting</h3>
              <div class="card-present-desc">
                Drive profitability and fiscal responsibility through strategic
                financial guidance.
              </div>
            </div>
            <div class="card-service-show sales-tab-four" onClick={handleTabClickFour}>
              <div class="circleBasetwo typetwo">
                <img
                  src={hricon}
                  alt=""
                  width="100"
                  height="100"
                  class="icon-adjuster"
                />
              </div>
              <h3 class="card-present-title">HR & Recruitment</h3>
              <div class="card-present-desc">
                Build a dynamic and skilled workforce with our specialized HR
                solutions.
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* <!-- Section path  --> */}
      <article class="path">
        <section class="path-container">
          <h2 class="path-heading">A Proven Path to Success</h2>
          <p class="work-desc">
            Explore the journey to excellence with Phi Consulting's strategic
            process – your gateway to optimizing sales performance, enhancing
            customer experience, and achieving sustained growth.
          </p>
          <div class="process-container">
            <div class="circle-container">
              <div class="circle-content">
                <div class="icon-process-container">
                  <img
                    src={goal}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading">Define Your Goals</h2>
                <h3 class="circle-text">
                  We kick off our partnership by understanding your unique
                  challenges, aspirations, and opportunities.
                </h3>
              </div>
            </div>
            <div class="circle-container">
              <div class="circle-content">
                <div class="icon-process-container">
                  <img
                    src={planicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading">Plan & Map Your Process</h2>
                <h3 class="circle-text">
                  Crafting a tailored roadmap is key to success.
                </h3>
              </div>
            </div>
            <div class="circle-container">
              <div class="circle-content">
                <div class="icon-process-container">
                  <img
                    src={actionicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading">Set Actions</h2>
                <h3 class="circle-text">
                  Define clear and actionable steps that propel your strategy
                  forward.
                </h3>
              </div>
            </div>
            <div class="circle-container">
              <div class="circle-content">
                <div class="icon-process-container">
                  <img
                    src={assignicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading">Assign Stakeholders</h2>
                <h3 class="circle-text">
                  Ensure a unified and accountable effort by assigning
                  stakeholders to each action.
                </h3>
              </div>
            </div>
            <div class="circle-container">
              <div class="circle-content">
                <div class="icon-process-container">
                  <img
                    src={testicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading">Test the Process</h2>
                <h3 class="circle-text">
                  Before full implementation, we rigorously test the devised
                  strategies.
                </h3>
              </div>
            </div>
            <div class="circle-container">
              <div class="circle-content">
                <div class="icon-process-container">
                  <img
                    src={impicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading">Implement the Process</h2>
                <h3 class="circle-text">
                  With a well-tested plan in place, we move to implementation.
                </h3>
              </div>
            </div>
            <div class="circle-container">
              <div class="circle-content">
                <div class="icon-process-container">
                  <img
                    src={monitoricon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading">Monitor the Results</h2>
                <h3 class="circle-text">
                  We don't stop at implementation. Continuous monitoring of
                  results is integral to our process.
                </h3>
              </div>
            </div>
            <div class="circle-container">
              <div class="circle-content">
                <div class="icon-process-container">
                  <img
                    src={improveicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading">Make Improvements</h2>
                <h3 class="circle-text">
                  Based on monitored results, we identify areas for improvement.
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
            <div class="left-process-section">
              <div class="tooltip-right">
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
              <div class="tooltip-left">
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
              <div class="tooltip-right">
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
              <div class="tooltip-left">
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
              <div class="tooltip-right">
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
              <div class="tooltip-left">
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
              <div class="tooltip-right">
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
              <div class="tooltip-left">
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

<article class="process-new">
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
      </article>

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
                <SmallWorkCard key={study.id} caseStudy={study} isVisible={isVisiblecard} />
            ))}
          </div>

          <div class="right-button spacing-under">
          <span><Link to="/casestudies" className='morcases'>View More Case Studies</Link></span>
          </div>
        </section>
      </article> */}

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

       
        </section>
      </article>

      {/* <!-- Call to Action Section --> */}
      <article class="cta-container">
        <section class="cta-sections-container">
          <div class="cta-content">
            <div class="cta-heading">Ready to Elevate Your Business?</div>
            <div class="cta-descrip">
              Unlock growth, reduce costs, and maximize efficiency with Phi
              Consulting. Contact us today for a consultation and take the first
              step toward business excellence.
            </div>
          </div>
          <div class="cta-button-section">
            <div class="right-button-header">
              <span
                ><Link to="/contact" class="inner-header"
                  >Contact Us</Link
                ></span
              >
            </div>
          </div>
        </section>
      </article>

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

    

      {/* <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="customer-experience" element={<CustomerExperience />} />
          <Route path="financial-consulting" element={<FinancialConsulting />} />
          <Route path="buisness-consulting" element={<BuisnessConsulting />} />
          <Route path="hr-consulting" element={<HrConsulting />} />
          <Route path="sales-consulting" element={<SalesConsulting />} />
         
        </Route>
      </Routes> */}
    </>
  )
}

export default Services;
