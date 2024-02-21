import React from 'react';
import { Link } from 'react-router-dom';


const IaasHeroSection = ({ heroHeading, heroDescription }) => {
    return(
      <article class="hero">
      <section class="hero-container-iaas">
        <div class="hero-content-iaas">
          <h1 class="hero-heading-iaas">
            {heroHeading}
          </h1>
          <p class="hero-desc-iaas">
          {heroDescription}
          </p>
          <div class="consult-button-sales"> <Link to="/contact-us" className='scheduler-set'>Schedule a Free Consultation</Link> </div>
        </div>
      </section>
    </article>
    )
}

export default IaasHeroSection;