import React from 'react';
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

import compiconOne from '/assets/truck-square.png';
import truckxproduct from '/assets/truckx-case.png';
import compiconTwo from '/assets/AToB-square.jpg';
import atobproduct from '/assets/atob-card.png';
import compiconThree from '/assets/digitalocean-square.png';
import digiproduct from '/assets/digitalocean-product.png';

import clutchone from '../assets/img/achievements-badges/clutch_1.png';
import BBB from '../assets/img/achievements-badges/BBB.png';
import clutchtwo from '../assets/img/achievements-badges/clutch_2.png';

import blogbanner from '../assets/img/b2b.webp';
import { Link } from 'react-router-dom';
import CaseStudyMacroComps from '../components/shared/macroComps/CaseStudyMacroComps';
import caseStudies from "../data/caseStudies.json";

const HomePage = () => {

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
        <section class="hero-container">
          <div class="hero-content">
            {/* <!-- <h3 class="line-top">Leadership Through Partnership</h3> --> */}
            <h2 class="hero-heading">
              <span class="phi">Leadership Through Partnership</span>
            </h2>
            <p class="hero-desc">
              Phi Consulting is your dedicated technology consulting partner,
              committed to delivering comprehensive business solutions tailored
              for Startups and SMEs in the dynamic realms of IoT, Fintech, SaaS,
              and IaaS. We empower clients to achieve operational excellence,
              foster business expansion, and enhance the overall customer
              experience.
            </p>
            <div class="consult-button" onClick={gotoContacts}>Schedule a Free Consultation</div>
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

      {/* <!-- Value Statement Section  --> */}
      <article class="value">
        <section class="value-container">
          <div class="value-content">
            <div class="new-values">
              <div class="new-value-left-section">
                <h2 class="value-heading">Drive Success with Phi Consulting</h2>
                <p class="value-desc">
                  We specialize in driving growth by increasing revenue and
                  driving sales while simultaneously reducing costs and time.
                </p>
              </div>
              <div class="new-value-right-section">
                <img
                  src={valuegraph}
                  alt=""
                  class="graph-biz"
                />
              </div>
            </div>
            {/* <!-- <div class="value-container-one">
              <div class="value-bubble">
                <img
                  src="./assets/img/custom-icons/reduced costs.png"
                  alt="icons"
                  width="70"
                  height="70"
                  class="icon-value"
                />

                <div class="bubble-title">
                  <h3 class="bubble-title-text">Reduced Costs</h3>
                </div>
                <div class="bubble-desc">
                  <p class="bubble-desc-text">
                    Optimize spending without compromising quality. Phi
                    Consulting is dedicated to identifying cost-saving
                    opportunities, ensuring your resources are allocated
                    efficiently for maximum impact.
                  </p>
                </div>
              </div>

              <div class="value-bubble">
                <img
                  src="./assets/img/custom-icons/efficiency.png"
                  alt="icons"
                  width="70"
                  height="70"
                  class="icon-value"
                />

                <div class="bubble-title">
                  <h3 class="bubble-title-text">Increased Efficiency</h3>
                </div>
                <div class="bubble-desc">
                  <p class="bubble-desc-text">
                    Streamline your operations for success. Phi Consulting's
                    expertise lies in optimizing processes, enhancing
                    efficiency, and positioning your business for growth in a
                    competitive landscape.
                  </p>
                </div>
              </div>
            </div>

            <div class="value-container-two">
              <div class="value-bubble">
                <img
                  src="./assets/img/custom-icons/resources.png"
                  alt="icons"
                  width="70"
                  height="70"
                  class="icon-value"
                />

                <div class="bubble-title">
                  <h3 class="bubble-title-text">Maximized Resources</h3>
                </div>
                <div class="bubble-desc">
                  <p class="bubble-desc-text">
                    Unlock the full potential of your resources with Phi
                    Consulting. Our tailored solutions not only maximize
                    existing capabilities but also strategically build capacity
                    for future challenges.
                  </p>
                </div>
              </div>
              <div class="value-bubble">
                <img
                  src="./assets/img/custom-icons/sustainability.png"
                  alt="icons"
                  width="70"
                  height="70"
                  class="icon-value"
                />

                <div class="bubble-title">
                  <h3 class="bubble-title-text">Sustainable Business Focus</h3>
                </div>
                <div class="bubble-desc">
                  <p class="bubble-desc-text">
                    Partner with Phi Consulting for a focus on long-term
                    success. Our approach extends beyond immediate gains,
                    building a foundation to ensure your business thrives in the
                    years ahead.
                  </p>
                </div>
              </div>
            </div>

            <div class="value-container-three">
              <div class="value-bubble">
                <img
                  src="./assets/img/custom-icons/sales.png"
                  alt="icons"
                  width="70"
                  height="70"
                  class="icon-value"
                />

                <div class="bubble-title">
                  <h3 class="bubble-title-text">Increased Sales</h3>
                </div>
                <div class="bubble-desc">
                  <p class="bubble-desc-text">
                    Phi Consulting propels your business to new heights by
                    strategically aligning sales strategies with market
                    dynamics, fostering a significant and sustainable increase
                    in revenue.
                  </p>
                </div>
              </div>
              <div class="value-bubble">
                <img
                  src="./assets/img/custom-icons/risk-management.png"
                  alt="icons"
                  width="70"
                  height="70"
                  class="icon-value"
                />

                <div class="bubble-title">
                  <h3 class="bubble-title-text">Minimized Financial Risks</h3>
                </div>
                <div class="bubble-desc">
                  <p class="bubble-desc-text">
                    Strengthen your financial foundation with Phi Consulting.
                    Our commitment to minimizing financial risks ensures your
                    business stands on solid ground, ready to face challenges
                    with resilience.
                  </p>
                </div>
              </div>
            </div> --> */}
          </div>
        </section>
      </article>

      {/* <!-- services section --> */}
      <article class="services">
        <section class="services-container">
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
              
              <div class="services-tab second-tab" onClick={handleTabClickOne}>
                  <div class="tab-icon">
                    <img
                      src={buisness}
                      alt="services icons"
                      class="tab-image"
                    />
                  </div>
                  <div class="tab-info-container">
                    <div class="tab-title">
                      <h3 class="title-third">Buisness Consulting</h3>
                    </div>
                    {/* <!-- <div class="tab-desc">
                      Navigate challenges, optimize strategies, and achieve
                      sustainable growth
                    </div> --> */}
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
                      <h3 class="title-third">Customer Experience</h3>
                    </div>
                    {/* <!-- <div class="tab-desc">
                      Optimize customer interactions for enhanced operational
                      efficiency
                    </div> --> */}
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
                
              <div class="services-tab sixth-tab" onClick={handleTabClickFive}>
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
                    {/* <!-- <div class="tab-desc">
                      Scale your operations, target the right customers &
                      optimizie sales cycles
                    </div> --> */}
                  </div>
                </div>
               
                {/* <!-- <div class="services-tab-invisible">
                  <div class="tab-icon"></div>
                  <div class="tab-info-container">
                    <div class="tab-title">
                      <h3 class="title-third"></h3>
                    </div>
                    <div class="tab-desc"></div>
                  </div>
                </div> --> */}
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
          {caseStudies.map((study, index) => (
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
              <Link to="/spotlight" className='morcases'>View More Case Studies</Link>
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
        <section class="testimonial-container">
          <h2 class="testi-heading">
            We have not lost a top 3 client in over 3 years
          </h2>
          <p class="testi-desc">
            Our clients speak for the transformative impact of Phi Consulting.
            Partner with us and discover the potential for unprecedented growth,
            reduced costs, and optimized efficiency.
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

      {/* <!-- Achievement Section --> */}
      <article class="achievement">
        <section class="achievement-section">
          <h2 class="ach-heading">Our Achievements</h2>
        </section>
        <section class="ach-badges-container">
          <div class="ach-badge">
            <img
              src={clutchone}
              alt=""
              width="200"
              height="230"
            />
          </div>
          <div class="ach-badge">
            <img
              src={BBB}
              alt=""
              width="200"
              height="150"
            />
          </div>

          <div class="ach-badge">
            <img
              src={clutchtwo}
              alt=""
              width="250"
              height="220"
            />
          </div>

          <div class="ach-badge">
            <img
              src={clutchone}
              alt=""
              width="200"
              height="230"
            />
          </div>
          <div class="ach-badge">
            <img
              src={BBB}
              alt=""
              width="200"
              height="150"
            />
          </div>

          <div class="ach-badge">
            <img
              src={clutchtwo}
              alt=""
              width="250"
              height="220"
            />
          </div>
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
          <div class="blog-card-one">
            <div class="blog-image">
              <img
                 src={blogbanner}
                alt=""
                width="455"
                class="blog-image-home"
              />
            </div>
            <div class="date-and-read-time">
              <p class="date">October 2, 2023</p>
              <p class="read-time">5 min read</p>
            </div>
            <div class="blog-heading">
              Build Your Own B2B Lead List: A Must-Have Sales Strategy
            </div>
            <div class="blog-desc-card">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
              esse assumenda delectus debitis eaque ipsa! Ipsa perferendis
              quaerat nulla exercitationem tenetur eligendi delectus aliquam
              consequatur necessitatibus ea, ducimus consectetur nihil?
            </div>
          </div>

          <div class="blog-card-two">
            <div class="blog-image">
              <img
                src={blogbanner}
                alt=""
                width="456"
                class="blog-image-home"
              />
            </div>
            <div class="date-and-read-time">
              <p class="date">November 5, 2023</p>
              <p class="read-time">8 min read</p>
            </div>
            <div class="blog-heading">
              Outbound Sales Development 101: Your First Appointment Guide
            </div>
            <div class="blog-desc-card">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
              esse assumenda delectus debitis eaque ipsa! Ipsa perferendis
              quaerat nulla exercitationem tenetur eligendi delectus aliquam
              consequatur necessitatibus ea, ducimus consectetur nihil?
            </div>
          </div>
        </section>
        <section class="button-readmore">
          <div class="right-button">
            <span>Read More</span>
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
    </>
  )
}

export default HomePage;
