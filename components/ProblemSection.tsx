import React from 'react';
import { Container } from './ui/Container';
import { PhoneMissed, Users, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const problems = [
  {
    icon: PhoneMissed,
    title: "Missed Calls",
    description: "62% of calls to small businesses go unanswered. Every missed call is a lost revenue opportunity.",
    color: "text-red-500",
    bg: "bg-red-50"
  },
  {
    icon: Users,
    title: "Busy Staff",
    description: "Your receptionists are overwhelmed with repetitive FAQs, leaving them no time for high-value tasks.",
    color: "text-orange-500",
    bg: "bg-orange-50"
  },
  {
    icon: Moon,
    title: "Lost Leads at Night",
    description: "Customers inquire after hours. Without 24/7 support, they move on to your competitors instantly.",
    color: "text-indigo-500",
    bg: "bg-indigo-50"
  }
];

export const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <span className="text-accent-purple font-mono text-sm font-semibold uppercase tracking-wider">The Problem</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-primary">Why Businesses Lose Customers</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-bg-main border border-border shadow-soft hover:shadow-xl hover:bg-accent-purple hover:border-accent-purple transition-all duration-150 group"
            >
              <div className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white transition-all duration-150`}>
                <item.icon className={`w-7 h-7 ${item.color} group-hover:text-accent-purple transition-colors duration-150`} />
              </div>
              <h3 className="text-xl font-bold text-primary group-hover:text-white mb-3 transition-colors duration-150">{item.title}</h3>
              <p className="text-secondary group-hover:text-white/90 leading-relaxed transition-colors duration-150">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};