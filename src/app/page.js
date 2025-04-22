"use client";

import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; 
import React from "react";

import { motion } from "framer-motion";


// Banner images
const bannerImages = [
  "/banner1.jpg",
  "/home9.png",
  "/banner3.jpg",
  
  "/banner5.jpg",
  
  "/banner4.jpg",
  "/home8.png",
];

// About Section images
const aboutImages = [
  "/home.jpg",
  "/home2.jpg",
  "/home3.jpg",
  "/home4.jpg",
  "/home5.jpg",
  "/home6.jpg"
];

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <button 
    onClick={onClick} 
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300 z-10"
  >
    <FaChevronLeft size={24} />
  </button>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <button 
    onClick={onClick} 
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300 z-10"
  >
    <FaChevronRight size={24} />
  </button>
);

const brands = [
  { name: "Fevicol", image: "/home.jpg" },
  { name: "Dr. Fixit", image: "/home2.jpg" },
  { name: "Araldite", image: "/home3.jpg" },
  { name: "Roff", image: "/home4.jpg" },  
  { name: "Fevi Kwik", image: "/home5.jpg" },
  { name: "M-Seal", image: "/home5.jpg" },
  { name: "Fevi Stik", image: "/home5.jpg"},
  { name: "Fevicyrl", image: "/home5.jpg" },
  { name: "Motomax", image: "/home5.jpg" },
  { name: "WD-40", image: "/home5.jpg" },
  { name: "Motomax", image: "/home5.jpg"},
  { name: "WD-40", image: "/home5.jpg"},
];

// Banner Section
function BannerSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,    autoplaySpeed: 2000,
    fade: true,
    prevArrow: <PrevArrow />, 
    nextArrow: <NextArrow />
  };

  return (
    <section className="relative h-screen text-white flex items-center justify-center px-3 sm:px-4 overflow-hidden">
    <div className="relative w-full h-full mx-auto grid grid-cols-3 gap-4">
      {bannerImages.map((src, index) => {
        const randomScale = 1 + Math.random() * 0.5;
        const randomX = Math.random() * 20 - 10;
        const randomY = Math.random() * 20 - 10;
        const randomDuration = Math.random() * 2 + 2;

        return (
          <motion.div
            key={index}
            className="relative w-full h-full overflow-hidden"
            animate={{
              scale: [1, randomScale, 1],
              x: [0, randomX, 0],
              y: [0, randomY, 0],
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            <Image
              src={src}
              alt={`Collage Image ${index + 1}`}
              fill
              className="object-cover absolute"
            />
          </motion.div>
        );
      })}
    </div>
  </section>

  
  
  

  );
}

// About Section
function AboutSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true
  };

  return (
    <section className=" mx-auto bg-amber-100 px-15 py-22 flex flex-col md:flex-row items-center gap-8">
  <div className="md:w-1/2">
    <h3 className="text-blue-500 font-semibold">Our Products</h3>
    <h1 className="text-5xl font-bold mt-4">We are <span className="text-red-500">Aggarwal Publicity & Marketing</span></h1>
    <p className="text-gray-600 mt-4">
      Since 1959, we have been strengthening our bonds with our customers,
      by continuing to innovate, pioneer new products, and launch
      specialized services. This has helped us build trust in India and
      around the world.
    </p>
    <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
      Know our story
    </button>
    <div className="flex gap-8 mt-8">
      <div>
        <p className="text-2xl font-bold text-blue-600">INR 11,752</p>
        <p className="text-gray-500">Crores Net Sales</p>
      </div>
      
      <div>
        <p className="text-2xl font-bold text-blue-600">8,900+</p>
        <p className="text-gray-500">Number of Employees</p>
      </div>
      <div>
        <p className="text-2xl font-bold text-blue-600">80+</p>
        <p className="text-gray-500">Countries</p>
      </div>
    </div>
  </div>

  <div className="md:w-1/2 py-4 relative">
  <div className="h-96 py-6"> {/* force height to avoid collapsing */}
    <Slider {...settings}>
      {aboutImages.map((src, index) => (
        <div key={index} className="relative w-full  h-96">
          <Image 
            src={src} 
            alt={`Slide ${index + 1}`} 
            fill 
            className="object-cover  rounded-lg"
          />
        </div>
      ))}
    </Slider>
  </div>
</div>

</section>

  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="bg-yellow-200 py-20 px-6">
  <div className="container mx-auto text-center">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
      Adhesives, Pigments, Waterproofing <br /> and More
    </h1>
    <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
      We are committed to making a difference with superior solutions for adhesives, 
      textiles, arts, waterproofing, and industrial applications.
    </p>
  </div>

  <div className="container mx-auto mt-12 bg-yellow-100 p-6 shadow-lg rounded-lg">
    <h2 className="text-2xl font-semibold text-gray-800 text-center">Products</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-6">
      {brands.map((brand, index) => (
        <div key={index} className="flex items-center justify-center p-4 bg-amber-200 shadow rounded-lg">
          <img src={brand.image} alt={brand.name} className="object-contain w-full h-auto" />
        </div>
      ))}
    </div>
    <div className="text-center mt-6">
      <Link className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700" href="/products">
        View All Products
      </Link>
    </div>
  </div>
</section>

  );
}

