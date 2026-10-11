import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service & AML Policy - Bitcoin Bazaar',
  description: 'Terms of Service, AML compliance policies, and risk disclosures for Bitcoin Bazaar cryptocurrency exchange.',
};

export default function TermsPage() {
  return (
    <div style={{ paddingTop: '120px', paddingBottom: '90px', position: 'relative', zIndex: 1 }}>
      <div className="site-container" style={{ maxWidth: '840px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-tag" style={{ marginBottom: '16px' }}>
            Legal &amp; Compliance
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', marginBottom: '16px', fontWeight: 800 }}>
            Terms of Service &amp; AML Policy
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            Policies, risk disclosures, and regulatory compliance standards for transactions at Bitcoin Bazaar.
          </p>
        </div>

        {/* Content Box */}
        <div className="hc-card" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-white)', marginBottom: '12px' }}>
              1. Risk Notice
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--text-muted)', margin: 0 }}>
              Bitcoin and cryptocurrencies are not legal tender and are not value-guaranteed or insured by any government or financial institution. When purchasing or selling digital assets, the customer acknowledges and assumes market volatility risk. Bitcoin Bazaar makes no guarantee regarding future market valuations.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-white)', marginBottom: '12px' }}>
              2. FINTRAC &amp; Anti-Money Laundering (AML) Compliance
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--text-muted)', margin: 0 }}>
              Bitcoin Bazaar operates in full accordance with Canadian Anti-Money Laundering (AML) and Know-Your-Customer (KYC) regulations under the Proceeds of Crime (Money Laundering) and Terrorist Financing Act (PCMLTFA). Valid government-issued photo identification is required for transactions meeting statutory thresholds.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-white)', marginBottom: '12px' }}>
              3. Customer Wallet &amp; Address Verification
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--text-muted)', margin: 0 }}>
              It is the sole responsibility of the customer to verify the accuracy of the cryptocurrency recipient wallet address and bank details provided. Because blockchain transfers are irreversible once broadcast, transactions sent to customer-supplied addresses cannot be cancelled or reversed.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-white)', marginBottom: '12px' }}>
              4. In-Person Desk Protocol
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--text-muted)', margin: 0 }}>
              All in-person OTC transactions at our Port Coquitlam office are scheduled by appointment only. Real-time market rates are locked and agreed upon at the counter prior to trade execution.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-white)', marginBottom: '12px' }}>
              5. Governing Law
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--text-muted)', margin: 0 }}>
              These terms and services are governed by and construed in accordance with the laws of the Province of British Columbia and the federal laws of Canada applicable therein.
            </p>
          </div>

          <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
              Have questions regarding compliance?
            </span>
            <Link href="/contact" className="btn-accent" style={{ padding: '10px 24px', fontSize: '0.88rem' }}>
              Contact Our Desk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
