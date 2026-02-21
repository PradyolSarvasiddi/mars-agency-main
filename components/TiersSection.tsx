import React from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Check, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const tiers = [
  {
    name: "Voice AI",
    features: ["Intelligent Voice Agent", "Call Recording & Transcripts", "Google Sheets Sync", "Basic Analytics"],
    highlight: false,
    cta: "Get Started"
  },
  {
    name: "WhatsApp AI",
    features: ["WhatsApp Chat Bot", "Automated Follow-ups", "Multimedia Support", "Google Sheets Sync"],
    highlight: false,
    cta: "Get Started"
  },
  {
    name: "Complete Suite",
    features: ["Voice + WhatsApp Agents", "Unified CRM Dashboard", "Priority Support", "Custom Workflows", "Dedicated Account Manager"],
    highlight: true,
    cta: "Contact Sales"
  }
];

export const TiersSection = () => {
  return (
    <section id="tiers" className="py-24 bg-bg-alt">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Assistant</h2>
          <p className="text-secondary">Flexible plans tailored for your business needs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.15 }}
              className={`relative p-8 rounded-2xl bg-white border flex flex-col transition-all duration-150 group ${tier.highlight
                ? 'border-accent-purple shadow-glow ring-1 ring-accent-purple/20 hover:bg-accent-purple'
                : 'border-border shadow-soft hover:bg-accent-purple hover:border-accent-purple'
                }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-purple text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1 group-hover:bg-white group-hover:text-accent-purple transition-colors duration-150">
                  <Star className="w-3 h-3 fill-current" /> Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-primary group-hover:text-white mb-6 transition-colors duration-150">{tier.name}</h3>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 transition-colors duration-150 ${tier.highlight ? 'text-accent-purple group-hover:text-white' : 'text-green-500 group-hover:text-white'}`} />
                    <span className="text-secondary group-hover:text-white/90 text-sm transition-colors duration-150">{feat}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.highlight ? 'primary' : 'outline'}
                className="w-full group-hover:bg-white group-hover:text-accent-purple group-hover:border-white"
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};