import Link from 'next/link';
import { generateContentByKeyword, generateFAQs } from '../utils/contentGenerator';
import { keywords } from '../data/keywords';
import ProgrammaticSEOSchema from './ProgrammaticSEOSchema';

function keywordToSlug(keyword) {
  return keyword.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export default function ProgrammaticSEOTemplate({ keyword, keywordData }) {
  const content = generateContentByKeyword(keyword, keywordData.type);
  const faqs = generateFAQs(keyword, keywordData.type);
  
  // Get related keywords for internal linking
  const relatedKeywords = keywords
    .filter(k => k.keyword !== keyword && k.type === keywordData.type)
    .slice(0, 3);
  
  const otherServiceTypes = keywords
    .filter(k => k.type !== keywordData.type)
    .reduce((acc, k) => {
      if (!acc.find(item => item.type === k.type)) {
        acc.push(k);
      }
      return acc;
    }, [])
    .slice(0, 3);

  return (
    <>
      <ProgrammaticSEOSchema 
        keyword={keyword} 
        keywordData={keywordData} 
        faqs={faqs} 
      />
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {keyword}
          </h1>
          <p className="text-xl text-gray-600">
            {content.intro}
          </p>
        </header>

        {/* Why Choose Us Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose Non-Stop Entertainment?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Experience & Expertise</h3>
              <p className="text-gray-700">{content.experience}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Local Chicago Knowledge</h3>
              <p className="text-gray-700">{content.localExpertise}</p>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {content.features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {content.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.event}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-blue-600 text-white p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Book Your Event?
          </h2>
          <p className="text-xl mb-6">
            Get a free quote for your {keyword.toLowerCase()} needs today!
          </p>
          <Link 
            href="/get-a-quote"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200"
          >
            Get a Quote
          </Link>
        </section>

        {/* Internal Links */}
        <section className="border-t pt-8">
          <h3 className="text-xl font-semibold mb-6">Related Services</h3>
          
          {/* Same Service Type Links */}
          {relatedKeywords.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3">Similar Services</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {relatedKeywords.map((relatedKeyword) => (
                  <Link 
                    key={relatedKeyword.keyword}
                    href={`/${keywordToSlug(relatedKeyword.keyword)}`}
                    className="text-blue-600 hover:underline capitalize"
                  >
                    {relatedKeyword.keyword}
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {/* Other Service Types */}
          {otherServiceTypes.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3">Other Services</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {otherServiceTypes.map((serviceKeyword) => (
                  <Link 
                    key={serviceKeyword.keyword}
                    href={`/${keywordToSlug(serviceKeyword.keyword)}`}
                    className="text-blue-600 hover:underline capitalize"
                  >
                    {serviceKeyword.keyword}
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {/* General Site Links */}
          <div>
            <h4 className="text-lg font-medium mb-3">More Information</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/services" className="text-blue-600 hover:underline">
                All DJ Services
              </Link>
              <Link href="/testimonials" className="text-blue-600 hover:underline">
                Client Testimonials
              </Link>
              <Link href="/contact" className="text-blue-600 hover:underline">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
        </div>
      </div>
    </>
  );
}