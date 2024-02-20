import React from 'react';
import { TypeAnimation } from 'react-type-animation';



const CareersHeroSection = ({ heroHeading, heroDescription, windowWidth }) => {
    return(
       
<article className="hero">
      <section className="hero-container-careers">
        <div className="hero-content-careers">
          <h1 className="hero-heading-careers">
            {windowWidth >= 1200 ? (
              <TypeAnimation
                sequence={[
                  'Join Our Team, Ignite Your Future',
                  7000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '40px', display: 'inline-block' }}
                repeat={Infinity}
              />
            ) : 'Join Our Team, Ignite Your Future'}
          </h1>
          <p className="hero-desc-careers">
            {heroDescription}
          </p>
        </div>
      </section>
    </article>
    )
}

export default CareersHeroSection;