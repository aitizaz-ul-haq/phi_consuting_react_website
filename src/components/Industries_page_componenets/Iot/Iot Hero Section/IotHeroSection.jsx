import React from 'react';
import { Link } from 'react-router-dom';


const IotHeroSection = ({ heroHeading, heroDescription }) => {
    return(
      <article class="hero">
        <section class="hero-container-iot">
          <div class="hero-content-iot">
            <h1 class="hero-heading-iot">
            {heroHeading}
            </h1>
            <p class="hero-desc-iot">
            {heroDescription}
            </p>
            <div class="consult-button-sales"> <Link to="/contact-us" className='scheduler-set'>Schedule a Free Consultation</Link> </div>
          </div>
        </section>
      </article>
    )
}

export default IotHeroSection;