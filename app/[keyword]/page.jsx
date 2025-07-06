import { keywords } from '../data/keywords';
import ProgrammaticSEOTemplate from '../components/ProgrammaticSEOTemplate';
import { notFound } from 'next/navigation';

function keywordToSlug(keyword) {
  return keyword.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function slugToKeyword(slug) {
  return slug.replace(/-/g, ' ');
}

export async function generateStaticParams() {
  return keywords.map((keyword) => ({
    keyword: keywordToSlug(keyword.keyword),
  }));
}

export async function generateMetadata({ params }) {
  const keyword = slugToKeyword(params.keyword);
  const keywordData = keywords.find(k => keywordToSlug(k.keyword) === params.keyword);
  
  if (!keywordData) {
    return {
      title: 'Page Not Found',
    };
  }

  const title = `${keyword} | Non-Stop Entertainment Chicago`;
  const description = `Looking for ${keyword}? Non-Stop Entertainment offers top-rated DJ and event services in Chicagoland. Book your event today!`;

  return {
    title,
    description,
    keywords: `${keyword}, Chicago DJ, event services, wedding DJ, party DJ, corporate events, Chicagoland`,
    authors: [{ name: 'Non-Stop Entertainment' }],
    creator: 'Non-Stop Entertainment',
    publisher: 'Non-Stop Entertainment',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://nonstopentertainers.com'),
    alternates: {
      canonical: `/${params.keyword}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_US',
      url: `/${params.keyword}`,
      siteName: 'Non-Stop Entertainment',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${keyword} - Non-Stop Entertainment Chicago`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function ProgrammaticSEOPage({ params }) {
  const keyword = slugToKeyword(params.keyword);
  const keywordData = keywords.find(k => keywordToSlug(k.keyword) === params.keyword);
  
  if (!keywordData) {
    notFound();
  }

  return (
    <ProgrammaticSEOTemplate 
      keyword={keyword}
      keywordData={keywordData}
    />
  );
}