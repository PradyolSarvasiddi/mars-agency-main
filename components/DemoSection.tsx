import React, { useState, useEffect } from 'react';
import { Container } from './ui/Container';
import { Mic, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const DemoSection = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Auto-dismiss toast after 4 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 8) {
      setToast({ message: 'Phone number must be at least 8 digits.', type: 'error' });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone }),
      });

      if (!res.ok) throw new Error('API error');

      setToast({ message: '🎉 You will receive a call shortly!', type: 'success' });
      setName('');
      setPhone('');
    } catch {
      setToast({ message: 'Something went wrong. Try again.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="demo" className="py-20 bg-bg-alt relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Experience Live AI Call Demo</h2>
          <p className="text-secondary text-lg">
            Enter your details below and our AI voice agent will call you in seconds. Experience the future of customer communication firsthand.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl shadow-xl border border-white/50 backdrop-blur-xl overflow-hidden p-8 md:p-12 relative z-10"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-purple to-accent-blue"></div>

            {/* Icon & Waveform */}
            <div className="text-center mb-10">
              <div
                onClick={onOpenModal}
                className="w-24 h-24 mx-auto bg-gradient-to-br from-accent-purple to-accent-blue rounded-full flex items-center justify-center mb-6 shadow-glow relative cursor-pointer group"
              >
                <div className="absolute inset-0 rounded-full bg-white animate-gpu-pulse"></div>
                <Mic className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>

              <div className="flex justify-center items-end gap-1 h-12 mb-6 opacity-50">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    style={{ height: '100%', transformOrigin: 'bottom' }}
                    animate={{ scaleY: [0.1, 0.6, 0.1] }}
                    transition={{
                      duration: 1 + Math.random(),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 0.5
                    }}
                    className="w-1.5 bg-accent-purple rounded-full will-change-transform"
                  />
                ))}
              </div>
            </div>

            {/* Inline Form */}
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="demo-name" className="block text-sm font-semibold text-primary mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="demo-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-purple focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="demo-phone" className="block text-sm font-semibold text-primary mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="demo-phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-purple focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                    placeholder="+91 9876543210"
                  />
                  <p className="mt-1 text-xs text-gray-500">Must be at least 8 digits</p>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto mx-auto flex items-center justify-center gap-2 bg-gradient-to-r from-accent-purple to-accent-blue text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Calling…
                  </>
                ) : (
                  <>
                    <Phone className="w-4 h-4" />
                    Try Live Demo
                  </>
                )}
              </button>

              {/* Toast */}
              <AnimatePresence>
                {toast && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className={`px-4 py-3 rounded-xl text-sm font-medium text-center ${toast.type === 'success'
                      ? 'bg-green-50 text-green-700 border border-green-200'
                      : 'bg-red-50 text-red-700 border border-red-200'
                      }`}
                  >
                    {toast.message}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            {/* Status badge */}
            <div className="text-center mt-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-100">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                System Online & Ready
              </div>
            </div>

          </motion.div>

          {/* Decorative Background Elements */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
        </div>
      </Container>
    </section>
  );
};