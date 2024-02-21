import React from 'react';
import { Link } from 'react-router-dom';



const FintechCtaSection = () => {
    return(
      <article class="cta-container">
      <section class="cta-sections-container">
        <div class="cta-content">
          <div class="cta-heading">
          Ready to Transform Your FinTech Startup?
          </div>
          <div class="cta-descrip">
          Contact us today to schedule a consultation and start your journey towards efficient scaling and strategic growth.
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

export default FintechCtaSection;