'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ViewingForecastSection() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px 0',
        position: 'relative',
        zIndex: 1,
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="site-container" style={{ width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          
          {/* Left Column: Heading & Description */}
          <div>
            <div className="section-tag" style={{ marginBottom: '16px' }}>
              Real-Time Settlement
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.4rem)', lineHeight: 1.12, marginBottom: '22px', fontWeight: 800 }}>
              Live Market Rates &amp; Instant Quotes
            </h2>
            <p style={{ fontSize: '1.08rem', lineHeight: 1.75, color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '480px' }}>
              A place for everyone who wants to simply buy and sell Bitcoins and other cryptocurrencies. Deposit or request funds using Cash, Email Transfer, or Wire Transfer. Instant buy/sell at fair market rates is guaranteed.
            </p>
            <Link href="/contact" className="btn-accent" style={{ padding: '14px 32px' }}>
              Book Private Appointment
            </Link>
          </div>

          {/* Right Column: 3D Upright Dual Phones Floating Seamlessly */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Subtle warm orange glow backdrop */}
            <div
              style={{
                position: 'absolute',
                width: '340px',
                height: '340px',
                background: 'radial-gradient(circle, rgba(249, 115, 22, 0.12) 0%, rgba(255, 183, 3, 0.06) 50%, transparent 70%)',
                filter: 'blur(50px)',
                borderRadius: '50%',
                pointerEvents: 'none',
              }}
            />

            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '520px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                src="/images/forecast-phones-3d.png"
                alt="Crypto Watchlist and Candlestick Chart 3D Phones"
                width={650}
                height={650}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.9))',
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

