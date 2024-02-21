import React from 'react';
import { Link } from 'react-router-dom';


const DevopsHeroSection = ({ heroHeading, heroDescription }) => {
    return(
      <article class="hero">
      <section class="hero-container-dev">
        <div class="hero-content-dev">
          <h1 class="hero-heading-dev">
           {heroHeading}
          </h1>
          <p class="hero-desc-sales">
          {heroDescription}
          </p>
          <div class="consult-button-sales"> <Link to="/contact-us" className='scheduler-set'>Schedule a Free Consultation</Link> </div>
        </div>
      </section>
    </article>
    )
}

export default DevopsHeroSection;