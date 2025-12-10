import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 max-w-md mx-auto md:mx-0"
            >
              <img 
                src={IMAGES.ACTION}
                alt="Dra. Giovanna em atendimento" 
                className="rounded-lg shadow-xl w-full object-cover aspect-[3/4] grayscale-[10%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 border border-gold/30 transform translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 rounded-lg -z-10"></div>
            </motion.div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 order-1 md:order-2 space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <h2 className="text-3xl font-light text-text-main mb-6">
                Sobre a <span className="font-semibold text-gold-dark">Dra. Giovanna</span>
              </h2>
              <div className="w-16 h-0.5 bg-gold mb-8 mx-auto md:mx-0"></div>
              
              <div className="text-text-muted text-base md:text-lg font-light leading-relaxed space-y-6 text-justify md:text-left">
                <p>
                  Giovanna Luz é estudante de Odontologia na <strong className="font-medium text-text-main">Universidade São Judas Tadeu</strong> e auxiliar de dentista em um consultório de referência em São Bernardo do Campo.
                </p>
                <p>
                  Com sólida experiência em auxiliar cirurgias complexas, suporte em aplicação de botox e diversos tratamentos bucais, Giovanna atua com precisão, dedicação e uma busca incansável por aprimoramento profissional.
                </p>
                <p>
                  Aos 21 anos, segue evoluindo sua carreira com foco absoluto em excelência técnica e, acima de tudo, no <span className="text-gold-dark italic">cuidado humano</span>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};