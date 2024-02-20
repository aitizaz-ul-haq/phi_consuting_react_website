import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const ServicesHeroSection = ({ heroHeading, heroDescription, windowWidth, gotoContacts }) => {
    return(
<article className="hero">
    <section className="hero-container-services">
      <div className="hero-content-services-page">
        <h1 className="hero-heading-services-page">
          {windowWidth >= 1200 ? (
            <TypeAnimation
              sequence={['Drive Growth & Excellence with Phi Consulting', 7000]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '40px', display: 'inline-block' }}
              repeat={Infinity}
            />
          ) : 'Drive Growth & Excellence with Phi Consulting'}
        </h1>
        <p className="hero-desc-services-page">{heroDescription}</p>
        <div className="consult-button-services-page" onClick={gotoContacts}>
          Schedule a Free Consultation
        </div>
      </div>
    </section>
  </article>
    )
}

export default ServicesHeroSection;