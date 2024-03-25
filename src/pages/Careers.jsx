import React, { useState, useEffect, useRef } from "react";
import CareersCtaSection from "../components/Careers_page_Components/Careers Cta Section/CareersCtaSection";
import CareersHeroSection from "../components/Careers_page_Components/Careers Hero Section/CareersHeroSection";
import cultpicone from "../assets/img/innovate_two.webp";
import cultpictwo from "../assets/img/collaborate.webp";
import cultpicthree from "../assets/img/excellence.webp";
import cultpicfour from "../assets/img/growth.webp";

import perksone from "../assets/img/salary_icon.webp";
import perkstwo from "../assets/img/healthcare.webp";
import perksthree from "../assets/img/businessman.webp";
import perksfour from "../assets/img/office-hours.webp";

import JobCard from "../components/shared/cards/JobCard";
import { Helmet } from "react-helmet";

import useScrollToTop from "../hooks/useScrollToTop";

import axios from "axios";

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
    heroheading: "",
    herodescription: "",
    cultureheading: "",
    culturedescription: "",
    nuggetoneheading: "",
    nuggetonedescription: "",
    nuggettwoheading: "",
    nuggettwodescription: "",
    nuggetthreeheading: "",
    nuggetthreedescription: "",
    nuggetfourheading: "",
    nuggetfourdescription: "",
    rewardheading: "",
    rewarddescription: "",
    rewardone: "",
    rewardtwo: "",
    rewardthree: "",
    rewardfour: "",
    careerctaheading: "",
    careerctadescription: "",
  });

  useEffect(() => {
    const fetchHomePageData = async () => {
      try {
        const response = await axios.get(
          "http://64.23.206.154:3000/careerspage"
        );
        console.log(`your data`, response.data);
        if (response.data && response.data.length > 0) {
          const homepageData = response.data[0];
          setData({
            heroheading: homepageData.heroheading,
            herodescription: homepageData.herodescription,
            cultureheading: homepageData.cultureheading,
            culturedescription: homepageData.culturedescription,
            nuggetoneheading: homepageData.nuggetoneheading,
            nuggetonedescription: homepageData.nuggetonedescription,
            nuggettwoheading: homepageData.nuggettwoheading,
            nuggettwodescription: homepageData.nuggettwodescription,
            nuggetthreeheading: homepageData.nuggetthreeheading,
            nuggetthreedescription: homepageData.nuggetthreedescription,
            nuggetfourheading: homepageData.nuggetfourheading,
            nuggetfourdescription: homepageData.nuggetfourdescription,
            rewardheading: homepageData.rewardheading,
            rewarddescription: homepageData.rewarddescription,
            rewardone: homepageData.rewardone,
            rewardtwo: homepageData.rewardtwo,
            rewardthree: homepageData.rewardthree,
            rewardfour: homepageData.rewardfour,
            careerctaheading: homepageData.careerctaheading,
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === cultureRef.current) {
            setIsVisibleCulture(entry.isIntersecting);
          } else if (entry.target === gatewayRef.current) {
            setIsVisibleGateway(entry.isIntersecting);
          } else if (entry.target === perkRef.current) {
            setIsPerk(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (cultureRef.current) observer.observe(cultureRef.current);
    if (gatewayRef.current) observer.observe(gatewayRef.current);
    if (perkRef.current) observer.observe(perkRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Function to fetch job data
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://64.23.206.154:3000/jobs");
        setJobs(response.data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();

    // ... other useEffect code
  }, []);

  useScrollToTop();
  return (
    <>
      <Helmet>
        <title>Careers - Phi Consulting</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at Phi Consulting. Join our team of dynamic professionals and contribute to shaping the future of strategic business excellence."
        />
      </Helmet>

      <Helmet>
        <link rel="canonical" href="https://phiconsulting.org/careers" />
      </Helmet>

      {/* <!-- Hero Section --> */}
      <CareersHeroSection
        heroHeading={data.heroheading}
        heroDescription={data.herodescription}
        windowWidth={windowWidth}
      />

      {/* <!-- Work Culture Section --> */}
      <article
        className={`culture ${isVisibleCulture ? "visible" : ""}`}
        ref={cultureRef}
      >
        <section class="culture-container">
          <h2 class="culture-heading">{data.cultureheading}</h2>
          <p class="culture-desc">{data.culturedescription}</p>
          <div
            className={`culture-poster-container ${
              isVisibleCulture ? "culture-poster-animate" : ""
            }`}
          >
            <div class="culture-poster">
              <div class="culture-poster-img">
                <img src={cultpicone} alt="" width="210" height="210" />
              </div>
              <div class="culture-poster-heading">{data.nuggetoneheading}</div>
              <div class="culture-poster-desc">{data.nuggetonedescription}</div>
            </div>
            <div class="culture-poster">
              <div class="culture-poster-img">
                <img src={cultpictwo} alt="" width="210" height="210" />
              </div>
              <div class="culture-poster-heading">{data.nuggettwoheading}</div>
              <div class="culture-poster-desc">{data.nuggettwodescription}</div>
            </div>
            <div class="culture-poster">
              <div class="culture-poster-img">
                <img src={cultpicthree} alt="" width="210" height="210" />
              </div>
              <div class="culture-poster-heading">
                {data.nuggetthreeheading}
              </div>
              <div class="culture-poster-desc">
                {data.nuggetthreedescription}
              </div>
            </div>
            <div class="culture-poster">
              <div class="culture-poster-img">
                <img src={cultpicfour} alt="" width="210" height="210" />
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
      <article
        className={`jobopenings ${isVisibleGateway ? "gateway-animate" : ""}`}
        ref={gatewayRef}
      >
        <section class="jobs-container">
          <h2 class="jobs-heading">Your Gateway to Professional Growth</h2>
          <p class="jobs-desc">
            Unlock a world of possibilities. Browse our current job openings and
            find the perfect match for your skills and aspirations. <br />
            We believe in investing in talent that fuels our transformative
            solutions. Your next career move starts here.
          </p>
          <div class="openings-container">
            {jobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        </section>
      </article>

      {/* <!-- perks Section --> */}
      <article
        className={`perks ${isVisiblePerk ? "gateway-animate" : ""}`}
        ref={perkRef}
      >
        <section class="perks-container">
          <h2 class="perks-heading">{data.rewardheading}</h2>
          <p class="perks-desc">{data.rewarddescription}</p>
          <div class="benefits-container">
            <div class="benefit-couple">
              <div class="benefit">
                <div class="benefit-img-container">
                  <img src={perksone} alt="" width="50" class="ben" />
                </div>
                <div class="benefit-desc">{data.rewardone}</div>
              </div>
              <div class="benefit">
                <div class="benefit-img-container">
                  <img src={perkstwo} alt="" width="50" class="ben" />
                </div>
                <div class="benefit-desc">{data.rewardtwo}</div>
              </div>
            </div>
            <div class="benefit-couple">
              <div class="benefit">
                <div class="benefit-img-container">
                  <img src={perksthree} alt="" width="50" class="ben" />
                </div>
                <div class="benefit-desc">{data.rewardthree}</div>
              </div>
              <div class="benefit">
                <div class="benefit-img-container">
                  <img src={perksfour} alt="" width="50" class="ben" />
                </div>
                <div class="benefit-desc">{data.rewardfour}</div>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* <!-- Call to Action Section --> */}
      <CareersCtaSection
        ctaHeading={data.careerctaheading}
        ctaDescription={data.careerctadescription}
      />
    </>
  );
};

export default Careers;
