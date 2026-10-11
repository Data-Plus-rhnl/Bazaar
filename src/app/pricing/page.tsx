'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface TierItem {
  id: string;
  range: string;
  rate: string;
  tierName: string;
  popular?: boolean;
  desc: string;
  features: string[];
}

const pricingTiers: TierItem[] = [
  {
    id: 'tier-1',
    range: '$50 - $500',
    rate: '5.5%',
    tierName: 'Starter Tier',
    desc: 'Ideal for first-time buyers looking to get started with Bitcoin and crypto using cash or e-Transfer.',
    features: [
      'Physical cash trade desk',
      'Interac e-Transfer supported',
      'Wallet setup guidance',
      'No hidden fees or spread',
    ],
  },
  {
    id: 'tier-2',
    range: '$501 - $1,000',
    rate: '5.0%',
    tierName: 'Bronze Tier',
    desc: 'Great for regular accumulators and small-volume recurring traders.',
    features: [
      'Cash & e-Transfer support',
      'Guaranteed locked quote',
      'Instant non-custodial wallet delivery',
      'Transaction receipt & AML documentation',
    ],
  },
  {
    id: 'tier-3',
    range: '$1,001 - $3,000',
    rate: '4.5%',
    tierName: 'Premium Tier',
    popular: true,
    desc: 'Our most popular tier for active investors and private desk appointments.',
    features: [
      'Cash, e-Transfer & Bank Wire',
      'Preferred OTC rate',
      'Dedicated private room appointment',
      'Locked market execution',
      'Complete AML receipt',
    ],
  },
  {
    id: 'tier-4',
    range: '$3,001 - $9,700+',
    rate: '4.0%',
    tierName: 'VIP Volume Tier',
    desc: 'Designed for high-net-worth investors, family offices, and corporate accounts.',
    features: [
      'Lowest commission in BC',
      'Direct Canadian bank wire clearance',
      'Zero queue VIP scheduling',
      'Corporate invoicing & FINTRAC filing',
    ],
  },
];

export default function PricingPage() {
  const [cadAmount, setCadAmount] = useState('2500');
  const btcRate = 92450; // Mock current CAD rate

  const numAmount = parseFloat(cadAmount) || 0;
  let commissionRate = 0.055;
  if (numAmount > 3000) commissionRate = 0.04;
  else if (numAmount > 1000) commissionRate = 0.045;
  else if (numAmount > 500) commissionRate = 0.05;

  const fee = numAmount * commissionRate;
  const netAmount = Math.max(0, numAmount - fee);
  const estimatedBtc = netAmount / btcRate;

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '90px', position: 'relative', zIndex: 1 }}>
      <div className="site-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-tag" style={{ marginBottom: '16px' }}>
            Transparent Rates
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', marginBottom: '16px', fontWeight: 800 }}>
            OTC Fees &amp; Pricing
          </h1>
          <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Transparent commission rates based on trade volume with zero hidden spreads or surprise charges.
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '64px' }}>
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className="hc-card"
              style={{
                background: tier.popular ? 'linear-gradient(180deg, #182030 0%, #0d121c 100%)' : 'var(--bg-card)',
                border: tier.popular ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                boxShadow: tier.popular ? '0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(249, 115, 22, 0.2)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: tier.popular ? 'var(--accent-primary)' : 'var(--text-dim)' }}>
                    {tier.tierName}
                  </span>
                  {tier.popular && (
                    <span style={{ background: 'var(--accent-primary)', color: '#000', fontSize: '0.68rem', fontWeight: 800, padding: '2px 8px', borderRadius: '999px', textTransform: 'uppercase' }}>
                      Most Popular
                    </span>
                  )}
                </div>

                <div style={{ fontSize: '2.6rem', fontWeight: 900, color: '#fff', fontFamily: 'var(--font-display)', lineHeight: 1 }}>
                  {tier.rate}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px', marginBottom: '20px' }}>
                  Volume: <strong style={{ color: '#fff' }}>{tier.range}</strong>
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
                  {tier.desc}
                </p>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '20px', marginBottom: '28px' }}>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {tier.features.map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-white)' }}>
                        <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href="/contact"
                className={tier.popular ? 'btn-accent' : 'btn-outline'}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Book Trade
              </Link>
            </div>
          ))}
        </div>

        {/* Live Estimation Calculator */}
        <div
          className="hc-card"
          style={{
            padding: '48px 36px',
            background: 'linear-gradient(180deg, #121826 0%, #0c101a 100%)',
            border: '1px solid var(--border-medium)',
            marginBottom: '48px',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div className="section-tag" style={{ marginBottom: '12px' }}>
              Real-Time Estimate
            </div>
            <h2 style={{ fontSize: '1.8rem', color: '#fff' }}>Instant Fee &amp; Exchange Calculator</h2>
          </div>

          <div className="responsive-2col-grid" style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dim)', marginBottom: '8px', fontWeight: 700 }}>
                You Pay (CAD)
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="number"
                  value={cadAmount}
                  onChange={(e) => setCadAmount(e.target.value)}
                  className="hc-input"
                  style={{ fontSize: '1.3rem', fontWeight: 700, paddingRight: '70px' }}
                />
                <span style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)', fontWeight: 800 }}>
                  CAD $
                </span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                Applied Tier: <strong>{(commissionRate * 100).toFixed(1)}% commission</strong>
              </div>
            </div>

            <div
              style={{
                background: 'rgba(7, 9, 14, 0.8)',
                border: '1px solid var(--border-medium)',
                borderRadius: '16px',
                padding: '24px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <span>Desk Fee ({(commissionRate * 100).toFixed(1)}%):</span>
                <span style={{ color: '#fff', fontWeight: 700 }}>${fee.toFixed(2)} CAD</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <span>Net Trading Funds:</span>
                <span style={{ color: '#fff', fontWeight: 700 }}>${netAmount.toFixed(2)} CAD</span>
              </div>
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>You Receive (Estimated)</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--accent-primary)', fontFamily: 'var(--font-display)', marginTop: '4px' }}>
                  ≈ {estimatedBtc.toFixed(6)} BTC
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
