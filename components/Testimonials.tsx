import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-light text-text-main">
            O que dizem nossos <span className="font-semibold text-gold-dark">Pacientes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg relative border-t-4 border-gold/50"
            >
              <div className="absolute -top-4 right-8 bg-gold text-white p-2 rounded-full">
                <Quote size={16} fill="currentColor" />
              </div>
              
              <p className="text-text-muted italic mb-6 leading-relaxed">"{t.text}"</p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-surface" 
                />
                <div>
                  <h4 className="font-medium text-text-main">{t.name}</h4>
                  <span className="text-xs text-gold uppercase tracking-wider">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};