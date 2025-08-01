'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  "/banner1.jpg",
  "/home9.png",
  "/banner3.jpg",
  "/banner5.jpg",
  "/banner4.jpg",
  "/home8.png",
];

export default function BannerSection() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="grid grid-cols-3 w-full h-full gap-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative w-full h-full overflow-hidden"
            animate={{
              scale: [1, 1.1, 1],
              x: [0, 10, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            <Image
              src={src}
              alt={`Banner Image ${index + 1}`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
