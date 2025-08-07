"use client";
import { FiPhone, FiMail,FiMapPin } from "react-icons/fi";

import Image from "next/image";



export default function Footer() {
  return (
   <footer className="bg-gray-100 text-gray-700 w-full pt-12">

      <div className="max-full mx-8 md:px-8 sm:px-6 lg:px-2">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Logo + Social */}
          <div>
            {/* <div className="flex items-center space-x-4">
              <Image
                src="/logo.jpg"
                alt="Logo"
                width={70}
                height={70}
                className="rounded-full p-1 bg-white shadow-md"
              />
              <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                Aggarwal Publicity & Marketing Pvt. Ltd.
              </h2>
            </div> */}
            
            
          </div>

      
          
        </div>
        {/* Address Section with Maps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Registered Office */}
          <div>
            <p className="leading-relaxed text-sm text-gray-700 sm:text-base">
              <FiMapPin className="text-blue-600 flex inline" />
              <strong> Registered Address:</strong><br />
              8145/2, Street No: 7, Near Hotel White House,<br />
              Multani Dhanda, Paharganj,<br />
              New Delhi-110055 (India)
            </p>
            <div className="mt-4 rounded-lg overflow-hidden shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.716451005037!2d77.20622631508328!3d28.64115608241443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1659781234567!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Registered Office Map"
              ></iframe>
            </div>
          </div>

          {/* Warehouse */}
          <div>
            <p className="leading-relaxed text-gray-700  text-sm sm:text-base">
              <FiMapPin className="text-blue-600 flex inline" />
              <strong> Warehouse Address:</strong><br />
              Khasra No.15/5, Street No.12,<br />
              Swaroop Nagar, Delhi-110042
            </p>
            <br />
            <div className="mt-4 rounded-lg overflow-hidden shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.123456789012!2d77.12345678901234!3d28.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzI0LjQiTiA3N8KwMDcnNDEuOCJF!5e0!3m2!1sen!2sin!4v1659781234567!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Warehouse Location Map"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className="mt-8 leading-relaxed text-sm text-gray-700  sm:text-base">
  <div className="flex items-center gap-2">
    <FiPhone className="text-blue-600" />
    <strong>Phone:</strong> 9810152290 / 8860041466
  </div>
  <div className="flex items-center gap-2 mt-2">
    <FiMail className="text-blue-600" />
    <strong>Email:</strong>{" "}
    <a
      href="mailto:aggarwalpublicity@gmail.com"
      className="text-blue-600 hover:underline"
    >
      aggarwalpublicity@gmail.com
    </a>
  </div>
</div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-10"></div>

        {/* Bottom Footer */}
        <div className="text-center text-xs text-gray-500 pb-6">
          <p>
            © 2025 Aggarwal Publicity and Marketing Pvt Ltd. All rights
            reserved. |
            <a
              href="/sitemap.xml"
              className="text-blue-600 hover:underline ml-1"
            >
              Sitemap
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
