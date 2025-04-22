import Image from 'next/image';
import React from 'react';
import Director from '../Components/Director';

export default function AboutPage() {
  // Awards data
  const awards = [
    {
      id: 1,
      image: '/award-image-1.jpg',
      title: 'Best Chemical Distributor',
      description:
        'Recognized for excellence in industrial chemical distribution and innovation, setting benchmarks in the industry.',
    },
    {
      id: 2,
      image: '/award-image-2.jpg',
      title: 'Innovation in Sustainability',
      description:
        'Honored for our continuous efforts in integrating sustainable practices in chemical sourcing and distribution.',
    },
    {
      id: 3,
      image: '/award-image-3.jpg',
      title: 'Excellence in Export',
      description:
        'Awarded for exceptional performance in exporting high-quality industrial chemicals globally.',
    },
    {
      id: 4,
      image: '/award-image-4.jpg',
      title: 'Customer Excellence Award',
      description:
        'Recognized for exceptional customer service and fostering long-term partnerships with clients.',
    },
    {
      id: 5,
      image: '/award-image-4.jpg',
      title: 'Customer Excellence Award',
      description:
        'Recognized for exceptional customer service and fostering long-term partnerships with clients.',
    },
    {
      id: 6,
      image: '/award-image-4.jpg',
      title: 'Customer Excellence Award',
      description:
        'Recognized for exceptional customer service and fostering long-term partnerships with clients.',
    },
  ];

  return (
    <div className="py-20  mt-8 bg-yellow-100 text-gray-700">
      <div className="mx-auto">
        {/* Title Section */}
        <h1 className="text-4xl px-15 font-bold text-blue-900 mb-6">Our Journey</h1>

        {/* Journey Section */}
        <p className="text-lg px-15 leading-relaxed mb-6">
          "AGGARWAL PUBLICITY AND MARKETING PVT. LTD. (since 1994) is one of India's leading Importer, Exporter, Distributors and wholesaler of Industrial Chemical Products. APM is a Private Limited company located at Delhi, India. The company founded by Anil Aggarwal (Garg) having experience in the field of chemical trading and Marketing. We are importing various chemicals like Hexamine (Sinachem, Iran), Sodium Hydro Sulphate, Titanium Di Oxide, Paraformaldehyde, Phthalic, Tech. Grade Urea, etc. from various countries."
        </p>
<div> <Director/></div>
       

        { /* Award Section */ }
        <div className="my-20 px-12">
  <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Awards & Recognition</h2>
  <div className="flex overflow-x-auto space-x-6 hide-scrollbar">
    {/* Dynamically rendering award cards */}
    {awards.map((award) => (
      <div
        key={award.id}
        className="min-w-[250px] bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-500 hover:scale-105"
      >
        <div className="mb-4">
          <Image
            src={award.image}
            alt={`Award ${award.id}`}
            width={200}
            height={200}
            className="rounded-xl object-cover"
          />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{award.title}</h3>
        <p className="text-gray-700 text-sm">{award.description}</p>
      </div>
    ))}
  </div>
</div>
<section className="relative py-16 px-4 md:px-12  lg:px-24" style={{ backgroundImage: 'url(/banner3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' ,filter: 'grayscale(100%)'}}>
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left - Text Block */}
        <div className="bg-yellow-900 opacity-90 text-white p-8 rounded-2xl shadow-lg max-w-xl w-full">
          <h4 className="text-sm font-semibold mb-2">INNOVATION @ AGGARWAL PUBLICITY & MARKETING Pvt. Ltd.</h4>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Paving New Paths with <br /> Research & Development
          </h2>
          <p className="italic text-gray-200 mb-4">
            Innovation that is respected, recognised and rewarded.
          </p>
          <p className="text-sm text-gray-100 mb-2">
            For over four decades, we have established our credentials in creativity and innovation. We are not shy in seizing opportunities, and we give ideas the space to grow. It is why two thirds of our sales come from in-house innovations.
          </p>
          <p className="text-sm text-gray-100">
            Our ideas are powered by three fully equipped Pidilite R&D centres in India, two Pidilite Subsidiary R&D centres in Baroda (R&D ICA) and Kishanpore (R&D Group normal), and a cutting-edge technical and...
          </p>
        </div>

       
      </div>
    </section>

      </div>
    </div>
  );
}
