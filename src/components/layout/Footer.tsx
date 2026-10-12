import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ background: '#05070a', borderTop: '1px solid var(--border-subtle)', padding: '60px 0 36px', position: 'relative', zIndex: 1 }}>
      <div className="site-container">
        <div className="footer-grid">
          {/* Column 1: Brand & Direct Action */}
          <div>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', marginBottom: '18px' }}>
              <Image
                src="/images/logoN.png"
                alt="Bitcoin Bazaar"
                width={155}
                height={42}
                style={{ height: '36px', width: 'auto', display: 'block' }}
              />
            </Link>

            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '20px', maxWidth: '320px' }}>
              British Columbia&apos;s premier physical cryptocurrency trade counter in Port Coquitlam. Regulated, secure, and transparent.
            </p>

            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <div>📍 206 - 2550 Shaughnessy St, Port Coquitlam, BC</div>
              <div style={{ marginTop: '6px' }}>📞 Phone: <a href="tel:7785122676" style={{ color: '#fff', textDecoration: 'none' }}>(778) 512-2676</a></div>
            </div>
          </div>

          {/* Column 2: Menu */}
          <div>
            <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-dim)', marginBottom: '18px' }}>
              Menu
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Home</Link></li>
              <li><Link href="/about" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>About Us</Link></li>
              <li><Link href="/services" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Services</Link></li>
              <li><Link href="/pricing" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Pricing &amp; Fees</Link></li>
              <li><Link href="/contact" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-dim)', marginBottom: '18px' }}>
              OTC Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link href="/services" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>In-Person Cash Desk</Link></li>
              <li><Link href="/services" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Interac e-Transfer</Link></li>
              <li><Link href="/services" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Bank Wire Clearance</Link></li>
              <li><Link href="/services" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>VIP Institutional Desk</Link></li>
              <li><Link href="/faq" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>FAQ &amp; Guides</Link></li>
            </ul>
          </div>

          {/* Column 4: Compliance */}
          <div>
            <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-dim)', marginBottom: '18px' }}>
              Compliance
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link href="/terms" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>AML Policy &amp; Terms</Link></li>
              <li><Link href="/about#risk-warning" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Risk Warning &amp; MSB</Link></li>
              <li><a href="https://api.whatsapp.com/send?phone=7785122676" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}>WhatsApp Direct Chat ↗</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '28px', fontSize: '0.85rem', color: 'var(--text-dim)', flexWrap: 'wrap', gap: '12px' }}>
          <div>Copyright © 2026 Bitcoin Bazaar. All Rights Reserved.</div>
          <div>Built for Port Coquitlam &amp; Greater Vancouver, BC</div>
        </div>
      </div>
    </footer>
  );
}
