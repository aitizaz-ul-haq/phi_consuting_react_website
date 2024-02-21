import React from 'react';
import { Link } from 'react-router-dom';


const SaasHeroSection = ({ heroHeading, heroDescription }) => {
    return(
      <article class="hero">
      <section class="hero-container-saas">
        <div class="hero-content-saas">
          <h1 class="hero-heading-saas">
            {heroHeading}
          </h1>
          <p class="hero-desc-saas">
          {heroDescription}
          </p>
          <div class="consult-button-sales"> <Link to="/contact-us" className='scheduler-set'>Schedule a Free Consultation</Link> </div>
        </div>
      </section>
    </article>
    )
}

export default SaasHeroSection;