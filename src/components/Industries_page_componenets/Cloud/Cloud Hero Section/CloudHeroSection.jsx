import React from 'react';
import { Link } from 'react-router-dom';


const CloudHeroSection = ({ heroHeading, heroDescription }) => {
    return(
        <article className="hero">
        <section className="hero-container-cloud">
          <div className="hero-content-cloud">
            <h1 className="hero-heading-cloud">
              {heroHeading}
            </h1>
            <p className="hero-desc-cloud">
              {heroDescription}
            </p>
            <div className="consult-button-sales"> 
              <Link to="/contact-us" className='scheduler-set'>Schedule a Free Consultation</Link> 
            </div>
          </div>
        </section>
      </article>
    )
}

export default CloudHeroSection;