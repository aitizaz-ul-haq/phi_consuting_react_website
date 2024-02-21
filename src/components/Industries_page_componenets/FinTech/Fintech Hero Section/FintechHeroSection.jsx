import React from 'react';
import { Link } from 'react-router-dom';


const FintechHeroSection = ({ heroHeading, heroDescription }) => {
    return(
      <article class="hero">
      <section class="hero-container-fin">
        <div class="hero-content-fin">
          <h1 class="hero-heading-fin">
            {heroHeading}
          </h1>
          <p class="hero-desc-fin">
          {heroDescription}
          </p>
          <div class="consult-button-sales"> <Link to="/contact-us" className='scheduler-set'>Schedule a Free Consultation</Link> </div>
        </div>
      </section>
    </article>
    )
}

export default FintechHeroSection;