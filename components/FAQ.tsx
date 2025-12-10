import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_ITEMS } from '../constants';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold-dark text-sm font-semibold tracking-widest uppercase"
          >
            Tire suas dúvidas
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-text-main mt-3"
          >
            Perguntas <span className="font-semibold text-gold-dark">Frequentes</span>
          </motion.h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gold/10 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className={`text-lg font-medium transition-colors ${openIndex === index ? 'text-gold-dark' : 'text-text-main'}`}>
                  {item.question}
                </span>
                <span className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-gold text-white' : 'bg-surface text-text-muted group-hover:text-gold'}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-text-muted font-light leading-relaxed border-t border-gray-50 pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};