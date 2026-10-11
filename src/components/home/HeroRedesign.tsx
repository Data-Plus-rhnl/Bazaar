'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroRedesign() {
  const rotatingWords = ['Bitcoin', 'Ethereum', 'USDT', 'Cryptocurrency'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  return (
    <section className="home-hero-redesign" style={{ position: 'relative', zIndex: 1 }}>
      {/* Hero Headline */}
      <div className="reveal-fade-up" style={{ transitionDelay: '0ms' }}>
        <h1 id="home-hero-heading" className="home-headline-redesign">
          <span style={{ color: '#ff8a00' }}>Secure</span> and Easy Way<br />
          To Trade{' '}
          <span
            className="gradient-text"
            style={{
              opacity: 1,
              transform: 'translateY(0)',
              display: 'inline-block',
              transition: 'all 0.3s ease',
              minWidth: '220px',
            }}
          >
            {rotatingWords[currentWordIndex]}
          </span>
        </h1>
      </div>

      {/* Main Top Bento Grid */}
      <div className="home-bento-grid">
        {/* Bento Card 1: Personalized OTC Trading */}
        <div className="reveal-fade-up bento-card-outer" style={{ transitionDelay: '80ms' }}>
          <div className="bento-card-inner" style={{ minHeight: '360px' }}>
            {/* Glowing Wave SVG Graphic */}
            <div className="wave-lines-bg">
              <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="glow-orange" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                <path d="M 220 200 C 230 140, 270 110, 310 120 C 340 130, 370 100, 400 70" stroke="#f97316" strokeWidth="1.8" strokeOpacity="0.9" fill="none" filter="url(#glow-orange)" />
                <path d="M 223 200 C 233 141, 272 112, 312 122 C 342 133, 372 103, 400 80" stroke="#ffa800" strokeWidth="1.4" strokeOpacity="0.7" fill="none" />
                <path d="M 226 200 C 236 142, 274 114, 314 124 C 344 136, 374 106, 400 90" stroke="#f97316" strokeWidth="1.4" strokeOpacity="0.7" fill="none" />
                <path d="M 229 200 C 239 143, 276 116, 316 126 C 346 139, 376 109, 400 100" stroke="#ffa800" strokeWidth="1.0" strokeOpacity="0.5" fill="none" />
                <path d="M 232 200 C 242 144, 278 118, 318 128 C 348 142, 378 112, 400 110" stroke="#ffb700" strokeWidth="1.0" strokeOpacity="0.5" fill="none" />
                <path d="M 220 0 C 230 60, 270 90, 310 80 C 340 70, 370 100, 400 130" stroke="#f97316" strokeWidth="1.8" strokeOpacity="0.9" fill="none" filter="url(#glow-orange)" />
                <path d="M 223 0 C 233 59, 272 88, 312 78 C 342 67, 372 97, 400 120" stroke="#ffa800" strokeWidth="1.4" strokeOpacity="0.7" fill="none" />
                <path d="M 226 0 C 236 58, 274 86, 314 76 C 344 64, 374 94, 400 110" stroke="#f97316" strokeWidth="1.4" strokeOpacity="0.7" fill="none" />
                <path d="M 229 0 C 239 57, 276 84, 316 74 C 346 61, 376 91, 400 100" stroke="#ffa800" strokeWidth="1.0" strokeOpacity="0.5" fill="none" />
                <path d="M 232 0 C 242 56, 278 82, 318 72 C 348 58, 378 88, 400 90" stroke="#ffb700" strokeWidth="1.0" strokeOpacity="0.5" fill="none" />
              </svg>
            </div>

            <div style={{ position: 'relative', zIndex: 2 }}>
              <h3 className="bento-title">PERSONALIZED OTC TRADING</h3>
              <p className="bento-desc">
                Physical Bitcoin cryptocurrency OTC exchange solutions, private trades, and institutional counter service.
              </p>

              <div style={{ display: 'flex', gap: '12px', margin: '20px 0 28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255, 138, 0, 0.1)', border: '1px solid rgba(255, 138, 0, 0.25)' }}>
                  <span style={{ color: '#ff9e00', fontWeight: 'bold', fontSize: '1.1rem' }}>₿</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255, 138, 0, 0.1)', border: '1px solid rgba(255, 138, 0, 0.25)' }}>
                  <span style={{ color: '#ff9e00', fontWeight: 'bold', fontSize: '1.1rem' }}>⇅</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255, 138, 0, 0.1)', border: '1px solid rgba(255, 138, 0, 0.25)' }}>
                  <span style={{ color: '#ff9e00', fontWeight: 'bold', fontSize: '1.1rem' }}>📊</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link className="home-btn home-btn--primary pill-button-gold" href="/contact">
                  <span className="home-btn__label">Book Appointment</span>
                </Link>
                <Link className="home-btn home-btn--secondary" href="/services">
                  <span className="home-btn__label">Learn More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Card 2: Compliance & Security */}
        <div className="reveal-fade-up bento-card-outer" style={{ transitionDelay: '140ms' }}>
          <div className="bento-card-inner" style={{ minHeight: '360px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h3 className="bento-title">COMPLIANCE &amp; SECURITY</h3>
              <p className="bento-desc" style={{ marginBottom: '24px', maxWidth: '100%' }}>
                Bitcoin Bazaar is British Columbia&apos;s premier physical cryptocurrency trade counter. We operate physical swap locations ensuring transactions remain local, private, and fully compliant.
              </p>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', background: 'rgba(255, 138, 0, 0.1)', border: '1px solid rgba(255, 138, 0, 0.3)', color: '#ff9e00', fontSize: '0.85rem', fontWeight: 700 }}>
                <span style={{ fontSize: '1rem' }}>🛡️</span> FINTRAC Regulated Desk
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bento Bottom 3 Cards */}
      <div className="bento-bottom-grid">
        {/* Bottom Card 1 */}
        <div className="reveal-fade-up bento-card-outer" style={{ transitionDelay: '200ms' }}>
          <div className="bento-card-inner bottom-card-inner">
            <div className="bottom-card-icon-wrap">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="bottom-card-title">Get Bitcoin Wallet</h3>
            <p className="bottom-card-desc">
              If you don&apos;t already have a wallet and this is your first time dealing with crypto, our expert team is here to help walk you through setup.
            </p>
          </div>
        </div>

        {/* Bottom Card 2 */}
        <div className="reveal-fade-up bento-card-outer" style={{ transitionDelay: '240ms' }}>
          <div className="bento-card-inner bottom-card-inner">
            <div className="bottom-card-icon-wrap">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 className="bottom-card-title">Buy or Sell Cryptocurrency</h3>
            <p className="bottom-card-desc">
              Make an Appointment and Walk in to our location to simply buy or sell Bitcoin and other cryptocurrencies in person with cash or wire.
            </p>
          </div>
        </div>

        {/* Bottom Card 3 */}
        <div className="reveal-fade-up bento-card-outer" style={{ transitionDelay: '280ms' }}>
          <div className="bento-card-inner bottom-card-inner">
            <div className="bottom-card-icon-wrap">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="bottom-card-title">We Are Here to Help</h3>
            <p className="bottom-card-desc">
              If you are new to cryptocurrency and have questions before you make a trade, don&apos;t hesitate to ask our knowledgeable staff.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
