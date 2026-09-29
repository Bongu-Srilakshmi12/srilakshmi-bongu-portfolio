'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, ChevronDown } from 'lucide-react';

const responsibilities = [
  'Developing, maintaining, and enhancing multiple production websites using Next.js, React, and TypeScript',
  'Building modern, responsive, and user-friendly web experiences with a strong focus on performance, accessibility, and cross-device compatibility',
  'Developing dynamic website features and reusable components that can be customized for different projects and business requirements',
  'Integrating REST APIs and backend services to power interactive features, data-driven pages, forms, and user workflows',
  'Contributing to the development and enhancement of internal CMS and administrative tools for managing website content and business operations',
  'Implementing and maintaining third-party integrations and online payment workflows, ensuring reliable and secure user experiences',
  'Improving website performance through SSR/SSG, image optimization, Core Web Vitals improvements, caching strategies, and frontend optimization',
  'Translating Figma designs into pixel-perfect, responsive, accessible, and production-ready interfaces while maintaining consistent design quality',
  'Collaborating with the team using GitHub, pull requests, branching workflows, and Agile/Scrum practices, while supporting deployments, monitoring production websites, and resolving live issues',
];

export default function ExperienceSection() {
  const [expanded, setExpanded] = useState(true);

  return (
    <section id="experience" className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="section-label block mb-3">03 / Experience</span>
          <h2 className="text-section-title text-foreground">
            Where I&apos;ve{' '}
            <span className="gradient-text">built things.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px timeline-line hidden md:block" />

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative md:pl-20"
          >
            {/* Timeline dot */}
            <div className="hidden md:flex absolute left-0 top-6 w-12 h-12 rounded-full bg-background border-2 border-primary items-center justify-center glow-accent-sm">
              <Briefcase size={18} className="text-primary" />
            </div>

            <div className="glass-card rounded-2xl p-8">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-primary font-mono text-xs uppercase tracking-wider">Full-Time</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span className="text-muted-foreground font-mono text-xs">2+ Years</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Frontend Developer</h3>
                  <p className="text-primary font-semibold mt-0.5">EVEGA Technologies</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono bg-muted/40 px-3 py-1.5 rounded-lg whitespace-nowrap">
                  <Calendar size={14} />
                  May 2024 – July 2026
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['Next.js', 'TypeScript', 'React', 'REST API', 'SSR', 'SSG', 'GitHub', 'Vercel', 'Cloudflare R2']?.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-mono font-medium"
                    style={{ background: 'rgba(0, 212, 255, 0.1)', color: '#00D4FF', border: '1px solid rgba(0, 212, 255, 0.2)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Expandable responsibilities */}
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-mono mb-4"
              >
                <ChevronDown
                  size={16}
                  className="transition-transform duration-300"
                  style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
                {expanded ? 'Hide' : 'Show'} responsibilities ({responsibilities?.length})
              </button>

              <AnimatePresence>
                {expanded && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-3 overflow-hidden"
                  >
                    {responsibilities?.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.4 }}
                        className="flex items-start gap-3 text-foreground/75 text-sm leading-relaxed"
                      >
                        <span className="text-primary flex-shrink-0 font-mono">▸</span>
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}