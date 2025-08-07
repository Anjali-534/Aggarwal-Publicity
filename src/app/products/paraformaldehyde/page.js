import Image from 'next/image';
import React from "react";
import { Box, PackageCheck, Boxes } from "lucide-react";

// Main Paraformaldehyde Content
function FormaldehydePage() {
  return (
    <div className="px-4 md:px-16 py-8 bg-white text-gray-900">
      {/* Hero Section */}
      <section className="mb-10">
        <h2 className="text-4xl  md:mt-18 md:text-5xl font-semibold mb-4">Paraformaldehyde</h2>
        <div className="w-full mt-6">
          <Image
            src="/paraformal.jpg"
            alt="Formaldehyde Plant"
            width={1200}
            height={600}
            className="rounded-xl shadow-md w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Description */}
      <section className="mb-12 space-y-4 text-gray-700 leading-relaxed">
        <p>
          Paraformaldehyde is a white, granular, or powdery polymer of formaldehyde (chemical formula: (CH₂O)n). It is a high-concentration source of formaldehyde and is preferred for its ease of handling, storage, and transport compared to its liquid counterpart.
        </p>
        <p>
          White crystalline solid, Paraformaldehyde in prills form, is extensively used as fumigant, disinfectant, and in adhesives. Being a flammable and high-friction product, our paraformaldehyde prills are delivered in premium anti-static LDPE bags to ensure zero hazards. We offer best-in-class paraformaldehyde prills – 91% as well as 96% – catering to a diverse range of industrial sectors. Our exhaustive quality control checks and product testing ensures that each lot is consistently top grade.
        </p>
      </section>

      {/* Grades */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">🧪 Available Grades:</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Paraformaldehyde 96%</strong> – High-purity, ideal for industrial synthesis requiring precision and stability.</li>
          <li><strong>Paraformaldehyde 91%</strong> – Cost-effective variant suited for general applications with slightly lower reactivity.</li>
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
        {/* Text */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Product Packaging</h2>
          <p className="text-gray-700 text-lg mb-4">
            Our advanced packaging has set new standards in the industry, resulting in safe and zero-waste deliveries. It’s available in —
          </p>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Tough. Anti-Static. Flexible.</h3>
          <p className="text-gray-700 text-lg mb-4">
            We pack our products using high-caliber machines, making them extremely safe to handle and move.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Thus, preventing any hazardous scenarios that might occur <span className="font-semibold text-gray-900">during storage or transfer.</span>
          </p>
          <p className="text-gray-700 text-lg">
            Our industry-first initiative of Open Top Bags is appreciated by customers. It gives them the flexibility to procure small pack sizes of 25 Kgs yet provides the luxury to unload, stack, store, and transfer like a Jumbo Bag of 1 MT.
          </p>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/para21.png"
            alt="Paraformaldehyde Packaging"
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
    label: "25kgs LDPE Bags",
  },
  {
    icon: <Box size={48} className="text-orange-500" />,
    label: "500/1000kgs Jumbo Bags",
  },
  {
    icon: <Boxes size={48} className="text-orange-500" />,
    label: <>Customized Packaging <br />– On Demand</>,
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
    title: "Resin & Adhesive Production",
    description: "Used as a key building block for phenol-formaldehyde, urea-formaldehyde, and melamine-formaldehyde resins. These are essential in manufacturing plywood, particleboard, MDF, laminates, adhesives, and coatings for wood and furniture industries",
       image:"/para.jpg",
  },
  {
    title: "Construction, Furniture & Automotive",
    description: "Fueling the construction sector via robust resin production.Employed in automotive auxiliary materials, coatings, sealants, insulation, and high-performance plastics like POM (Delrin).",
    image: "/para.jpg",
  },
  {
    title: "Agrochemicals",
    description: "Acts as a precursor for pesticides, herbicides, fungicides, and other agrichemicals to boost crop yield and protection",
    image: "/para.jpg",
  },
  {
    title: "Pharmaceuticals & Histology",
    description: "Used to inactivate pathogens in vaccine production, and serve as tissue fixatives in laboratories and pathology.",
    image: "/para.jpg",
  },
  {
    title: "Disinfection, Fumigation & Preservation",
    description: "Depolymerizes into formaldehyde, enabling applications as a fumigant, disinfectant, and waterproofing agent—used in funeral preparations, textile finishing, and sterilizing environments.",
    image: "/para.jpg",
  },
  {
    title: "Printing, Dyes & Paper/Textile Finishing",
    description: "Utilized in inks, finishes, dyes, varnishes, and composite printing systems for paper and textiles.",
    image: "/para.jpg",
  },
  {
    title: " Consumer & Personal Care Products",
    description: "Functions in preservatives, conditioners, and film-formers in personal care items and household cleaners",
    image: "/para.jpg",
  },
  // Add more items as needed
];

function ServiceAreas() {
  return (
    <section className="bg-orange-600 py-10 px-4 sm:px-8">
      <h2 className="text-white text-3xl sm:text-4xl font-extrabold mb-6">Array of Service Areas</h2>

      <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth scrollbar-hide">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className="min-w-[280px] max-w-xs bg-white rounded-xl shadow-lg flex-shrink-0"
          >
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
export default function ParaformaldehydePage() {
  return (
    <>
      <FormaldehydePage />
      <ProductPackaging />
      <PackagingOptions />
      <ServiceAreas />
    </>
  );
}
