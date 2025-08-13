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
    <section className="relative h-screen text-white flex items-center justify-center px-6">
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
    <section className=" text-center py-13 px-6">
      <div className="container mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900">
        Aggarwal Publicity Contributes to Social Work Through  <br /> &quot;Hamara Book Bank&quot;
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-900 mt-6 max-w-3xl mx-auto">
          At <span className="text-red-500">Aggarwal Publicity & Marketing Pvt. Ltd.</span>, we believe in giving back to society and fostering a culture of education and empowerment. As part of our corporate social responsibility, we proudly support &quot;Hamara Book Bank&quot;, an initiative dedicated to making education accessible to underprivileged students.
        </p>

        {/* Initiative Cards */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
  {/* Save Trees */}
  <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <Image src="/treee.png" alt="Save Trees" width={80} height={80} className="w-20 h-20 mb-4" priority />
    <p className="text-lg font-semibold text-gray-800">Save Trees</p>
  </div>

  {/* Save Money */}
  <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <Image src="/money.png" alt="Save Money" width={80} height={80} className="w-20 h-20 mb-4" priority />
    <p className="text-lg font-semibold text-gray-800">Save Money</p>
  </div>

  {/* Save Books */}
  <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <Image src="/book.jpg" alt="Save Books" width={80} height={80} className="w-20 h-20 mb-4" priority />
    <p className="text-lg font-semibold text-gray-800">Save Books</p>
  </div>

  {/* Promoting Education */}
  <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <Image src="/edu.png" alt="Promoting Education" width={80} height={80} className="w-20 h-20 mb-4" priority />
    <p className="text-lg font-semibold text-gray-800">Promoting Education</p>
  </div>

  {/* Save Environment */}
  <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <Image src="/env.png" alt="Save Environment" width={80} height={80} className="w-20 h-20 mb-4" priority />
    <p className="text-lg font-semibold text-gray-800">Save Environment</p>
  </div>
</div>


      </div>
    </section>
  );
}
function Aim() {
  return (
    <section className="bg-amber-100 text-center py-13 px-6">
        <h3 className="text-lg ml-1.5 font-semibold">Our Aim</h3>
        <h2 className="text-4xl font-bold mt-2">The Director</h2>
      <div className="container mx-auto">
        {/* Title */}
        <h1 className="text-3xl  font-bold text-gray-900">
        Aggarwal Publicity Contributes to Social Work Through  <br /> &quot;Hamara Book Bank&quot;
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-900 mt-6 max-w-3xl mx-auto">
          At <span className="text-red-500">Aggarwal Publicity & Marketing Pvt. Ltd.</span>, we believe in giving back to society and fostering a culture of education and empowerment. As part of our corporate social responsibility, we proudly support &quot;Hamara Book Bank&quot;, an initiative dedicated to making education accessible to underprivileged students.
        </p>
        </div>
        </section>
        );
        }

        function GallerySection() {
          const galleryImages = [
            "/gallery1.jpeg",
            "/gallery2.jpeg",
            "/gallery3.jpeg",
            "/gallery4.jpeg",
            "/gallery5.jpeg",
           
            "/gallery2.jpeg",
            "/gallery3.jpeg",
            "/gallery4.jpeg",
           
           
          ];
        
          return (
            <section className="py-16 px-6 ">
              <div className="container mx-auto text-center">
                {/* Heading */}
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
                <p className="text-lg text-gray-700 mb-10">
                  A glimpse of our journey, events, and community initiatives.
                </p>
        
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {galleryImages.map((src, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src={src}
                        alt={`Gallery ${index + 1}`}
                        width={400}
                        height={256}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                        priority
                      />
                    </div>
                  ))}
                </div>
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
      <GallerySection />
    </div>
  );
}


