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
    name: "Paraformaldehyde",
    description:
      "A high-purity chemical used in various industrial applications, including adhesives, resins, and pharmaceuticals.",
    image: "/home.jpg",
    link: "/products/paraformaldehyde",
    link2: `/query-form?product=Paraformaldehyde`,
  },
  {
    id: 2,
    name: "Phthalic Anhydride",
    description:
      "An essential raw material in the production of plasticizers, resins, and dyes, known for its high performance and versatility.",
    image: "/home2.jpg",
    link: "/products/Phthalic",
    link2: `/query-form?product=Phthalic%20Anhydride`,
  },
  {
    id: 3,
    name: "Spray Paints (QUB)",
    description:
      "A high-purity chemical used in various industrial applications, including adhesives, resins, and pharmaceuticals.",
    image: "/home5.jpg",
    link: "/products/spray-paints",
      link2: `/query-form?product=Spray%20Paints%20(QUB)`,
  },
  {
    id: 4,
    name: "Soda Ash (NACO3)",
    description:
      "Highly effective solvents used in cleaning, degreasing, and various chemical processes.",
    image: "/home6.jpg",
    link: "/products/SodaAsh",
    link2: `/query-form?product=Soda%20Ash%20(NACO3)`,
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

  {product.link2 && (
    <Link
      href={product.link2}
      className="mt-4 inline-block bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700 transition-all"
    >
      Query
    </Link>
  )}
</div>


            </div>
          </div>
        ))}
      </div>
      </section>
    </>
  );
}
