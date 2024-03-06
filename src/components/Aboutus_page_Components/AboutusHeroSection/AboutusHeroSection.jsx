import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const AboutusHeroSection = ({ windowWidth, herodescription, gotoContacts }) => {
<article className="hero">
    <section className="hero-container-phi-about">
      <div className="hero-content-phi-about">
        <h1 className="hero-heading-phi-about">
          {windowWidth >= 1200 ? (
            <TypeAnimation
              sequence={[
                'Unleashing Excellence in Consultancy',
                7000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '40px', display: 'inline-block' }}
              repeat={Infinity}
            />
          ) : 'Unleashing Excellence in Consultancy'}
        </h1>
        <p className="hero-desc-phi-about">{herodescription}</p>
        <div className="consult-button-phi-about" onClick={gotoContacts}>
          Schedule a Free Consultation
        </div>
      </div>
    </section>
  </article>
}

export default AboutusHeroSection;