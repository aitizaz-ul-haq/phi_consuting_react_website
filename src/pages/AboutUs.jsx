import React,{ useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import clutchone from '../assets/img/achievements-badges/clutch_1.png';
import clutchtwo from '../assets/img/achievements-badges/clutch_2.png';
import phiphoto from "../assets/img/phi_logo-filled.png";
import alizaidiportrait from "../assets/img/phi_people/ali_zaidi.jpg";
import abudullahportrait from "../assets/img/phi_people/Abdullah.jpg";
import razaportrait from "../assets/img/phi_people/Raza.jpg";
import ismailportrait from "../assets/img/phi_people/ismail.jpg";
import { TypeAnimation } from 'react-type-animation';
import useScrollToTop from '../hooks/useScrollToTop';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import recog from '../assets/img/recognitions/iso.webp';

const AboutUs = () => {

  const [isVisibleTesti, setIsVisibleTesti] = useState(false);
  const testiRef = useRef(null);

  const [isVisibleAch, setIsVisibleAch] = useState(false);
  const achRef = useRef(null);

  const [isVisibleServices, setIsVisibleServices] = useState(false);
  const servicesRef = useRef(null);

  const [isTeem, setIsTeem] = useState(false);
  const teemRef = useRef(null);

  const [isVisibleInnovation, setIsVisibleInnovation] = useState(false);
  const innovationRef = useRef(null);

  const [isVisibleCollaboration, setIsVisibleCollaboration] = useState(false);
  const collaborationRef = useRef(null);

  const [isVisibleIntegrity, setIsVisibleIntegrity] = useState(false);
  const integrityRef = useRef(null);

  const [isVisibleAgility, setIsVisibleAgility] = useState(false);
  const agilityRef = useRef(null);

  const [isVisibleLiveText, setIsVisibleLiveText] = useState(false);
  const liveTextRef = useRef(null);

  const [isVisibleLiveVideo, setIsVisibleLiveVideo] = useState(false);
  const liveVideoRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [data, setData] = useState({
   
    heroheading:'',
    herodescription:'',
    excellenceheading:'',
    excellencedescription:'',
    qualityheading:'',
    qualityonedescription:'',
    qualitytwodescription:'',
    qualitythreedescription:'',
    qualityfourdescription:'',
    teamheading:'',
    teamdescription:'',
    locationheading:'',
    locationwords:'',
    maponetitle:'',
    maptwotitle:'',
    rewardtwo:'',
    livefromphi:'',
    livefromphisubheading:'',
    livefromphidescription:'',
    testimonilaheading:'',
    testimonialdescription:'',
    testione:'',
    testidesignationone:'',
    testitwo:'',
    testidesignationtwo:'',
    testithree:'',
    testidesignationthree:'',
    achievementsline:'',
    aboutctaheading:'',
    aboutctadescription:'',
    
      });
    
useEffect(() => {
        const fetchHomePageData = async () => {
          try {
            const response = await axios.get('https://prickle-balanced-archaeopteryx.glitch.me/aboutuspage');
            console.log(`your data`, response.data);
            if (response.data && response.data.length > 0) {
              const homepageData = response.data[0]; 
              setData({
                heroheading: homepageData.heroheading,
                herodescription: homepageData.herodescription,
                excellenceheading: homepageData.excellenceheading, 
                excellencedescription: homepageData.excellencedescription,
                qualityheading: homepageData.qualityheading,
                qualityonedescription: homepageData.qualityonedescription,
                qualitytwodescription: homepageData.qualitytwodescription,
                qualitythreedescription: homepageData.qualitythreedescription,
                qualityfourdescription: homepageData.qualityfourdescription, 
                teamheading: homepageData.teamheading, 
                teamdescription: homepageData.teamdescription, 
                locationheading: homepageData.locationheading, 
                locationwords: homepageData.locationwords, 
                maponetitle: homepageData.maponetitle,
                maptwotitle: homepageData.maptwotitle, 
                rewardtwo: homepageData.rewardtwo, 
                livefromphi: homepageData.livefromphi, 
                livefromphisubheading: homepageData.livefromphisubheading, 
                livefromphidescription: homepageData.livefromphidescription,
                testimonilaheading: homepageData.testimonilaheading, 
                testimonialdescription: homepageData.testimonialdescription, 
                testione: homepageData.testione, 
                testidesignationone: homepageData.testidesignationone, 
                testitwo: homepageData.testitwo,
                testidesignationtwo: homepageData.testidesignationtwo, 
                testithree: homepageData.testithree, 
                testidesignationthree: homepageData.testidesignationthree, 
                achievementsline: homepageData.achievementsline, 
                aboutctaheading: homepageData.aboutctaheading,
                aboutctadescription: homepageData.aboutctadescription,
              });
            }
          } catch (error) {
            console.error("Error fetching homepage data:", error);
          }
        };
    
        fetchHomePageData();
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
        entries.forEach(entry => setIsVisibleServices(entry.isIntersecting));
    }, { threshold: 0.5 });

    observer.observe(servicesRef.current);
    return () => observer.disconnect();
}, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setIsTeem(entry.isIntersecting));
    }, { threshold: 0.5 }); 

    observer.observe(teemRef.current);
    return () => observer.disconnect();
}, []);

useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.target === innovationRef.current) {
        setIsVisibleInnovation(entry.isIntersecting);
      } else if (entry.target === collaborationRef.current) {
        setIsVisibleCollaboration(entry.isIntersecting);
      }else if (entry.target === integrityRef.current) {
        setIsVisibleIntegrity(entry.isIntersecting);
      }else if (entry.target === agilityRef.current) {
        setIsVisibleAgility(entry.isIntersecting);
      }
      // Add similar conditions for other sections
    });
  }, { threshold: 0.5 });

  if (innovationRef.current) observer.observe(innovationRef.current);
  if (collaborationRef.current) observer.observe(collaborationRef.current);
  if (integrityRef.current) observer.observe(integrityRef.current);
  if (agilityRef.current) observer.observe(agilityRef.current);
  // Add observe for other refs

  return () => observer.disconnect();
}, []);

useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.target === liveTextRef.current) {
        setIsVisibleLiveText(entry.isIntersecting);
      } else if (entry.target === liveVideoRef.current) {
        setIsVisibleLiveVideo(entry.isIntersecting);
      }
    });
  }, { threshold: 0.5 });

  if (liveTextRef.current) observer.observe(liveTextRef.current);
  if (liveVideoRef.current) observer.observe(liveVideoRef.current);

  return () => observer.disconnect();
}, []);

  const gotoContacts = () => {
    window.location.href = '/contact-us';
  }

  useScrollToTop();
  return (
    <>
       <Helmet>
        <title>About Phi Consulting</title>
        <meta name="description" content="Learn about Phi Consulting, your strategic partner in business success. Explore our expertise, values, and commitment to delivering innovative solutions for your growth." />
      </Helmet>

     <Helmet>
      <link rel="canonical" href="https://phi-verse.com/about-us" />
     </Helmet>


     {/* <!-- Hero Section --> */}
      <article class="hero">
        <section class="hero-container-phi-about">
          <div class="hero-content-phi-about">
            <h1 class="hero-heading-phi-about">
            {windowWidth >= 1200 ? <TypeAnimation
      sequence={[
        'Unleashing Excellence in Consultancy',
        7000, 
       
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '40px', display: 'inline-block' }}
      repeat={Infinity}
    /> : 'Unleashing Excellence in Consultancy'}
              
            </h1>
            <p class="hero-desc-phi-about">
              {data.herodescription}
            </p>
            <div class="consult-button-phi-about" onClick={gotoContacts}>
              Schedule a Free Consultation
            </div>
          </div>
        </section>
      </article>

      {/* <!-- about phi Section --> */}
      <article className={`about-phi ${isVisibleServices ? 'visible' : ''}`} ref={servicesRef}>
        <section class="about-phi-container">
          <div class="about-phi-content">
            <h2 class="about-phi-heading">
              {data.excellenceheading}
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
                  {data.excellencedescription}
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
            <h2 class="core-phi-heading">{data.qualityheading}</h2>
            {/* <!-- <h3 class="core-value-text">
              Guided by Excellence, Driven by Values
            </h3> --> */}
          </div>
          <div className={`core-value-tiles-container ${isVisibleInnovation ? 'fade-in-left' : ''}`} ref={innovationRef}>
           
          <div className='collab'>Innovation</div>
            <div class="left-filled-heading-container">
              <h3 class="value-heading-box">
                I<span class="letters-whitened">nn</span>ovation
              </h3>
            </div>
            <div class="right-text-paragraph-container">
              <p class="right-text-intile">
              {data.qualityonedescription}
              </p>
            </div>
          </div>
          <br />
          
          <div className={`core-value-tiles-container ${isVisibleCollaboration ? 'fade-in-right' : ''}`} ref={collaborationRef}>
          <div className='collab'>Collaboration</div>
            <div class="right-text-paragraph-container">
              <p class="right-text-intile">
              {data.qualitytwodescription}
              </p>
            </div>
            
            <div class="left-filled-heading-container-alt">
              <h3 class="value-heading-box">
                Co<span class="letters-whitened">ll</span>aboration
              </h3>
            </div>
          </div>
          <br />
          <div className={`core-value-tiles-container ${isVisibleIntegrity ? 'fade-in-left' : ''}`} ref={integrityRef}>
          <div className='collab'>Integrity</div>
            <div class="left-filled-heading-container">
              <h3 class="value-heading-box">
                In<span class="letters-whitened">teg</span>rity
              </h3>
            </div>
            <div class="right-text-paragraph-container">
              <p class="right-text-intile">
              {data.qualitythreedescription}
              </p>
            </div>
          </div>
          <br />
          <div className={`core-value-tiles-container ${isVisibleAgility ? 'fade-in-right' : ''}`} ref={agilityRef}>
          <div className='collab'>Agility</div>
            <div class="right-text-paragraph-container">
              <p class="right-text-intile">
                {data.qualityfourdescription}
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
      <article  className={`meet ${isTeem ? 'visible' : ''}`} ref={teemRef}>
        <section class="meet-container">
          <div class="meet-people-train">
            <h2 class="meet-heading">{data.teamheading}</h2>
            <p class="meet-desc">
            {data.teamdescription}
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
          <h2 class="location-heading">{data.locationheading}</h2>
          <h3 class="location-sub-heading">{data.locationwords}</h3>
          <p class="locations-desc">
          {/* {data.locationheading} */}
          </p>
          <div class="location-cards-container">
            <div class="location-cards-one">
              <div class="location-bar-left">
                <div class="location-card-title-heading">
                {data.maponetitle}
                </div>
                {/* <!-- <div class="location-card-desc">
                  our office location description
                </div> --> */}
              </div>
              {/* <div class="location-bar-right"> */}
                
                24615 E Applewood Dr
24615 E Applewood Dr, Aurora, CO 80016, USA
              
              {/* </div> */}
            </div>
            <div class="location-cards-one">
              <div class="location-bar-left">
                <div class="location-card-title-heading">
                {data.maptwotitle}
                </div>
               
              </div>
              {/* <div class="location-bar-right"> */}
               
               Phi Consulting
2nd Floor, North Side, Gulberg Empire Plaza, Plot 33-40 Civic Center IBCEHS, 44000
              {/* </div> */}
            </div>
          </div>
        </section>
      </article>

      {/* <!-- Live From Phi --> */}
      <article class="live">
        <section class="live-container">
          <h2 class="live-heading">{data.livefromphi}</h2>

          <div class="live-video-container">
            <div className={`live-left-side ${isVisibleLiveText ? 'fade-in-left' : ''}`} ref={liveTextRef}>
              <h3 class="live-subheading">{data.livefromphisubheading}</h3>
              <p class="live-desc">
              {data.livefromphidescription}
              </p>
              <div class="live-button-container">
                <div class="call-button-container">
                  <div class="cta-button">
                    <span>Subscribe to Live from Phi</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={`live-right-side ${isVisibleLiveVideo ? 'fade-in-right' : ''}`} ref={liveVideoRef}>
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
        <section className="testimonial-container">
          <h2 class="testi-heading">
          {data.testimonilaheading}
          </h2>
          <p class="testi-desc">
          {data.testimonialdescription}
          </p>
        </section>

        <section className="testi-cards-container" ref={testiRef}>
          <div className={`testi-card ${isVisibleTesti ? 'animate' : ''}`}>
            <div class="circleBase type3 testi-one">
            </div>
            <p class="testi-quote wide-first">
              <q
                ><i
                  >{data.testione}
                  </i
                ></q
              >
            </p>
            <h3 class="testi-card-heading">{data.testidesignationone}</h3>
          </div>

          <div className={`testi-card ${isVisibleTesti ? 'animate' : ''}`}>
            <div class="circleBase type3 test-three">
              <img src="" alt="" />
            </div>

            <p class="testi-quote wider">
              <q
                ><i
                  > {data.testitwo}</i
                ></q
              >
            </p>
            <h3 class="testi-card-heading">{data.testidesignationtwo}</h3>
          </div>
          <div className={`testi-card ${isVisibleTesti ? 'animate' : ''}`}>
            <div class="circleBase type3 test-two">
              <img src="" alt="" />
            </div>
            <p class="testi-quote">
              <q
                ><i
                  >{data.testithree}</i
                ></q
              >
            </p>
            <h3 class="testi-card-heading">{data.testidesignationthree}</h3>
          </div>
        </section>
      </article>

      {/* <!-- Achievement Section --> */}
     <article class="achievement">
        <section class="achievement-section">
          <h2 class="ach-heading">Our Recognitions</h2>
          <p class="testi-desc">
         {data.achievementsline}
          </p>
        </section>
        <section class="ach-badges-container" ref={achRef}>
          <div className={`ach-badge ${isVisibleAch ? 'animate' : ''}`}>
            <img
              src={clutchone}
              alt=""
              width="200"
              height="230"
            />
          </div>
          <div className={`ach-badge ${isVisibleAch ? 'animate' : ''}`}>
            <img
               src={recog}
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
          </div>

        </section>
      </article>

      {/* <!-- Call to Action Section --> */}
      <article class="cta-container">
        <section class="cta-sections-container">
          <div class="cta-content">
            <div class="cta-heading">
              {data.aboutctaheading}
            </div>
            <div class="cta-descrip">
            {data.aboutctadescription}
            </div>
          </div>
          <div class="cta-button-section">
            <div class="right-button-header">
              <span
                ><Link to="/contact-us" class="inner-header"
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