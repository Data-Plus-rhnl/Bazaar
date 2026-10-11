import React from 'react';
import Link from 'next/link';

export default function HomeCTA() {
  return (
    <section className="home-cta" aria-labelledby="cta-heading" style={{ position: 'relative', zIndex: 1 }}>
      <div className="reveal-fade-up home-container" style={{ transitionDelay: '0ms' }}>
        <div className="home-cta__shell">
          <div className="home-cta__inner">
            <h2 id="cta-heading">Get Started Today With Bitcoin and other Cryptos</h2>
            <p>Book an appointment and walk in to our location and start trading cryptocurrency!</p>
            <Link className="home-btn home-btn--primary pill-button-gold" href="/contact">
              <span className="home-btn__label">Contact Now</span>
              <span className="home-btn__icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H8M17 7V16" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
