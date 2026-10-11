import React from 'react';
import Link from 'next/link';

export default function LetUsWorkTogether() {
  return (
    <section
      style={{
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px 0',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="site-container" style={{ width: '100%' }}>
        <div
          style={{
            background: 'linear-gradient(180deg, #161c2c 0%, #0d111a 100%)',
            border: '1px solid var(--border-medium)',
            borderRadius: '28px',
            padding: '64px 32px',
            textAlign: 'center',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7)',
            maxWidth: '860px',
            margin: '0 auto',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div className="section-tag" style={{ marginBottom: '20px' }}>
            Trade in Person
          </div>

          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', lineHeight: 1.15, marginBottom: '18px' }}>
            Get Started Today With Bitcoin &amp; Other Cryptos
          </h2>

          <p style={{ maxWidth: '560px', margin: '0 auto 36px', fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            Book an appointment and walk into our Port Coquitlam location to start trading cryptocurrency with cash, e-transfer, or bank wire at guaranteed fair rates!
          </p>

          <Link href="/contact" className="btn-accent" style={{ padding: '16px 36px', fontSize: '1rem' }}>
            Book Appointment &amp; Contact Desk &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
