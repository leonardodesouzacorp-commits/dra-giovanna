import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-surface relative">
       {/* Background subtle loop element */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-20 right-10 w-96 h-96 border border-dashed border-gold/20 rounded-full animate-[spin_60s_linear_infinite]" />
          <div className="absolute bottom-20 left-10 w-64 h-64 border border-gold/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-light text-text-main"
          >
            Nossos <span className="font-semibold text-gold-dark">Serviços</span>
          </motion.h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4"></div>
          <p className="mt-4 text-text-muted font-light">Procedimentos realizados com o que há de mais moderno.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gold/30 group relative overflow-hidden"
            >
              {/* Tech Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-6 text-gold group-hover:text-white group-hover:bg-gold transition-all duration-300 bg-surface w-14 h-14 rounded-full flex items-center justify-center mx-auto md:mx-0 shadow-inner group-hover:shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium text-text-main mb-3 group-hover:text-gold-dark transition-colors text-center md:text-left">
                  {service.title}
                </h3>
                <p className="text-text-muted font-light leading-relaxed text-sm text-center md:text-left">
                  {service.description}
                </p>
                
                {/* Tech Line at bottom */}
                <div className="w-0 h-0.5 bg-gold mt-6 transition-all duration-500 group-hover:w-full opacity-50"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};