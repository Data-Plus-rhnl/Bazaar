'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tradeType: 'buy',
    amount: '$1,000 - $3,000 CAD',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '90px', position: 'relative', zIndex: 1 }}>
      <div className="site-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-tag" style={{ marginBottom: '16px' }}>
            Get in Touch
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', marginBottom: '16px', fontWeight: 800 }}>
            Book Your OTC Appointment
          </h1>
          <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Visit our physical trade counter in Port Coquitlam, BC for secure, private cryptocurrency buying and selling.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Office Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="hc-card" style={{ padding: '36px' }}>
              <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '16px' }}>
                Port Coquitlam Trade Counter
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--text-muted)', marginBottom: '24px' }}>
                To maintain complete privacy, security, and dedicated 1-on-1 service, all visits are scheduled <strong>by appointment only</strong>.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Address */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(249, 115, 22, 0.12)', border: '1px solid rgba(249, 115, 22, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', flexShrink: 0 }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dim)', fontWeight: 700 }}>Location</div>
                    <div style={{ fontSize: '1rem', color: '#fff', fontWeight: 600 }}>Unit 206, 2550 Shaughnessy St</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Port Coquitlam, BC V3C 3G3</div>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(249, 115, 22, 0.12)', border: '1px solid rgba(249, 115, 22, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', flexShrink: 0 }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dim)', fontWeight: 700 }}>Direct Line</div>
                    <a href="tel:7785122676" style={{ fontSize: '1rem', color: 'var(--accent-primary)', fontWeight: 700, textDecoration: 'none' }}>
                      (778) 512-2676
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(249, 115, 22, 0.12)', border: '1px solid rgba(249, 115, 22, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', flexShrink: 0 }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dim)', fontWeight: 700 }}>Operating Hours</div>
                    <div style={{ fontSize: '1rem', color: '#fff', fontWeight: 600 }}>Monday &ndash; Saturday</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>By Appointment Only</div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Chat */}
            <div
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#10b981' }}>Fast WhatsApp Inquiry</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Instant reply for quotes and scheduling</div>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=7785122676"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#10b981',
                  color: '#000',
                  padding: '8px 18px',
                  borderRadius: '999px',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                }}
              >
                Chat Now ↗
              </a>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="hc-card" style={{ padding: '40px 36px' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '8px' }}>
              Schedule Appointment
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '28px' }}>
              Fill in your details and our trade specialist will confirm your time and lock in your quote.
            </p>

            {submitted ? (
              <div style={{ padding: '36px 24px', textAlign: 'center', background: 'rgba(16, 185, 129, 0.08)', border: '1px solid #10b981', borderRadius: '16px' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>✓</div>
                <h4 style={{ fontSize: '1.3rem', color: '#10b981', marginBottom: '8px' }}>Appointment Request Received!</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0 }}>
                  Thank you, <strong>{formData.name}</strong>. Our team will contact you at <strong>{formData.phone || formData.email}</strong> shortly to confirm your booking.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dim)', marginBottom: '8px', fontWeight: 700 }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="hc-input"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dim)', marginBottom: '8px', fontWeight: 700 }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(778) 000-0000"
                      className="hc-input"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dim)', marginBottom: '8px', fontWeight: 700 }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="hc-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dim)', marginBottom: '8px', fontWeight: 700 }}>
                      Action
                    </label>
                    <select
                      value={formData.tradeType}
                      onChange={(e) => setFormData({ ...formData, tradeType: e.target.value })}
                      className="hc-input"
                      style={{ cursor: 'pointer' }}
                    >
                      <option value="buy">Buy Crypto (with Cash / Wire / e-Transfer)</option>
                      <option value="sell">Sell Crypto (for Cash / Wire / e-Transfer)</option>
                      <option value="consultation">First-Time Wallet &amp; Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dim)', marginBottom: '8px', fontWeight: 700 }}>
                      Estimated Trade Volume
                    </label>
                    <select
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      className="hc-input"
                      style={{ cursor: 'pointer' }}
                    >
                      <option value="$50 - $500 CAD">$50 - $500 CAD (5.5%)</option>
                      <option value="$501 - $1,000 CAD">$501 - $1,000 CAD (5.0%)</option>
                      <option value="$1,001 - $3,000 CAD">$1,001 - $3,000 CAD (4.5%)</option>
                      <option value="$3,001 - $9,700+ CAD">$3,001 - $9,700+ CAD (4.0% VIP)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dim)', marginBottom: '8px', fontWeight: 700 }}>
                    Message or Preferred Time
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Let us know your preferred appointment date and time, or any questions..."
                    className="hc-input"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="btn-accent" style={{ width: '100%', justifyContent: 'center', padding: '14px' }}>
                  Confirm Appointment Request &rarr;
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
