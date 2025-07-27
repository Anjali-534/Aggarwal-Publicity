import React from 'react';
import { ContactForm } from '@/components/contact-form';
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { generateStructuredData } from "@/lib/utils";

export const metadata = generateSEOMetadata({
  title: "Contact Us - Aggarwal Publicity & Marketing | Get in Touch",
  description: "Contact Aggarwal Publicity & Marketing for industrial chemical requirements. Call +91 98101 52290 or email aggarwalpublicity@gmail.com. Located in Delhi, India.",
  keywords: ["contact aggarwal publicity", "chemical supplier contact", "delhi chemical distributor", "industrial chemical inquiry"]
});

export default function ContactPage() {
  const contactSchema = generateStructuredData("ContactPage", {
    name: "Contact Aggarwal Publicity & Marketing Pvt. Ltd.",
    description: "Get in touch with India's leading industrial chemical distributor",
    mainEntity: {
      "@type": "Organization",
      name: "Aggarwal Publicity & Marketing Pvt. Ltd.",
      telephone: "+91-98101-52290",
      email: "aggarwalpublicity@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "8145/2, Street No: 7, Near Hotel White House, Multani Dhanda, Paharganj",
        addressLocality: "New Delhi",
        postalCode: "110055",
        addressCountry: "IN"
      }
    }
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: contactSchema }}
      />
      <div className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600">
              Get in touch with us for all your industrial chemical requirements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Registered Office</h3>
                      <p className="text-gray-600">
                        8145/2, Street No: 7, Near Hotel White House,<br />
                        Multani Dhanda, Paharganj<br />
                        New Delhi-110055, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:+919810152290" className="hover:text-blue-600">
                          +91 98101 52290
                        </a>
                        {" / "}
                        <a href="tel:+918860041466" className="hover:text-blue-600">
                          +91 88600 41466
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:aggarwalpublicity@gmail.com" className="hover:text-blue-600">
                          aggarwalpublicity@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">🏭</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Warehouse</h3>
                      <p className="text-gray-600">
                        15/5, Street No.12<br />
                        Swaroop Nagar, Delhi-110042
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}