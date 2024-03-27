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
    "name": "IoT Consulting"
  }]
};

const IotPageHelmet = () => (
  <>
    <Helmet>
      <title>Your Gateway to Scalable IoT Innovation | Phi Consulting</title>
      <meta name="description" content="Unlock the potential of your IoT startup with Phi Consulting's specialized IoT consulting services. Our team guides founders and executives through growth and innovation, crafting custom go-to-market strategies, HR and recruitment solutions, financial management, and investor relations to ensure lasting success." />
      <link rel="canonical" href="https://phiconsulting.org/iot-consulting" />
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  </>
);

export default IotPageHelmet;