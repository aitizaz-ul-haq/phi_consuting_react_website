import React, { useState, useEffect, useRef, Suspense } from "react";
import axios from "axios";
import SaasHeroSection from "../../components/Industries_page_componenets/Saas/Saas Hero Section/SaasHeroSection";
const SaasBarCardSection = React.lazy(() =>
  import(
    "../../components/Industries_page_componenets/Saas/Saas BarCard Section/SaasBarCardSection"
  )
);
const SaasFourCardSection = React.lazy(() =>
  import(
    "../../components/Industries_page_componenets/Saas/Saas FourCard Section/SaasFourCardSection"
  )
);
const SaasCtaSection = React.lazy(() =>
  import(
    "../../components/Industries_page_componenets/Saas/Saas Cta Section/SaasCtaSection"
  )
);
const IndustriesArticles = React.lazy(() =>
  import("../../components/shared/macroComps/IndustriesArticles")
);
import SaasRightSectionControl from "../../components/Industries_page_componenets/Saas/Saas Right Section/SaasRightSectionControl";
const SaasWhyPhiForSales = React.lazy(() =>
  import(
    "../../components/Industries_page_componenets/Saas/Saas WhyPhiForSales Section/SaasWhyPhiForSales"
  )
);
import SaasPageHelmet from "../../components/Industries_page_componenets/Saas/Saas PageHelmet Section/SaasPageHelmet";
import whatback from "../../assets/img/wrappers/burn.webp";

const SaaS = () => {
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

  const apiUrl =
    import.meta.env.VITE_API_URL_PROD ||
    "https://prickle-balanced-archaeopteryx.glitch.me";
  const processNewRef = useRef(null);
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
        "https://prickle-balanced-archaeopteryx.glitch.me/saascards"
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
        const response = await axios.get(`${apiUrl}/saas`);
        console.log(`response data...`, response.data);
        const simplifiedData = simplifyFintechData(response.data);
        setFintechData(simplifiedData);
      } catch (error) {
        console.error("Error fetching saas data:", error);
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
        const response = await axios.get(`${apiUrl}/saasinfo`);
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
          `https://prickle-balanced-archaeopteryx.glitch.me/saasban`
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
        threshold: 0.5,
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

  return (
    <>
      <SaasPageHelmet />
      <SaasRightSectionControl />
      {/* <!-- Hero Section --> */}
      <SaasHeroSection
        heroHeading={heroHeading}
        heroDescription={heroDescription}
      />
      <Suspense fallback={<div>Loading...</div>}>
        {/* Bar Card Section */}
        <SaasBarCardSection cardDetails={cardDetails} />

        {/* Industries Articles Section */}
        <IndustriesArticles Api="saas" />

        {/* Four Card Section */}
        <SaasFourCardSection cardDetails={cardDetails} />

        {/* <!-- why phi for sale Section --> */}
        <SaasWhyPhiForSales
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
        <SaasCtaSection />
      </Suspense>
    </>
  );
};

export default SaaS;
