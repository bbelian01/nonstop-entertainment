export default function ProgrammaticSEOSchema({ keyword, keywordData, faqs }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://nonstopentertainers.com/#business",
    "name": "Non-Stop Entertainment",
    "alternateName": "Non-Stop Entertainment Chicago",
    "description": `Professional DJ and event entertainment services in Chicago specializing in ${keyword}`,
    "url": "https://nonstopentertainers.com",
    "telephone": "+1-773-555-0123",
    "email": "info@nonstopentertainers.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "postalCode": "60601",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.8781",
      "longitude": "-87.6298"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Chicago"
      },
      {
        "@type": "State",
        "name": "Illinois"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "41.8781",
        "longitude": "-87.6298"
      },
      "geoRadius": "50"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "DJ and Entertainment Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": keyword,
            "description": `Professional ${keyword} services in Chicago`
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, Check",
    "openingHours": "Mo-Su 09:00-22:00",
    "image": "https://nonstopentertainers.com/og-image.jpg",
    "logo": "https://nonstopentertainers.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/nonstopentertainers",
      "https://www.instagram.com/nonstopentertainers"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": keyword,
    "description": `Professional ${keyword} services in Chicago and surrounding areas`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Non-Stop Entertainment",
      "url": "https://nonstopentertainers.com"
    },
    "areaServed": {
      "@type": "City",
      "name": "Chicago"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": keyword,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": keyword
          },
          "price": "Contact for pricing",
          "priceCurrency": "USD"
        }
      ]
    }
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": "Non-Stop Entertainment",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chicago",
        "addressRegion": "IL"
      }
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Sarah Johnson"
    },
    "reviewBody": `Excellent ${keyword} service! Non-Stop Entertainment made our event unforgettable. Highly professional and entertaining.`,
    "datePublished": "2024-01-15"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema)
        }}
      />
    </>
  );
}