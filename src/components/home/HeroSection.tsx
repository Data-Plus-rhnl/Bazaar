'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PartnersStrip from './PartnersStrip';

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: '105px',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      <div
        className="site-container"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          paddingTop: '16px',
          paddingBottom: '24px',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '48px', alignItems: 'center', width: '100%' }}>
          
          {/* Left Column: Heading & CTAs */}
          <div style={{ zIndex: 2 }}>
            <div className="section-tag" style={{ marginBottom: '18px' }}>
              Port Coquitlam &bull; Vancouver OTC Desk
            </div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.6rem)', lineHeight: 1.14, marginBottom: '24px', letterSpacing: '-0.03em', fontWeight: 800 }}>
              <span style={{ color: 'var(--accent-primary)' }}>Secure</span> and Easy<br />
              Way To Trade <span style={{ color: 'var(--accent-gold)' }}>Bitcoin</span>
            </h1>

            <p style={{ fontSize: '1.08rem', lineHeight: 1.75, color: 'var(--text-muted)', marginBottom: '36px', maxWidth: '490px' }}>
              A place for everyone who wants to simply buy and sell Bitcoins and other cryptocurrencies. Deposit or request funds using <strong>Cash</strong>, <strong>Interac e-Transfer</strong>, or <strong>Wire Transfer</strong>. Instant buy/sell at fair market rates is guaranteed.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-accent" style={{ padding: '14px 34px' }}>
                Book Appointment
              </Link>
              <Link href="/services" className="btn-outline" style={{ padding: '14px 28px' }}>
                Our Services
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Phones Floating with Dynamic Bitcoin Orange Neon SVG Spiral Wire */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '520px' }}>
            
            {/* Ambient Warm Bitcoin Orange Glow */}
            <div
              style={{
                position: 'absolute',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(249, 115, 22, 0.16) 0%, rgba(255, 183, 3, 0.08) 45%, transparent 70%)',
                filter: 'blur(50px)',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />

            {/* Back SVG Spiral Layer (Passes behind the phones: top arch & middle weave) */}
            <svg
              viewBox="0 0 600 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            >
              <defs>
                <linearGradient id="orangeSwirlBack" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffb703" stopOpacity="0.95" />
                  <stop offset="40%" stopColor="#f97316" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#ea580c" stopOpacity="0.8" />
                </linearGradient>
                <filter id="orangeGlowBack" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Start Origin Glowing Node */}
              <circle cx="55" cy="140" r="5.5" fill="#ffb703" filter="url(#orangeGlowBack)" />
              <circle cx="55" cy="140" r="2.5" fill="#ffffff" />

              {/* S-Curve Upper Arch & Middle Weave - passes BEHIND the phones */}
              <path
                d="M 55,140 C 70,40 200,25 340,45 C 460,65 545,130 550,230 C 540,330 430,380 320,410 C 210,435 120,455 90,495"
                stroke="url(#orangeSwirlBack)"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
                filter="url(#orangeGlowBack)"
              />

              {/* Distant Orbit Sparkle Accents */}
              <circle cx="230" cy="38" r="2" fill="#fff7ed" opacity="0.85" />
              <circle cx="475" cy="85" r="1.5" fill="#ffb703" opacity="0.75" />
            </svg>

            {/* The 3D Phones Asset - Opposing Tilt Dual Mockups */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                width: '100%',
                maxWidth: '520px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                src="/images/hero-phones-3d.png"
                alt="Bitcoin Bazaar 3D Crypto Trading App Mockup"
                width={650}
                height={650}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  filter: 'drop-shadow(0 25px 45px rgba(0,0,0,0.9))',
                }}
                priority
              />
            </div>

            {/* Front SVG Spiral Layer (Wraps in FRONT around the open base below the phones - z-index: 3) */}
            <svg
              viewBox="0 0 600 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 3,
              }}
            >
              <defs>
                <linearGradient id="orangeSwirlFront" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fffbeb" stopOpacity="1" />
                  <stop offset="25%" stopColor="#ffb703" stopOpacity="1" />
                  <stop offset="70%" stopColor="#f97316" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#ea580c" stopOpacity="0.85" />
                </linearGradient>
                <filter id="orangeGlowFront" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="4.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Foreground Bottom Loop: Curves around the open space beneath both phone chins */}
              <path
                d="M 90,495 C 70,555 170,580 300,575 C 420,570 510,535 535,470 C 550,430 540,390 515,365"
                stroke="url(#orangeSwirlFront)"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
                filter="url(#orangeGlowFront)"
              />

              {/* Terminal Glowing Node on Outer Right Flank */}
              <circle cx="515" cy="365" r="5.5" fill="#f97316" filter="url(#orangeGlowFront)" />
              <circle cx="515" cy="365" r="2.5" fill="#ffffff" />

              {/* Foreground Orbit Sparkle Accents */}
              <circle cx="170" cy="565" r="2" fill="#fff7ed" opacity="0.9" />
              <circle cx="340" cy="575" r="2.5" fill="#ffedd5" opacity="0.85" />
              <circle cx="480" cy="525" r="1.5" fill="#ffb703" opacity="0.75" />
            </svg>

          </div>

        </div>
      </div>

      {/* 1-Line Partner & Trust Badges anchored at the base of the 100vh Hero screen */}
      <PartnersStrip />
    </section>
  );
}

