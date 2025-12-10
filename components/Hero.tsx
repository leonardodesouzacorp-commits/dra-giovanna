import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-28 pb-16 md:pt-20 md:pb-0 overflow-hidden bg-background">
      
      {/* 1. Tech Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* 2. Radial Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_800px_at_100%_200px,#C9A86A15,transparent)]"></div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-white/50 backdrop-blur-sm">
             <motion.div 
               animate={{ scale: [1, 1.2, 1] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="w-2 h-2 rounded-full bg-gold"
             />
             <span className="text-gold-dark font-medium tracking-widest text-xs uppercase">Odontologia de Alta Performance</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-light text-text-main leading-tight">
            Cuidando do seu sorriso com <span className="relative inline-block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-dark">
              tecnologia
              {/* Underline animated */}
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute bottom-1 left-0 h-1 bg-gold/30 -z-10"
              />
            </span>, <span className="italic">delicadeza</span> e excelência.
          </h1>

          <p className="text-text-muted text-base md:text-lg max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
            Atendimento humanizado aliado aos mais modernos equipamentos para transformar sua autoestima e saúde bucal com precisão digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a 
                href="#contato" 
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-gold to-gold-dark text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium hover:shadow-lg hover:shadow-gold/25 transition-all"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Agendar Consulta
              </a>
            </motion.div>
            
            <a href="#servicos" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-gray-200 text-text-muted hover:border-gold hover:text-gold transition-colors text-sm uppercase tracking-wider font-medium bg-white/50 backdrop-blur-sm">
              Conhecer Serviços
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-1 lg:order-2 px-4 md:px-0"
        >
            {/* Tech Ring Animation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-gold/10 animate-[spin_30s_linear_infinite] -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full border border-dashed border-text-muted/10 animate-[spin_40s_linear_infinite_reverse] -z-10"></div>

            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl max-w-md mx-auto lg:max-w-none group">
              <div className="aspect-[3/4] md:aspect-[4/5] relative">
                <img 
                  src={IMAGES.PORTRAIT} 
                  alt="Dra. Giovanna Luz" 
                  className="object-cover w-full h-full transform transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Floating Tech Badges */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute top-10 -left-4 md:-left-12 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-xl shadow-lg border border-white/60 flex items-center gap-3"
            >
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <CheckCircle2 size={18} />
              </div>
              <div className="text-xs md:text-sm">
                <p className="font-semibold text-text-main">Certificada</p>
                <p className="text-text-muted">Universidade São Judas</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute -bottom-6 right-0 md:-right-6 bg-surface/90 backdrop-blur-md border border-gold/20 p-4 md:p-6 rounded-2xl shadow-xl flex items-center gap-4 z-20"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-white shrink-0 shadow-lg shadow-gold/30">
                <Sparkles size={20} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-main">Tecnologia & Cuidado</p>
                <p className="text-xs text-text-muted">Excelência em cada detalhe</p>
              </div>
            </motion.div>
        </motion.div>

      </div>
    </section>
  );
};