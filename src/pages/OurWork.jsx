import React,{ useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ATOB from '../assets/img/new_logos_comps/newer/AtoB 2.png';
import bobtail from '../assets/img/new_logos_comps/bobtail.png';
import joyride from '../assets/img/new_logos_comps/joyride.png';
import Truckx from '../assets/img/new_logos_comps/TruckX.png';
import pallet from '../assets/img/new_logos_comps/newer/Pallet Logo.png';
import digitalOcean from '../assets/img/new_logos_comps/newer/digital-ocean.png';
import mudflap from '../assets/img/new_logos_comps/newer/Mudflap.png';
import sungrade from '../assets/img/new_logos_comps/sungrade solar.png';

import clutchone from '../assets/img/achievements-badges/clutch_1.png';
import BBB from '../assets/img/achievements-badges/BBB.png';
import clutchtwo from '../assets/img/achievements-badges/clutch_2.png';

import longblockpicone from '/assets/truck-square.png';
import longblockpictwo from "/assets/digitalocean-square.png";
import longblockpicthree from "/assets/truck-square.png";

const OurWork = () => {

  const [isVisible, setIsVisible] = useState(false);
   const containerRef = useRef(null);

   useEffect(() => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, { threshold: 0.5 }); 

    observer.observe(containerRef.current);
    return () => observer.disconnect(); 
}, []);

  const gotoContacts = () => {
    window.location.href = '/contact';
  }


  return (
    <>
    {/* <!-- Hero Section --> */}
      <article class="hero">
        <section class="hero-container-our-work">
          <div class="hero-content-our-work">
            <h2 class="hero-heading-our-work">
              Success is not just a goal <br />
              but a proven outcome.
            </h2>
            <p class="hero-desc-our-work">
              Our unique investment approach centers on identifying undervalued
              businesses and subsequently enhancing their value through
              strategic business alliances, operational improvements, and
              financial restructuring.
            </p>
            <div class="consult-button-our-work" id="work-consult" onClick={gotoContacts}>
              Schedule a Free Consultation
            </div>
          </div>
        </section>
      </article>

      {/* <!-- why phi for customer exp Section --> */}
      <article class="why-phi-for-sales">
        <h2 class="why-phi-heading">
          Redefining Success Through Stretegic Partnerships
        </h2>
        <p class="why-phi-desc">
          Explore our portfolio to witness the transformative impact of Phi
          Consulting on businesses like yours. <br />
          Each success story is a testament to our commitment to driving sales
          excellence.
        </p>
        <div class="insights-container">
          <div class="insights-bundle-our-work">
            <div class="full-section-insights-our-work">
              <div class="overlay-container five-bui-consul">
                <div class="overlay"></div>
                <div class="content">
                  <div class="comp-logo-square-container">
                    <img
                      src={longblockpicone}
                      alt=""
                      width="100"
                      height="100"
                    />
                    <h2 class="overlay-heading-our-work">Lorem Ipsum Dolor</h2>
                    <p class="overlay-desc-our-work">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Dignissimos magnam, facilis provident repellat,
                      repellendus atque sunt laboriosam
                    </p>
                    <div class="left-button-work-small our-work-bubbles">
                      <span>Explore More</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="insights-bundle-our-work">
            <div class="full-section-insights-our-work">
              <div class="overlay-container three-bui-consul">
                <div class="overlay"></div>
                <div class="content">
                  <div class="comp-logo-square-container">
                    <img
                      src={longblockpictwo}
                      alt=""
                      width="100"
                      height="100"
                    />
                  </div>
                  <h2 class="overlay-heading-our-work">Lorem Ipsum Dolor</h2>
                  <p class="overlay-desc-our-work">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos magnam, facilis provident repellat, repellendus
                    atque sunt laboriosam
                  </p>
                  <div class="left-button-work-small our-work-bubbles">
                    <span>Explore More</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- <div class="full-section-insights-our-work">
              <div class="overlay-container four-bui-consul">
                <div class="overlay"></div>
                <div class="content">
                  <div class="comp-logo-square-container">
                    <img
                      src="../assets/img/comp_logos/AToB-square.jpg"
                      alt=""
                      width="100"
                      height="100"
                    />
                  </div>
                  <h2 class="overlay-heading-our-work">Lorem Ipsum Dolor</h2>
                  <p class="overlay-desc-our-work">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos magnam, facilis provident repellat, repellendus
                    atque sunt laboriosam
                  </p>
                  <div class="left-button-work-small our-work-bubbles">
                    <span>Explore More</span>
                  </div>
                </div>
              </div>
            </div> --> */}
          </div>
          <div class="insights-bundle-our-work">
            <div class="full-section-insights-our-work">
              <div class="overlay-container five-bui-consul">
                <div class="overlay"></div>
                <div class="content">
                  <div class="comp-logo-square-container">
                    <img
                      src={longblockpicthree}
                      alt=""
                      width="100"
                      height="100"
                    />
                    <h2 class="overlay-heading-our-work">Lorem Ipsum Dolor</h2>
                    <p class="overlay-desc-our-work">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Dignissimos magnam, facilis provident repellat,
                      repellendus atque sunt laboriosam
                    </p>
                    <div class="left-button-work-small our-work-bubbles">
                      <span>Explore More</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* <!-- Clients Section --> */}
      {/* <article class="clients">
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
      </article> */}

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

      {/* <!-- how we work --> */}
      <article class="how-work">
        <section class="how-work-section">
          <div class="how-work-container">
            <div class="how-work-section-left">
              <p class="how-we-top-line">HOW PHI CREATES VALUE</p>
              <h2 class="how-we-work-heading">
                Leverage our proven & tested model
              </h2>
              <div class="statement">
                <div class="heading-how-we">1. We build your team</div>
                <div class="description-how-we">
                  We hire your team from our world-class talent pool using a
                  comprehensive, 7-step recruitment process.
                </div>
              </div>
              <div class="statement">
                <div class="heading-how-we">2. We run your operation</div>
                <div class="description-how-we">
                  We set up your dedicated workspace and take care of everything
                  for you on the ground, freeing you to focus on your business.
                </div>
              </div>
              <div class="statement">
                <div class="heading-how-we">3. You scale without limits</div>
                <div class="description-how-we">
                  When you’re ready to increase your capacity, we’ll work with
                  you to grow your team at speed so you can outpace your
                  competition.
                </div>
              </div>
            </div>
            {/* <!-- <div class="how-work-section-right"></div> --> */}
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

      {/* <!-- Call to Action Section --> */}
      <article class="cta-container">
        <section class="cta-sections-container">
          <div class="cta-content">
            <div class="cta-heading">
              Ready to unlock your company's full potential?
            </div>
            <div class="cta-descrip">
              Whether you're launching a new product, improving an existing one,
              or seeking financial guidance, Phi Consulting is here for you.
              Let's collaborate to achieve your goals and drive your business to
              the next level. Contact us for a consultation and take the first
              step towards success.
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

export default OurWork;