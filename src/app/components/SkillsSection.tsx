'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: string;
  category: string;
  accent: string;
}

const skills: Skill[] = [
  { name: 'Next.js', icon: '⬡', category: 'Framework', accent: '#FFFFFF' },
  { name: 'React', icon: '⚛', category: 'Library', accent: '#61DAFB' },
  { name: 'TypeScript', icon: 'TS', category: 'Language', accent: '#3178C6' },
  { name: 'JavaScript', icon: 'JS', category: 'Language', accent: '#F7DF1E' },
  { name: 'HTML5', icon: '◇', category: 'Markup', accent: '#E34C26' },
  { name: 'CSS3', icon: '#', category: 'Styling', accent: '#1572B6' },
  { name: 'Tailwind CSS', icon: '~', category: 'Framework', accent: '#38BDF8' },
  { name: 'Bootstrap', icon: 'B', category: 'Framework', accent: '#7952B3' },
  { name: 'REST APIs', icon: '⇌', category: 'Integration', accent: '#00D4FF' },
  { name: 'Git', icon: '⎇', category: 'Version Control', accent: '#F05032' },
  { name: 'GitHub', icon: '◈', category: 'Platform', accent: '#FFFFFF' },
  { name: 'Vercel', icon: '▲', category: 'Deployment', accent: '#E5E7EB' },
  { name: 'Cloudflare', icon: '☁', category: 'Infrastructure', accent: '#F38020' },
  { name: 'SSR/SSG', icon: '⚙', category: 'Optimization', accent: '#9333EA' },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="section-label block mb-3">02 / Skills</span>
          <h2 className="text-section-title text-foreground">
            Tech I work with{' '}
            <span className="gradient-text">daily.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg">
            A curated set of tools and technologies I use to build modern, performant web experiences.
          </p>
        </motion.div>

        {/* Hexagon Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          className="flex flex-wrap justify-center gap-6"
        >
          {skills?.map((skill, index) => (
            <SkillHexagon key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillHexagon({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.85 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1], delay: index * 0.04 },
        },
      }}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className="group relative cursor-default"
      style={{ width: '160px', height: '160px' }}
    >
      {/* Hexagon Container */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300"
        style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(12px)',
        }}
      >
        {/* Hover Glow Overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            background: `radial-gradient(circle at 50% 50%, ${skill.accent}25 0%, transparent 70%)`,
            boxShadow: `inset 0 0 20px ${skill.accent}15, 0 0 20px ${skill.accent}20`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-2 px-3 text-center">
          {/* Icon */}
          <motion.div
            className="text-3xl font-bold transition-all duration-300 group-hover:scale-110"
            style={{ color: skill.accent }}
          >
            {skill.icon}
          </motion.div>

          {/* Name */}
          <h3 className="text-sm font-bold text-white leading-tight">
            {skill.name}
          </h3>

          {/* Category Label */}
          <span
            className="text-xs font-mono opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            style={{ color: skill.accent }}
          >
            {skill.category}
          </span>
        </div>
      </div>

    </motion.div>
  );
}