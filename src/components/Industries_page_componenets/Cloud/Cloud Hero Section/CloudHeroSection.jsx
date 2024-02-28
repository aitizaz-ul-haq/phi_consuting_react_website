import React from 'react';
import CloudHeroHeading from './Cloud Hero Subcomps/CloudHeroHeading';
import CloudHeroDescription from './Cloud Hero Subcomps/CloudHeroDescription';
import CloudHeroButton from './Cloud Hero Subcomps/CloudHeroButton';


const CloudHeroSection = ({ heroHeading, heroDescription }) => {
    return(
      <article className="hero">
      <section className="hero-container-cloud">
          <div className="hero-content-cloud">
              <CloudHeroHeading text={heroHeading} />
              <CloudHeroDescription text={heroDescription} />
              <CloudHeroButton to="/contact-us" buttonText="Schedule a Free Consultation" />
          </div>
      </section>
  </article>
    )
}

export default CloudHeroSection;