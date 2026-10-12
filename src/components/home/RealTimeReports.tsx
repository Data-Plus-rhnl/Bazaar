import React from 'react';
import Link from 'next/link';

export default function RealTimeReports() {
  const reports = [
    {
      id: 'wallet',
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: 'Get Bitcoin Wallet',
      desc: 'If you don\'t already have a wallet and this is your first time dealing with crypto, we are here to help you set up and secure your non-custodial wallet.',
    },
    {
      id: 'trade',
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: 'Buy or Sell Cryptocurrency',
      desc: 'Make an Appointment and Walk in to our Port Coquitlam location and simply buy or sell Bitcoin and other cryptocurrencies with Cash, e-Transfer, or Wire.',
    },
    {
      id: 'help',
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'We Are Here to Help',
      desc: 'If you are new to cryptocurrency and have questions before you make a trade, don\'t hesitate to ask our expert counter specialists.',
    },
  ];

  return (
    <section className="home-fullscreen-section">
      <div className="site-container" style={{ width: '100%' }}>
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-tag" style={{ marginBottom: '14px' }}>
            Simple OTC Process
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', marginBottom: '12px' }}>
            How Bitcoin Bazaar Works
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}>
            Our mission is to reduce high fees, create transparency, and enable you to trade with peace of mind knowing you get the best rate in BC.
          </p>
        </div>

        {/* 3 High-Contrast Cards */}
        <div className="responsive-cards-grid">
          {reports.map((item) => (
            <div key={item.id} className="hc-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
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

              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-white)' }}>{item.title}</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

