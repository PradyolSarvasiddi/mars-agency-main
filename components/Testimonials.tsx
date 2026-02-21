import React from 'react';
import { Container } from './ui/Container';
import { PlayCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Clinic Owner",
    text: "Since installing MARS AI, our appointment bookings have increased by 40%. The night shift problem is completely solved.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Real Estate Agent",
    text: "I used to miss leads while showing properties. Now the AI handles everything and books viewings on my calendar.",
    rating: 5
  },
  {
    name: "Amit Patel",
    role: "Restaurant Manager",
    text: "Handling reservation calls during peak hours was a nightmare. MARS AI manages 100+ calls daily for us.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 px-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Businesses</h2>
            <p className="text-secondary max-w-md">See what our clients have to say about their new AI receptionists.</p>
          </div>
          <div className="hidden md:flex gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <span className="font-bold text-primary">5.0/5 Rating</span>
          </div>
        </div>

        {/* Horizontal Scroll Area */}
        <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[320px] md:min-w-[400px] snap-center bg-bg-alt rounded-2xl p-6 border border-border shadow-sm flex flex-col"
            >
              {/* Video Placeholder */}
              <div className="w-full h-48 bg-gray-200 rounded-xl mb-6 flex items-center justify-center relative group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                <PlayCircle className="w-12 h-12 text-white opacity-80 group-hover:scale-110 transition-transform duration-300" />
                <img src={`https://picsum.photos/400/200?random=${i + 10}`} alt={`${t.name} testimonial video thumbnail`} width={400} height={200} loading="lazy" className="absolute inset-0 w-full h-full object-cover -z-10 mix-blend-overlay opacity-50 grayscale" />
              </div>

              <div className="flex gap-1 text-yellow-400 mb-3">
                {[...Array(t.rating)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
              </div>

              <p className="text-secondary italic mb-6 flex-1">"{t.text}"</p>

              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                  <img src={`https://picsum.photos/40/40?random=${i + 20}`} alt={`${t.name} profile photo`} width={40} height={40} loading="lazy" />
                </div>
                <div>
                  <div className="font-bold text-primary text-sm">{t.name}</div>
                  <div className="text-xs text-secondary">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};