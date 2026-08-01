'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    institution: 'Kasireddy Narayana Reddy College of Engineering & Research',
    duration: 'July 2019 – July 2023',
    score: '78%',
    icon: GraduationCap,
    highlight: true,
  },
  {
    degree: 'Board of Intermediate Education (Class XII)',
    field: 'Science',
    institution: 'Sri Narayana Junior College',
    duration: 'June 2017 – May 2019',
    score: '95%',
    icon: Award,
    highlight: false,
  },
  {
    degree: 'Board of Secondary Education (Class X)',
    field: 'General Studies',
    institution: 'Santhi Nikethan High School',
    duration: 'June 2016 – May 2017',
    score: '88%',
    icon: Award,
    highlight: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function EducationSection() {
  return (
    <section id="education" className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="section-label block mb-3">05 / Education</span>
          <h2 className="text-section-title text-foreground">
            Academic{' '}
            <span className="gradient-text">foundation.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-6"
        >
          {education?.map((edu) => (
            <motion.div key={edu?.degree} variants={itemVariants}>
              <div
                className={`glass-card rounded-2xl p-7 flex flex-col sm:flex-row gap-6 items-start ${
                  edu?.highlight ? 'border-primary/30' : ''
                }`}
                style={edu?.highlight ? { borderColor: 'rgba(0, 212, 255, 0.25)' } : {}}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: edu?.highlight ? 'rgba(0, 212, 255, 0.15)' : 'rgba(123, 140, 255, 0.1)' }}
                >
                  <edu.icon size={20} className={edu?.highlight ? 'text-primary' : 'text-secondary-foreground'} style={{ color: edu?.highlight ? '#00D4FF' : '#7B8CFF' }} />
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <div className="flex-grow">
                      <h3 className="text-foreground font-bold text-base">{edu?.degree}</h3>
                      <p className="text-primary text-sm font-medium mt-0.5">{edu?.field}</p>
                    </div>
                    <div
                      className="px-3 py-1 rounded-lg text-sm font-bold font-mono flex-shrink-0 w-fit"
                      style={{ background: 'rgba(0, 212, 255, 0.1)', color: '#00D4FF' }}
                    >
                      {edu?.score}
                    </div>
                  </div>
                  <p className="text-foreground/65 text-sm mb-2">{edu?.institution}</p>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-mono">
                    <Calendar size={12} />
                    {edu?.duration}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}