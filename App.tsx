import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { VideoSection } from './components/VideoSection';
import { DemoSection } from './components/DemoSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { FeaturesGrid } from './components/FeaturesGrid';
import { TiersSection } from './components/TiersSection';
import { Testimonials } from './components/Testimonials';
import { Industries } from './components/Industries';
import { DashboardPreview } from './components/DashboardPreview';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-bg-main font-body selection:bg-accent-purple/20">
      <Header onBookDemo={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <VideoSection />
        <DemoSection onOpenModal={openModal} />
        <ProblemSection />
        <SolutionSection />
        <FeaturesGrid />
        <TiersSection />
        <Testimonials />
        <Industries />
        <DashboardPreview />
      </main>
      <Footer onOpenModal={openModal} />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}