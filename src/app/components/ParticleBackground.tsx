'use client';

import React, { useEffect } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { tsParticles } from '@tsparticles/engine';

export default function ParticleBackground() {
  useEffect(() => {
    const initParticles = async () => {
      await loadSlim(tsParticles);
    };
    initParticles();
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 z-0 pointer-events-none"
      options={{
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        particles: {
          number: { value: 60, density: { enable: true, width: 800 } },
          color: { value: ['#00D4FF', '#7B8CFF', '#C084FC'] },
          shape: { type: 'circle' },
          opacity: {
            value: { min: 0.03, max: 0.15 },
            animation: { enable: true, speed: 0.5, sync: false },
          },
          size: {
            value: { min: 1, max: 3 },
            animation: { enable: true, speed: 1, sync: false },
          },
          links: {
            enable: true,
            distance: 150,
            color: '#00D4FF',
            opacity: 0.05,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.4,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'bounce' },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'grab' },
          },
          modes: {
            grab: { distance: 120, links: { opacity: 0.15 } },
          },
        },
        detectRetina: true,
      }}
    />
  );
}