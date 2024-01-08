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

import bcone from "../../assets/img/buisness_consulting/business transformation.png";
import bctwo from "../../assets/img/buisness_consulting/strategy.png";
import bcthree from "../../assets/img/buisness_consulting/project-management.png";
import bcfour from "../../assets/img/buisness_consulting/operations.png";
import bcfive from "../../assets/img//buisness_consulting_icons/process management.png";
import bcsix from "../../assets/img/buisness_consulting/management consultant.png";

const BuisnessConsulting = () => {
    return (
        <>
         {/* <!-- Hero Section --> */}
      <article class="hero">
        <section class="hero-container-bui-consul">
          <div class="hero-content-bui-consul">
            <h2 class="hero-heading-bui-consul">
              Building Winning Strategies to <br />
              Gain Competitive Advantage
            </h2>
            <p class="hero-desc-bui-consul">
              We support our clients through our pioneering approach by focusing
              and building on the deep ethos of the business and adding layers
              on top of it to build a competitive advantage. Our business
              consultancy is based on a sound understanding of your product,
              customers, and the market.
            </p>
            <div class="consult-button-bui-consul">
            <Link to="/contact" className='scheduler-set'> Schedule a Free Consultation</Link>
            </div>
          </div>
        </section>
      </article>

      {/* <!-- sales page banner --> */}
      <article class="sales-solutions">
        <h2 class="sales-heading">Our Business Consulting Services:</h2>
        <p class="sales-banner-desc">
          Phi Consulting delivers transformative services to optimize strategy,
          operations, and overall business performance.
        </p>
        <div class="sales-banner-container">
          <div class="sales-cards one-with-white-back">
            <div class="icon-container">
              <img
                src={bcone}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">Business Transformation</h3>
            <div class="sales-card-description">
              Embrace change and lead your industry with our innovative business
              transformation strategies.
            </div>
          </div>

          <div class="sales-cards one-with-blue-back">
            <div class="icon-container">
              <img
                src={bctwo}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">Strategy Development</h3>
            <div class="sales-card-description">
              Craft robust strategies that align with your goals, ensuring a
              clear roadmap for success.
            </div>
          </div>
          <div class="sales-cards one-with-white-back">
            <div class="icon-container">
              <img
                src={bcthree}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">Project/Product Management</h3>
            <div class="sales-card-description">
              From ideation to execution, optimize your project and product
              management with our proven methodologies.
            </div>
          </div>
        </div>
        <div class="sales-banner-container down-spacing">
          <div class="sales-cards one-with-blue-back">
            <div class="icon-container">
              <img
                src={bcfour}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">Operations Consulting</h3>
            <div class="sales-card-description">
              Streamline your operations for efficiency, cost-effectiveness, and
              unmatched performance.
            </div>
          </div>

          <div class="sales-cards one-with-white-back">
            <div class="icon-container">
              <img
                src={bcfive}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">Process Management</h3>
            <div class="sales-card-description">
              Fine-tune your processes to perfection, enhancing productivity and
              reducing bottlenecks.
            </div>
          </div>
          <div class="sales-cards one-with-blue-back">
            <div class="icon-container">
              <img
                src={bcsix}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">Management Consulting</h3>
            <div class="sales-card-description">
              Gain insights and advice from seasoned experts, guiding you
              through the complexities of modern business.
            </div>
          </div>
        </div>
      </article>

      {/* <!-- Section path  --> */}
      <article class="path">
        <section class="path-container">
          <h2 class="path-heading">Our Business Consulting Process:</h2>
          <p class="sales-process-desc">
            Crafting tailored solutions for guaranteed success, Phi Consulting
            embraces a systematic approach to elevate your business strategy and
            operations.
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
                  Clearly articulate your objectives, laying the foundation for
                  a targeted consulting strategy.
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
                  Develop a comprehensive plan, mapping out the steps required
                  to achieve your goals.
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
                  Implement strategic actions, aligning every move with your
                  overarching business objectives.
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
                  Clearly define roles and responsibilities, ensuring flawless
                  execution of your business plan.
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
                  Rigorously test your strategies and processes to identify and
                  address any potential challenges.
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
                  Execute the refined strategies, incorporating feedback and
                  making real-time adjustments as needed.
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
                  Utilize robust monitoring systems to gauge the impact of our
                  consulting services on your business.
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
                  Embrace a culture of continuous improvement, refining and
                  iterating the process for sustained success.
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

      {/* <!-- why phi for customer exp Section --> */}
      <article class="why-phi-for-sales">
        <h2 class="why-phi-heading">
          Why Choose Phi for Customer Experience Consulting?
        </h2>
        <p class="why-phi-desc">
          Your catalyst for business excellence, offering proven expertise,
          tailored solutions, and a collaborative approach to enhance your
          success.
        </p>
        <div class="insights-container">
          <div class="insights-bundle">
            <div class="left-section-insights">
              <div class="overlay-container eight-bui-consul">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">Customer-Centric Focus</h2>
                  <p class="overlay-desc">
                    Your success is our priority. Phi Consulting is committed to
                    delivering results that align with your customer-centric
                    goals.
                  </p>
                </div>
              </div>
            </div>
            <div class="right-section-insights">
              <div class="overlay-container two-bui-consul">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">Tailored Solutions</h2>
                  <p class="overlay-desc">
                    Every business is unique. Our consulting services are
                    customized to address your specific challenges and goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="insights-bundle">
            <div class="left-section-insights">
              <div class="overlay-container three-bui-consul">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">Collaborative Approach</h2>
                  <p class="overlay-desc">
                    We work closely with you, ensuring a partnership that values
                    your insights and incorporates them into our strategies.
                  </p>
                </div>
              </div>
            </div>
            <div class="right-section-insights">
              <div class="overlay-container four-bui-consul">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">Strategic Insight</h2>
                  <p class="overlay-desc">
                    Gain a competitive edge with our in-depth strategic
                    insights, staying ahead of industry trends and market
                    shifts.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="insights-bundle">
            <div class="left-section-insights">
              <div class="overlay-container seven-bui-consul">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">Global Perspective</h2>
                  <p class="overlay-desc">
                    Benefit from a global perspective. Our consultants bring
                    diverse international experiences, offering a broader
                    worldview.
                  </p>
                </div>
              </div>
            </div>
            <div class="right-section-insights">
              <div class="overlay-container six-bui-consul">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">Data-Driven Decisions</h2>
                  <p class="overlay-desc">
                    Leverage the power of data in decision-making. Our approach
                    integrates data analysis for informed, strategic choices.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="insights-bundle">
            {/* <!-- <div class="left-section-insights">
              <div class="overlay-container seven-bui-consul">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">Global Perspective</h2>
                  <p class="overlay-desc">
                    Benefit from a global perspective. Our consultants bring
                    diverse international experiences, offering a broader
                    worldview.
                  </p>
                </div>
              </div>
            </div> --> */}
            {/* <!-- <div class="right-section-insights">
              <div class="overlay-container eight-bui-consul">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">Customer-Centric Focus</h2>
                  <p class="overlay-desc">
                    Your success is our priority. Phi Consulting is committed to
                    delivering results that align with your customer-centric
                    goals.
                  </p>
                </div>
              </div>
            </div>
          </div> --> */}
            {/* <!-- <div class="insights-bundle">
            <div class="left-section-insights">
              <div class="overlay-container nine-bui-consul">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">Continuous Improvement</h2>
                  <p class="overlay-desc">
                    Embrace a culture of continuous improvement. We don't just
                    solve problems; we refine strategies for sustained success.
                  </p>
                </div>
              </div>
            </div>
            <div class="right-section-insights">
              <div class="overlay-container ten-bui-consul">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">Comprehensive Support</h2>
                  <p class="overlay-desc">
                    Beyond consultancy, Phi provides comprehensive support,
                    ensuring the flawless execution of recommended strategies.
                  </p>
                </div>
              </div>
            </div>
          </div> --> */}
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

    {/*  <!-- Testimonial Section --> */}
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
              Ready to Redefine Your Business Excellence?
            </div>
            <div class="cta-descrip">
              Experience unparalleled transformation by partnering with Phi
              Consulting. Let's collaborate to reshape your business strategy
              and achieve remarkable success. Reach out today to schedule a
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

export default BuisnessConsulting;