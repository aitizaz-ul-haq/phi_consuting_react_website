import React,{ useState, useEffect, useRef } from 'react';
import cultpicone from "../assets/img/innovate_two.png";
import cultpictwo from "../assets/img/collaborate.png";
import cultpicthree from "../assets/img/excellence.png";
import cultpicfour from "../assets/img/growth.png";

import perksone from "../assets/img/salary_icon.png";
import perkstwo from "../assets/img/healthcare.png";
import perksthree from "../assets/img/businessman.png";
import perksfour from "../assets/img/office-hours.png";

import JobCard from '../components/shared/cards/JobCard';
import jobPostings from "../data/jobPostings.json";
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import axios from 'axios';

const Careers = () => {

  const [jobs, setJobs] = useState([]);
  const [isVisibleCulture, setIsVisibleCulture] = useState(false);
  const cultureRef = useRef(null);

  const [isVisibleGateway, setIsVisibleGateway] = useState(false);
  const gatewayRef = useRef(null);

  const [isVisiblePerk, setIsPerk] = useState(false);
  const perkRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [data, setData] = useState({
   
  
heroheading:"",
herodescription:"",
cultureheading:"",
culturedescription:"",
nuggetoneheading:"",
nuggetonedescription:"",
nuggettwoheading:"",
nuggettwodescription:"",
nuggetthreeheading:"",
nuggetthreedescription:"",
nuggetfourheading:"",
nuggetfourdescription:"",
rewardheading:"",
rewarddescription:"",
rewardone:"",
rewardtwo:"",
rewardthree:"",
rewardfour:"",
careerctaheading:"",
careerctadescription:"",
    
      });
    
useEffect(() => {
        const fetchHomePageData = async () => {
          try {
            const response = await axios.get('https://prickle-balanced-archaeopteryx.glitch.me/careerspage');
            console.log(`your data`, response.data);
            if (response.data && response.data.length > 0) {
              const homepageData = response.data[0]; // Assuming the first entry is what we want
              setData({
                heroheading: homepageData.heroheading,
                herodescription: homepageData.herodescription,
                cultureheading: homepageData.cultureheading, // Assuming excellence maps to culture
                culturedescription: homepageData.culturedescription, // Assuming excellence maps to culture
                nuggetoneheading: homepageData.nuggetoneheading, // Assuming quality maps to nugget one
                nuggetonedescription: homepageData.nuggetonedescription, // Assuming quality maps to nugget one
                nuggettwoheading: homepageData.nuggettwoheading, // Assuming quality maps to nugget two
                nuggettwodescription: homepageData.nuggettwodescription, // Adjust based on actual mapping
                nuggetthreeheading: homepageData.nuggetthreeheading, // Adjust based on actual mapping
                nuggetthreedescription: homepageData.nuggetthreedescription, // Assuming team maps to nugget three
                nuggetfourheading: homepageData.nuggetfourheading, // Assuming team maps to nugget four
                nuggetfourdescription: homepageData.nuggetfourdescription, // Adjust based on actual mapping
                rewardheading: homepageData.rewardheading, // Assuming locationwords maps to reward
                rewarddescription: homepageData.rewarddescription, // Assuming maponetitle maps to reward description
                rewardone: homepageData.rewardone, // Adjust based on actual mapping
                rewardtwo: homepageData.rewardtwo, // Directly mapped
                rewardthree: homepageData.rewardthree, // Assuming livefromphi maps to reward three
                rewardfour: homepageData.rewardfour, // Assuming livefromphisubheading maps to reward four
                careerctaheading: homepageData.careerctaheading, // Assuming livefromphidescription maps to career cta heading
                careerctadescription: homepageData.careerctadescription, 
              });
            }
          } catch (error) {
            console.error("Error fetching homepage data:", error);
          }
        };
    
        fetchHomePageData();
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === cultureRef.current) {
          setIsVisibleCulture(entry.isIntersecting);
        } else if (entry.target === gatewayRef.current) {
          setIsVisibleGateway(entry.isIntersecting);
        }else if (entry.target === perkRef.current) {
          setIsPerk(entry.isIntersecting);
        }
      });
    }, { threshold: 0.5 });

    if (cultureRef.current) observer.observe(cultureRef.current);
    if (gatewayRef.current) observer.observe(gatewayRef.current);
    if (perkRef.current) observer.observe(perkRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Function to fetch job data
    const fetchJobs = async () => {
      try {
        const response = await axios.get('https://prickle-balanced-archaeopteryx.glitch.me/jobs');
        setJobs(response.data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();

    // ... other useEffect code
  }, []);
  return (
    <>
      <Helmet>
        <title>Careers - Phi Consulting</title>
        <meta name="description" content="Explore exciting career opportunities at Phi Consulting. Join our team of dynamic professionals and contribute to shaping the future of strategic business excellence." />
      </Helmet>

    {/* <!-- Hero Section --> */}
      <article class="hero">
        <section class="hero-container-careers">
          <div class="hero-content-careers">
            <h2 class="hero-heading-careers">
            {windowWidth >= 1200 ? <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Join Our Team, Ignite Your Future',
        7000, 
       
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '40px', display: 'inline-block' }}
      repeat={Infinity}
    /> : 'Join Our Team, Ignite Your Future'}
              
            </h2>
            <p class="hero-desc-careers">
              {data.herodescription}
            </p>
            {/* <!-- <div class="consult-button-careers">
              Schedule a Free Consultation
            </div> --> */}
          </div>
        </section>
      </article>

      {/* <!-- Work Culture Section --> */}
      <article  className={`culture ${isVisibleCulture ? 'visible' : ''}`} ref={cultureRef}>
        <section class="culture-container">
          <h2 class="culture-heading">{data.cultureheading}</h2>
          <p class="culture-desc">
          {data.culturedescription}
          </p>
          <div className={`culture-poster-container ${isVisibleCulture ? 'culture-poster-animate' : ''}`}>
            <div class="culture-poster">
              <div class="culture-poster-img">
                <img
                  src={cultpicone}
                  alt=""
                  width="210"
                  height="210"
                />
              </div>
              <div class="culture-poster-heading">{data.nuggetoneheading}</div>
              <div class="culture-poster-desc">
              {data.nuggetonedescription}
              </div>
            </div>
            <div class="culture-poster">
              <div class="culture-poster-img">
                <img
                  src={cultpictwo}
                  alt=""
                  width="210"
                  height="210"
                />
              </div>
              <div class="culture-poster-heading">{data.nuggettwoheading}</div>
              <div class="culture-poster-desc">
              {data.nuggettwodescription}
              </div>
            </div>
            <div class="culture-poster">
              <div class="culture-poster-img">
                <img
                  src={cultpicthree}
                  alt=""
                  width="210"
                  height="210"
                />
              </div>
              <div class="culture-poster-heading">{data.nuggetthreeheading}</div>
              <div class="culture-poster-desc">
              {data.nuggetthreedescription}
              </div>
            </div>
            <div class="culture-poster">
              <div class="culture-poster-img">
                <img
                  src={cultpicfour}
                  alt=""
                  width="210"
                  height="210"
                />
              </div>
              <div class="culture-poster-heading">{data.nuggetfourheading}</div>
              <div class="culture-poster-desc">
              {data.nuggetfourdescription}
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* <!-- job opening section --> */}
      <article className={`jobopenings ${isVisibleGateway ? 'gateway-animate' : ''}`} ref={gatewayRef}>
        <section class="jobs-container">
          <h2 class="jobs-heading">Your Gateway to Professional Growth</h2>
          {/* <!-- <h3 class="jobs-subheading">Your Gateway to Professional Growth</h3> --> */}
          <p class="jobs-desc">
            Unlock a world of possibilities. Browse our current job openings and
            find the perfect match for your skills and aspirations. <br />
            We believe in investing in talent that fuels our transformative
            solutions. Your next career move starts here.
          </p>
          <div class="openings-container">
          {/* {jobPostings.map(study => (
                <JobCard key={study.id} job={study} />
            ))} */}

            {jobs.map(job => (
              <JobCard key={job._id} job={job} /> 
            ))}
          
            {/* <div class="explore-button-container">
              <div class="right-button-header">
                <span>Explore More</span>
              </div>
            </div> */}
          </div>
        </section>
      </article>

      {/* <!-- perks Section --> */}
      <article className={`perks ${isVisiblePerk ? 'gateway-animate' : ''}`} ref={perkRef}>
        <section class="perks-container">
          <h2 class="perks-heading">{data.rewardheading}</h2>
         
          <p class="perks-desc">
          {data.rewarddescription}
          </p>
          <div class="benefits-container">
            <div class="benefit-couple">
              <div class="benefit">
                <div class="benefit-img-container">
                  <img
                    src={perksone}
                    alt=""
                    width="50"
                    class="ben"
                  />
                </div>
                <div class="benefit-desc">{data.rewardone}</div>
              </div>
              <div class="benefit">
                <div class="benefit-img-container">
                  <img
                    src={perkstwo}
                    alt=""
                    width="50"
                    class="ben"
                  />
                </div>
                <div class="benefit-desc">{data.rewardtwo}</div>
              </div>
            </div>
            <div class="benefit-couple">
              <div class="benefit">
                <div class="benefit-img-container">
                  <img
                    src={perksthree}
                    alt=""
                    width="50"
                    class="ben"
                  />
                </div>
                <div class="benefit-desc">
                {data.rewardthree}
                </div>
              </div>
              <div class="benefit">
                <div class="benefit-img-container">
                  <img
                    src={perksfour}
                    alt=""
                    width="50"
                    class="ben"
                  />
                </div>
                <div class="benefit-desc">{data.rewardfour}</div>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* <!-- Call to Action Section --> */}
      <article class="cta-container">
        <section class="cta-sections-container">
          <div class="cta-content">
            <div class="cta-heading">{data.careerctaheading}</div>
            <div class="cta-descrip">
            {data.careerctadescription}
            </div>
          </div>
          <div class="cta-button-section">
            <div class="right-button-header">
              <span
                ><Link to="/contact-us" class="inner-header"
                  >Contact Us</Link
                ></span
              >
            </div>
          </div>
        </section>
      </article>
    </>
  )
}

export default Careers;