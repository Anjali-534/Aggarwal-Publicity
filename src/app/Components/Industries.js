// components/IndustriesSection.js
import Image from 'next/image';

export function IndustriesSection() {
  const industries = [
    {
      title: 'Laminate Manufacturers',
      icon: '/icons/laminate.png',
    },
    {
      title: 'Plywood & Board Manufacturers',
      icon: '/icons/plywood.png',
    },
    {
      title: 'Foundry Resin',
      icon: '/icons/foundry.png',
    },
    {
      title: 'Water Treatment Chemical Manufacturers',
      icon: '/icons/water-treatment.png',
    },
    {
      title: 'Textile Printing Industries',
      icon: '/icons/textile.png',
    },
    {
      title: 'Cattle Feeding Industries',
      icon: '/icons/cattle.png',
    },
    {
      title: 'Coating & Paint Industries',
      icon: '/icons/paint.png',
    },
    {
      title: 'Oil Scavengers',
      icon: '/icons/oil.png',
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries we serve</h2>
        <p className="text-gray-600 text-lg">
          Our high-quality, long shelf-life Formaldehyde and superior-grade Paraformaldehyde prills are used by a wide array of industries to further develop specific solutions by streamlining their production.
        </p>
        <p className="text-gray-600 text-lg mt-2 mb-12">
          No matter what category your industry falls into, Balaji Formalin is capable of delivering ingenious solutions to meet your needs.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {industries.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <Image
                src={item.icon}
                alt={item.title}
                width={60}
                height={60}
                className="mb-2"
              />
              <p className="text-sm font-semibold text-gray-800 text-center max-w-[160px]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
