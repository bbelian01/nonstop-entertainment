import StructuredData from './StructuredData';

export default function HomePageStructuredData() {
  const organizationData = {
    '@type': 'Organization',
    name: 'Non-Stop Entertainment',
    url: 'https://www.nonstopentertainers.com',
    logo: 'https://www.nonstopentertainers.com/logo.png',
    description: 'Chicago\'s most innovative entertainment team. Transforming your event into an unforgettable experience with cutting-edge technology and creative expertise.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chicago',
      addressRegion: 'IL',
      postalCode: '60007',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-224-216-4402',
      contactType: 'customer service',
      email: 'info@nonstopentertainers.com',
      areaServed: 'US-IL',
      availableLanguage: 'English'
    },
    sameAs: [
      'https://www.facebook.com/nonstopentertainers',
      'https://www.instagram.com/nonstopentertainers',
      'https://www.linkedin.com/company/nonstopentertainers'
    ]
  };

  const serviceData = {
    '@type': 'Service',
    name: 'Event Entertainment Services',
    provider: {
      '@type': 'Organization',
      name: 'Non-Stop Entertainment'
    },
    description: 'Professional entertainment services for corporate events, weddings, and special occasions in Chicago and surrounding areas.',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '41.8781',
        longitude: '-87.6298'
      },
      geoRadius: '50000'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Entertainment Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'DJ Services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Event Planning'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Corporate Entertainment'
          }
        }
      ]
    }
  };

  return (
    <>
      <StructuredData type="Organization" data={organizationData} />
      <StructuredData type="Service" data={serviceData} />
    </>
  );
} 