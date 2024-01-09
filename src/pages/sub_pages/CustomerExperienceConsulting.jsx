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


// import workone from "../../assets/img/atob-card.png";
// import worktwo from "../../assets/img/comp_logos/AToB-square.jpg";
// import workthree from "../../assets/img/digitalocean-product.png";
// import workfour from "../../assets/img/comp_logos/digitalocean-square.png";
// import workfive from "../../assets/img/truckx-case.png";
// import worksix from "../../assets/img/comp_logos/truck-square.png";

import achiconone from "../../assets/img/achievements-badges/clutch_1.png";
import achicontwo from "../../assets/img/achievements-badges/BBB.png";
import achiconthree from "../../assets/img/achievements-badges/clutch_2.png";

import cxiconone from "../../assets/img/customer_experience_icons/call support.png";
import cxisontwo from "../../assets/img/customer_experience_icons/customer success.png";
import cxiconthree from "../../assets/img/customer_experience_icons/quality assurance.png";
import csiconfour from "../../assets/img/customer_experience_icons/learning-development.png";
import cxiconfive from "../../assets/img/black_logos/button.png";

import caseStudies from '../../data/caseStudies.json';

const CustomerExperienceConsulting = () => {
  const firstThreeCaseStudies = caseStudies.slice(0, 3);
    return (
        <>
         {/* <!-- Hero Section --> */}
      <article class="hero">
        <section class="hero-container-exp">
          <div class="hero-content-exp">
            <h2 class="hero-heading-exp">
              Your One-Stop CX Transformation Partner
            </h2>
            <p class="hero-desc-exp">
              We help our clients transform their experiences to achieve
              meaningful impact. We partner with startups to provide insights
              and support them in taking actionable steps toward creating
              customer experiences that deliver more value.
            </p>
            <div class="consult-button-exp"><Link to="/contact" className='scheduler-set'> Schedule a Free Consultation</Link></div>
          </div>
        </section>
      </article>

      {/* <!-- sales page banner --> */}
      <article class="sales-solutions">
        <h2 class="sales-heading">
          Our Customer Experience Consulting Services:
        </h2>
        <p class="sales-banner-desc">
          Crafting unparalleled customer journeys with services ranging from
          responsive Call and Email/Chat Support to Customer Success, QA, and
          continuous Learning & Development.
        </p>
        <div class="sales-banner-container">
          <div class="sales-cards one-with-white-back">
            <div class="icon-container">
              <img
                src={cxiconone}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">Call Support</h3>
            <div class="sales-card-description">
              Elevate customer engagement with our Call Support service,
              ensuring seamless and effective communication at every touchpoint.
            </div>
          </div>

          <div class="sales-cards one-with-blue-back">
            <div class="icon-container">
              <img
                src={cxiconone}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">Email/Chat Support</h3>
            <div class="sales-card-description">
              Deliver exceptional customer interactions through our Email/Chat
              Support service, fostering responsive and personalized
              communication.
            </div>
          </div>
          <div class="sales-cards one-with-white-back">
            <div class="icon-container">
              <img
                src={cxisontwo}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">Customer Success</h3>
            <div class="sales-card-description">
              Maximize customer satisfaction and loyalty with our Customer
              Success service, tailored to nurture long-lasting relationships.
            </div>
          </div>
        </div>
        <div class="sales-banner-container down-spacing">
          <div class="sales-cards one-with-blue-back">
            <div class="icon-container">
              <img
                src={cxiconthree}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">Quality Assurance (QA)</h3>
            <div class="sales-card-description">
              Ensure excellence in every interaction with our Quality Assurance
              service, meticulously monitoring and enhancing service quality.
            </div>
          </div>

          <div class="sales-cards one-with-white-back">
            <div class="icon-container">
              <img
                src={csiconfour}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">Learning & Development</h3>
            <div class="sales-card-description">
              Empower your customer support team with continuous improvement
              through our Learning & Development service, ensuring skill growth
              and adaptability.
            </div>
          </div>
          <div class="sales-cards one-with-blue-back">
            <div class="icon-container">
              <img
                src={cxiconfive}
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
            Our Customer Experience Consulting Process:
          </h2>
          <p class="sales-process-desc">
            Navigating the path to exceptional customer experiences through a
            strategic process
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
                  Clearly articulate your customer experience objectives.
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
                  Strategize an effective customer experience roadmap.
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
                  Implement targeted actions to improve customer interactions.
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
                  Evaluate and refine your customer experience strategy.
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
                  Execute the optimized customer experience plan.
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
              77% of CEOs feel they need to reconfigure the way they engage and
              interact with their customers.
            </h2>
          </div>
        </section>
      </article>

      {/* <!-- why phi for customer exp Section --> */}
      <article class="why-phi-for-sales">
        <h2 class="why-phi-heading">
          Why Choose Phi for Customer Experience Consulting?
        </h2>
        <p class="why-phi-desc">
          Choose Phi Consulting for a transformative partnership where customer
          experience goes beyond service <br />
          — it becomes a strategic advantage for your brand.
        </p>
        <div class="insights-container">
          <div class="insights-bundle">
            <div class="left-section-insights">
              <div class="overlay-container one-exp">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">Multi-Tiered Customer Support</h2>
                  <p class="overlay-desc">
                    Experience a tiered approach to support that caters to the
                    diverse needs of your customers.
                  </p>
                </div>
              </div>
            </div>
            <div class="right-section-insights">
              <div class="overlay-container two-exp">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">Soft Skills Excellence</h2>
                  <p class="overlay-desc">
                    Our team excels in the art of communication, ensuring every
                    interaction reflects positively on your brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="insights-bundle">
            <div class="left-section-insights">
              <div class="overlay-container three-exp">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">
                    Dedicated Learning & Development Team
                  </h2>
                  <p class="overlay-desc">
                    Continuous improvement is at the core of our approach. Our
                    dedicated L&D team ensures that your staff is always at the
                    forefront of customer service excellence
                  </p>
                </div>
              </div>
            </div>
            <div class="right-section-insights">
              <div class="overlay-container four-exp">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">
                    24/7 Bilingual <br />(Voice+Non-Voice) Support
                  </h2>
                  <p class="overlay-desc">
                    Break language barriers with our round-the-clock bilingual
                    support, enhancing accessibility for your global audience.
                  </p>
                </div>
              </div>
            </div>
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
          {firstThreeCaseStudies.map(study => (
                <SmallWorkCard key={study.id} caseStudy={study} />
            ))}
            {/* <div class="work-card">
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
            </div> */}
          </div>

          <div class="right-button spacing-under">
            <span>View More Case Studies</span>
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
              Transform Your Customer Experiences Today!
            </div>
            <div class="cta-descrip">
              Ready to elevate your brand through exceptional customer
              experiences? Connect with Phi Consulting and let's embark on a
              journey to redefine your customer interactions. Contact us now for
              a consultation that puts your customers at the center of success."
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

export default CustomerExperienceConsulting;