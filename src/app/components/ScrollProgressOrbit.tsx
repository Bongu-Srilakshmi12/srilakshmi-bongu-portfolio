'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollProgressOrbit() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Check for prefers-reduced-motion on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setPrefersReducedMotion(prefersReduced);
    }
  }, []);

  // Track scroll progress efficiently
  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame to avoid excessive calculations
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

        setScrollProgress(scrolled);

        // Show/hide based on scroll position (300-500px threshold)
        setIsVisible(scrollTop > 300);

        // Show scrolling state briefly
        setIsScrolling(true);
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 1000);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  const handleBackToTop = () => {
    // Smooth scroll with animation
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    // Optional: Add pulse animation feedback
    setScrollProgress(0);
  };

  // Animation duration respects prefers-reduced-motion
  const animationDuration = prefersReducedMotion ? 0 : 0.3;

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{
            duration: animationDuration,
            ease: [0.34, 1.56, 0.64, 1], // cubic-bezier for premium feel
          }}
          className="fixed bottom-6 right-6 z-40 md:bottom-8 md:right-8"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Hover label */}
          <AnimatePresence>
            {isHovering && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-20 right-0 whitespace-nowrap"
              >
                <div className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold uppercase tracking-widest text-cyan-300 bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-cyan-500/10">
                  Return to Top
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button Container */}
          <button
            onClick={handleBackToTop}
            aria-label="Back to top"
            className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-full transition-all duration-300"
          >
            {/* Orbital Ring SVG */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background circle - subtle */}
              <circle
                cx="32"
                cy="32"
                r="30"
                fill="none"
                stroke="rgba(6, 182, 212, 0.1)"
                strokeWidth="1"
                className="transition-all duration-300"
              />

              {/* Progress orbit - dynamic fill */}
              <motion.circle
                cx="32"
                cy="32"
                r="30"
                fill="none"
                stroke="url(#orbitGradient)"
                strokeWidth="1.5"
                strokeDasharray={`${(scrollProgress / 100) * (30 * 2 * Math.PI)} ${30 * 2 * Math.PI}`}
                strokeLinecap="round"
                className={`transition-all ${isHovering ? 'filter drop-shadow-lg' : 'filter drop-shadow-none'}`}
                style={{
                  filter: isHovering
                    ? 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.6))'
                    : 'drop-shadow(0 0 4px rgba(6, 182, 212, 0.3))',
                }}
              />

              {/* Gradient definition */}
              <defs>
                <linearGradient
                  id="orbitGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Central glow effect */}
            <motion.div
              animate={isHovering ? { scale: 1.2 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`absolute inset-3 rounded-full ${
                isHovering
                  ? 'bg-gradient-to-br from-cyan-500/30 to-blue-500/20'
                  : 'bg-gradient-to-br from-cyan-500/15 to-blue-500/10'
              } transition-all duration-300`}
              style={{
                boxShadow: isHovering
                  ? '0 0 20px rgba(6, 182, 212, 0.4), inset 0 0 20px rgba(6, 182, 212, 0.2)'
                  : '0 0 12px rgba(6, 182, 212, 0.2), inset 0 0 12px rgba(6, 182, 212, 0.1)',
              }}
            />

            {/* Arrow icon - with hover animation */}
            <motion.div
              animate={isHovering ? { y: -3 } : { y: 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-20 text-cyan-300"
            >
              <ArrowUp size={20} className="md:w-6 md:h-6" strokeWidth={1.5} />
            </motion.div>

            {/* Pulse effect on scroll activity */}
            {isScrolling && (
              <motion.div
                initial={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 1.3, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 rounded-full border border-cyan-400/40 pointer-events-none"
              />
            )}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
