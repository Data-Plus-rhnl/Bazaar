'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function LiveTradeCalculator() {
  const [cadAmount, setCadAmount] = useState('1000');
  const [cryptoType, setCryptoType] = useState<'BTC' | 'ETH' | 'USDT'>('BTC');
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');

  const prices = {
    BTC: 94850,
    ETH: 4520,
    USDT: 1.38,
  };

  const currentPrice = prices[cryptoType];
  const numCad = parseFloat(cadAmount) || 0;
  const feePercent = numCad <= 500 ? 0.055 : numCad <= 1000 ? 0.05 : numCad <= 3000 ? 0.045 : 0.04;
  const netCad = tradeType === 'buy' ? numCad * (1 - feePercent) : numCad;
  const cryptoOutput = (netCad / currentPrice).toFixed(6);

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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }}>
          {/* Left Column */}
          <div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.15, marginBottom: '20px' }}>
              Viewing Real-Time Exchange Rates
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '28px', maxWidth: '480px' }}>
              Our transparent desk model is designed to eliminate uncertainty. Calculate your exact payout or purchase amount in Canadian Dollars (CAD) with zero hidden markups.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(249, 115, 22, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: 'bold' }}>✓</div>
                <span style={{ color: 'var(--text-white)', fontWeight: '600' }}>Locked rate at the time of your appointment</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(249, 115, 22, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: 'bold' }}>✓</div>
                <span style={{ color: 'var(--text-white)', fontWeight: '600' }}>Same-day settlement in Cash or Interac e-Transfer</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(249, 115, 22, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: 'bold' }}>✓</div>
                <span style={{ color: 'var(--text-white)', fontWeight: '600' }}>Direct transfer to your self-custody wallet</span>
              </div>
            </div>

            <Link href="/contact" className="btn-accent">
              Explore Desk
            </Link>
          </div>

          {/* Right Column: Interactive Calculator Terminal */}
          <div
            style={{
              background: 'linear-gradient(180deg, #121826 0%, #0c101a 100%)',
              border: '1px solid var(--border-medium)',
              borderRadius: '24px',
              padding: '32px',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Instant OTC Calculator</h3>
              {/* Buy / Sell Toggle */}
              <div style={{ display: 'flex', background: 'rgba(0,0,0,0.4)', borderRadius: '999px', padding: '4px', border: '1px solid var(--border-subtle)' }}>
                <button
                  type="button"
                  onClick={() => setTradeType('buy')}
                  style={{
                    background: tradeType === 'buy' ? 'var(--accent-primary)' : 'transparent',
                    color: tradeType === 'buy' ? '#000' : 'var(--text-muted)',
                    border: 'none',
                    borderRadius: '999px',
                    padding: '6px 16px',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                  }}
                >
                  Buy
                </button>
                <button
                  type="button"
                  onClick={() => setTradeType('sell')}
                  style={{
                    background: tradeType === 'sell' ? 'var(--accent-primary)' : 'transparent',
                    color: tradeType === 'sell' ? '#000' : 'var(--text-muted)',
                    border: 'none',
                    borderRadius: '999px',
                    padding: '6px 16px',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                  }}
                >
                  Sell
                </button>
              </div>
            </div>

            {/* Currency Input */}
            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-dim)', fontWeight: '700', marginBottom: '8px' }}>
                You Pay (CAD)
              </label>
              <div style={{ display: 'flex', background: '#07090e', border: '1px solid var(--border-medium)', borderRadius: '12px', overflow: 'hidden' }}>
                <input
                  type="number"
                  value={cadAmount}
                  onChange={(e) => setCadAmount(e.target.value)}
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    color: '#fff',
                    padding: '14px 18px',
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    outline: 'none',
                  }}
                  placeholder="1000"
                />
                <div style={{ display: 'flex', alignItems: 'center', padding: '0 18px', background: 'rgba(255,255,255,0.04)', fontWeight: '700', fontSize: '0.9rem', color: 'var(--accent-primary)' }}>
                  CAD $
                </div>
              </div>
            </div>

            {/* Select Crypto */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-dim)', fontWeight: '700', marginBottom: '8px' }}>
                You Receive ({cryptoType})
              </label>
              <div style={{ display: 'flex', background: '#07090e', border: '1px solid var(--border-medium)', borderRadius: '12px', overflow: 'hidden' }}>
                <div
                  style={{
                    flex: 1,
                    padding: '14px 18px',
                    fontSize: '1.2rem',
                    fontWeight: '800',
                    color: 'var(--text-white)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {cryptoOutput}
                </div>
                <select
                  value={cryptoType}
                  onChange={(e) => setCryptoType(e.target.value as any)}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: 'none',
                    color: '#fff',
                    padding: '0 18px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    outline: 'none',
                  }}
                >
                  <option value="BTC" style={{ background: '#0d111a' }}>BTC (Bitcoin)</option>
                  <option value="ETH" style={{ background: '#0d111a' }}>ETH (Ethereum)</option>
                  <option value="USDT" style={{ background: '#0d111a' }}>USDT (Tether)</option>
                </select>
              </div>
            </div>

            {/* Summary details */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '14px 18px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px', color: 'var(--text-muted)' }}>
                <span>Estimated Market Rate:</span>
                <span style={{ color: '#fff', fontWeight: '600' }}>1 {cryptoType} = ${currentPrice.toLocaleString()} CAD</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <span>Commission Fee ({(feePercent * 100).toFixed(1)}%):</span>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '600' }}>${(numCad * feePercent).toFixed(2)} CAD</span>
              </div>
            </div>

            <Link href="/contact" className="btn-accent" style={{ width: '100%', justifyContent: 'center', padding: '14px' }}>
              Lock Rate &amp; Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
