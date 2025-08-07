import Image from 'next/image';
import React from "react";
import { Box, PackageCheck, Boxes } from "lucide-react";

// Main Phthalic Anhydride Content
function PhthalicAnhydrideOverview() {
  return (
    <div className="px-4 md:px-16 py-8 bg-white text-gray-900">
      {/* Hero Section */}
      <section className="mb-10">
        <h2 className="text-4xl md:mt-18 md:text-5xl font-semibold mb-4">Phthalic Anhydride</h2>
        <div className="w-full mt-6">
          <Image
            src="/phthalic_structure.png"
            alt="Phthalic Anhydride Structure"
            width={1200}
            height={600}
            className="rounded-xl shadow-md w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Description */}
      <section className="mb-12 space-y-4 text-gray-700 leading-relaxed">
        <p>
          Phthalic Anhydride (C₈H₄O₃) is a white flaky or crystalline anhydride — a key raw material for plasticizers, alkyd resins, and dyes.
        </p>
        <p>
          It’s the anhydride form of phthalic acid, mainly used to produce phthalate esters (like DEHP), helping PVC become flexible. Other uses include pigments, varnishes, and pharmaceutical coatings.
        </p>
      </section>

      {/* Grades */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">🧪 Available Grades:</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>ACS / SAJ Reagent Grade ≥99%</strong> – Ultra-pure, ideal for lab use and precision synthesis.</li>
          <li><strong>Industrial / Technical Grade</strong> – Cost-effective, used in large-scale production of plasticizers and resins.</li>
        </ul>
      </section>
    </div>
  );
}

// Product Packaging Section
function ProductPackaging() {
  return (
    <section className="bg-[#e6f1f9] py-16">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-4 lg:px-8 gap-12">
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Packaging & Handling</h2>
          <p className="text-gray-700 text-lg mb-4">
            Safe, moisture-protected packaging for hassle-free shipping and storage. Options range from 25kg to jumbo formats.
          </p>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Dry. Stable. Secure.</h3>
          <p className="text-gray-700 text-lg mb-4">
            Phthalic Anhydride is moisture-sensitive, so our packaging ensures it stays dry and uncontaminated.
          </p>
          <p className="text-gray-700 text-lg">
            Choose from user-friendly formats based on your requirements.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="/phthalic_packaging.png"
            alt="Phthalic Anhydride Packaging"
            width={500}
            height={600}
            className="mx-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

// Packaging Card Grid
const packagingOptions = [
  {
    icon: <PackageCheck size={48} className="text-orange-500" />,
    label: "25 kg Moisture-Resistant Bags",
  },
  {
    icon: <Box size={48} className="text-orange-500" />,
    label: "500/1000 kg Jumbo Bags",
  },
  {
    icon: <Boxes size={48} className="text-orange-500" />,
    label: <>Custom Bulk Solutions <br />– On Demand</>,
  },
];

function PackagingOptions() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
          {packagingOptions.map((option, idx) => (
            <div
              key={idx}
              className="w-[260px] h-[240px] rounded-2xl shadow-md border border-gray-200 flex flex-col items-center justify-center text-center p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {option.icon}
              <p className="text-xl font-semibold text-gray-800 mt-4">{option.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Service Areas Scroll Cards
const serviceData = [
  {
    title: "Plasticizers & PVC Flexibility",
    description: "Used to produce phthalate esters (e.g., DEHP) that make PVC flexible for wiring, flooring, and medical devices.",
    image: "/para.jpg",
  },
  {
    title: "Resins & Alkyd Paints",
    description: "Key for alkyd resins used in coatings, architectural paints, and varnishes.",
    image: "/para.jpg",
  },
  {
    title: "Dyes & Intermediates",
    description: "Used in manufacturing dyes like quinizarin and phenolphthalein for pigments and indicators.",
    image: "/para.jpg",
  },
  {
    title: "Pharmaceutical Excipients",
    description: "Precursor for cellulose acetate phthalate, commonly used in enteric-coated tablets.",
    image: "/para.jpg",
  },
  {
    title: "Pharmaceutical Excipients",
    description: "Precursor for cellulose acetate phthalate, commonly used in enteric-coated tablets.",
    image: "/para.jpg",
  },
  {
    title: "Pharmaceutical Excipients",
    description: "Precursor for cellulose acetate phthalate, commonly used in enteric-coated tablets.",
    image: "/para.jpg",
  },
];

function ServiceAreas() {
  return (
    <section className="bg-orange-600 py-10 px-4 sm:px-8">
      <h2 className="text-white text-3xl sm:text-4xl font-extrabold mb-6">Service Areas</h2>
      <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth scrollbar-hide">
        {serviceData.map((service, index) => (
          <div key={index} className="min-w-[280px] max-w-xs bg-white rounded-xl shadow-lg flex-shrink-0">
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={300}
              className="rounded-t-xl w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-orange-600 font-bold text-xl mb-2">{service.title}</h3>
              <p className="text-sm text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Final Export
export default function PhthalicAnhydridePage() {
  return (
    <>
      <PhthalicAnhydrideOverview />
      <ProductPackaging />
      <PackagingOptions />
      <ServiceAreas />
    </>
  );
}
