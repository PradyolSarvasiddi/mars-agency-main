import React from 'react';
import { Container } from './ui/Container';
import { Settings, PhoneForwarded, Bot, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: Settings,
    title: "We Set Up AI",
    desc: "Custom trained on your business data."
  },
  {
    icon: PhoneForwarded,
    title: "Forward Calls",
    desc: "Redirect missed calls to our smart number."
  },
  {
    icon: Bot,
    title: "AI Talks",
    desc: "Handles inquiries, bookings & support."
  },
  {
    icon: Sparkles,
    title: "Leads Appear",
    desc: "Instant notification via Sheets or CRM."
  }
];

export const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 bg-bg-alt border-y border-border">
      <Container>
        <div className="text-center mb-16">
          <span className="text-accent-blue font-mono text-sm font-semibold uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-primary">From Setup to Success in Minutes</h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white rounded-2xl shadow-md border border-border flex items-center justify-center mb-6 relative group transition-transform hover:-translate-y-2 duration-300">
                  <step.icon className="w-10 h-10 text-accent-purple group-hover:text-accent-blue transition-colors duration-300" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-mono font-bold text-sm border-4 border-bg-alt">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-secondary text-sm px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};