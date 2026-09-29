'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ArrowRight, Briefcase, ChevronDown, Mail } from 'lucide-react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';


function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}




// ─── Stats ─────────────────────────────────────────────────────────────────────
const stats = [
  { value: 2, suffix: '+', label: 'Years Exp.' },
  { value: 15, suffix: '+', label: 'Web Portals' },
  { value: 100, suffix: '%', label: 'Responsive' },
];

// ─── Social links ──────────────────────────────────────────────────────────────
const socialLinks = [
  { icon: GithubIcon, href: 'https://github.com/Bongu-Srilakshmi12', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/sri-lakshmi-bongu-981962291/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:srilakshmigoud0412@gmail.com', label: 'Email' },
  // { icon: TwitterIcon, href: 'https://twitter.com/', label: 'Twitter' }, // COMMENTED OUT
];

// ─── Counter hook ──────────────────────────────────────────────────────────────
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// ─── Stat item ─────────────────────────────────────────────────────────────────
function StatItem({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCounter(value, 1800, start);
  return (
    <div className="text-center">
      <div className="text-2xl font-black font-mono" style={{ color: '#00D4FF' }}>
        {count}{suffix}
      </div>
      <div className="text-xs text-muted-foreground mt-0.5 font-mono uppercase tracking-wider">{label}</div>
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────
export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Mouse spotlight
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });
  const [showSpotlight, setShowSpotlight] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
    setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setShowSpotlight(true);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
    setShowSpotlight(false);
  }, [mouseX, mouseY]);

  // Stats counter trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center px-6 pt-28 pb-40 overflow-hidden z-10"
    >
      {/* ── Background grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Mouse spotlight ── */}
      <AnimatePresence>
        {showSpotlight && (
          <motion.div
            className="absolute pointer-events-none"
            style={{
              left: spotlight.x - 200,
              top: spotlight.y - 200,
              width: 400,
              height: 400,
              background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
              borderRadius: '50%',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      {/* ── Gradient blobs ── */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          x: useSpring(useMotionValue(0), { stiffness: 40, damping: 20 }),
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(192,132,252,0.1) 0%, transparent 70%)', filter: 'blur(80px)' }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* ── Moving stars ── */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full pointer-events-none"
          style={{
            left: `${(i * 8.3) % 100}%`,
            top: `${(i * 13.7) % 100}%`,
            background: i % 3 === 0 ? '#00D4FF' : i % 3 === 1 ? '#7B8CFF' : '#C084FC',
            opacity: 0.4,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
        />
      ))}

      {/* ── Two-column layout ── */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        {/* ── LEFT COLUMN ── */}
        <div className="flex flex-col items-start">

          {/* Hello badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: 'rgba(22,22,40,0.8)',
              border: '1px solid rgba(0,212,255,0.15)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {/* <span className="text-lg">👋</span> */}
            {/* <span className="font-mono text-xs uppercase tracking-widest" style={{ color: '#00D4FF' }}>Hello There</span>  */}
            <span className="w-2 h-2 rounded-full bg-green-400" style={{ boxShadow: '0 0 8px rgba(74,222,128,0.8)' }} />
            <span className="font-mono text-xs text-muted-foreground">Available for Full-Time</span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-3"
          >
            <p className="text-muted-foreground font-mono text-lg mb-1">Hello, I&apos;m</p>
            <h1 className="font-black leading-none tracking-tight" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
              <motion.span
                style={{
                  background: 'linear-gradient(135deg, #00D4FF 0%, #7B8CFF 50%, #C084FC 100%)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                Sri{' '}
              </motion.span>
              <motion.span
                style={{
                  background: 'linear-gradient(135deg, #7B8CFF 0%, #C084FC 100%)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                animate={{ backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                Lakshmi
              </motion.span>
            </h1>
          </motion.div>

          {/* Typing animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-2 mb-5 h-10"
          >
            <span className="text-muted-foreground font-mono text-sm">{'>'}</span>
            <span className="font-mono text-xl font-bold" style={{ color: '#00D4FF' }}>
              <TypeAnimation
                sequence={[
                  'Frontend Developer', 2000,
                  'Next.js Developer', 2000,
                  'React Developer', 2000,
                  'UI Engineer', 2000,
                  'JavaScript Developer', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
            {/* <motion.span
              className="w-0.5 h-6 inline-block"
              style={{ background: '#00D4FF' }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            /> */}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-muted-foreground text-base leading-relaxed mb-4 max-w-lg"
          >
            Building fast, scalable and interactive web applications.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-lg"
          >
            I create responsive, high-performance web applications using{' '}
            <span style={{ color: '#61DAFB' }}>React</span>,{' '}
            <span style={{ color: '#FFFFFF' }}>Next.js</span>,{' '}
            <span style={{ color: '#3178C6' }}>TypeScript</span> and modern frontend technologies.
            Passionate about creating beautiful user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <a
              href="#projects"
              title="View my projects"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300"
              style={{
                background: 'transparent',
                border: '1.5px solid rgba(0,212,255,0.5)',
                color: '#00D4FF',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,212,255,0.3)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,255,0.08)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
            >
              View Projects
              <ArrowRight size={14} />
            </a>
            <a
              href="#contact"
              title="Contact me"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #00D4FF 0%, #7B8CFF 50%, #C084FC 100%)',
                color: '#0F0F1A',
                boxShadow: '0 4px 20px rgba(0,212,255,0.3)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(0,212,255,0.5)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,212,255,0.3)';
              }}
            >
              <Briefcase size={14} />
              Hire Me
            </a>
            <a
              href="/assets/SriLakshmi_Bongu_Frontend_Developer_2Years.docx"
              download="SriLakshmi_Bongu_Frontend_Developer_2Years.docx"
              title="Download my resume"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300"
              style={{
                background: 'rgba(22,22,40,0.8)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#E8EAF0',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.4)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <Download size={14} />
              Download CV
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center gap-3 mb-10"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={`Connect with me on ${label}`}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{
                  background: 'rgba(22,22,40,0.8)',
                  border: '1px solid rgba(0,212,255,0.15)',
                  color: '#7A84A8',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = '#00D4FF';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(0,212,255,0.3)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,255,0.5)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = '#7A84A8';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,255,0.15)';
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-4 w-full max-w-sm"
          >
            {stats.map((s) => (
              <StatItem key={s.label} {...s} start={statsVisible} />
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative flex items-center justify-center"
        >
          <AppImage
            src="/assets/hero_img.png"
            alt="Professional portrait"
            width={400}
            height={400}
            className="w-full max-w-xs lg:max-w-sm object-contain"
            priority
          />
        </motion.div>
      </div>


      {/* ── Mouse Wheel Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer group"
        onClick={() => window.scrollBy({ top: 300, behavior: 'smooth' })}
      >
        {/* Mouse Wheel SVG */}
        <motion.div
          className="relative"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
          }}
          style={{ transition: 'transform 0.3s ease' }}
        >
          <svg
            width="24"
            height="40"
            viewBox="0 0 24 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Mouse body */}
            <rect
              x="4"
              y="2"
              width="16"
              height="24"
              rx="8"
              stroke="url(#mouseGrad)"
              strokeWidth="1.5"
              fill="rgba(0,212,255,0.05)"
            />

            {/* Mouse scroll wheel */}
            <g>
              <circle cx="12" cy="12" r="3" fill="url(#mouseGrad)" opacity="0.8" />
              <motion.line
                x1="12"
                y1="8"
                x2="12"
                y2="10"
                stroke="url(#mouseGrad)"
                strokeWidth="1.5"
                strokeLinecap="round"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </g>

            {/* Gradient definition */}
            <defs>
              <linearGradient id="mouseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00D4FF" />
                <stop offset="50%" stopColor="#7B8CFF" />
                <stop offset="100%" stopColor="#C084FC" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Scroll text with animation */}
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-cyan-400 transition-colors duration-300">
            Scroll Down
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            className="flex gap-1"
          >
            <motion.div
              className="w-1 h-1 rounded-full"
              style={{ background: '#00D4FF' }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.div
              className="w-1 h-1 rounded-full"
              style={{ background: '#7B8CFF' }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            />
            <motion.div
              className="w-1 h-1 rounded-full"
              style={{ background: '#C084FC' }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
