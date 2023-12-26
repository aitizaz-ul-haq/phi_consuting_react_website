import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import CustomerExperience from './sub_pages/CustomerExperienceConsulting';
import FinancialConsulting from './sub_pages/FinancialConsulting';
import BuisnessConsulting from './sub_pages/BuisnessConsulting';
import HrConsulting from './sub_pages/HrAndRecruitmentConsulting';
import SalesConsulting from './sub_pages/SalesConsulting';

import salesicon from "../assets/img/white_icons/sales.png";
import buisnessicon from "../assets/img/white_icons/business.png";
import financialicon from "../assets/img/white_icons/financial (2).png";
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

import workcardimgone from "../assets/img/atob-card.png";
import workcardtwo from "../assets/img/digitalocean-product.png";
import workcardthree from "../assets/img/truckx-case.png";

import squareiconone from "../assets/img/comp_logos/AToB-square.jpg";
import squareicontwo from "../assets/img/comp_logos/digitalocean-square.png";
import squareiconthree from "../assets/img/comp_logos/truck-square.png";

import achiconone from "../assets/img/achievements-badges/clutch_1.png";
import achicontwo from "../assets/img/achievements-badges/BBB.png";
import achiconthree from "../assets/img/achievements-badges/clutch_2.png";





const Services = () => {
  const handleTabClickOne = () => {
    window.location.href = '/buisness-consulting';
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
    window.location.href = '/sales-consulting';
  } 

  const gotoContacts = () => {
    window.location.href = '/contact';
  }


  return (
    <>
   {/* <!-- Hero Section --> */}
      <article class="hero">
        <section class="hero-container-services">
          <div class="hero-content-services-page">
            <h2 class="hero-heading-services-page">
              Drive Growth & Excellence with Phi Consulting
            </h2>
            <p class="hero-desc-services-page">
              Unlock the complete potential of your enterprise through Phi
              Consulting's comprehensive suite of solutions. Our expertise spans
              Sales, Business, Financial, HR & Recruitment, and Customer
              Experience Consulting. We are not just consultants; we are your
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
              <h3 class="card-present-title">Sales Consulting</h3>
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
              <h3 class="card-present-title">Business Consulting</h3>
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
          </div>
          <div class="card-row-top">
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
              <h3 class="card-present-title">HR & Recruitment Consulting</h3>
              <div class="card-present-desc">
                Build a dynamic and skilled workforce with our specialized HR
                solutions.
              </div>
            </div>
            <div class="card-service-show sales-tab-five" onClick={handleTabClickTwo}>
              <div class="circleBasetwo typetwo">
                <img
                  src={cxicon}
                  alt=""
                  width="100"
                  height="100"
                  class="icon-adjuster"
                />
              </div>
              <h3 class="card-present-title">Customer Experience Consulting</h3>
              <div class="card-present-desc">
                Optimize customer interactions for enhanced satisfaction and
                operational efficiency.
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
      <article class="process-new">
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
      </article>

      {/* <!-- Work small version Section --> */}
      <article class="work">
        <section class="work-section">
          <h2 class="work-heading">Our Work</h2>
          <p class="work-desc">
            Our hands-on approach ensures that startups and SMEs thrive in
            building their consumer base. From launching new products to
            improving existing ones, we are ready to roll up our sleeves and
            help you achieve your goals.
          </p>
          <div class="work-row">
            <div class="work-card">
              <div class="work-card-image-container">
                <img
                  src={workcardimgone}
                  alt=""
                  width="250"
                  height="250"
                />
              </div>
              <div class="logo-work-card-container">
                <img
                  src={squareiconone}
                  alt=""
                  width="60"
                  height="60"
                />
              </div>
              <h3 class="work-card-heading">Lorem ipsum dolor sit amet</h3>
              <p class="work-card-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ad
                libero ipsa accusantium et itaque,
              </p>
              <div class="right-button-work-small">
                <span>Explore More</span>
              </div>
            </div>
            <div class="work-card">
              <div class="work-card-image-container">
                <img
                  src={workcardtwo}
                  alt=""
                  width="250"
                  height="250"
                />
              </div>
              <div class="logo-work-card-container">
                <img
                  src={squareicontwo}
                  alt=""
                  width="60"
                  height="60"
                />
              </div>
              <h3 class="work-card-heading">Lorem ipsum dolor sit amet</h3>
              <p class="work-card-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ad
                libero ipsa accusantium et itaque,
              </p>
              <div class="right-button-work-small">
                <span>Explore More</span>
              </div>
            </div>
            <div class="work-card">
              <div class="work-card-image-container">
                <img
                  src={workcardthree}
                  alt=""
                  width="250"
                  height="250"
                />
              </div>
              <div class="logo-work-card-container">
                <img
                  src={squareiconthree}
                  alt=""
                  width="60"
                  height="60"
                />
              </div>
              <h3 class="work-card-heading">Lorem ipsum dolor sit amet</h3>
              <p class="work-card-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ad
                libero ipsa accusantium et itaque,
              </p>
              <div class="right-button-work-small">
                <span>Explore More</span>
              </div>
            </div>
          </div>

          <div class="right-button spacing-under">
            <span>View More Case Studies</span>
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
      <article class="testimonial">
        <section class="testimonial-container">
          <h2 class="testi-heading">What Our Clients Say About Us</h2>
          <p class="testi-desc">
            Our clients speak for the transformative impact of Phi Consulting.
            <br />
            Here's what they have to say about their experiences partnering with
            us:
          </p>
        </section>

        <section class="testi-cards-container">
          <div class="testi-card">
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

          <div class="testi-card">
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

          <div class="testi-card">
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

      <article class="achievement">
        <section class="achievement-section">
          <h2 class="ach-heading-services-page">Our Achievements</h2>
          <p class="ach-desc-services-page">
            Explore Phi Consulting's hall of achievements <br />– where revenue
            surges, operational efficiency peaks, and client success stories
            converge, defining a legacy of transformative impact.
          </p>
        </section>
        <section class="ach-badges-container">
          <div class="ach-badge">
            <img
              src={achiconone}
              alt=""
              width="200"
              height="230"
            />
          </div>
          <div class="ach-badge">
            <img
              src={achicontwo}
              alt=""
              width="200"
              height="150"
            />
          </div>

          <div class="ach-badge">
            <img
              src={achiconthree}
              alt=""
              width="250"
              height="220"
            />
          </div>

          <div class="ach-badge">
            <img
              src={achiconone}
              alt=""
              width="200"
              height="230"
            />
          </div>
          <div class="ach-badge">
            <img
              src={achicontwo}
              alt=""
              width="200"
              height="150"
            />
          </div>

          <div class="ach-badge">
            <img
              src={achiconthree}
              alt=""
              width="250"
              height="220"
            />
          </div>
        </section>
      </article>

      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="customer-experience" element={<CustomerExperience />} />
          <Route path="financial-consulting" element={<FinancialConsulting />} />
          <Route path="buisness-consulting" element={<BuisnessConsulting />} />
          <Route path="hr-consulting" element={<HrConsulting />} />
          <Route path="sales-consulting" element={<SalesConsulting />} />
          {/* Add routes for other service components */}
        </Route>
      </Routes>
    </>
  )
}

export default Services;
