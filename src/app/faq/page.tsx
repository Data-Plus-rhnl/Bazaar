'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  id: string;
  q: string;
  a: string;
}

const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    q: 'What is Bitcoin?',
    a: 'Bitcoin is a form of digital currency based on an open-source cryptographic protocol created and held electronically. Bitcoin is decentralized, meaning that it is not issued by any government or controlled by a single central authority.',
  },
  {
    id: 'faq-2',
    q: 'Who Developed Bitcoin?',
    a: 'The original Bitcoin protocol and software was authored by Satoshi Nakamoto under an MIT open source license. In 2008 Nakamoto published the White Paper outlining how peer-to-peer digital cash operates with trust in mathematics over intermediaries. In 2010, Satoshi handed development over to the global open-source community.',
  },
  {
    id: 'faq-3',
    q: 'What is Bitcoin Mining?',
    a: 'Bitcoin mining secures the blockchain network by having specialized computer hardware solve cryptographic proof-of-work equations. In return for validating blocks and securing the system, miners receive transaction fees and block rewards in newly minted Bitcoin.',
  },
  {
    id: 'faq-4',
    q: 'How does an in-person trade at Bitcoin Bazaar work?',
    a: 'Simply book an appointment through our website or phone/WhatsApp. When you arrive at our Port Coquitlam trade counter (Unit 206), we lock your rate, receive your cash, wire, or crypto, and instantly execute the transfer directly to your designated personal wallet or bank account.',
  },
  {
    id: 'faq-5',
    q: 'What identification / KYC is required?',
    a: 'Under Canadian FINTRAC regulations, transactions above specific statutory thresholds require standard government photo ID (Driver’s License or Passport). Our team ensures the verification process is quick, confidential, and fully compliant with Canadian law.',
  },
  {
    id: 'faq-6',
    q: 'What payment methods do you accept?',
    a: 'We accept Physical Cash at our trade counter, Interac e-Transfer for fast remote funding, and direct Canadian/International Bank Wire Transfers for high-volume orders.',
  },
  {
    id: 'faq-7',
    q: 'How can I sell Bitcoin for Canadian Dollars (CAD)?',
    a: 'You can sell your Bitcoin directly at our Port Coquitlam desk. Once the blockchain transaction confirms, we hand you cash on the spot or dispatch an instant Interac e-Transfer or wire directly to your Canadian bank account.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '90px', position: 'relative', zIndex: 1 }}>
      <div className="site-container" style={{ maxWidth: '840px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-tag" style={{ marginBottom: '16px' }}>
            Help &amp; Documentation
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', marginBottom: '16px', fontWeight: 800 }}>
            Frequently Asked Questions
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Everything you need to know about trading Bitcoin in person at our Port Coquitlam OTC desk.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '56px' }}>
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.id}
                className="hc-card"
                style={{
                  padding: 0,
                  overflow: 'hidden',
                  border: isOpen ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                  transition: 'border-color 0.2s ease',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    padding: '24px 28px',
                    textAlign: 'left',
                    color: '#fff',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    gap: '16px',
                  }}
                >
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>
                    {item.q}
                  </span>
                  <span
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isOpen ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.08)',
                      color: isOpen ? '#000' : '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      flexShrink: 0,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div style={{ padding: '0 28px 24px', borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
                    <p style={{ fontSize: '0.98rem', lineHeight: 1.8, color: 'var(--text-muted)', margin: 0 }}>
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout Box */}
        <div
          className="hc-card"
          style={{
            padding: '36px',
            textAlign: 'center',
            background: 'linear-gradient(180deg, #141a29 0%, #0c101a 100%)',
            border: '1px solid var(--border-medium)',
          }}
        >
          <h3 style={{ fontSize: '1.35rem', marginBottom: '8px', color: '#fff' }}>
            Have a Question Not Listed Here?
          </h3>
          <p style={{ maxWidth: '480px', margin: '0 auto 24px', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
            Our team is always available to assist with custom inquiries, large OTC volumes, and payment routing.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-accent">
              Contact OTC Desk
            </Link>
            <a href="tel:7785122676" className="btn-outline">
              Call (778) 512-2676
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
