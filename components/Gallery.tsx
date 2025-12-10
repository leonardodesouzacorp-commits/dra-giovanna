import React from 'react';
import { motion } from 'framer-motion';

// Using placeholders but structure allows for real images
const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop", // Clean dental office
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop", // Procedures
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop", // Instruments
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop", // Smile/Teeth model
];

export const Gallery: React.FC = () => {
  return (
    <section id="galeria" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-text-main">
            Galeria
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4"></div>
          <p className="mt-4 text-text-muted font-light">Um ambiente pensado no seu conforto e bem-estar.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_IMAGES.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-2xl shadow-md cursor-pointer aspect-square"
            >
              <img 
                src={src} 
                alt={`Galeria ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
