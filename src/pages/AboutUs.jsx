import React from 'react';
import { Link } from 'react-router-dom';
import clutchone from '../assets/img/achievements-badges/clutch_1.png';
import BBB from '../assets/img/achievements-badges/BBB.png';
import clutchtwo from '../assets/img/achievements-badges/clutch_2.png';

import phiphoto from "../assets/img/phi_logo-filled.png";

import alizaidiportrait from "../assets/img/phi_people/ali_zaidi.jpg";
import abudullahportrait from "../assets/img/phi_people/Abdullah.jpg";
import razaportrait from "../assets/img/phi_people/Raza.jpg";
import ismailportrait from "../assets/img/phi_people/ismail.jpg";


const AboutUs = () => {

  const gotoContacts = () => {
    window.location.href = '/contact';
  }
  return (
    <>
     {/* <!-- Hero Section --> */}
      <article class="hero">
        <section class="hero-container-phi-about">
          <div class="hero-content-phi-about">
            <h2 class="hero-heading-phi-about">
              Unleashing Excellence in Consultancy
            </h2>
            <p class="hero-desc-phi-about">
              Welcome to Phi Consulting, where strategic brilliance meets <br />
              transformative solutions. We empower businesses to thrive <br />
              in the ever-evolving landscape of industry challenges. Discover
              <br />
              a journey of innovation, growth, and success with Phi.
            </p>
            <div class="consult-button-phi-about" onClick={gotoContacts}>
              Schedule a Free Consultation
            </div>
          </div>
        </section>
      </article>

      {/* <!-- about phi Section --> */}
      <article class="about-phi">
        <section class="about-phi-container">
          <div class="about-phi-content">
            <h2 class="about-phi-heading">
              Fueling Excellence for Startups & SMEs
            </h2>
            <div class="about-content-container">
              <div class="left-photo-section">
                <img
                  src={phiphoto}
                  alt=""
                  width="320"
                  height="320"
                  class="phi-logo-about-page"
                />
              </div>
              <div class="right-text-description">
                <p class="phi-about-desc">
                  At Phi Consulting, we redefine consultancy. Founded on a
                  commitment to eliminating inefficiencies, we specialize in
                  crafting custom strategies that drive results. Our mission is
                  simple: to unlock your company's full potential and lead you
                  towards sustained success.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* <!-- core phi Section --> */}
      <article class="core-phi">
        <section class="core-phi-container">
          <div class="core-phi-content">
            <h2 class="core-phi-heading">Leadership through Partnership</h2>
            {/* <!-- <h3 class="core-value-text">
              Guided by Excellence, Driven by Values
            </h3> --> */}
          </div>
          <div class="core-value-tiles-container">
            <div class="left-filled-heading-container">
              <h3 class="value-heading-box">
                I<span class="letters-whitened">nn</span>ovation
              </h3>
            </div>
            <div class="right-text-paragraph-container">
              <p class="right-text-intile">
                Pioneering solutions that tranform challenges into opportunities
              </p>
            </div>
          </div>
          <br />
          <div class="core-value-tiles-container">
            <div class="right-text-paragraph-container">
              <p class="right-text-intile">
                Building partnerships that foster <br />
                growth and success.
              </p>
            </div>
            <div class="left-filled-heading-container-alt">
              <h3 class="value-heading-box">
                Co<span class="letters-whitened">ll</span>aboration
              </h3>
            </div>
          </div>
          <br />
          <div class="core-value-tiles-container">
            <div class="left-filled-heading-container">
              <h3 class="value-heading-box">
                In<span class="letters-whitened">teg</span>rity
              </h3>
            </div>
            <div class="right-text-paragraph-container">
              <p class="right-text-intile">
                Upholding the highest standards of ethics and transparency.
              </p>
            </div>
          </div>
          <br />
          <div class="core-value-tiles-container">
            <div class="right-text-paragraph-container">
              <p class="right-text-intile">
                Adapting strategies to align with the dynamic needs of your
                industry.
              </p>
            </div>
            <div class="left-filled-heading-container-alt">
              <h3 class="value-heading-box">
                A<span class="letters-whitened">gil</span>ity
              </h3>
            </div>
          </div>
        </section>
      </article>

      {/* <!-- Meet the team --> */}
      <article class="meet">
        <section class="meet-container">
          <div class="meet-people-train">
            <h2 class="meet-heading">Brains Behind the Brilliance</h2>
            <p class="meet-desc">
              Our team is a fusion of expertise, creativity, and dedication.
              Meet the professionals who bring Phi's strategic brilliance to
              life. <br />
              Each team member contributes a unique perspective, creating a
              synergy that fuels the success of our clients.
            </p>
          </div>
          <div class="pic-container">
            <div class="pics-lane">
              <div class="pic-box">
                <div class="pic">
                  <img src={alizaidiportrait} alt="" />
                </div>
                <div class="team-name">Ali Zaidi</div>
                <div class="designation">CEO</div>
              </div>
              <div class="pic-box">
                <div class="pic">
                  <img src={abudullahportrait} alt="" />
                </div>
                <div class="team-name">Muhammad Abdullah Ahsan</div>
                <div class="designation">Director Support And Success</div>
              </div>
              <div class="pic-box">
                <div class="pic">
                  <img src={razaportrait} alt="" />
                </div>
                <div class="team-name">Raza ur Rehman</div>
                <div class="designation">Director Buisness Development</div>
              </div>
              <div class="pic-box">
                <div class="pic">
                  <img src={ismailportrait} alt="" />
                </div>
                <div class="team-name">Abdullah Ismaeel</div>
                <div class="designation">Director Sales</div>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* <!-- location section --> */}
      <article class="location">
        <section class="location-container">
          <h2 class="location-heading">Locations</h2>
          <h3 class="location-sub-heading">Global Reach, Local Impact</h3>
          <p class="locations-desc">
            Phi Consulting has a global presence, strategically positioned to
            serve you wherever you are. <br />
            Explore our locations and discover how we bring our transformative
            solutions to businesses worldwide.
          </p>
          <div class="location-cards-container">
            <div class="location-cards-one">
              <div class="location-bar-left">
                <div class="location-card-title-heading">
                  Phi Consulting <br />
                  Site Office
                </div>
                {/* <!-- <div class="location-card-desc">
                  our office location description
                </div> --> */}
              </div>
              <div class="location-bar-right">
                <iframe
                  width="938"
                  height="400"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?width=738&amp;height=561&amp;hl=en&amp;q=24615%20East%20Applewood%20Drive%20aurora,colarado+(phi%20address)&amp;t=p&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
                <a href="https://www.acadoo.de/">Ghostwriter Dissertation</a>
              </div>
            </div>
            <div class="location-cards-one">
              <div class="location-bar-left">
                <div class="location-card-title-heading">
                  Phi Consulting Headquarters
                </div>
                {/* <!-- <div class="location-card-desc">
                  our office location description
                </div> --> */}
              </div>
              <div class="location-bar-right">
                <iframe
                  width="938"
                  height="561"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?width=738&amp;height=561&amp;hl=en&amp;q=2nd%20Floor,%20North%20Side,%20Gulberg%20Empire%20Plaza,%20Plot%2033-40%20Civic%20Center,%20Gulberg%20Greens,%20IBCEHS,%20Islamabad,%2044000.%20Islamabad+(phi%20address)&amp;t=p&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
                {/* <!-- <a href="https://www.acadoo.de/">Ghostwriter Dissertation</a> --> */}
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* <!-- Live From Phi --> */}
      <article class="live">
        <section class="live-container">
          <h2 class="live-heading">Live from Phi</h2>

          <div class="live-video-container">
            <div class="live-left-side">
              <h3 class="live-subheading">Insights, Discussions, and More</h3>
              <p class="live-desc">
                Tune in to "Live from Phi" for exclusive insights, discussions,
                and success stories. Subscribe to our YouTube channel to stay
                updated on the latest industry trends, expert interviews, and
                highlights from our transformative projects.
              </p>
              <div class="live-button-container">
                <div class="call-button-container">
                  <div class="cta-button">
                    <span>Subscribe to Live from Phi</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="live-right-side">
              <div class="video-container">
                <div class="video-overlay"></div>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/2BdQddPctjk?si=ioALDvjPF7sPXsqD"
                  title="YouTube video player"
                  frameborder="0"
                  class="live-video-feed"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* <!-- Testimonial Section --> */}
      <article class="testimonial">
        <section class="testimonial-container">
          <h2 class="testi-heading">Echoes of Success</h2>
          <p class="testi-desc">
            Discover what our clients have to say about the Phi experience.
            <br />Realize the impact of our tailored solutions through firsthand
            accounts of businesses that have journeyed with us towards success.
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
              Unlock Your Potential with Phi Consulting
            </div>
            <div class="cta-descrip">
              Ready to elevate your business to new heights? Contact Phi
              Consulting today to explore how our tailored consultancy services
              can unlock your company's full potential. Let's embark on a
              journey of innovation and success together.
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

export default AboutUs;