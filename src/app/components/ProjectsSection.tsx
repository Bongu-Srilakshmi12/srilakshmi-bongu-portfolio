'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  label: string;
}

const projects: Project[] = [
  {
    title: 'Websites & Digital Experiences',
    description:
      'Designed and developed modern, responsive websites that turn ideas and requirements into polished digital experiences. Focused on creating clean interfaces that are intuitive, accessible, and consistent across devices.',
    label: 'Professional Work · EVEGA Technologies',
  },
  {
    title: 'Conference Websites',
    description:
      'Designed, developed, and maintained multiple production websites for conferences and events, creating engaging online experiences for attendees and organizers while adapting each website to different project requirements.',
    label: 'Professional Work · EVEGA Technologies',
  },
  {
    title: 'Internal CMS',
    description:
      'Contributed to the design and development of an internal content management system that helps manage website content and streamline day-to-day business workflows through a centralized platform.',
    label: 'Professional Work · EVEGA Technologies',
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="section-label block mb-3">04 / Projects</span>
          <h2 className="text-section-title text-foreground">
            Things I&apos;ve{' '}
            <span className="gradient-text">shipped.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg">
            Production work and personal experiments that reflect how I think about building for the web.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects?.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group relative"
            >
              {/* Gradient accent border - top */}
              {/* <div
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.4) 0%, rgba(123, 140, 255, 0.2) 100%)',
                  borderRadius: 'inherit',
                }}
              /> */}

              {/* Card content */}
              <div
                className="project-card rounded-2xl p-7 flex flex-col relative z-10"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(12px)',
                  position: 'relative',
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #06B6D4, transparent)',
                  }}
                />

                {/* Corner accent - top right */}
                <div
                  className="absolute top-3 right-3 w-8 h-8 opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)',
                    filter: 'blur(8px)',
                    pointerEvents: 'none',
                  }}
                />

                <span className="text-muted-foreground text-xs font-mono mb-3">{project.label}</span>
                <h3 className="text-foreground font-bold text-lg mb-3">{project.title}</h3>
                <p className="text-foreground/65 text-sm leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}