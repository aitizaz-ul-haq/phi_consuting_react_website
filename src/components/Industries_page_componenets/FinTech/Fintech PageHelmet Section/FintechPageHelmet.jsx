import React from 'react';
import { Helmet } from 'react-helmet';

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://phiconsulting.org"
  }, {
    "@type": "ListItem",
    "position": 2,
    "name": "FinTech Consulting"
  }]
};

const FintechPageHelmet = () => (
  <>
    <Helmet>
      <title>Empowering Your FinTech Startup to Scale Efficiently | Phi Consulting</title>
      <meta name="description" content="Unlock the full potential of your FinTech startup with Phi Consulting's expert consulting services. From GTM strategy to HR & recruitment solutions, financial consulting, and investor relations, we offer tailored solutions to address the unique challenges faced by FinTech companies. Partner with us to revolutionize your startup's growth journey. Contact us today." />
      <link rel="canonical" href="https://phiconsulting.org/fin-tech-consulting" />
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  </>
);

export default FintechPageHelmet;