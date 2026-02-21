import React from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Bot, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <footer className="bg-white border-t border-border pt-20 pb-10">
      <Container>
        {/* Final CTA */}
        <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-white mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-blue rounded-full blur-[100px] opacity-20 -translate-x-1/2 translate-y-1/2"></div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to Automate?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto relative z-10">Join forward-thinking businesses using MARS AI to handle customers 24/7.</p>

          <div className="relative z-10">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100" onClick={onOpenModal}>
              Start Your AI Receptionist Today
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-border pb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-1.5 bg-primary rounded-lg">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="font-sans font-bold text-lg text-primary">MARS AI</span>
            </div>
            <p className="text-secondary max-w-xs text-sm">
              Empowering businesses with next-generation AI communication tools.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-secondary">
              <li><a href="#" className="hover:text-primary transition-colors">Voice Agents</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">WhatsApp AI</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-secondary">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-secondary">
            &copy; {new Date().getFullYear()} MARS AI Agency. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-secondary hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-secondary hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-secondary hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
      </Container>
    </footer>
  );
};