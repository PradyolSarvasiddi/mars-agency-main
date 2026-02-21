import React from 'react';
import { Container } from './ui/Container';
import { Calendar as CalendarIcon } from 'lucide-react';

export const AppointmentBooking = () => {
  return (
    <section id="booking" className="py-24 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See It Live in 10 Minutes</h2>
          <p className="text-secondary">Schedule a personalized walkthrough with our team.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-soft border border-border p-4 md:p-8">
          {/* Placeholder for Calendar Embed */}
          <div className="w-full h-[600px] bg-bg-alt rounded-xl flex flex-col items-center justify-center border border-dashed border-gray-300">
            <CalendarIcon className="w-16 h-16 text-gray-300 mb-4" />
            <h3 className="text-lg font-bold text-gray-400">Calendar Booking Embed</h3>
            <p className="text-gray-400 text-sm">Calendly or Cal.com integration goes here</p>
          </div>
        </div>
      </Container>
    </section>
  );
};