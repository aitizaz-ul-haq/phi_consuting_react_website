import React from 'react';
import { Link } from 'react-router-dom';

const CareersCtaSection = ({ ctaHeading, ctaDescription } ) => {
    return(
        <article className="cta-container">
        <section className="cta-sections-container">
          <div className="cta-content">
            <div className="cta-heading">{ctaHeading}</div>
            <div className="cta-descrip">{ctaDescription}</div>
          </div>
          <div className="cta-button-section">
            <div className="right-button-header">
              <span>
                <Link to="/contact-us" className="inner-header">Contact Us</Link>
              </span>
            </div>
          </div>
        </section>
      </article>


    )
}

export default CareersCtaSection;