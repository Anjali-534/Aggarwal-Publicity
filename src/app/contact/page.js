// app/contact/page.js
import { ContactForm } from '@/components/contact-form';

export default function ContactPage() {
  const contactInfo = {
    office: `8145/2, Street No: 7, Near Hotel White House,\nMultani Dhanda, Paharganj\nNew Delhi-110055, India`,
    phone1: '+91 98101 52290',
    phone2: '+91 88600 41466',
    email: 'aggarwalpublicity@gmail.com',
    warehouse: '15/5, Street No.12\nSwaroop Nagar, Delhi-110042',
    hours: [
      'Monday - Friday: 9:00 AM - 6:00 PM',
      'Saturday: 9:00 AM - 2:00 PM',
      'Sunday: Closed',
    ]
  };

  return (
    <div className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:mt-5 font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Get in touch with us for all your industrial chemical requirements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
              <div className="space-y-4">
                {/* Office */}
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Registered Office</h3>
                    <p className="text-gray-600 whitespace-pre-line">{contactInfo.office}</p>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">
                      <a href={`tel:${contactInfo.phone1.replace(/\s/g, '')}`} className="hover:text-blue-600">
                        {contactInfo.phone1}
                      </a>{" / "}
                      <a href={`tel:${contactInfo.phone2.replace(/\s/g, '')}`} className="hover:text-blue-600">
                        {contactInfo.phone2}
                      </a>
                    </p>
                  </div>
                </div>
                {/* Email */}
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">
                      <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-600">
                        {contactInfo.email}
                      </a>
                    </p>
                  </div>
                </div>
                {/* Warehouse */}
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">🏭</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Warehouse</h3>
                    <p className="text-gray-600 whitespace-pre-line">{contactInfo.warehouse}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-600">
                {contactInfo.hours.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
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
  );
}
