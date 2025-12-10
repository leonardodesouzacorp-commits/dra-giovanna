import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram, MapPin, Mail } from 'lucide-react';
import { Logo } from './Logo';

export const Contact: React.FC = () => {
  return (
    <>
      <section id="contato" className="py-16 md:py-24 bg-surface relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gold/20"
          >
            <h2 className="text-2xl md:text-4xl font-light text-text-main mb-6">
              Pronto para transformar seu sorriso?
            </h2>
            <p className="text-text-muted mb-8 md:mb-10 text-base md:text-lg font-light">
              Entre em contato para agendar sua avaliação ou tirar dúvidas.
            </p>

            <motion.a
              href="https://wa.me/5511983172464"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 md:px-8 md:py-4 rounded-full text-base md:text-lg font-medium shadow-lg hover:bg-[#20bd5a] transition-colors w-full md:w-auto justify-center"
            >
              <MessageCircle size={24} />
              Agendar pelo WhatsApp
            </motion.a>

            <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-text-muted text-sm">
              <div className="flex items-center justify-center gap-2">
                <MapPin size={18} className="text-gold" />
                <span>São Bernardo do Campo - SP</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail size={18} className="text-gold" />
                <span>contato@dragiovannaluz.com.br</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-text-main text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="opacity-90 grayscale brightness-200">
               <Logo className="h-10 md:h-12 text-white" />
            </div>
            
            <div className="flex gap-6 flex-wrap justify-center">
              <a href="#inicio" className="hover:text-gold transition-colors text-sm font-light tracking-wider">Início</a>
              <a href="#servicos" className="hover:text-gold transition-colors text-sm font-light tracking-wider">Serviços</a>
              <a href="#contato" className="hover:text-gold transition-colors text-sm font-light tracking-wider">Contato</a>
            </div>

            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
              <Instagram size={20} />
            </a>
          </div>
          
          <div className="mt-12 text-center text-xs text-white/40 font-light">
            <p>© {new Date().getFullYear()} Dra. Giovanna Luz. Todos os direitos reservados.</p>
            <p className="mt-2">Criado com tecnologia e dedicação.</p>
          </div>
        </div>
      </footer>
    </>
  );
};