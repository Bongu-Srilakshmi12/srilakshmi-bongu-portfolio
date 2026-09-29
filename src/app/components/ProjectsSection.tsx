'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Layers, Globe } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  company: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  description: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    title: 'Websites & Digital Experiences',
    category: 'Web Design & Development',
    company: 'EVEGA Technologies',
    icon: Globe,
    description:
      'I designed websites and developed modern, responsive websites that turn ideas and requirements into polished digital experiences. Focused on creating clean interfaces that are intuitive, accessible, and consistent across devices.',
    highlights: [
      'Crafted intuitive, responsive layouts that turn concepts and requirements into polished digital interfaces',
      'Ensured accessibility, mobile-first design, and seamless cross-browser consistency across all devices',
      'Built modular, maintainable component architecture using Next.js, React, and TypeScript',
    ],
  },
  {
    title: 'Multi-Tenant Conference Platforms',
    category: 'High-Traffic Event Portals',
    company: 'EVEGA Technologies',
    icon: Layers,
    description:
      'Built and maintained dynamic, interactive production websites for major industry conferences and events. Handled attendee registrations, speaker agendas, and third-party workflow integrations under tight deadlines.',
    highlights: [
      'Delivered multiple responsive event portals tailored to diverse international conference brands',
      'Integrated payment gateways and registration workflows with resilient error handling',
      'Optimized Core Web Vitals, achieving sub-second LCP and seamless mobile responsiveness',
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="section-label block mb-3">04 / Projects</span>
          <h2 className="text-section-title text-foreground">
            Featured enterprise{' '}
            <span className="gradient-text">work.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-base leading-relaxed">
            Key production platforms and client portals I engineered at EVEGA Technologies.
          </p>
        </motion.div>

        {/* Projects Grid - 2 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className="group relative flex flex-col"
              >
                {/* Card Container */}
                <div
                  className="project-card rounded-2xl p-7 sm:p-8 flex flex-col flex-1 relative z-10 transition-all duration-300"
                  style={{
                    background: 'rgba(22, 22, 40, 0.75)',
                    border: '1px solid rgba(0, 212, 255, 0.12)',
                    backdropFilter: 'blur(16px)',
                  }}
                >
                  {/* Top accent glow line */}
                  <div
                    className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(90deg, transparent, #00D4FF, transparent)',
                    }}
                  />

                  {/* Header: Company */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-muted-foreground text-xs font-mono font-medium tracking-wider uppercase">
                      {project.company}
                    </span>
                  </div>

                  {/* Project Title with Icon */}
                  <div className="flex items-start gap-3.5 mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: 'rgba(0, 212, 255, 0.1)',
                        border: '1px solid rgba(0, 212, 255, 0.2)',
                      }}
                    >
                      <IconComponent size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-1">
                        {project.category}
                      </p>
                      <h3 className="text-foreground font-bold text-lg sm:text-xl leading-snug group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/75 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Engineering Highlights */}
                  <div className="space-y-2.5 flex-grow">
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                      Key Contributions:
                    </p>
                    <ul className="space-y-2.5">
                      {project.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/70 leading-relaxed">
                          <CheckCircle2 size={15} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}