import React from 'react';
import { NavItem, Service, Testimonial } from './types';
import { Syringe, Sparkles, Activity, Smile } from 'lucide-react';

export const IMAGES = {
  // Using direct Imgur links with .jpeg extension for proper loading
  PORTRAIT: "https://i.imgur.com/3LlwKQR.jpeg", 
  ACTION: "https://i.imgur.com/dxZL6IX.jpeg",
  
  // Fallbacks
  PORTRAIT_FALLBACK: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2000&auto=format&fit=crop",
  ACTION_FALLBACK: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Dúvidas', href: '#faq' },
  { label: 'Contato', href: '#contato' },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Auxílio em Cirurgias',
    description: 'Suporte técnico preciso e dedicado em procedimentos cirúrgicos complexos.',
    icon: <Activity className="w-6 h-6" />,
  },
  {
    id: 2,
    title: 'Botox e Harmonização',
    description: 'Aplicação e suporte técnico com foco em estética natural e funcionalidade.',
    icon: <Syringe className="w-6 h-6" />,
  },
  {
    id: 3,
    title: 'Assistência Clínica',
    description: 'Acompanhamento integral em procedimentos clínicos gerais com excelência.',
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    id: 4,
    title: 'Cuidados Bucais',
    description: 'Tratamentos preventivos e educativos para saúde bucal duradoura.',
    icon: <Smile className="w-6 h-6" />,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Mariana Costa",
    text: "A Dra. Giovanna tem uma mão super leve e um atendimento impecável. Me senti muito segura durante todo o procedimento.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    role: "Paciente"
  },
  {
    id: 2,
    name: "Ricardo Alves",
    text: "Profissionalismo raro de se ver. O cuidado com os detalhes e a tecnologia usada no atendimento fazem toda a diferença.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    role: "Paciente"
  },
  {
    id: 3,
    name: "Fernanda Lima",
    text: "Fiz um procedimento estético e amei o resultado. Ficou super natural, exatamente como eu queria. Recomendo muito!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    role: "Paciente"
  }
];

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: "A aplicação de Botox dói?",
    answer: "O procedimento é praticamente indolor para a maioria dos pacientes. Utilizamos agulhas extremamente finas e, se necessário, aplicamos um anestésico tópico para garantir seu conforto absoluto."
  },
  {
    id: 2,
    question: "Quanto tempo dura o efeito da Harmonização Orofacial?",
    answer: "A duração varia conforme o procedimento e o organismo de cada paciente. O Botox dura em média de 4 a 6 meses, enquanto preenchedores com ácido hialurônico podem durar de 12 a 18 meses."
  },
  {
    id: 3,
    question: "É necessário avaliação antes de qualquer procedimento?",
    answer: "Sim. Acreditamos na odontologia responsável. Uma avaliação detalhada é essencial para entender sua anatomia, saúde bucal e alinhar expectativas para alcançar resultados naturais e seguros."
  },
  {
    id: 4,
    question: "Como funciona o clareamento dental?",
    answer: "Oferecemos opções a laser (em consultório) e caseiro supervisionado. Ambos utilizam tecnologia avançada para remover pigmentações sem danificar a estrutura do dente, devolvendo o brilho natural."
  }
];