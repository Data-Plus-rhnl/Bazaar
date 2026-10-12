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
        <Image
          src="/images/coin-3d.png"
          alt="Bitcoin Bazaar 3D Coin"
          width={96}
          height={96}
          priority
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>

      {/* Orb 2: Left Middle (Soft Depth Blur) */}
      <div className="floating-bitcoin-orb orb-pos-left-mid">
        <Image
          src="/images/coin-3d.png"
          alt="Bitcoin Bazaar 3D Coin"
          width={84}
          height={84}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>

      {/* Orb 3: Bottom Right (Deep Field Blur) */}
      <div className="floating-bitcoin-orb orb-pos-right-bottom">
        <Image
          src="/images/coin-3d.png"
          alt="Bitcoin Bazaar 3D Coin"
          width={90}
          height={90}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
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

