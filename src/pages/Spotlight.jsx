import React, { useEffect, useState } from "react";
import axios from "axios";
import CaseStudyCollectionCard from "../components/shared/cards/caseStudyCollectionCard";
import useScrollToTop from "../hooks/useScrollToTop";
import { Spin } from "antd";
import { Helmet } from "react-helmet";
import casestudybluebacl from "../assets/img/wrappers/casestudyblueback.webp";

import OurWorkHeroSection from "../components/OurWork_page_Components/OurWork Hero Section/OurWorkHeroSection";

const Spotlight = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [data, setData] = useState({
    heroheading: "",
    herodescription: "",
    valuecreationheading: "",
    valuecreationdescription: "",
    phicreatesheading: "",
    ourwayoneheading: "",
    ourwayonedescription: "",
    ourwaytwoheading: "",
    ourwaytwodescription: "",
    ourwaythreeheading: "",
    ourwaythreedescription: "",
    ctaheading: "",
    ctadescription: "",
  });

  useEffect(() => {
    const fetchHomePageData = async () => {
      try {
        const response = await axios.get(
          "https://backend.phiconsulting.org/valuecreationpage"
        );
        console.log(`your data`, response.data);
        if (response.data && response.data.length > 0) {
          const homepageData = response.data[0];
          setData({
            heroHeading: homepageData.heroheading,
            heroDescription: homepageData.herodescription,
            valuecreationheading: homepageData.valuecreationheading,
            valuecreationdescription: homepageData.valuecreationdescription,
            phicreatesheading: homepageData.phicreatesheading,
            ourwayoneheading: homepageData.ourwayoneheading,
            ourwayonedescription: homepageData.ourwayonedescription,
            ourwaytwoheading: homepageData.ourwaytwoheading,
            ourwaytwodescription: homepageData.ourwaytwodescription,
            ourwaythreeheading: homepageData.ourwaythreeheading,
            ourwaythreedescription: homepageData.ourwaythreedescription,
            ctaheading: homepageData.ctaheading,
            ctadescription: homepageData.ctadescription,
          });
        }
      } catch (error) {
        console.error("Error fetching homepage data:", error);
      }
    };

    fetchHomePageData();
  }, []);

  useScrollToTop();

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const response = await axios.get(
          "https://backend.phiconsulting.org/cases"
        );
        setCaseStudies(response.data);
      } catch (error) {
        console.error("Error fetching case studies:", error);
      }
      setTimeout(() => setLoading(false), 2000);
    };

    fetchCaseStudies();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const caseStudyRow = document.querySelector(".case-study-row");
      if (caseStudyRow) {
        const speed = 0.1;
        const yOffset = window.pageYOffset;
        caseStudyRow.style.backgroundPosition = `center ${yOffset * speed}px`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  if (loading) {
    return (
      <div className="spinner-container">
        <Spin size="large" />
      </div>
    );
  }

  const gotoContacts = () => {
    window.location.href = "/contact-us";
  };

  return (
    <>
      <Helmet>
        <title>Success Stories: Phi Consulting Case Studies</title>
        <meta
          name="description"
          content="Explore Phi Consulting's transformative impact through detailed case studies. Dive into real-world success examples with ATOB Financials, TruckX, Digital Ocean, and more."
        />
      </Helmet>
      <Helmet>
        <link rel="canonical" href="https://phiconsulting.org/case-studies" />
      </Helmet>

      {/* <!-- Hero Section --> */}
      <OurWorkHeroSection
        heroHeading={data.heroHeading}
        heroDescription={data.heroDescription}
        windowWidth={windowWidth}
        gotoContacts={gotoContacts}
      />

      <article
        className="case-study-row"
        style={{
          backgroundImage: `url(${casestudybluebacl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <section className="case-study-container-view">
          {caseStudies.map((study) => (
            <CaseStudyCollectionCard key={study._id} caseStudy={study} />
          ))}
        </section>
      </article>
    </>
  );
};

export default Spotlight;
