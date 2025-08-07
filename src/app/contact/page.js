'use client';

import { ContactForm } from "@/components/contact-form";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function ContactPage() {
  const contactInfo = [
    {
      title: "Address",
      icon: "📍",
      content: `8145/2, Street No: 7, Near Hotel White House,\nMultani Dhanda, Paharganj\nNew Delhi-110055, India`,
    },
    {
      title: "Phone",
      icon: "📞",
      content: (
        <>
          <a href="tel:+919810152290" className="text-red-600 hover:underline">+91 98101 52290</a><br />
          <a href="tel:+918860041466" className="text-red-600 hover:underline">+91 88600 41466</a>
        </>
      ),
    },
    {
      title: "Email",
      icon: "✉️",
      content: (
        <>
          <a href="mailto:aggarwalpublicity@gmail.com" className="text-red-600 hover:underline">aggarwalpublicity@gmail.com</a>
        </>
      ),
    },
    {
      title: "Warehouse",
      icon: "🏭",
      content: `15/5, Street No.12\nSwaroop Nagar, Delhi-110042`,
    },
    {
      title: "Business Hours",
      icon: "⏰",
      content: (
        <>
          <p>Mon - Sat: 10:00 AM - 6:00 PM</p>
          <p>Sunday: Closed</p>
        </>
      ),
    },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/aggarwalpublicity/",
      Icon: FaFacebookF,
      label: "Facebook",
    },
    {
      href: "https://twitter.com/aggarwalpublicity",
      Icon: FaTwitter,
      label: "Twitter",
    },
    {
      href: "https://www.instagram.com/aggarwalpublicity",
      Icon: FaInstagram,
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/company/aggarwalpublicity",
      Icon: FaLinkedinIn,
      label: "LinkedIn",
    },
    {
      href: "https://www.youtube.com/@aggarwalpublicity",
      Icon: FaYoutube,
      label: "YouTube",
    },
  ];

  return (
    <div className="bg-white">
      {/* 🟦 Top Banner Section */}
      <div
        className="w-full h-75 bg-cover bg-center flex flex-col justify-center items-center text-white text-center"
        style={{ backgroundImage: "url('/contact_banner.png')" }}
      >
        <div className="px-4 py-8 rounded">
          <h1 className="text-6xl text-gray-700 font-bold mb-2">Contact Us</h1>
          <p className="text-lg text-gray-700">
            We&apos;d love to hear from you — reach out to our expert team
          </p>
        </div>
      </div>

      {/* 🟩 Contact Info + Form Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-lg transition"
              >
                <div className="w-10 h-10 bg-blue-100 text-white text-xl rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <div className="text-gray-600 whitespace-pre-line text-sm mt-1">{item.content}</div>
                </div>
              </div>
            ))}

            {/* Social Links Section */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="text-gray-500 hover:text-[#2B3380] transition transform hover:scale-110"
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 h-full md:h-[60%] p-8 rounded-lg shadow-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
