import React from 'react';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Onfra",
  "url": "https://onfra.io",
  "logo": "https://onfra.io/public/assets/img/logo.png", // Assuming a logo exists in public/assets/img
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91 9884-899-868", // From FAQ page
    "contactType": "Customer Service",
    "email": "help@visitdesk.in" // From FAQ page
  },
  "sameAs": [
    // Add social media links here if available
  ]
};

const OrganizationSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
};

export default OrganizationSchema;