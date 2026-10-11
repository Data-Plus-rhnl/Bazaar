'use client';

import React from 'react';
import Image from 'next/image';

export default function BackgroundSystem() {
  const embers = [
    { top: '15%', left: '12%', size: 4, delay: '0s', duration: '7s' },
    { top: '25%', left: '88%', size: 3, delay: '1.5s', duration: '9s' },
    { top: '35%', left: '32%', size: 5, delay: '3s', duration: '8s' },
    { top: '55%', left: '8%', size: 3, delay: '2s', duration: '10s' },
    { top: '65%', left: '78%', size: 4, delay: '4s', duration: '7.5s' },
    { top: '80%', left: '22%', size: 3, delay: '1s', duration: '11s' },
    { top: '88%', left: '92%', size: 5, delay: '2.5s', duration: '8.5s' },
  ];

  return (
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }} aria-hidden="true">
      {/* 1. Subtle Dark Matrix Grid Background */}
      <div className="bento-grid-bg" />

      {/* 2. Warm Radiant Mesh Glow Centered */}
      <div className="glow-mesh-center" />

      {/* 3. Floating Glowing 3D Bitcoin Orbs */}
      {/* Orb 1: Top Right */}
      <div className="floating-bitcoin-orb orb-pos-right-top">
        <svg
          viewBox="0 0 24 24"
          width="52%"
          height="52%"
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}
        >
          <path d="M23.633 15.65c-.443 1.777-1.636 2.94-3.524 3.498l-1.077 4.316-2.585.645 1.054-4.22c-.675.17-1.37.33-2.057.485l-1.056 4.225-2.585.645 1.077-4.315c-.563.155-1.127.29-1.688.423l-3.559.888-.686-2.754s1.916-.438 1.876-.412c1.047-.262 1.345-1.05 1.31-1.688l-1.89-7.575c-.078-.196-.27-.49-.785-.36 0 0-1.884.47-1.884.47l-.953-2.61L6.7 8.35c.483-.12 1.056-.255 1.54-.383l1.1-4.412 2.585-.645-1.054 4.223c.706-.176 1.393-.34 2.053-.497L13.98.412 16.565-.233l-1.076 4.317c3.96-.282 6.096 1.155 5.568 5.173-.424 3.235-2.5 3.993-5.26 4.246 1.737.5 2.87 1.48 2.336 3.626h.001zm-3.923-5.467c.365-2.222-1.492-3.18-4.043-2.59l-1.677.42 1.025 4.103 1.677-.42c2.046-.51 2.653-1.29 2.018-3.513zm-1.025 6.002c.334-2.028-1.704-2.85-4.14-2.24l-1.83.456 1.1 4.41 1.83-.456c1.946-.486 2.705-1.282 2.37-3.17z" />
        </svg>
      </div>

      {/* Orb 2: Left Middle (Soft Depth Blur) */}
      <div className="floating-bitcoin-orb orb-pos-left-mid">
        <svg
          viewBox="0 0 24 24"
          width="52%"
          height="52%"
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}
        >
          <path d="M23.633 15.65c-.443 1.777-1.636 2.94-3.524 3.498l-1.077 4.316-2.585.645 1.054-4.22c-.675.17-1.37.33-2.057.485l-1.056 4.225-2.585.645 1.077-4.315c-.563.155-1.127.29-1.688.423l-3.559.888-.686-2.754s1.916-.438 1.876-.412c1.047-.262 1.345-1.05 1.31-1.688l-1.89-7.575c-.078-.196-.27-.49-.785-.36 0 0-1.884.47-1.884.47l-.953-2.61L6.7 8.35c.483-.12 1.056-.255 1.54-.383l1.1-4.412 2.585-.645-1.054 4.223c.706-.176 1.393-.34 2.053-.497L13.98.412 16.565-.233l-1.076 4.317c3.96-.282 6.096 1.155 5.568 5.173-.424 3.235-2.5 3.993-5.26 4.246 1.737.5 2.87 1.48 2.336 3.626h.001zm-3.923-5.467c.365-2.222-1.492-3.18-4.043-2.59l-1.677.42 1.025 4.103 1.677-.42c2.046-.51 2.653-1.29 2.018-3.513zm-1.025 6.002c.334-2.028-1.704-2.85-4.14-2.24l-1.83.456 1.1 4.41 1.83-.456c1.946-.486 2.705-1.282 2.37-3.17z" />
        </svg>
      </div>

      {/* Orb 3: Bottom Right (Deep Field Blur) */}
      <div className="floating-bitcoin-orb orb-pos-right-bottom">
        <svg
          viewBox="0 0 24 24"
          width="52%"
          height="52%"
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}
        >
          <path d="M23.633 15.65c-.443 1.777-1.636 2.94-3.524 3.498l-1.077 4.316-2.585.645 1.054-4.22c-.675.17-1.37.33-2.057.485l-1.056 4.225-2.585.645 1.077-4.315c-.563.155-1.127.29-1.688.423l-3.559.888-.686-2.754s1.916-.438 1.876-.412c1.047-.262 1.345-1.05 1.31-1.688l-1.89-7.575c-.078-.196-.27-.49-.785-.36 0 0-1.884.47-1.884.47l-.953-2.61L6.7 8.35c.483-.12 1.056-.255 1.54-.383l1.1-4.412 2.585-.645-1.054 4.223c.706-.176 1.393-.34 2.053-.497L13.98.412 16.565-.233l-1.076 4.317c3.96-.282 6.096 1.155 5.568 5.173-.424 3.235-2.5 3.993-5.26 4.246 1.737.5 2.87 1.48 2.336 3.626h.001zm-3.923-5.467c.365-2.222-1.492-3.18-4.043-2.59l-1.677.42 1.025 4.103 1.677-.42c2.046-.51 2.653-1.29 2.018-3.513zm-1.025 6.002c.334-2.028-1.704-2.85-4.14-2.24l-1.83.456 1.1 4.41 1.83-.456c1.946-.486 2.705-1.282 2.37-3.17z" />
        </svg>
      </div>

      {/* 4. Drifting Golden Ember Particles */}
      {embers.map((e, idx) => (
        <div
          key={idx}
          className="bg-ember"
          style={{
            top: e.top,
            left: e.left,
            width: `${e.size}px`,
            height: `${e.size}px`,
            animationDelay: e.delay,
            animationDuration: e.duration,
          }}
        />
      ))}
    </div>
  );
}

