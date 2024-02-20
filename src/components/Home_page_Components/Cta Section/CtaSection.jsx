import React from 'react';
import { Link } from 'react-router-dom';


const CtaSection = ({ ctaHeading, ctaDescription, gotoContacts }) => {
    return(
<article id="cta" className="cta-container">
      <section className="cta-sections-container">
        <div className="cta-content">
          <div className="cta-heading">{ctaHeading}</div>
          <div className="cta-descrip">{ctaDescription}</div>
        </div>
        <div className="cta-button-section">
          <div className="right-button-header">
            <span>
              <Link to="/contact-us" className="inner-header" onClick={gotoContacts}>
                Get a Free Consultation
              </Link>
            </span>
          </div>
        </div>
      </section>
    </article>
    )
}

export default CtaSection;