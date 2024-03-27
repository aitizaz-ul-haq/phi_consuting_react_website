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
    "name": "IaaS Consulting"
  }]
};

const IaasPageHelmet = () => (
  <>
    <Helmet>
      <title>Expert IaaS Solutions for Startups | Phi Consulting</title>
      <meta name="description" content="Unlock the potential of your startup with Phi Consulting's expert IaaS consulting services. Our team guides startups in assessing infrastructure needs, formulating scalable strategies, and navigating financial complexities. Explore our customized solutions for go-to-market strategies, talent acquisition, and investor relations to propel your venture towards success." />
      <link rel="canonical" href="https://phiconsulting.org/iaas-consulting" />
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  </>
);

export default IaasPageHelmet;