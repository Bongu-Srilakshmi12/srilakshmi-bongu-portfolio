'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understanding your goals, requirements, and vision for the project.',
  },
  {
    number: '02',
    title: 'Planning',
    description: 'Creating architecture, wireframes, and development timeline.',
  },
  {
    number: '03',
    title: 'Design & Development',
    description: 'Building scalable, clean code with modern design principles.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'Deploying and providing ongoing optimization and support.',
  },
];

export default function ProcessSection() {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-section-title text-foreground mb-4">
            How I <span className="gradient-text">work.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A streamlined process designed to deliver exceptional results with clarity and precision.
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="relative">
          {/* Steps Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Connection Line - Desktop only */}
            <motion.div
              className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px pointer-events-none"
              
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="relative group"
              >
                {/* Step Circle */}
                <div className="flex flex-col items-center mb-8">
                  <motion.div
                    className="relative w-24 h-24 rounded-full flex items-center justify-center mb-6 cursor-default"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(123, 140, 255, 0.1) 100%)',
                      border: '2px solid rgba(0, 212, 255, 0.3)',
                      boxShadow: '0 0 24px rgba(0, 212, 255, 0.2)',
                    }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: '0 0 40px rgba(0, 212, 255, 0.5)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(123, 140, 255, 0.2))`,
                      }}
                    />

                    <span
                      className="relative z-10 text-3xl font-bold text-transparent bg-clip-text"
                      style={{
                        backgroundImage: 'linear-gradient(135deg, #00D4FF 0%, #7B8CFF 100%)',
                      }}
                    >
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Content Card */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed max-w-xs">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Mobile connecting line */}
                {index < processSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center mb-8">
                    <motion.div
                      className="w-1.5 h-12 rounded-full"
                      style={{
                        background: 'linear-gradient(180deg, rgba(0, 212, 255, 0.8) 0%, rgba(123, 140, 255, 0.8) 50%, rgba(192, 132, 252, 0.6) 100%)',
                        boxShadow: '0 0 12px rgba(0, 212, 255, 0.6)',
                        transformOrigin: 'top',
                      }}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.12 + 0.2 }}                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-foreground/60 mb-4">Ready to start your project?</p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-3 rounded-xl font-semibold transition-all duration-300 group"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(123, 140, 255, 0.1) 100%)',
              border: '1px solid rgba(0, 212, 255, 0.3)',
              color: '#00D4FF',
            }}
            whileHover={{
              boxShadow: '0 0 24px rgba(0, 212, 255, 0.4)',
              scale: 1.05,
            }}
            whileTap={{ scale: 0.98 }}
          >
            Let's work together
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
