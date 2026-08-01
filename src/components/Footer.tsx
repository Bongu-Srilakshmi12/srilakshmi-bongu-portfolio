'use client';

import React from 'react';
import { Mail } from 'lucide-react';

const GithubIcon = ({ size = 14, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 14, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative z-10 border-t py-8 px-4 sm:px-6" style={{ borderColor: 'rgba(0, 212, 255, 0.08)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Mobile: Stacked layout */}
        {/* Desktop: Three columns */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-6">

          {/* Logo + tagline */}
          <div className="flex flex-col items-center lg:items-start gap-2 flex-shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 group mb-0.5 hover:opacity-80 transition-opacity"
              aria-label="Scroll to top"
              title="Back to top"
            >
              <div
                className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #00D4FF 0%, #7B8CFF 50%, #C084FC 100%)',
                  boxShadow: '0 0 16px rgba(0,212,255,0.4)',
                }}
              >
                <span className="font-mono font-black text-xs sm:text-sm text-[#0F0F1A] leading-none tracking-tighter">
                  SL
                </span>
              </div>
              <span
                className="font-mono text-xs sm:text-sm font-bold tracking-tight"
                style={{
                  background: 'linear-gradient(135deg, #00D4FF 0%, #C084FC 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Sri Lakshmi
              </span>
            </button>
            <p className="text-muted-foreground text-xs font-mono text-center lg:text-left max-w-xs">
              Building the web, one component at a time.
            </p>
          </div>

          {/* Nav links - Grid on mobile, flex on desktop */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-5 text-xs font-mono font-semibold text-muted-foreground flex-shrink-0">
            {['#about', '#skills', '#experience', '#projects', '#education', '#contact']?.map((href) => (
              <a
                key={href}
                href={href}
                title={`${href.replace('#', '')} Section`}
                className="hover:text-primary transition-colors capitalize whitespace-nowrap"
              >
                {href?.replace('#', '')}
              </a>
            ))}
          </div>

          {/* Social + copyright */}
          <div className="flex flex-col items-center lg:items-end gap-3 flex-shrink-0">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-8 sm:h-8 rounded-lg bg-muted/40 hover:bg-primary/10 flex items-center justify-center transition-colors group"
                aria-label="GitHub"
                title="Visit my GitHub profile"
              >
                <GithubIcon size={16} className="sm:w-3.5 sm:h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-8 sm:h-8 rounded-lg bg-muted/40 hover:bg-primary/10 flex items-center justify-center transition-colors group"
                aria-label="LinkedIn"
                title="Connect with me on LinkedIn"
              >
                <LinkedinIcon size={16} className="sm:w-3.5 sm:h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:srilakshmigoud0412@gmail.com"
                className="w-9 h-9 sm:w-8 sm:h-8 rounded-lg bg-muted/40 hover:bg-primary/10 flex items-center justify-center transition-colors group"
                aria-label="Email"
                title="Send me an Email"
              >
                <Mail size={16} className="sm:w-3.5 sm:h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
            <p className="text-muted-foreground text-xs font-mono text-center">© 2026 BONGU SRI LAKSHMI</p>
          </div>
        </div>
      </div>
    </footer>
  );
}