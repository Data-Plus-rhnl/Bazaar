'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Fees', href: '/pricing' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className="hc-header">
        {/* Left: Brand Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: '800', fontSize: '1rem' }}>
            ₿
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: '800', fontSize: '1.2rem', letterSpacing: '-0.02em', color: '#fff' }}>
            BITCOIN <span style={{ color: 'var(--accent-primary)' }}>BAZAAR</span>
          </span>
        </Link>

        {/* Center: Clean Nav Links */}
        <nav aria-label="Main Navigation">
          <ul className="hc-nav-links">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`hc-nav-item ${isActive ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right: CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link href="/contact" className="btn-accent" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
            Explore Desk
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-medium)',
              color: '#fff',
              padding: '8px 12px',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
            className="mobile-toggle-btn"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(7, 9, 14, 0.95)',
            zIndex: 99,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-medium)',
              borderRadius: '16px',
              padding: '28px',
              width: '100%',
              maxWidth: '360px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: pathname === link.href ? 'var(--accent-primary)' : 'var(--text-white)',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  padding: '10px 0',
                  borderBottom: '1px solid var(--border-subtle)',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-accent"
              style={{ marginTop: '12px', justifyContent: 'center' }}
            >
              Book In-Person Appointment
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
