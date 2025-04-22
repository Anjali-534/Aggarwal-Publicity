"use client"; // Required for Next.js App Router (Next.js 13+)

import Image from "next/image";
import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 w-full text-gray-400 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section - Logo, Links, and Socials */}
          <div>
            <Image src="/logo.jpg" alt="Logo"  width={70} height={70} className="w-32 rounded-full flex items-center justify-center" />
            <p className="mt-4 text-gray-500">Got questions? Just ask.</p>
            
           

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, index) => (
                <a key={index} href="#" className="text-[#2B3380]">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Section - Chat With Us Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800">Chat With Us</h3>
            <p className="text-gray-600 mt-2">Fill out the form, and we’ll get back to you soon.</p>

            <form className="mt-4 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                rows="3"
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-6"></div>
      <h1 className="text-center text-2xl font-bold text-gray-800">Aggarwal Publicity & Marketing Pvt. Ltd.</h1>

      {/* Address Section */}
      <div className="container mx-auto px-6 text-sm text-gray-600">
        <br/>
        <p>
          <strong>Registered Address:<br />
            </strong>  8145/2, Street No: 7,Near Hotel White House, <br/>Multani Dhanda, Paharganj <br/> New Delhi-110055 (India) <br/><br/> <strong>Phone:</strong> 9810152290 / 8860041466<br/> <strong>Email:</strong>aggarwalpublicity@gmail.com
          <br /><br />
          <strong>Warehouse Address:</strong><br/> 15/5, Street No.12 <br/>Swaroop Nagar, Delhi-110042     <br /><br />
        
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-6"></div>

      {/* Bottom Section */}
      <div className="bg-gray-100 py-4 text-sm text-center text-gray-600">
        <p>© 2025 Aggarwal Publicity and Marketing Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

// Reusable Footer Column Component
const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col space-y-3">
    <h3 className="font-semibold text-black">{title}</h3>
    <ul className="space-y-1">
      {links.map((link, index) => (
        <li key={index}>
          <a href="#" className="hover:text-blue-700">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
