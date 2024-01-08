import React from 'react';
import { Link } from 'react-router-dom';

import ATOB from '../../assets/img/new_logos_comps/newer/AtoB 2.png';
import bobtail from '../../assets/img/new_logos_comps/bobtail.png';
import joyride from '../../assets/img/new_logos_comps/joyride.png';
import Truckx from '../../assets/img/new_logos_comps/TruckX.png';
import pallet from '../../assets/img/new_logos_comps/newer/Pallet Logo.png';
import digitalOcean from '../../assets/img/new_logos_comps/newer/digital-ocean.png';
import mudflap from '../../assets/img/new_logos_comps/newer/Mudflap.png';
import sungrade from '../../assets/img/new_logos_comps/sungrade solar.png';

import salesone from "../../assets/img/black_logos/inbound.png";
import salestwo from "../../assets/img/black_logos/outbound.png";
import salesthree from "../../assets/img/black_logos/enablement.png";
import salesfour from "../../assets/img/black_logos/expansion.png";
import salesfive from "../../assets/img/black_logos/product led growth.png";
import salessix from "../../assets/img/black_logos/button.png";

import goal from "../../assets/img/process_icons/goal.png";
import planicon from "../../assets/img/process_icons/plan.png";
import actionicon from "../../assets/img/process_icons/action.png";
import assignicon from "../../assets/img/process_icons/assign.png";
import testicon from "../../assets/img/process_icons/test.png";
import impicon from "../../assets/img/process_icons/implement.png";
import monitoricon from "../../assets/img/process_icons/monitor.png";
import improveicon from "../../assets/img/process_icons/improve.png";

import workone from "../../assets/img/atob-card.png";
import worktwo from "../../assets/img/comp_logos/AToB-square.jpg";
import workthree from "../../assets/img/digitalocean-product.png";
import workfour from "../../assets/img/comp_logos/digitalocean-square.png";
import workfive from "../../assets/img/truckx-case.png";
import worksix from "../../assets/img/comp_logos/truck-square.png";

import achiconone from "../../assets/img/achievements-badges/clutch_1.png";
import achicontwo from "../../assets/img/achievements-badges/BBB.png";
import achiconthree from "../../assets/img/achievements-badges/clutch_2.png";


