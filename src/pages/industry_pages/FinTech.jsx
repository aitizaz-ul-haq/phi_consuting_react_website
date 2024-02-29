import React,{ useState, useEffect, useRef, Suspense } from 'react';
import axios from 'axios';
const FintechHeroSection = React.lazy(() => import('../../components/Industries_page_componenets/FinTech/Fintech Hero Section/FintechHeroSection'));
const FintechBarCardSection = React.lazy(() => import('../../components/Industries_page_componenets/FinTech/Fintech BarCard Section/FintechBarCardSection'));
const FintechFourCardSection = React.lazy(() => import('../../components/Industries_page_componenets/FinTech/Fintech FourCard Section/FintechFourCardSection'));
const IndustriesArticles = React.lazy(() => import('../../components/shared/macroComps/IndustriesArticles'));
const FintechCtaSection = React.lazy(() => import('../../components/Industries_page_componenets/FinTech/Fintech Cta Section/FintechCtaSection'));
const FintechRightSectionControl = React.lazy(() => import('../../components/Industries_page_componenets/FinTech/Fintech Right Section/FintechRightSectionControl'));
const FintechWhyPhiForSales = React.lazy(() => import('../../components/Industries_page_componenets/FinTech/Fintech WhyPhiForSales Section/FintechWhyPhiForSales'));
import FintechPageHelmet from '../../components/Industries_page_componenets/FinTech/Fintech PageHelmet Section/FintechPageHelmet';
import useScrollToTop from '../../hooks/useScrollToTop';
import whatback from "../../assets/img/wrappers/burn.webp"; 

const FinTech = () => {
  const [sectionOneTitle, setSectionOneTitle] = useState('');
  const [sectionOneParagraph, setSectionOneParagraph] = useState('');
  const [sectionTwoTitle, setSectionTwoTitle] = useState('');
  const [sectionTwoParagraph, setSectionTwoParagraph] = useState('');
  const [sectionThreeTitle, setSectionThreeTitle] = useState('');
  const [sectionThreeParagraph, setSectionThreeParagraph] = useState('');
  const [sectionFourTitle, setSectionFourTitle] = useState('');
  const [sectionFourParagraph, setSectionFourParagraph] = useState('');
  const [heroHeading, setHeroHeading] = useState('');
  const [heroDescription, setHeroDescription] = useState('');
  const processNewRef = useRef(null);
  const sectionsRef = useRef([]);
  const insightsRefs = useRef([]);
  const diagonalDivRef = useRef(null);

  const [cardDetails, setCardDetails] = useState({
    barCardHeading: '',
    fourCardHeading: '',
    barcarddesone: '',
    barcarddestwo: '',
    barcarddesthree: '',
    barcarddesfour: '',
    card1numericval: '',
    card1heading: '',
    card1description: '',
    card2numericval: '',
    card2heading: '',
    card2description: '',
    card3numericval: '',
    card3heading: '',
    card3description: '',
    card4numericval: '',
    card4heading: '',
    card4description: '',
  });


 function simplifyFintechData(data) {
  return data.reduce((acc, entry) => {
    const simplifiedContent = entry.content.map(item => ({
      id: entry._id, 
      headingText: item.headingText,
      highlighted: item.highlighted,
      paragraphText: item.paragraphText
    }));
    return acc.concat(simplifiedContent);
  }, []);
}

useEffect(() => {
  const fetchFintechData = async () => {
    try {
      const response = await axios.get(`https://prickle-balanced-archaeopteryx.glitch.me/fintech`);
      console.log(`response data...`, response.data)
      const simplifiedData = simplifyFintechData(response.data);
      setFintechData(simplifiedData);
    
    } catch (error) {
      console.error('Error fetching fintech data:', error);
    }
  };

  fetchFintechData();
}, []);

useEffect(() => {
  fetchSaasCards();
}, []);

const fetchSaasCards = async () => {
  try {
    const response = await axios.get('https://prickle-balanced-archaeopteryx.glitch.me/fincards');
    if (response.data && response.data.length > 0) {
      const firstEntry = response.data[0];
      setCardDetails({
        barCardHeading: firstEntry.barcardheading,
        fourCardHeading: firstEntry.fourcardheading,
        ...firstEntry
      });
    }
    setData(response.data);
  } catch (error) {
    console.error('Error fetching saascards data:', error);
    message.error('Failed to fetch data');
  }
};

  useEffect(() => {
  const fetchFintechInfo = async () => {
    try {
      const response = await axios.get(`https://prickle-balanced-archaeopteryx.glitch.me/fintechinfo`);
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
      console.error('Error fetching fintech info:', error);
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
        const response = await axios.get(`https://prickle-balanced-archaeopteryx.glitch.me/fintban`);
        const lastEntry = response.data[response.data.length - 1];
        setHeroHeading(lastEntry.heading);
        setHeroDescription(lastEntry.bannerDescription);
      } catch (error) {
        console.error('Error fetching cloud ban data:', error);
      }
    };

    fetchCloudBanData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      document.body.style.backgroundPositionY = offset * 0.5 + 'px'; 
    };
    document.body.style.backgroundImage = `url(${whatback})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed'; 
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundAttachment = '';
    };
  }, []);
  
  useEffect(() => {
    const servicesSection = document.querySelector('.why-phi-for-sales');
    if (servicesSection) {
      servicesSection.style.backgroundColor = 'rgba(173, 216, 230, 0.5)';
      servicesSection.style.borderTop = '2px solid #add8e6'; 
      servicesSection.style.borderBottom = '2px solid #add8e6'; 
    }
    return () => {
      if (servicesSection) {
        servicesSection.style.backgroundColor = '';
        servicesSection.style.borderTop = '';
        servicesSection.style.borderBottom = '';
      }
    };
  }, []); 

  useEffect(() => {
  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
              } else {
                  entry.target.classList.remove('visible');
              }
          });
      },
      {
          rootMargin: '0px',
          threshold: 0.3
      }
  );

  const elements = sectionsRef.current;
  elements.forEach(el => observer.observe(el));

  return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        diagonalDivRef.current.classList.add('fill-effect');
      }
    },
    { threshold: 0.5 } 
  );

  if (diagonalDivRef.current) {
    observer.observe(diagonalDivRef.current);
  }

  return () => {
    if (diagonalDivRef.current) {
      observer.unobserve(diagonalDivRef.current);
    }
  };
  }, []);

useScrollToTop();
    return (
        <>
      <FintechPageHelmet />
     
       {/* Fintech Right Section Control Panel */}
      <FintechRightSectionControl />
      {/* <!-- Hero Section --> */}
      <FintechHeroSection heroHeading={heroHeading} heroDescription={heroDescription} />
      {/* Bar Card Section */}
      <Suspense fallback={<div>Loading...</div>}>
      <FintechBarCardSection cardDetails={cardDetails} />
      {/* Fintech Industries Section */}
      <IndustriesArticles Api="fintech" />
      {/* Fintech Four Card Section */}
      <FintechFourCardSection cardDetails={cardDetails} />
      {/* <!-- why phi for sale Section --> */}
      <FintechWhyPhiForSales
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
      <FintechCtaSection />
      </Suspense>

      
        </>
    )
}

export default FinTech;