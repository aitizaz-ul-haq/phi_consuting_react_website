import React, { useRef, useEffect } from 'react';

const DevopsWhyPhiForSales = ({ sectionOneTitle, sectionOneParagraph, sectionTwoTitle, sectionTwoParagraph, sectionThreeTitle, sectionThreeParagraph, sectionFourTitle, sectionFourParagraph }) => {
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
    <article class="why-phi-for-sales">
    <h2 class="why-phi-heading">Why Phi Consulting?</h2>
    <div class="insights-container">
      <div class="insights-bundle" ref={(el) => insightsRefs.current.push(el)}>
        <div class="left-section-insights">
          <div class="overlay-container">
            <div class="content">
              <h2 class="overlay-heading">
              {sectionOneTitle}
              </h2>
              <p class="overlay-desc">
              {sectionOneParagraph}
              </p>
            </div>
          </div>
        </div>
        <div class="right-section-insights">
          <div class="overlay-container">
            <div class="content">
              <h2 class="overlay-heading">
              {sectionTwoTitle}
              </h2>
              <p class="overlay-desc">
              {sectionTwoParagraph}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="insights-bundle" ref={(el) => insightsRefs.current.push(el)}>
        <div class="left-section-insights">
          <div class="overlay-container">
            <div class="content">
              <h2 class="overlay-heading">{sectionThreeTitle}</h2>
              <p class="overlay-desc">
              {sectionThreeParagraph}
              </p>
            </div>
          </div>
        </div>
        <div class="right-section-insights">
          <div class="overlay-container">
            <div class="content">
              <h2 class="overlay-heading">
              {sectionFourTitle}
              </h2>
              <p class="overlay-desc">
              {sectionFourParagraph}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
  );
};

export default DevopsWhyPhiForSales;
