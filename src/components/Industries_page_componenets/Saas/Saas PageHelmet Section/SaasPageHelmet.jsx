import React from 'react';
import { Helmet } from 'react-helmet';

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Solutions",
        "item": "https://phiconsulting.org/solutions"
    }]
};

const SaasPageHelmet = () => (

    <>
        <Helmet>
            <title>Expertise at the Intersection of Innovation and Growth | Phi Consulting</title>
            <meta name="description" content="Unlock the potential of your B2B SaaS startup with Phi Consulting's expert SaaS consulting services. Our hands-on experience, tested approaches, and flexibility ensure successful GTM strategies, HR & recruitment solutions, financial consulting, and investor relations. Let's shape the future of your SaaS venture together. Contact us to discuss partnership opportunities." />
            <link rel="canonical" href="https://phiconsulting.org/saas-consulting" />
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbSchema)}
            </script>
        </Helmet>
    </>
);

export default SaasPageHelmet;