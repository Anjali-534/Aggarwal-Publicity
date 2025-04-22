"use client"; 
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
export default function SubNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white hidden md:block shadow-md fixed top-16 left-0 w-full z-40">
      <div className="container mx-auto flex space-x-2 items-center px-4 py-4 mt-4">
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center space-x-8">
          <Link href="/" className="hover:text-gray-500">Home</Link>
          <Link href="/about" className="hover:text-gray-500">About Us</Link>
          <Link href="/products" className="hover:text-gray-500">Products</Link>
          
          
          {/* Dropdowns */}
          {/* <Dropdown  
            title="About Us" 
            src="/director.jpg" 
            alt="Our Director"
            className="min-w-30 h-auto rounded-md"
            links={[
              { title: "Our Journey", link: "/about", description: "Aggarwal Publicity began as a small venture with a vision to revolutionize marketing through innovative advertising solutions. 🚀" },
              { title: "Our Director", link: "/about" }
            ]} 
          /> */}

          {/* <Dropdown title="Products" links={[
            { title: "Paraformaldehyde", link: "/products" },
            { title: "Pthalic Anhydride", link: "/products" }
          ]} /> */}

          <div>
            <Link href="/contact" className="hover:text-gray-500">Contact Us</Link></div><div>
            <Link href="/Social_resp" className="hover:text-gray-500">Social Responsibility</Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-xl focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

    
    </nav>
  );
}

// ✅ Updated Dropdown Component with Image Support
const Dropdown = ({ title, links, src, alt, className }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <button className="hover:text-blue-600 font-medium text-gray-800">
        {title}
      </button>

      {dropdownOpen && (
        <div className="absolute left-0 mt-2 w-56 bg-white border shadow-lg rounded-md p-4">
          {/* Show Image if Provided */}
          {src && (
            <div className="flex justify-center">
              <img src={src} alt={alt} className={`${className} mb-2`} />
            </div>
          )}

          {/* Dropdown Links */}
          {links.map((item, index) => (
            <div key={index} className="mb-2">
              <Link
                href={item.link}
                className="block px-4 py-2 hover:bg-blue-100 text-gray-700"
              >
                {item.title}
              </Link>
              {/* Display description if available */}
              {item.description && (
                <p className="px-4 py-2 text-sm text-gray-600">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
