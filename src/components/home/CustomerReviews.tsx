import React from 'react';

export default function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      quote: 'Best OTC experience in Vancouver. I walked in with cash and had my Bitcoin safely in my cold storage wallet within 10 minutes. Extremely professional and courteous staff.',
      author: 'David R.',
      role: 'Verified Investor • Vancouver, BC',
      initials: 'DR',
    },
    {
      id: 2,
      quote: 'As a beginner to crypto, I was nervous about setting up my wallet. The team at Bitcoin Bazaar took the time to explain everything step by step. Great rates and zero hidden charges.',
      author: 'Sarah L.',
      role: 'First-time Buyer • Coquitlam, BC',
      initials: 'SL',
    },
    {
      id: 3,
      quote: 'We use Bitcoin Bazaar for all corporate digital treasury settlements. Their direct bank wire clearance is fast, secure, and fully FINTRAC compliant. Highly recommended.',
      author: 'Marcus K.',
      role: 'Corporate Client • Burnaby, BC',
      initials: 'MK',
    },
  ];

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
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-tag" style={{ marginBottom: '14px' }}>
            Client Reviews
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '12px' }}>
            What Our Customers Are Saying
          </h2>
          <p style={{ maxWidth: '580px', margin: '0 auto', fontSize: '1rem' }}>
            Hear what our verified clients say about their in-person OTC trading experience and trusted settlements.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="hc-card"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '24px' }}
            >
              <div>
                {/* 5 Gold Stars */}
                <div style={{ display: 'flex', gap: '4px', color: '#ffb703', fontSize: '1.1rem', marginBottom: '16px' }}>
                  ★★★★★
                </div>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--text-white)', fontStyle: 'italic', margin: 0 }}>
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(249, 115, 22, 0.12)',
                    border: '1px solid rgba(249, 115, 22, 0.3)',
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '800',
                    fontSize: '0.88rem',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {rev.initials}
                </div>
                <div>
                  <div style={{ fontWeight: '700', color: 'var(--text-white)', fontSize: '0.95rem' }}>{rev.author}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{rev.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
