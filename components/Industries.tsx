import React from 'react';
import { Container } from './ui/Container';
import { Stethoscope, Scissors, Home, GraduationCap, Dumbbell, Utensils } from 'lucide-react';

const industries = [
  { icon: Stethoscope, name: "Clinics" },
  { icon: Scissors, name: "Salons" },
  { icon: Home, name: "Real Estate" },
  { icon: GraduationCap, name: "Coaching" },
  { icon: Dumbbell, name: "Gyms" },
  { icon: Utensils, name: "Restaurants" },
];

export const Industries = () => {
  return (
    <section id="industries" className="py-20 bg-bg-main border-y border-border">
      <Container>
        <h2 className="text-center text-2xl font-bold mb-12 text-secondary">Industries We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {industries.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center gap-3 group cursor-default">
              <div className="w-16 h-16 rounded-full bg-bg-paper flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <item.icon className="w-7 h-7" />
              </div>
              <span className="font-medium text-secondary group-hover:text-primary transition-colors">{item.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};