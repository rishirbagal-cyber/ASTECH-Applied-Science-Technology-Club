
import React from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  const images = [
    'https://picsum.photos/seed/gal1/800/600',
    'https://picsum.photos/seed/gal2/600/800',
    'https://picsum.photos/seed/gal3/800/800',
    'https://picsum.photos/seed/gal4/800/600',
    'https://picsum.photos/seed/gal5/600/600',
    'https://picsum.photos/seed/gal6/800/600',
  ];

  return (
    <section id="gallery" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Life at ASTECH</h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Capturing the vibrant moments, collaborative spirit, and energetic atmosphere of our club.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white text-black text-xs font-black uppercase px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  View Moment
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