const SalesConsulting = () => {
    return (
        <>
      {/* <!-- Hero Section --> */}
      <article class="hero">
        <section class="hero-container-sales">
          <div class="hero-content-sales">
            <h2 class="hero-heading-sales">
              {/* <!-- Transforming Possibilities <br />
              into Profits --> */}
              Turn Opportunities Into Buisness
            </h2>
            <p class="hero-desc-sales">
              Refine your organization's scalability with a structured sales
              department. We prioritize active listening, comprehensive customer
              understanding, and effective management. We guide your customers
              through their buying journey with precision, leveraging the best
              methods and tools for maximum efficiency.
            </p>
            <div class="consult-button-sales"> <Link to="/contact" className='scheduler-set'>Schedule a Free Consultation</Link> </div>
          </div>
        </section>
      </article>

      {/* <!-- sales page banner --> */}
      <article class="sales-solutions">
        <h2 class="sales-heading">Our Sales Consulting Services</h2>
        <p class="sales-banner-desc">
          Phi Consulting transforms possibilities into profits through tailored
          sales consulting services, including Inbound and Outbound Sales, Sales
          Enablement, Sales Expansion, and strategic Product-led Growth
          solutions.
        </p>
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
            <h3 class="sales-card-title">Inbound Sales</h3>
            <div class="sales-card-description">
              Unlock customer interest and engagement with our Inbound Sales
              expertise, turning leads into satisfied clients.
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
            <h3 class="sales-card-title">Outbound Sales</h3>
            <div class="sales-card-description">
              Strategically reach out to potential clients and expand your
              market presence through our targeted Outbound Sales solutions.
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
            <h3 class="sales-card-title">Sales Enablement</h3>
            <div class="sales-card-description">
              Empower your sales team with the tools and knowledge they need to
              close deals effectively with our Sales Enablement services.
            </div>
          </div>
        </div>
        <div class="sales-banner-container down-spacing">
          <div class="sales-cards one-with-blue-back">
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
          </div>
        </div>
      </article>

      {/* <!-- Section path  --> */}
      <article class="path">
        <section class="path-container">
          <h2 class="path-heading">
            Nurturing Excellence through Structured Engagement
          </h2>
          <p class="sales-process-desc">
            At Phi Consulting, we believe in the power of a well-defined process
            to drive continuous improvement. Our structured approach encompasses
            various elements to ensure a comprehensive and adaptive strategy for
            your sales success.
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
                  Clearly articulate your sales objectives.
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
                <h2 class="circle-heading-sales">Plan & Map Your Process</h2>
                <h3 class="circle-text-sales">
                  Strategize an effective sales roadmap.
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
                <h2 class="circle-heading-sales">Set Actions</h2>
                <h3 class="circle-text-sales">
                  Implement targeted actions to improve sales.
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
                  Clearly define roles for effective execution.
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
                <h2 class="circle-heading-sales">Test the Process</h2>
                <h3 class="circle-text-sales">
                  Evaluate and refine your sales strategy.
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
                <h2 class="circle-heading-sales">Implementation</h2>
                <h3 class="circle-text-sales">
                  Execute the optimized sales plan.
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
                <h2 class="circle-heading-sales">Monitor the Results</h2>
                <h3 class="circle-text-sales">
                  Track performance against goals.
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
                <h2 class="circle-heading-sales">Iterate the Process</h2>
                <h3 class="circle-text-sales">
                  Continuously refine for enhanced results.
                </h3>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* <!-- Clients Section --> */}
      <article class="clients">
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
                  />
                </div>
                <div class="image-container">
                  <img
                    src={bobtail}
                    alt="bobtail_logo"
                    title="BoBtail"
                  />
                </div>

                <div class="image-container">
                  <img
                    src={joyride}
                    alt="joyride_logo"
                    title="Joyride"
                  />
                </div>
                <div class="image-container">
                  <img
                    src={Truckx}
                    alt="truckx_logo"
                    title="TruckX"
                  />
                </div>
                <div class="image-container">
                  <img
                    src={pallet}
                    alt="AtoB_logo"
                    title="Pallet"
                  />
                </div>
              </div>
              <div class="logo-container-one">
                <div class="image-container-bottom">
                  <img
                    src={digitalOcean}
                    alt="bobtail_logo"
                    title="Digital Ocean"
                  />
                </div>

                <div class="image-container-bottom">
                  <img
                    src={mudflap}
                    alt="joyride_logo"
                    title="Mudflap"
                  />
                </div>
                <div class="image-container-bottom">
                  <img
                    src={sungrade}
                    alt="truckx_logo"
                    title="Sungrade Solar"
                  />
                </div>
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

      {/* <!-- why phi for sale Section --> */}
      <article class="why-phi-for-sales">
        <h2 class="why-phi-heading">Why Choose Phi for Sales Consulting?</h2>
        <div class="insights-container">
          <div class="insights-bundle">
            <div class="left-section-insights">
              <div class="overlay-container one-why">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">
                    Deep Understanding of Product's GTM
                  </h2>
                  <p class="overlay-desc">
                    We grasp the intricacies of your product's Go-To-Market
                    strategy, ensuring a comprehensive and effective approach
                  </p>
                </div>
              </div>
            </div>
            <div class="right-section-insights">
              <div class="overlay-container two-why">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">
                    Opening Up More Sales Channels
                  </h2>
                  <p class="overlay-desc">
                    Diversify and expand your reach by tapping into untapped
                    sales channels, creating new avenues for growth.
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
                  <h2 class="overlay-heading">Definite Increase in ACV</h2>
                  <p class="overlay-desc">
                    Our strategies are geared towards not just sales, but
                    maximizing the value of each customer interaction.
                  </p>
                </div>
              </div>
            </div>
            <div class="right-section-insights">
              <div class="overlay-container four-why">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">
                    Refining Customer Onboarding Process
                  </h2>
                  <p class="overlay-desc">
                    Seamless onboarding experiences lead to satisfied customers.
                    We optimize this crucial phase for long-term success.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="insights-bundle">
            <div class="left-section-insights">
              <div class="overlay-container five-why">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">
                    End-to-End Understanding of Financial Compliance
                  </h2>
                  <p class="overlay-desc">
                    Navigate the complexities of the financial landscape with
                    confidence, ensuring compliance at every step.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- <div class="right-section-insights"></div> --> */}
          </div>
        </div>
      </article>

      {/* <!-- Work small version Section --> */}
      <article class="work">
        <section class="work-section">
          <h2 class="work-heading">Client Success Stories</h2>
          <p class="work-desc">
            Explore our portfolio to witness the transformative impact of Phi
            Consulting on businesses like yours. Each success story is a
            testament to our commitment to driving sales excellence.
          </p>
          <div class="work-row">
            <div class="work-card">
              <div class="work-card-image-container">
                <img
                  src={workone}
                  alt=""
                  width="250"
                  height="250"
                />
              </div>
              <div class="logo-work-card-container">
                <img
                  src={worktwo}
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
                  src={workthree}
                  alt=""
                  width="250"
                  height="250"
                />
              </div>
              <div class="logo-work-card-container">
                <img
                  src={workfour}
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
                  src={workfive}
                  alt=""
                  width="250"
                  height="250"
                />
              </div>
              <div class="logo-work-card-container">
                <img
                  src={worksix}
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

      {/* <!-- Achievements Section --> */}
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

      {/* <!-- Call to Action Section --> */}
      <article class="cta-container">
        <section class="cta-sections-container">
          <div class="cta-content">
            <div class="cta-heading">
              Ready to Elevate Your Sales Strategy? Connect with Phi Consulting
              Today!
            </div>
            <div class="cta-descrip">
              Unlock unprecedented sales growth by partnering with Phi
              Consulting. Let's work together to redefine your sales strategy
              and achieve remarkable success. Contact us today to schedule a
              consultation.
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

export default SalesConsulting;