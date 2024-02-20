import React from 'react';
import { Link } from 'react-router-dom';

const BlogCtaSection = () => {
    return(
        <article className="cta-container">
      <section className="cta-sections-container">
        <div className="cta-content">
          <div className="cta-heading">
            Ready to delve deeper into the world of business success?
          </div>
          <div className="cta-descrip">
            Explore our blog for a wealth of knowledge and actionable
            insights. Whether you're a startup, SME, or industry enthusiast,
            Phi Consulting is your guide to unlocking unparalleled success.
          </div>
        </div>
        <div className="cta-button-section">
          <div className="right-button-header">
            <span>
              <Link to="/contact-us" className="inner-header">Get in Touch</Link>
            </span>
          </div>
        </div>
      </section>
    </article>
    )
}

export default BlogCtaSection;