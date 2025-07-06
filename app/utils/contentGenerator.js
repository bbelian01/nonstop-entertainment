export function generateContentByKeyword(keyword, type) {
  const baseContent = {
    intro: `Searching for the best ${keyword.toLowerCase()}? Non-Stop Entertainment brings energy, professionalism, and an unforgettable experience to every celebration in the Chicago area.`,
    experience: `With over 8 years of experience and hundreds of successful events, we've mastered the art of ${keyword.toLowerCase()}. Our professional DJs know how to read the crowd and keep your guests dancing all night long.`,
    localExpertise: `As Chicago natives, we understand the unique culture and music preferences of the Chicagoland area. From downtown venues to suburban celebrations, we've performed at every type of location.`
  };

  const contentByType = {
    wedding: {
      ...baseContent,
      intro: `Planning your dream wedding? Our ${keyword.toLowerCase()} services ensure your special day is everything you've imagined and more. We specialize in creating magical wedding experiences throughout Chicago.`,
      features: [
        {
          title: "Custom Wedding Playlists",
          description: "Personalized music selection based on your preferences and special requests for your ceremony and reception."
        },
        {
          title: "Professional MC Services",
          description: "Expert master of ceremonies to guide your guests through the evening's events with style and grace."
        },
        {
          title: "Premium Sound & Lighting",
          description: "High-quality audio equipment and romantic lighting to create the perfect wedding atmosphere."
        }
      ],
      testimonials: [
        {
          quote: "Ryan and Brandon made our wedding absolutely perfect! They kept everyone dancing and handled all the announcements flawlessly.",
          author: "Sarah & Mike Johnson",
          event: "Chicago Wedding"
        },
        {
          quote: "The best decision we made for our wedding! Professional, fun, and they really understood our vision.",
          author: "Jennifer & David Chen",
          event: "Suburban Chicago Wedding"
        }
      ]
    },
    general: {
      ...baseContent,
      features: [
        {
          title: "Versatile Music Selection",
          description: "Extensive library spanning all genres and decades to suit any crowd or event type."
        },
        {
          title: "Professional Equipment",
          description: "State-of-the-art sound systems and lighting equipment for events of any size."
        },
        {
          title: "Experienced DJs",
          description: "Skilled entertainers who know how to read the room and keep the energy high."
        }
      ],
      testimonials: [
        {
          quote: "Absolutely amazing! They had everyone on the dance floor and the energy was incredible all night.",
          author: "Maria Rodriguez",
          event: "Birthday Party"
        },
        {
          quote: "Professional, punctual, and they really know how to entertain a crowd. Highly recommend!",
          author: "Tom Wilson",
          event: "Corporate Event"
        }
      ]
    },
    corporate: {
      ...baseContent,
      intro: `Looking for professional ${keyword.toLowerCase()}? Non-Stop Entertainment delivers sophisticated entertainment solutions for corporate events, team building, and business celebrations throughout Chicago.`,
      features: [
        {
          title: "Corporate Event Expertise",
          description: "Specialized experience in business events, conferences, and professional gatherings."
        },
        {
          title: "Flexible Packages",
          description: "Customizable entertainment solutions to fit your budget and event requirements."
        },
        {
          title: "Professional Presentation",
          description: "Polished, business-appropriate entertainment that reflects your company's values."
        }
      ],
      testimonials: [
        {
          quote: "Perfect for our company holiday party! Professional service and great music that appealed to all ages.",
          author: "Lisa Thompson",
          event: "Corporate Holiday Party"
        },
        {
          quote: "They understood exactly what we needed for our product launch. Classy and engaging entertainment.",
          author: "Robert Kim",
          event: "Product Launch Event"
        }
      ]
    },
    event: {
      ...baseContent,
      features: [
        {
          title: "Event Planning Support",
          description: "Comprehensive entertainment planning to ensure your event runs smoothly from start to finish."
        },
        {
          title: "Multi-Event Experience",
          description: "Expertise in all types of events including parties, celebrations, and special occasions."
        },
        {
          title: "Full Entertainment Package",
          description: "Complete entertainment solutions including music, lighting, and crowd engagement."
        }
      ],
      testimonials: [
        {
          quote: "They made our anniversary party unforgettable! Great music and they really got the crowd involved.",
          author: "Patricia & James Miller",
          event: "Anniversary Celebration"
        },
        {
          quote: "Professional entertainment that exceeded our expectations. The dance floor was packed all night!",
          author: "Nicole Davis",
          event: "Graduation Party"
        }
      ]
    }
  };

  return contentByType[type] || contentByType.general;
}

export function generateFAQs(keyword, type) {
  const baseFAQs = [
    {
      question: `How much does ${keyword.toLowerCase()} cost?`,
      answer: `Our ${keyword.toLowerCase()} pricing varies based on event duration, location, and specific requirements. Contact us for a personalized quote that fits your budget.`
    },
    {
      question: `What areas in Chicago do you serve?`,
      answer: `We provide ${keyword.toLowerCase()} services throughout Chicago and the surrounding suburbs, including downtown Chicago, North Shore, South Side, and western suburbs.`
    },
    {
      question: `How far in advance should I book?`,
      answer: `We recommend booking your ${keyword.toLowerCase()} at least 2-3 months in advance, especially for popular dates like weekends and holidays.`
    }
  ];

  const faqsByType = {
    wedding: [
      ...baseFAQs,
      {
        question: "Do you provide music for both ceremony and reception?",
        answer: "Yes! We offer comprehensive wedding packages that include ceremony music, cocktail hour, and reception entertainment with seamless transitions."
      },
      {
        question: "Can we request specific songs for our wedding?",
        answer: "Absolutely! We work with you to create a custom playlist that includes your must-play songs and respects your do-not-play list."
      }
    ],
    corporate: [
      ...baseFAQs,
      {
        question: "Do you have experience with corporate events?",
        answer: "Yes, we specialize in corporate entertainment and understand the professional atmosphere required for business events."
      },
      {
        question: "Can you provide appropriate music for all ages?",
        answer: "Definitely! We curate playlists that are office-appropriate and appeal to diverse age groups in corporate settings."
      }
    ]
  };

  return faqsByType[type] || baseFAQs;
}