function SustainabilitySection() {
  return (
    <section className="bg-amber-100  px-6">
      <motion.section
        className="py-20 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto ">
          <motion.h2
            className="text-blue-500 font-semibold text-xl sm:text-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Social Responsibility
          </motion.h2>

          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Shaping a Better Tomorrow
          </motion.h1>

          <div className="mt-6  mx-auto">
            {/* <motion.p
              className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              We are proud to be a part of <br />
              <span className="font-semibold text-amber-700 text-4xl sm:text-5xl">
                Hamara Book Bank
              </span>
              <br />
              (Operated by Baba Gangaram Dham Bhakt Samiti)
            </motion.p> */}

            {/* Optional button or link */}
            {/* <motion.div className="mt-6">
              <Link
                href="https://www.facebook.com/share/1AhzSJTvB4/"
                className="bg-amber-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-700 transition"
              >
                Know More
              </Link>
            </motion.div> */}
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-1 h-[460px] sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            {[{ src: "/social3.jpg", title: "For Our Community", bg: "bg-blue-600" },
              { src: "/social4.jpg", title: "For Our Environment & Planet", bg: "bg-gray-800" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative group rounded-lg overflow-hidden shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.2 }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-300"
                />
                <div
                  className={`absolute bottom-4 left-4 ${item.bg} text-white p-6 rounded-lg transform group-hover:scale-105 transition-all duration-300`}
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <button className="mt-3 text-sm underline font-medium">
                    Read more
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </section>
  );
}

function Director() {
  return (
    <motion.section
      className="bg-yellow-500 text-black py-16 px-15 flex flex-col md:flex-row items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="md:w-1/2 text-left"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="text-lg  font-semibold">About</h3>
        <h2 className="text-4xl font-bold mt-2">The Director</h2>
        <p className="mt-4 text-lg italic">
          “Society has provided us with an environment whereby our business has
          flourished, and we have been able to serve millions of users and
          customers located throughout the country as well as abroad. We,
          therefore, owe a lot to society and we have to fulfill our obligation
          by continuously giving back to society to the best of our ability.”
        </p>
      </motion.div>

      <motion.div
        className="md:w-1/2 flex justify-center mt-6 md:mt-0"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <img
          src="/director.jpg"
          alt="director"
          className="w-full max-w-sm rounded-lg shadow-lg"
        />
      </motion.div>
    </motion.section>
  );
}

// Adding this section below HeroSection
export default function HomePage() {
  return (
    <div>
      <BannerSection />
      <AboutSection />
      <HeroSection />
      <SustainabilitySection />
      <Director />
    </div>
  );
}


