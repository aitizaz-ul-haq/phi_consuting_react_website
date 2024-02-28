import React from 'react';
import CloudCtaHeading from './Cloud Cta SubComps/CloudCtaHeading';
import CloudCtaDescription from './Cloud Cta SubComps/CloudCtaDescription';
import CloudCtaButton from './Cloud Cta SubComps/CloudCtaButton';

const CloudCtaSection = () => {
    return (
        <article className="cta-container">
            <section className="cta-sections-container">
                <div className="cta-content">
                    <CloudCtaHeading text="Ready to Transform Your Startup's DevOps Journey?" />
                    <CloudCtaDescription text="Connect with us today. Let's discuss how Phi Consulting can elevate your startup to new heights with expert DevOps consulting. Your innovation, our expertise – together, we build the future." />
                </div>
                <CloudCtaButton to="/contact-us" buttonText="Get in Touch" />
            </section>
        </article>
    );
}

export default CloudCtaSection;
