'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap, Zap } from 'lucide-react';

const infoItems = [
  { icon: MapPin, label: 'Location', value: 'Hyderabad, India' },
  { icon: Briefcase, label: 'Experience', value: '2+ Years' },
  { icon: GraduationCap, label: 'Education', value: 'B.Tech, CSE' },
  { icon: Zap, label: 'Availability', value: 'Immediate · Remote/Hybrid' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="mb-16">
            <span className="section-label block mb-3">01 / About Me</span>
            <h2 className="text-section-title text-foreground">
              The person behind the{' '}
              <span className="gradient-text">code.</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left: Intro */}
            <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
              <p className="text-foreground/80 text-lg leading-relaxed">
                I'm a results-driven Frontend Developer based in{' '}
                <span className="text-primary font-semibold">Hyderabad</span> with{' '}
                <span className="text-primary font-semibold">2+ years of experience</span> building responsive, scalable, and high-performance web applications using{' '}
                <span className="text-primary font-semibold">Next.js, React, and TypeScript</span>.
              </p>
              <p className="text-foreground/70 text-base leading-relaxed">
                I specialize in creating{' '}
                <span className="text-primary font-medium">pixel-perfect, SEO-friendly interfaces</span> with modern frontend architecture, leveraging{' '}
                <span className="text-primary font-medium">SSR, SSG, dynamic routing, and reusable component systems</span> to build fast and maintainable web experiences.
              </p>
              <p className="text-foreground/70 text-base leading-relaxed">
                I care deeply about{' '}
                <span className="text-primary font-medium">clean architecture, reusable components, performance optimization, and thoughtful user experiences</span>—bringing together solid engineering practices and polished visual design to create interfaces that are both functional and engaging.
              </p>
              <p className="text-foreground/70 text-base leading-relaxed">
                I'm always open to exploring exciting opportunities where I can contribute, grow, and build meaningful digital experiences in remote or hybrid environments.
              </p>

              {/* Philosophy section */}
              <div className="rounded-xl p-6 mt-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.05) 0%, rgba(123, 140, 255, 0.05) 100%)' }}>
                <p className="text-sm font-bold text-foreground text-center leading-relaxed">
                  Crafting elegant, performant interfaces that users love.
                </p>
              </div>
            </motion.div>

            {/* Right: Info card */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <div className="glass-card rounded-2xl p-8 space-y-5">
                <h3 className="text-foreground font-semibold text-lg mb-6">
                  Professional Overview
                </h3>
                {infoItems?.map((item) => (
                  <div key={item?.label} className="flex items-start gap-4 py-3 border-b border-border/50 last:border-0">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider mb-0.5 font-mono">{item?.label}</p>
                      <p className="text-foreground font-medium text-sm">{item?.value}</p>
                    </div>
                  </div>
                ))}

                <div className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="availability-dot" />
                    <span className="text-green-400 text-sm font-semibold">Open to Opportunities</span>
                  </div>
                  {/* <p className="text-muted-foreground text-xs leading-relaxed">
                    Immediate joiner
                  </p> */}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}