import React from 'react';
import { Container } from './ui/Container';
import { motion } from 'framer-motion';

export const DashboardPreview = () => {
  return (
    <section id="dashboard" className="py-24 bg-bg-alt">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Complete Visibility</h2>
          <p className="text-secondary">Track every call, lead, and appointment in real-time.</p>
        </div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-2xl border border-border bg-white max-w-5xl mx-auto"
        >
          {/* Mock Browser Header */}
          <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="ml-4 bg-white rounded px-3 py-1 text-xs text-gray-500 flex-1 max-w-md border border-gray-200">
              dashboard.marsai.agency/leads
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6 md:p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-primary">Recent Leads</h3>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded bg-green-100 text-green-700 text-xs font-bold">Live Status: Active</span>
                <span className="px-3 py-1 rounded bg-blue-100 text-blue-700 text-xs font-bold">Export CSV</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 text-xs uppercase text-gray-400 font-mono tracking-wider">
                    <th className="py-3 px-2">Time</th>
                    <th className="py-3 px-2">Name</th>
                    <th className="py-3 px-2">Phone</th>
                    <th className="py-3 px-2">Interest</th>
                    <th className="py-3 px-2">Status</th>
                    <th className="py-3 px-2">Action</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { time: "2 mins ago", name: "Vikram Singh", phone: "+91 98*** ****", interest: "New Appointment", status: "Booked", statusColor: "bg-green-100 text-green-700" },
                    { time: "15 mins ago", name: "Ananya Roy", phone: "+91 99*** ****", interest: "Pricing Inquiry", status: "Follow-up", statusColor: "bg-yellow-100 text-yellow-700" },
                    { time: "1 hour ago", name: "Rahul Gupta", phone: "+91 88*** ****", interest: "Service Issue", status: "Resolved", statusColor: "bg-gray-100 text-gray-700" },
                    { time: "2 hours ago", name: "Sneha Patel", phone: "+91 76*** ****", interest: "Consultation", status: "Booked", statusColor: "bg-green-100 text-green-700" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-2 text-secondary">{row.time}</td>
                      <td className="py-4 px-2 font-medium text-primary">{row.name}</td>
                      <td className="py-4 px-2 text-secondary font-mono text-xs">{row.phone}</td>
                      <td className="py-4 px-2 text-secondary">{row.interest}</td>
                      <td className="py-4 px-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${row.statusColor}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="py-4 px-2">
                        <button className="text-accent-blue hover:underline text-xs font-bold">View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};