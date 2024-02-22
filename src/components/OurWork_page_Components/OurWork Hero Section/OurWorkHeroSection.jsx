import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const OurWorkHeroSection = ({ heroHeading, heroDescription, windowWidth, gotoContacts }) => {
    return(
<article className="hero">
      <section className="hero-container-our-work">
        <div className="hero-content-our-work">
          <h1 className="hero-heading-our-work">
            {windowWidth >= 1200 ? (
              <TypeAnimation
                sequence={[
                  'Success is not just a goal but a proven outcome',
                  7000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '40px', display: 'inline-block' }}
                repeat={Infinity}
              />
            ) : 'Success is not just a goal but a proven outcome'}
          </h1>
          <p className="hero-desc-our-work">
            {heroDescription}
          </p>
          <div className="consult-button-our-work" onClick={gotoContacts}>
            Schedule a Free Consultation
          </div>
        </div>
      </section>
    </article>
    )
}

export default OurWorkHeroSection;