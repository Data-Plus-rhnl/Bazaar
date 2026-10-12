import React from 'react';
import Link from 'next/link';

export default function SecurityPrivacyGrid() {
  const pillars = [
    {
      id: 'compliance',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: 'FINTRAC Regulated MSB',
      desc: 'Bitcoin Bazaar operates as a fully registered Canadian Money Services Business (MSB) complying with federal AML/KYC guidelines.',
    },
    {
      id: 'physical',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: 'Physical Trade Counter',
      desc: 'Our private office in Port Coquitlam eliminates online exchange holding periods, giving you direct in-person settlement with cash or wire.',
    },
    {
      id: 'custody',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      title: 'Non-Custodial Delivery',
      desc: 'We never hold your coins or private keys. Crypto is delivered directly to your personal hardware or self-custody software wallet.',
    },
  ];

  return (
    <section className="home-fullscreen-section">
      <div className="site-container" style={{ width: '100%' }}>
        {/* Section Title */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div className="section-tag" style={{ marginBottom: '14px' }}>
              Security First
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '10px' }}>
              Compliance, Privacy &amp; Protection
            </h2>
            <p style={{ margin: 0, fontSize: '1rem', maxWidth: '540px' }}>
              Built for Canadian investors who demand non-custodial sovereignty, security, and trusted local in-person service.
            </p>
          </div>
          <Link href="/about" className="btn-outline" style={{ fontSize: '0.85rem', padding: '10px 20px' }}>
            About Our Desk
          </Link>
        </div>

        {/* 3 Pillar Cards */}
        <div className="responsive-cards-grid">
          {pillars.map((item) => (
            <div key={item.id} className="hc-card" style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(243, 144, 25, 0.12)',
                  border: '1px solid rgba(243, 144, 25, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-primary)',
                }}
              >
                {item.icon}
              </div>

              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-white)' }}>{item.title}</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
