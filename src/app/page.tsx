import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import SkillsSection from '@/app/components/SkillsSection';
import ProcessSection from '@/app/components/ProcessSection';
import ExperienceSection from '@/app/components/ExperienceSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import EducationSection from '@/app/components/EducationSection';
import ContactSection from '@/app/components/ContactSection';
import Footer from '@/components/Footer';
import ParticleBackground from '@/app/components/ParticleBackground';

export default function HomePage() {
  return (
    <main className="relative min-h-screen gradient-bg">
      <div className="noise-overlay" aria-hidden="true" />
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProcessSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}