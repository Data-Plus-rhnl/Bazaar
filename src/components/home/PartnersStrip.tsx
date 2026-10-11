import React from 'react';

export default function PartnersStrip() {
  const brands = [
    {
      name: 'FINTRAC Regulated',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      name: 'Physical Cash (CAD)',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <circle cx="12" cy="12" r="2" />
          <path d="M6 12h.01M18 12h.01" />
        </svg>
      ),
    },
    {
      name: 'Interac e-Transfer',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      name: 'Canadian Bank Wire',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="21" x2="21" y2="21" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <polyline points="5 6 12 3 19 6" />
          <line x1="6" y1="10" x2="6" y2="21" />
          <line x1="10" y1="10" x2="10" y2="21" />
          <line x1="14" y1="10" x2="14" y2="21" />
          <line x1="18" y1="10" x2="18" y2="21" />
        </svg>
      ),
    },
    {
      name: 'Bitcoin Network',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M10 8h3.5a2 2 0 0 1 0 4H10v-4z" />
          <path d="M10 12h4a2 2 0 0 1 0 4H10v-4z" />
        </svg>
      ),
    },
    {
      name: 'USDT / USDC Settlement',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v12M15 9.5a3 3 0 0 0-6 0c0 3 6 1.5 6 4.5a3 3 0 0 1-6 0" />
        </svg>
      ),
    },
  ];

  return (
    <div style={{ padding: '28px 0', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', position: 'relative', zIndex: 1 }}>
      <div className="site-container">
        <div className="partners-strip-scroll">
          {brands.map((b, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: 'var(--text-muted)',
                opacity: 0.8,
                flexShrink: 0,
                transition: 'opacity 0.2s ease, color 0.2s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {b.icon}
              </div>
              <span style={{ fontSize: '0.95rem', fontWeight: '700', letterSpacing: '-0.01em', color: '#e2e8f0', fontFamily: 'var(--font-display)' }}>
                {b.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

