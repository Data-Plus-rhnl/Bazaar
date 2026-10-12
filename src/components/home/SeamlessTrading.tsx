import React from 'react';
import Link from 'next/link';

export default function SeamlessTrading() {
  return (
    <section className="home-fullscreen-section">
      <div className="site-container" style={{ width: '100%' }}>
        <div className="responsive-2col-grid">
          {/* Left Column */}
          <div>
            <div className="section-tag" style={{ marginBottom: '16px' }}>
              In-Person Service
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.15, marginBottom: '20px' }}>
              &ldquo;Personalized OTC Trading For Everyone&rdquo;
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '32px', maxWidth: '480px' }}>
              Bitcoin Bazaar is British Columbia&apos;s premier physical cryptocurrency trade counter. We operate physical swap locations ensuring transactions remain local, transparent, and fully FINTRAC compliant.
            </p>
            <Link href="/contact" className="btn-accent">
              Book Appointment
            </Link>
          </div>

          {/* Right Column: High-Contrast Floating Metric Badges with Bitcoin Orange Neon SVG Ring */}
          <div style={{ position: 'relative', minHeight: '360px', width: '100%', maxWidth: '420px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            
            {/* Background Glowing Ring & Orbit SVGs in Bitcoin Orange */}
            <svg
              viewBox="0 0 400 400"
              style={{
                position: 'absolute',
                width: 'min(100%, 360px)',
                height: 'min(100%, 360px)',
                pointerEvents: 'none',
              }}
            >
              <circle
                cx="200"
                cy="200"
                r="140"
                stroke="url(#ringOrangeGrad)"
                strokeWidth="24"
                fill="none"
                opacity="0.9"
                style={{ filter: 'drop-shadow(0 0 25px rgba(243, 144, 25, 0.45))' }}
              />
              <circle
                cx="200"
                cy="200"
                r="180"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1"
                strokeDasharray="4 6"
                fill="none"
              />
              <defs>
                <linearGradient id="ringOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffb703" />
                  <stop offset="50%" stopColor="#f39019" />
                  <stop offset="100%" stopColor="#c2410c" />
                </linearGradient>
              </defs>
            </svg>

            {/* Metric Card 1: Top Left - $50M+ */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                left: 'clamp(5px, 3vw, 20px)',
                background: 'rgba(12, 16, 24, 0.88)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '16px',
                padding: '12px 18px',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 16px 36px rgba(0,0,0,0.7)',
                zIndex: 2,
              }}
            >
              <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ffb703', fontFamily: 'var(--font-display)', lineHeight: 1.1 }}>$50M+</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '2px' }}>Trade Volume</div>
            </div>

            {/* Metric Card 2: Center Main - 10,000+ */}
            <div
              style={{
                position: 'relative',
                background: 'rgba(14, 18, 28, 0.94)',
                border: '1px solid rgba(243, 144, 25, 0.35)',
                borderRadius: '20px',
                padding: '22px 32px',
                textAlign: 'center',
                backdropFilter: 'blur(24px)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.85), 0 0 30px rgba(243, 144, 25, 0.15)',
                zIndex: 3,
              }}
            >
              <div style={{ fontSize: '2.1rem', fontWeight: '900', color: '#ffffff', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                10,000+
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '6px' }}>
                In-Person Trades
              </div>
            </div>

            {/* Metric Card 3: Bottom Right - 100% */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                right: 'clamp(5px, 3vw, 20px)',
                background: 'rgba(12, 16, 24, 0.88)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '16px',
                padding: '12px 18px',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 16px 36px rgba(0,0,0,0.7)',
                zIndex: 2,
              }}
            >
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#f39019', fontFamily: 'var(--font-display)', lineHeight: 1.1 }}>100%</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '2px' }}>Non-Custodial</div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
