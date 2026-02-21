import React from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Phone, ArrowRight, Play, Mic, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-accent-purple/20 rounded-full blur-[100px] mix-blend-multiply animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-accent-blue/20 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-2000"></div>
      </div>

      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left z-10"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-purple/10 text-accent-purple text-xs font-mono font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-purple mr-2 animate-pulse"></span>
              24/7 AI Receptionist for Indian Businesses
            </div>

            <h1 className="font-sans font-bold text-5xl lg:text-7xl tracking-tight text-primary mb-6 leading-[1.1]">
              Never Miss a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">Customer Again</span>
            </h1>

            <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Automate your phone calls and WhatsApp chats with intelligent AI agents.
              Handle leads, bookings, and support instantly, day or night.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" icon={<Play className="w-4 h-4 fill-current" />} onClick={onOpenModal}>
                Try Live AI Demo
              </Button>
              <Button variant="secondary" size="lg" icon={<ArrowRight className="w-4 h-4" />} onClick={onOpenModal}>
                Book Free Demo
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-secondary">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] font-bold overflow-hidden">
                    <img src={`https://picsum.photos/32/32?random=${i}`} alt={`MARS AI happy customer ${i}`} width="32" height="32" loading="lazy" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p>Trusted by 100+ businesses</p>
            </div>
          </motion.div>

          {/* Visual Content - Phone/Waveform */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-md lg:max-w-full relative z-10"
          >
            <div className="relative">
              {/* Phone Mockup Frame */}
              <div className="relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl overflow-hidden">
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative flex flex-col">

                  {/* Top Status Bar */}
                  <div className="h-8 w-full bg-white flex items-center justify-between px-6 pt-2">
                    <span className="text-[10px] font-bold">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full bg-black"></div>
                      <div className="w-3 h-3 rounded-full bg-transparent border border-black"></div>
                    </div>
                  </div>

                  {/* Incoming Call UI */}
                  <div className="flex-1 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-purple-50 to-white">
                    <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center mb-6 relative">
                      <div className="absolute inset-0 rounded-full border-2 border-accent-purple animate-gpu-pulse"></div>
                      <Bot className="w-12 h-12 text-accent-purple" />
                    </div>
                    <h3 className="font-sans font-bold text-xl text-primary mb-1">AI Assistant</h3>
                    <p className="text-secondary text-sm mb-12">MARS AI Agency</p>

                    {/* Animated Waveform */}
                    <div className="flex items-center gap-1 h-12 mb-12">
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          style={{ height: '100%', transformOrigin: 'bottom' }}
                          animate={{ scaleY: [0.2, 0.8, 0.2] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.1,
                            ease: "easeInOut"
                          }}
                          className="w-2 bg-accent-purple rounded-full will-change-transform"
                        />
                      ))}
                    </div>

                    <div className="w-full grid grid-cols-2 gap-4 mt-auto">
                      <div className="h-14 rounded-full bg-red-100 flex items-center justify-center cursor-pointer hover:bg-red-200 transition-colors">
                        <Phone className="w-6 h-6 text-red-500 rotate-[135deg]" />
                      </div>
                      <div className="h-14 rounded-full bg-green-500 flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors shadow-lg shadow-green-200">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 -right-12 bg-white p-4 rounded-xl shadow-lg border border-border hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-secondary font-mono">Status</div>
                    <div className="text-sm font-bold text-primary">Call Forwarded</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-32 -left-12 bg-white p-4 rounded-xl shadow-lg border border-border hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Mic className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs text-secondary font-mono">Listening...</div>
                    <div className="text-sm font-bold text-primary">Processing Query</div>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};