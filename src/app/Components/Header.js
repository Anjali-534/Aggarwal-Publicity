"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => setIsOpen(false);

  return (
    <>
      {/* Desktop Header */}
      <div className="fixed top-0 left-0 w-full hidden md:flex bg-yellow-400 px-4 h-[85px] z-50 shadow-sm items-center justify-between">
        <div className="flex items-center ml-4 space-x-4">
          <Link href="/" className="flex items-center space-x-4">
            {/* Logo */}
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <img src="/logo.jpg" alt="Logo" className="h-10" />
            </div>

            {/* Company Info */}
            <div className="flex flex-col space-y-1">
              <h1 className="text-xl md:text-2xl text-red-800 font-bold whitespace-nowrap">
                Aggarwal Publicity & Marketing Pvt. Ltd.
              </h1>
              <h6 className="text-xs text-white font-semibold max-w-[480px] leading-tight">
                Importer, Exporter, Distributors and Wholesaler of Industrial Chemical Products
              </h6>
            </div>
          </Link>
        </div>

        {/* Call Button */}
        <a
          href="tel:+9810152290"
          className="flex items-center space-x-2 px-4 py-2 rounded-full text-blue-900 font-semibold mr-6"
        >
          <Image src="/call.png" alt="Call" width={20} height={20} className="rounded-full" />
          <span className="text-sm">+91 98101 52290</span>
        </a>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-yellow-400 px-4 h-[60px] flex items-center justify-between z-50 shadow-md">
        <div className="flex items-center gap-3">
          <MobileHamburger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
          <Link href="/">
            <div className="flex items-center space-x-2">
              <img
                src="/logo.jpg"
                alt="Logo"
                className="w-9 h-9 rounded-full object-cover"
              />
              <h1 className="text-sm font-bold text-red-800 leading-tight">
                Aggarwal Publicity & Marketing Pvt. Ltd.
              </h1>
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <div className="md:hidden fixed top-[60px] left-0 z-[9999] bg-white w-full shadow-md px-6 py-5 space-y-4">
          <MobileLink href="/" onClick={handleCloseMenu}>Home</MobileLink>
          <MobileLink href="/about" onClick={handleCloseMenu}>About Us</MobileLink>
          <MobileLink href="/products" onClick={handleCloseMenu}>Products</MobileLink>
          <MobileLink href="/social" onClick={handleCloseMenu}>Social Responsibility</MobileLink>
          <MobileLink href="/contact" onClick={handleCloseMenu}>Contact Us</MobileLink>

         
        </div>
      )}
    </>
  );
}

const MobileHamburger = ({ onClick, isOpen }) => (
  <button onClick={onClick} className="text-white text-2xl" aria-label="Toggle Menu">
    {isOpen ? <FiX /> : <FiMenu />}
  </button>
);

const MobileLink = ({ href, children, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="block w-full text-base font-medium text-gray-800 hover:text-blue-600"
  >
    {children}
  </Link>
);
