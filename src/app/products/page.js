// "use client";

import Image from "next/image";
import Link from "next/link";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { generateStructuredData } from "@/lib/utils";

export const metadata = generateSEOMetadata({
  title: "Industrial Chemical Products - Paraformaldehyde, Phthalic Anhydride & More",
  description: "Explore our comprehensive range of industrial chemicals including Paraformaldehyde, Phthalic Anhydride, solvents, and specialty chemicals. Quality guaranteed.",
  keywords: ["industrial chemicals", "paraformaldehyde powder", "phthalic anhydride", "chemical products", "industrial solvents", "acetone", "benzene"]
});
const products = [
  {
    id: 1,
    name: "Paraformaldehyde Powder",
    description:
      "A high-purity chemical used in various industrial applications, including adhesives, resins, and pharmaceuticals.",
    image: "/home.jpg",
    link: "/products/paraformaldehyde",
  },
  {
    id: 2,
    name: "Phthalic Anhydride Powder",
    description:
      "An essential raw material in the production of plasticizers, resins, and dyes, known for its high performance and versatility.",
    image: "/home2.jpg",
    link: "/products/phthalic-anhydride",
  },
  {
    id: 3,
    name: "Spray Paints (QUB)",
    description:
      "A high-purity chemical used in various industrial applications, including adhesives, resins, and pharmaceuticals.",
    image: "/home5.jpg",
    link: "/products/spray-paints",
  },
  {
    id: 4,
    name: "Spray Paints (CUBE)",
    description:
      "Highly effective solvents used in cleaning, degreasing, and various chemical processes.",
    image: "/home6.jpg",
    link: "/products/industrial-solvents",
  },
  {
    id: 5,
    name: "Acetone Solution",
    description:
      "A powerful solvent used in various industrial and laboratory applications.",
    image: "/home7.jpg",
    link: "/products/acetone",
  },
  {
    id: 6,
    name: "Ethyl Alcohol",
    description:
      "Widely used in medical, pharmaceutical, and industrial applications.",
    image: "/home8.jpg",
    link: "/products/ethyl-alcohol",
  },
  {
    id: 7,
    name: "Sulfuric Acid",
    description:
      "A strong acid used in chemical manufacturing, battery production, and industrial applications.",
    image: "/home9.jpg",
    link: "/products/sulfuric-acid",
  },
  {
    id: 8,
    name: "Hydrochloric Acid",
    description:
      "Commonly used in chemical processing, cleaning, and industrial applications.",
    image: "/home10.jpg",
    link: "/products/hydrochloric-acid",
  },
  {
    id: 9,
    name: "Sodium Hydroxide",
    description:
      "An essential industrial chemical used in soap making, water treatment, and cleaning products.",
    image: "/home11.jpg",
    link: "/products/sodium-hydroxide",
  },
  {
    id: 10,
    name: "Benzene",
    description:
      "A vital raw material in the production of plastics, resins, and synthetic fibers.",
    image: "/home12.jpg",
    link: "/products/benzene",
  },
  {
    id: 11,
    name: "Toluene",
    description:
      "A widely used solvent in paints, coatings, adhesives, and fuel production.",
    image: "/home13.jpg",
    link: "/products/toluene",
  },
  {
    id: 12,
    name: "Xylene",
    description:
      "An essential component in printing, rubber, and leather industries.",
    image: "/home14.jpg",
    link: "/products/xylene",
  },
];

export default function ProductSection() {
  const productSchema = generateStructuredData("ItemList", {
    name: "Industrial Chemical Products",
    description: "Comprehensive range of industrial chemicals and solvents",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "Product",
      position: index + 1,
      name: product.name,
      description: product.description,
      image: `https://aggarwalpublicity.com${product.image}`,
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Organization",
          name: "Aggarwal Publicity & Marketing Pvt. Ltd."
        }
      }
    }))
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: productSchema }}
      />
      <section className="container mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Our Products
      </h2>
      
      {/* Grid Layout: 4 Columns, 3 Rows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="relative w-full h-40">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{product.description}</p>
              <div className="flex justify-between gap-2 mt-auto">
              <Link
                href={product.link}
                className="mt-4 inline-block bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700 transition-all"
              >
                Know More
              </Link> 
              <Link
                href="/contact"
                className="mt-4 inline-block bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700 transition-all"
              >
               Query
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      </section>
    </>
  );
}
