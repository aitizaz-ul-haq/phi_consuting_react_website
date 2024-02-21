import React from 'react';
import { Link } from 'react-router-dom';



const CloudCtaSection = () => {
    return(
<article className="cta-container">
      <section className="cta-sections-container">
        <div className="cta-content">
          <div className="cta-heading">
            Ready to Transform Your Startup's DevOps Journey?
          </div>
          <div className="cta-descrip">
            Connect with us today. Let's discuss how Phi Consulting can elevate your startup to new heights with expert DevOps consulting. Your innovation, our expertise – together, we build the future.
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

export default CloudCtaSection;