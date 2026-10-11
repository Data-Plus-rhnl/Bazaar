import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Bitcoin Bazaar | Affordable Cryptocurrency Exchange in Vancouver',
  description: 'Learn about Bitcoin Bazaar, British Columbia’s premier physical cryptocurrency trade counter based in Port Coquitlam.',
};

export default function AboutPage() {
  const advantages = [
    {
      num: '01',
      title: 'First Time Buyers',
      desc: 'Our staff is happy to answer your questions and guide you step-by-step if this is your first time purchasing cryptocurrency.',
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Area of Service',
      desc: 'Conveniently located in Port Coquitlam, serving Greater Vancouver, Coquitlam, Burnaby, Surrey, and the Lower Mainland.',
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Payment Options',
      desc: 'Deposit or request funds using Physical Cash (CAD), Interac e-Transfer, or direct Canadian Bank Wire Transfers.',
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <circle cx="12" cy="12" r="2" />
          <path d="M6 12h.01M18 12h.01" />
        </svg>
      ),
    },
    {
      num: '04',
      title: 'Non-Custodial Wallet',
      desc: 'Cryptocurrency is delivered directly to your personal cold storage hardware or mobile wallet. You maintain 100% control of your private keys.',
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      num: '05',
      title: 'Affordable & Transparent Rates',
      desc: 'Transparent tiered commission rates with guaranteed real-time locked market quotes and zero hidden spreads or surprise fees.',
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
        </svg>
      ),
    },
    {
      num: '06',
      title: 'High Liquidity & Fast Settlement',
      desc: 'Institutional-grade liquidity network ensures zero slippage and immediate execution for both small trades and large-block VIP transactions.',
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '90px', position: 'relative', zIndex: 1 }}>
      <div className="site-container">
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-tag" style={{ marginBottom: '16px' }}>
            Who We Are
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', marginBottom: '16px', fontWeight: 800 }}>
            About Bitcoin Bazaar
          </h1>
          <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            British Columbia&apos;s premier physical cryptocurrency trade counter in Port Coquitlam.
          </p>
        </div>

        {/* Overview Box */}
        <div className="hc-card" style={{ padding: '48px 36px', marginBottom: '56px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--text-white)', marginBottom: '18px' }}>
                A Trusted Place to Buy &amp; Sell Bitcoin in Person
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '24px' }}>
                Bitcoin Bazaar is a place for everyone who wants to simply buy and sell Bitcoins and other cryptocurrencies. Deposit or request funds using <strong>Cash</strong>, <strong>Interac Email Transfer</strong>, or <strong>Wire Transfer</strong>. Instant buy/sell of Bitcoins at a fair price is guaranteed.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-accent">
                  Book Appointment
                </Link>
                <Link href="/services" className="btn-outline">
                  Our Services
                </Link>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div
              style={{
                background: 'rgba(7, 9, 14, 0.7)',
                border: '1px solid var(--border-medium)',
                borderRadius: '16px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>Desk Location</div>
                <div style={{ fontSize: '1.05rem', color: '#fff', fontWeight: 600, marginTop: '4px' }}>Unit 206, 2550 Shaughnessy St</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Port Coquitlam, BC V3C 3G3</div>
              </div>
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '14px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>Regulation</div>
                <div style={{ fontSize: '1.05rem', color: 'var(--accent-primary)', fontWeight: 700, marginTop: '4px' }}>FINTRAC Registered MSB</div>
              </div>
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '14px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>Direct Contact</div>
                <div style={{ fontSize: '1.05rem', color: '#fff', fontWeight: 600, marginTop: '4px' }}>(778) 512-2676</div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Core Advantages Grid */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="section-tag" style={{ marginBottom: '12px' }}>
              Why Choose Us
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)' }}>Our Core Advantages</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {advantages.map((adv) => (
              <div key={adv.num} className="hc-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(249, 115, 22, 0.12)',
                      border: '1px solid rgba(249, 115, 22, 0.3)',
                      color: 'var(--accent-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {adv.icon}
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                    {adv.num}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-white)' }}>{adv.title}</h3>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Warning & Compliance */}
        <div
          id="risk-warning"
          style={{
            borderLeft: '4px solid var(--accent-primary)',
            background: 'rgba(249, 115, 22, 0.05)',
            padding: '28px 32px',
            borderRadius: '0 16px 16px 0',
            borderTop: '1px solid rgba(249, 115, 22, 0.2)',
            borderRight: '1px solid rgba(249, 115, 22, 0.2)',
            borderBottom: '1px solid rgba(249, 115, 22, 0.2)',
          }}
        >
          <h4 style={{ color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.95rem', fontWeight: 800, marginBottom: '10px' }}>
            ⚠️ Risk Warning &amp; Regulatory Compliance
          </h4>
          <p style={{ fontSize: '0.92rem', lineHeight: 1.75, color: 'var(--text-muted)', margin: 0 }}>
            Bitcoin is not legal tender and is not backed by any government. Accounts and value balances are not subject to any government-backed deposit insurance. Bitcoin Bazaar operates strictly under Canadian Anti-Money Laundering (AML) and FINTRAC regulatory guidelines.
          </p>
        </div>
      </div>
    </div>
  );
}

