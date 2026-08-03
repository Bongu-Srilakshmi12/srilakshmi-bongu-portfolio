'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Briefcase } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

function SLLogo() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="flex items-center gap-2 group"
      aria-label="Scroll to top"
      title="Back to top"
    >
      <div className="relative flex items-center justify-center w-9 h-9 rounded-xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #00D4FF 0%, #7B8CFF 50%, #C084FC 100%)',
          boxShadow: '0 0 16px rgba(0,212,255,0.4)',
        }}>
        <span className="font-mono font-black text-sm text-[#0F0F1A] leading-none tracking-tighter">SL</span>
      </div>
      <span className="font-mono text-sm font-bold tracking-tight hidden sm:block"
        style={{
          background: 'linear-gradient(135deg, #00D4FF 0%, #C084FC 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
        Sri Lakshmi
      </span>
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 left-0 w-full z-50 px-4"
      >
        <div
          className="max-w-5xl mx-auto flex items-center justify-between px-5 py-3 transition-all duration-500"
          style={{
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            background: scrolled ? 'rgba(10,10,20,0.55)' : 'rgba(10,10,20,0.35)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.35)',
            borderRadius: '60px',
          }}
        >
          {/* Logo */}
          <SLLogo />

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              const isHovered = hoveredLink === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  title={`${link.label} Section`}
                  className="relative px-3 lg:px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-200 group"
                  style={{
                    color: isActive || isHovered ? '#00D4FF' : '#7A84A8',
                    textShadow: isActive || isHovered ? '0 0 12px rgba(0,212,255,0.6)' : 'none',
                  }}
                >
                  {isActive && (
                    <span
                      className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: '#00D4FF', boxShadow: '0 0 6px #00D4FF' }}
                    />
                  )}
                  {link.label}
                  <motion.span
                    className="absolute bottom-0 left-2 right-2 h-px"
                    style={{ background: 'linear-gradient(90deg, #00D4FF, #7B8CFF)' }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: isActive || isHovered ? 1 : 0, opacity: isActive || isHovered ? 1 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  />
                </button>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="/assets/Bongu_SriLakshmi_Resume.pdf"
              download
              title="Download my Resume"
              className="flex items-center gap-1.5 px-3 lg:px-4 py-2 rounded-full text-xs uppercase tracking-wider font-bold transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'transparent',
                border: '1.5px solid rgba(0,212,255,0.5)',
                color: '#00D4FF',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(0,212,255,0.3)';
                (e.currentTarget as HTMLElement).style.borderColor = '#00D4FF';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,255,0.5)';
              }}
            >
              <Download size={11} />
              Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              title="Contact me"
              className="flex items-center gap-1.5 px-3 lg:px-4 py-2 rounded-full text-xs uppercase tracking-wider font-bold transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, #00D4FF 0%, #7B8CFF 50%, #C084FC 100%)',
                color: '#0F0F1A',
                boxShadow: '0 4px 16px rgba(0,212,255,0.25)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(0,212,255,0.45)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,212,255,0.25)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <Briefcase size={11} />
              Hire Me
            </a>
          </div>

          {/* Mobile/Tablet toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)', color: '#00D4FF' }}
            aria-label="Toggle menu"
            title="Toggle navigation menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col pt-24"
            style={{ background: 'rgba(10,10,20,0.97)', backdropFilter: 'blur(20px)' }}
          >
            <div className="flex flex-col items-center justify-center flex-grow gap-4 px-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  onClick={() => handleNavClick(link.href)}
                  title={`${link.label} section`}
                  className="text-2xl font-bold transition-colors font-mono w-full text-center py-3"
                  style={{ color: activeSection === link.href.replace('#','') ? '#00D4FF' : 'rgba(232,234,240,0.8)' }}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="flex gap-3 mt-4">
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.06 }}
                  href="/assets/Bongu_SriLakshmi_Resume.pdf"
                  download
                  title="Download my Resume"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-sm uppercase tracking-wider font-bold"
                  style={{ border: '1.5px solid rgba(0,212,255,0.5)', color: '#00D4FF' }}
                >
                  <Download size={14} />
                  Resume
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (navLinks.length + 1) * 0.06 }}
                  href="#contact"
                  title="Contact me"
                  onClick={() => { setMobileOpen(false); handleNavClick('#contact'); }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-sm uppercase tracking-wider font-bold"
                  style={{ background: 'linear-gradient(135deg, #00D4FF 0%, #C084FC 100%)', color: '#0F0F1A' }}
                >
                  <Briefcase size={14} />
                  Hire Me
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}