'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  desc: string;
  features: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: 'crypto-exchange',
    num: '01',
    title: 'Physical Cash & Crypto Exchange',
    desc: 'Walk into our Port Coquitlam trade counter and use Cash (CAD), Interac e-Transfer, or direct Canadian Bank Wire to buy or sell Bitcoin. We support Bitcoin (BTC), Ethereum (ETH), USDT, USDC, and all major digital currencies.',
    features: [
      'In-person physical cash trade desk',
      'Interac e-Transfer & Canadian Bank Wire support',
      'Guaranteed locked real-time quotes',
      'Direct transfer to your personal non-custodial wallet',
      'Private 1-on-1 scheduled appointments',
    ],
  },
  {
    id: 'bitcoin-investment',
    num: '02',
    title: 'Bitcoin Wealth & OTC Trading',
    desc: 'Personalized private wealth and corporate treasury digital asset allocation. We assist high-net-worth individuals and corporate entities with structured crypto acquisitions and secure cold-storage custody solutions.',
    features: [
      'High-volume VIP OTC execution',
      'Dedicated relationship manager',
      'Cold storage hardware setup assistance',
      'Full Canadian FINTRAC compliance & invoicing',
    ],
  },
  {
    id: 'mining-investment',
    num: '03',
    title: 'Mining Payout & Institutional Settlements',
    desc: 'Direct liquidation pathways for cryptocurrency mining operations and liquidity providers. Convert large mining rewards into Canadian Dollars with same-day wire clearance.',
    features: [
      'High-throughput bulk order settlements',
      'Direct Canadian bank wire clearance',
      'Zero price slippage on block transactions',
      'Corporate treasury documentation',
    ],
  },
  {
    id: 'future-trades',
    num: '04',
    title: 'Large-Block OTC Liquidity',
    desc: 'Deep liquidity routing for large-block orders with minimal market slippage. We provide fixed-quote execution for institutional traders, family offices, and crypto-native enterprises.',
    features: [
      'Zero slippage on large transactions',
      'Same-day guaranteed settlement',
      'Comprehensive AML verification',
      'Dedicated private room at our Port Coquitlam office',
    ],
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const current = servicesData[activeTab];

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '90px', position: 'relative', zIndex: 1 }}>
      <div className="site-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-tag" style={{ marginBottom: '16px' }}>
            Our Services
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', marginBottom: '16px', fontWeight: 800 }}>
            Cryptocurrency OTC Services
          </h1>
          <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Comprehensive in-person OTC exchange solutions, private desk trades, and cash/wire settlements in British Columbia.
          </p>
        </div>

        {/* Interactive Service Showcase Grid */}
        <div className="services-grid">
          {/* Left: Service Selector Tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {servicesData.map((s, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  style={{
                    background: isActive ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                    border: isActive ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                    borderRadius: '16px',
                    padding: '20px 24px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease',
                    boxShadow: isActive ? '0 10px 30px rgba(243, 144, 25, 0.15)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 800,
                        fontSize: '0.9rem',
                        color: isActive ? 'var(--accent-primary)' : 'var(--text-dim)',
                      }}
                    >
                      {s.num}
                    </span>
                    <span style={{ fontSize: '1.05rem', fontWeight: 700, color: isActive ? '#fff' : 'var(--text-muted)' }}>
                      {s.title}
                    </span>
                  </div>
                  <span style={{ color: isActive ? 'var(--accent-primary)' : 'var(--text-dim)', fontSize: '1.2rem' }}>
                    &rarr;
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Active Service Detail Card */}
          <div
            className="hc-card"
            style={{
              padding: '40px 36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'linear-gradient(180deg, #101624 0%, #0c101a 100%)',
              border: '1px solid var(--border-medium)',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span className="section-tag" style={{ margin: 0 }}>
                  Service {current.num} of 04
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 700 }}>
                  Port Coquitlam Desk
                </span>
              </div>

              <h2 style={{ fontSize: '1.8rem', color: 'var(--text-white)', marginBottom: '18px' }}>
                {current.title}
              </h2>

              <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--text-muted)', marginBottom: '28px' }}>
                {current.desc}
              </p>

              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '24px', marginBottom: '32px' }}>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '16px', fontWeight: 700 }}>
                  Key Features &amp; Capabilities
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {current.features.map((feat, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem', color: 'var(--text-white)' }}>
                      <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-accent" style={{ padding: '12px 30px' }}>
                Book This Service &rarr;
              </Link>
              <Link href="/pricing" className="btn-outline" style={{ padding: '12px 24px' }}>
                View OTC Rates
              </Link>
            </div>
          </div>
        </div>

        {/* Walk-in Process Banner */}
        <div
          style={{
            background: 'rgba(243, 144, 25, 0.05)',
            border: '1px solid rgba(243, 144, 25, 0.25)',
            borderRadius: '20px',
            padding: '36px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '8px', color: '#fff' }}>
              Ready to trade Bitcoin in person?
            </h3>
            <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              Call <a href="tel:7785122676" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 700 }}>(778) 512-2676</a> or schedule a private desk appointment online.
            </p>
          </div>
          <Link href="/contact" className="btn-accent">
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
