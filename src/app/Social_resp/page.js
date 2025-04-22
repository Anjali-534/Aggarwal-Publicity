"use client";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; 

// Banner images
const bannerImages = [
  "/Soc_banner1.jpg",
  "/Soc_banner2.jpg",
  "/Soc_banner3.jpg", 
  "/Soc_banner4.jpg",
  "/Soc_banner5.jpg"
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



// Banner Section
function BannerSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    prevArrow: <PrevArrow />, 
    nextArrow: <NextArrow />
  };

  return (
    <section className="relative h-screen bg-blue-200 text-white flex items-center justify-center px-6">
      <div className="relative w-full h-full mx-auto">
        <Slider {...settings}>
          {bannerImages.map((src, index) => (
            <div key={index} className="relative w-full h-screen">
              <Image 
                src={src} 
                alt={`Slide ${index + 1}`} 
                fill
                className="object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

function CommunitySection() {
  return (
    <section className="bg-blue-200 text-center py-13 px-6">
      <div className="container mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900">
        Aggarwal Publicity Contributes to Social Work Through  <br /> "Hamara Book Bank"
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-900 mt-6 max-w-3xl mx-auto">
          At <span className="text-red-500">Aggarwal Publicity & Marketing Pvt. Ltd.</span>, we believe in giving back to society and fostering a culture of education and empowerment. As part of our corporate social responsibility, we proudly support "Hamara Book Bank", an initiative dedicated to making education accessible to underprivileged students.
        </p>

        {/* Initiative Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
          {/* Agriculture & Horticulture */}
          <div className="bg-gray-200 text-gray-800 p-4 rounded-lg flex flex-col items-center">
            <img src="/agriculture-icon.png" alt="Agriculture & Horticulture" className="w-12 h-12 mb-2" />
            <p className="font-semibold">Agriculture & Horticulture Initiative</p>
          </div>

          {/* Women's Initiative */}
          <div className="bg-gray-200 text-gray-800 p-4 rounded-lg flex flex-col items-center">
            <img src="/women-icon.png" alt="Women's Initiative" className="w-12 h-12 mb-2 opacity-50" />
            <p className="font-semibold">Women’s Initiative</p>
          </div>

          {/* Education Initiative */}
          <div className="bg-gray-200 text-gray-800 p-4 rounded-lg flex flex-col items-center">
            <img src="/education-icon.png" alt="Education Initiative" className="w-12 h-12 mb-2 opacity-50" />
            <p className="font-semibold">Education Initiative</p>
          </div>

          {/* Water Initiative */}
          <div className="bg-gray-200 text-gray-800 p-4 rounded-lg flex flex-col items-center">
            <img src="/water-icon.png" alt="Water Initiative" className="w-12 h-12 mb-2 opacity-50" />
            <p className="font-semibold">Water Initiative</p>
          </div>

          {/* Skill Initiative */}
          <div className="bg-gray-200 text-gray-800 p-4 rounded-lg flex flex-col items-center">
            <img src="/skill-icon.png" alt="Skill Initiative" className="w-12 h-12 mb-2 opacity-50" />
            <p className="font-semibold">Skill Initiative</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
function Aim() {
  return (
    <section className="bg-blue-300 text-center py-13 px-6">
        <h3 className="text-lg ml-1.5 font-semibold">Our Aim</h3>
        <h2 className="text-4xl font-bold mt-2">The Director</h2>
      <div className="container mx-auto">
        {/* Title */}
        <h1 className="text-3xl  font-bold text-gray-900">
        Aggarwal Publicity Contributes to Social Work Through  <br /> "Hamara Book Bank"
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-900 mt-6 max-w-3xl mx-auto">
          At <span className="text-red-500">Aggarwal Publicity & Marketing Pvt. Ltd.</span>, we believe in giving back to society and fostering a culture of education and empowerment. As part of our corporate social responsibility, we proudly support "Hamara Book Bank", an initiative dedicated to making education accessible to underprivileged students.
        </p>
        </div>
        </section>
        );
        }





// Adding this section below HeroSection
export default function HomePage() {
  return (
    <div>
      <BannerSection />
      <CommunitySection/>
      <Aim/>
    </div>
  );
}


