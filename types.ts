import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  image: string;
  role?: string;
}

export interface SectionProps {
  id: string;
  className?: string;
}
