import React,{ useState, useEffect, useRef, Suspense } from 'react';
import useScrollToTop from '../../hooks/useScrollToTop';
import axios from 'axios';
import IotHeroSection from '../../components/Industries_page_componenets/Iot/Iot Hero Section/IotHeroSection';
const IotBarCardSection = React.lazy(() => import('../../components/Industries_page_componenets/Iot/Iot BarCard Section/IotBarCardSection'));
const IotFourCardSection = React.lazy(() => import('../../components/Industries_page_componenets/Iot/Iot FourCard Section/IotFourCardSection'));
const IotCtaSection = React.lazy(() => import('../../components/Industries_page_componenets/Iot/Iot Cta Section/IotCtaSection'));
const IndustriesArticles = React.lazy(() => import('../../components/shared/macroComps/IndustriesArticles'));
import IotRightSectionControl from '../../components/Industries_page_componenets/Iot/Iot Right Section/IotRightSectionControl';
const IotWhyPhiForSales = React.lazy(() => import('../../components/Industries_page_componenets/Iot/Iot WhyPhiForSales Section/IotWhyPhiForSales'));
import IotPageHelmet from '../../components/Industries_page_componenets/Iot/Iot PageHelmet Section/IotPageHelmet';
import whatback from "../../assets/img/wrappers/burn.webp"; 



const Iot = () => {
  const [sectionOneTitle, setSectionOneTitle] = useState('');
  const [sectionOneParagraph, setSectionOneParagraph] = useState('');
  const [sectionTwoTitle, setSectionTwoTitle] = useState('');
  const [sectionTwoParagraph, setSectionTwoParagraph] = useState('');
  const [sectionThreeTitle, setSectionThreeTitle] = useState('');
  const [sectionThreeParagraph, setSectionThreeParagraph] = useState('');
  const [sectionFourTitle, setSectionFourTitle] = useState('');
  const [sectionFourParagraph, setSectionFourParagraph] = useState('');
  const [sectionFiveTitle, setSectionFiveTitle] = useState('');
  const [sectionFiveParagraph, setSectionFiveParagraph] = useState('');
  const [heroHeading, setHeroHeading] = useState('');
  const [heroDescription, setHeroDescription] = useState('');
  const processNewRef = useRef(null);
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

  const apiUrl = import.meta.env.VITE_API_URL_PROD || 'https://prickle-balanced-archaeopteryx.glitch.me';

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

  const fetchSaasCards = async () => {
    try {
      const response = await axios.get('https://prickle-balanced-archaeopteryx.glitch.me/iotcards');
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
    const fetchFintechData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/iot`);
        console.log(`response data...`, response.data)
        const simplifiedData = simplifyFintechData(response.data);
        setFintechData(simplifiedData);
      
      } catch (error) {
        console.error('Error fetching iot data:', error);
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
        const response = await axios.get(`${apiUrl}/iotinfo`);
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
        const response = await axios.get(`https://prickle-balanced-archaeopteryx.glitch.me/iotban`);
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



useScrollToTop();
    return (
        <>      
  <IotPageHelmet />
  
      <IotRightSectionControl/>
      {/* <!-- Hero Section --> */}
      <IotHeroSection heroHeading={heroHeading} heroDescription={heroDescription} />
      {/* Bar Card Section */}
      <Suspense fallback={<div>Loading...</div>}>
      <IotBarCardSection cardDetails={cardDetails} />
       {/* Industries Articals section */}
      <IndustriesArticles Api="iot"/>
       {/* Four Card Section */}
      <IotFourCardSection cardDetails={cardDetails} />
       {/* <!-- why phi for sale Section --> */}
      <IotWhyPhiForSales
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
      <IotCtaSection />
      </Suspense>
        </>
    )
}

export default Iot;