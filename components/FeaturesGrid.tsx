import React from 'react';
import { Container } from './ui/Container';
import { Mic, MessageSquare, Database, Calendar, Globe, BellRing } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Mic,
    title: "24/7 Voice AI",
    desc: "Human-like conversations that sound natural and professional.",
    span: "md:col-span-1",
    bg: "bg-purple-50"
  },
  {
    icon: MessageSquare,
    title: "WhatsApp AI",
    desc: "Automated text responses on your business number.",
    span: "md:col-span-1",
    bg: "bg-blue-50"
  },
  {
    icon: Database,
    title: "Google Sheets Sync",
    desc: "Leads populate in your sheet instantly.",
    span: "md:col-span-1",
    bg: "bg-green-50"
  },
  {
    icon: Calendar,
    title: "Auto-Booking",
    desc: "Connects directly to your calendar.",
    span: "md:col-span-1",
    bg: "bg-orange-50"
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    desc: "English, Hindi, Hinglish, and regional dialects.",
    span: "md:col-span-1",
    bg: "bg-indigo-50"
  },
  {
    icon: BellRing,
    title: "Hot Lead Alerts",
    desc: "Get SMS/Email notifications for urgent inquiries.",
    span: "md:col-span-1",
    bg: "bg-rose-50"
  }
];

export const FeaturesGrid = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Scale</h2>
          <p className="text-secondary max-w-2xl mx-auto">Powerful features designed to automate your front desk operations completely.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`${feature.span} p-8 rounded-2xl border border-border bg-white shadow-soft hover:shadow-lg hover:bg-accent-purple hover:border-accent-purple transition-all duration-150 group`}
            >
              <div className={`w-12 h-12 ${feature.bg} rounded-lg flex items-center justify-center mb-4 group-hover:bg-white transition-colors duration-150`}>
                <feature.icon className="w-6 h-6 text-primary group-hover:text-accent-purple transition-colors duration-150" />
              </div>
              <h3 className="text-xl font-bold text-primary group-hover:text-white mb-2 transition-colors duration-150">{feature.title}</h3>
              <p className="text-secondary group-hover:text-white/90 transition-colors duration-150">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};