import React, { useState, useEffect, useRef, Suspense } from "react";
import axios from "axios";

import IaasHeroSection from "../../components/Industries_page_componenets/Iaas/Iaas Hero Section/IaasHeroSection";
const IaasBarCardSection = React.lazy(() =>
  import(
    "../../components/Industries_page_componenets/Iaas/Iaas BarCard Section/IaasBarCardSection"
  )
);
const IaasFourCardSection = React.lazy(() =>
  import(
    "../../components/Industries_page_componenets/Iaas/Iaas FourCard Section/IaasFourCardSection"
  )
);
const IaasCtaSection = React.lazy(() =>
  import(
    "../../components/Industries_page_componenets/Iaas/Iaas Cta Section/IaasCtaSection"
  )
);
const IndustriesArticles = React.lazy(() =>
  import("../../components/shared/macroComps/IndustriesArticles")
);
import IaasRightSectionControl from "../../components/Industries_page_componenets/Iaas/Iaas Right Section/IaasRightSectionControl";
const IaasWhyPhiForSales = React.lazy(() =>
  import(
    "../../components/Industries_page_componenets/Iaas/Iaas WhyPhiForSales Section/IaasWhyPhiForSales"
  )
);
import IaasPageHelmet from "../../components/Industries_page_componenets/Iaas/Iaas PageHelmet Section/IaasPageHelmet";
import useScrollToTop from "../../hooks/useScrollToTop";
import whatback from "../../assets/img/wrappers/burn.webp";

const IaaS = () => {
  const [sectionOneTitle, setSectionOneTitle] = useState("");
  const [sectionOneParagraph, setSectionOneParagraph] = useState("");
  const [sectionTwoTitle, setSectionTwoTitle] = useState("");
  const [sectionTwoParagraph, setSectionTwoParagraph] = useState("");
  const [sectionThreeTitle, setSectionThreeTitle] = useState("");
  const [sectionThreeParagraph, setSectionThreeParagraph] = useState("");
  const [sectionFourTitle, setSectionFourTitle] = useState("");
  const [sectionFourParagraph, setSectionFourParagraph] = useState("");
  const [sectionFiveTitle, setSectionFiveTitle] = useState("");
  const [sectionFiveParagraph, setSectionFiveParagraph] = useState("");
  const [heroHeading, setHeroHeading] = useState("");
  const [heroDescription, setHeroDescription] = useState("");
  const processNewRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);
  const sectionsRef = useRef([]);
  const insightsRefs = useRef([]);
  const [cardDetails, setCardDetails] = useState({
    barCardHeading: "",
    fourCardHeading: "",
    barcarddesone: "",
    barcarddestwo: "",
    barcarddesthree: "",
    barcarddesfour: "",
    card1numericval: "",
    card1heading: "",
    card1description: "",
    card2numericval: "",
    card2heading: "",
    card2description: "",
    card3numericval: "",
    card3heading: "",
    card3description: "",
    card4numericval: "",
    card4heading: "",
    card4description: "",
  });

  const apiUrl =
    import.meta.env.VITE_API_URL_PROD || "https://backend.phiconsulting.org/";

  function simplifyFintechData(data) {
    return data.reduce((acc, entry) => {
      const simplifiedContent = entry.content.map((item) => ({
        id: entry._id,
        headingText: item.headingText,
        highlighted: item.highlighted,
        paragraphText: item.paragraphText,
      }));
      return acc.concat(simplifiedContent);
    }, []);
  }

  const fetchSaasCards = async () => {
    try {
      const response = await axios.get(
        "https://backend.phiconsulting.org/iaascards"
      );
      if (response.data && response.data.length > 0) {
        const firstEntry = response.data[0];
        setCardDetails({
          barCardHeading: firstEntry.barcardheading,
          fourCardHeading: firstEntry.fourcardheading,
          ...firstEntry,
        });
      }
      setData(response.data);
    } catch (error) {
      console.error("Error fetching saascards data:", error);
      message.error("Failed to fetch data");
    }
  };

  useEffect(() => {
    const fetchFintechData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/iaas`);
        console.log(`response data...`, response.data);
        const simplifiedData = simplifyFintechData(response.data);
        setFintechData(simplifiedData);
      } catch (error) {
        console.error("Error fetching iaas data:", error);
      }
    };

    fetchFintechData();
  }, []);

  useEffect(() => {
    fetchSaasCards();
  }, []);

  useEffect(() => {
    const fetchFintechInfo = async () => {
      try {
        const response = await axios.get(`${apiUrl}/iaasinfo`);
        const sections = response.data[0].sections;
        if (sections.length >= 2) {
          setSectionOneTitle(sections[0].title);
          setSectionOneParagraph(sections[0].paragraph);
          setSectionTwoTitle(sections[1].title);
          setSectionTwoParagraph(sections[1].paragraph);
          setSectionThreeTitle(sections[2].title);
          setSectionThreeParagraph(sections[2].paragraph);
          setSectionFourTitle(sections[3].title);
          setSectionFourParagraph(sections[3].paragraph);
        }
      } catch (error) {
        console.error("Error fetching fintech info:", error);
      }
    };

    fetchFintechInfo();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setProcessNewVisible(entry.isIntersecting);
      },
      { threshold: 1 }
    );

    if (processNewRef.current) {
      observer.observe(processNewRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fetchCloudBanData = async () => {
      try {
        const response = await axios.get(
          `https://backend.phiconsulting.org/iaasban`
        );
        const lastEntry = response.data[response.data.length - 1];
        setHeroHeading(lastEntry.heading);
        setHeroDescription(lastEntry.bannerDescription);
      } catch (error) {
        console.error("Error fetching cloud ban data:", error);
      }
    };

    fetchCloudBanData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.3,
      }
    );

    const elements = sectionsRef.current;
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.5, // Adjust as needed
      }
    );

    const elements = insightsRefs.current;
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      document.body.style.backgroundPositionY = offset * 0.5 + "px";
    };
    document.body.style.backgroundImage = `url(${whatback})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundAttachment = "";
    };
  }, []);

  useScrollToTop();
  return (
    <>
      <IaasPageHelmet />

      <IaasRightSectionControl />
      {/* <!-- Hero Section --> */}
      <IaasHeroSection
        heroHeading={heroHeading}
        heroDescription={heroDescription}
      />
      {/* Bar Card Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <IaasBarCardSection cardDetails={cardDetails} />
        {/* Industries Articals section */}
        <IndustriesArticles Api="iaas" />
        {/* Four Card Section */}
        <IaasFourCardSection cardDetails={cardDetails} />
        {/* <!-- why phi for sale Section --> */}
        <IaasWhyPhiForSales
          sectionOneTitle={sectionOneTitle}
          sectionOneParagraph={sectionOneParagraph}
          sectionTwoTitle={sectionTwoTitle}
          sectionTwoParagraph={sectionTwoParagraph}
          sectionThreeTitle={sectionThreeTitle}
          sectionThreeParagraph={sectionThreeParagraph}
          sectionFourTitle={sectionFourTitle}
          sectionFourParagraph={sectionFourParagraph}
        />
        {/* <!-- Call to Action Section --> */}
        <IaasCtaSection />
      </Suspense>
    </>
  );
};

export default IaaS;
