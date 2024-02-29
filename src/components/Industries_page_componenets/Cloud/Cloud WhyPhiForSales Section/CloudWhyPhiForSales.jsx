import React, { useRef, useEffect } from 'react';

const CloudWhyPhiForSales = ({ sectionOneTitle, sectionOneParagraph, sectionTwoTitle, sectionTwoParagraph }) => {
  const insightsRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
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

  return (
    <article className="why-phi-for-sales">
      <h2 className="why-phi-heading">Why Choose Phi Consulting?</h2>
      <div className="insights-container">
        <div className="insights-bundle" ref={(el) => insightsRefs.current.push(el)}>
          <div className="left-section-insights">
            <div className="overlay-container">
              <div className="content">
                <h2 className="overlay-heading">
                  {sectionOneTitle}
                </h2>
                <p className="overlay-desc">
                  {sectionOneParagraph}
                </p>
              </div>
            </div>
          </div>
          <div className="right-section-insights">
            <div className="overlay-container">
              <div className="content">
                <h2 className="overlay-heading">
                  {sectionTwoTitle}
                </h2>
                <p className="overlay-desc">
                  {sectionTwoParagraph}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CloudWhyPhiForSales;
