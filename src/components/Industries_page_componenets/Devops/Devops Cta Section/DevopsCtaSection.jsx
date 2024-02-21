import React from 'react';
import { Link } from 'react-router-dom';



const DevopsCtaSection = () => {
    return(
      <article class="cta-container">
      <section class="cta-sections-container">
        <div class="cta-content">
          <div class="cta-heading">
          Ready to Transform Your Startup's DevOps Journey?
          </div>
          <div class="cta-descrip">
          Connect with us today. Let's discuss how Phi Consulting can elevate your startup to new heights with expert DevOps consulting. Your innovation, our expertise – together, we build the future.
          </div>
        </div>
        <div class="cta-button-section">
          <div class="right-button-header">
            <span
              ><Link to="/contact-us" class="inner-header"
                >Get in Touch</Link
              ></span
            >
          </div>
        </div>
      </section>
    </article>
    )
}

export default DevopsCtaSection;