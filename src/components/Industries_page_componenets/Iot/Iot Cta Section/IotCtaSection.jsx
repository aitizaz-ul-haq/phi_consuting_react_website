import React from 'react';
import { Link } from 'react-router-dom';



const IotCtaSection = () => {
    return(
      <article class="cta-container">
        <section class="cta-sections-container">
          <div class="cta-content">
            <div class="cta-heading">
            Ready to Scale New Heights?
            </div>
            <div class="cta-descrip">
            Embark on your journey towards unprecedented growth and efficiency with Phi Consulting. Let's discuss how we can transform your startup's potential into real-world success.
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

export default IotCtaSection;