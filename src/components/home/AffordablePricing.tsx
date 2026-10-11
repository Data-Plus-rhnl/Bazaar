import React from 'react';
import Link from 'next/link';

export default function AffordablePricing() {
  const tiers = [
    {
      id: 'starter',
      label: 'Starter OTC',
      range: '$50 - $500',
      rate: '5.5%',
      popular: false,
      features: [
        'Instant in-person cash settlement',
        'Interac e-Transfer supported',
        'Direct transfer to your personal wallet',
        'No hidden spreads or slippage',
      ],
    },
    {
      id: 'premium',
      label: 'Popular Tier',
      range: '$1,001 - $3,000',
      rate: '4.5%',
      popular: true,
      features: [
        'Preferred OTC desk rate',
        'Cash, Bank Wire & e-Transfer',
        'Dedicated 1-on-1 private appointment',
        'Real-time locked market quote',
        'Complete AML transaction receipt',
      ],
    },
    {
      id: 'vip',
      label: 'VIP Institutional',
      range: '$3,001 - $9,700+',
      rate: '4.0%',
      popular: false,
      features: [
        'Lowest commission rate in BC',
        'Direct Canadian bank wire clearance',
        'Zero queue VIP scheduling',
        'Custom corporate invoicing & FINTRAC report',
      ],
    },
  ];

  return (
    <section className="home-fullscreen-section">
      <div className="site-container" style={{ width: '100%' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-tag">Pricing</div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', marginBottom: '14px' }}>
            Affordable Rates
          </h2>
          <p style={{ maxWidth: '620px', margin: '0 auto', fontSize: '1rem' }}>
            Buy or Sell Bitcoin and other crypto using Cash, Email Transfer and Wire Transfer. Bitcoin Bazaar offers competitive rates with no hidden charges.
          </p>
        </div>

        {/* 3 High-Contrast Pricing Cards */}
        <div className="responsive-cards-grid" style={{ alignItems: 'stretch' }}>
          {tiers.map((tier) => (
            <div
              key={tier.id}
              style={{
                background: tier.popular ? 'linear-gradient(180deg, #161c2c 0%, #0e131f 100%)' : 'var(--bg-card)',
                border: tier.popular ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                borderRadius: '20px',
                padding: '36px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                boxShadow: tier.popular ? '0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(249, 115, 22, 0.2)' : 'none',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: tier.popular ? 'var(--accent-primary)' : 'var(--text-dim)', fontWeight: '700' }}>
                    {tier.label}
                  </span>
                  {tier.popular && (
                    <span style={{ background: 'var(--accent-primary)', color: '#000', fontSize: '0.7rem', fontWeight: '800', padding: '3px 10px', borderRadius: '999px', textTransform: 'uppercase' }}>
                      Most Popular
                    </span>
                  )}
                </div>

                <div style={{ fontSize: '2.8rem', fontWeight: '900', color: 'var(--text-white)', fontFamily: 'var(--font-display)', lineHeight: 1 }}>
                  {tier.rate}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '6px', marginBottom: '28px' }}>
                  For trade volumes of <strong style={{ color: '#fff' }}>{tier.range}</strong>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '24px', marginBottom: '32px' }}>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {tier.features.map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
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
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
