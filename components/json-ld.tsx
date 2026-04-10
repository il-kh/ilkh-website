/**
 * JSON-LD structured data components for schema.org markup.
 * Improves rich results and entity understanding in Google Search.
 */

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "@id": "https://inros-lackner.com.kh/#organization",
    "name": "Inros Lackner (Cambodia) Co., Ltd.",
    "alternateName": ["ILKH", "Inros Lackner Cambodia"],
    "url": "https://inros-lackner.com.kh",
    "logo": {
      "@type": "ImageObject",
      "url": "https://inros-lackner.com.kh/images/ilkh-logo.png",
      "width": 300,
      "height": 100
    },
    "image": "https://inros-lackner.com.kh/images/og-image.jpg",
    "description": "Inros Lackner Cambodia (ILKH) is a multi-disciplinary engineering consultancy in Cambodia providing structural engineering, geotechnical investigations, topographic surveys, BIM, construction supervision, and infrastructure planning services.",
    "foundingLocation": {
      "@type": "Place",
      "addressCountry": "KH"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Phnom Penh",
      "addressCountry": "KH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.5564,
      "longitude": 104.9282
    },
    "areaServed": {
      "@type": "Country",
      "name": "Cambodia"
    },
    "knowsAbout": [
      "Structural Engineering",
      "Geotechnical Engineering",
      "Topographic Surveys",
      "Construction Supervision",
      "Infrastructure Planning",
      "BIM Modelling",
      "Environmental Engineering",
      "GIS Mapping",
      "Project Management",
      "Foundation Engineering"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Engineering Services in Cambodia",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Structural Engineering Design", "url": "https://inros-lackner.com.kh/services/structural-engineering-design" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Geotechnical Investigations", "url": "https://inros-lackner.com.kh/services/cone-penetration-tests" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Topographic Surveys", "url": "https://inros-lackner.com.kh/services/topographic-surveys" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "BIM & 3D Modelling", "url": "https://inros-lackner.com.kh/services/bim-3d-modeling" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Construction Supervision", "url": "https://inros-lackner.com.kh/services/construction-site-supervision" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Environmental & Social Safeguarding", "url": "https://inros-lackner.com.kh/services/environmental-social-safeguarding" } }
      ]
    },
    "parentOrganization": {
      "@type": "Organization",
      "name": "Inros Lackner SE",
      "url": "https://www.inros-lackner.de",
      "addressCountry": "DE"
    },
    "sameAs": [
      "https://www.inros-lackner.de"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://inros-lackner.com.kh/#website",
    "url": "https://inros-lackner.com.kh",
    "name": "Inros Lackner Cambodia",
    "description": "Multi-disciplinary engineering consultancy in Cambodia",
    "publisher": {
      "@id": "https://inros-lackner.com.kh/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://inros-lackner.com.kh/services?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
