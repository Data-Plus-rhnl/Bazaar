'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function AboutSleek() {
  const [activeTab, setActiveTab] = useState<'mission' | 'advantages' | 'promise'>('mission');

  const tabData = {
    mission: {
      title: 'Our Mission',
      desc: 'Our mission is to reduce the high fee that is associated to buying and selling cryptocurrencies, create transparency and enable customers to make trade with a peace of mind knowing they are getting the best deal in the market.',
    },
    advantages: {
      title: 'Our Advantages',
      desc: 'Local British Columbia physical counter service, zero hidden exchange markups, instant settlement via Cash, Wire, or Interac e-Transfer, and 1-on-1 private consultation.',
    },
    promise: {
      title: 'Our Promise',
      desc: 'We are committed to full FINTRAC compliance, uncompromising customer confidentiality, cold-storage security, and providing the fairest rates in Greater Vancouver.',
    },
  };

  return (
    <section className="home-section home-section--muted home-about-sleek" aria-labelledby="about-heading" style={{ position: 'relative', zIndex: 1 }}>
      <div className="home-container">
        <div className="reveal-fade-up" style={{ transitionDelay: '0ms' }}>
          <div className="home-about-sleek__grid">
            {/* Left Content */}
            <div className="home-about-sleek__content">
              <span className="home-about-sleek__eyebrow">About Us</span>
              <h2 id="about-heading" className="home-about-sleek__title">
                Bitcoin Bazaar
              </h2>
              <p className="home-about-sleek__lead">
                A place for everyone who wants to simply buy and sell Bitcoins and other cryptocurrencies. Deposit or request funds using Cash, Email Transfer or Wire Transfer. Instant buy/sell of Bitcoins at fair price is guaranteed.
              </p>

              {/* Tab Navigation */}
              <div className="home-about-sleek__tabs" role="tablist" aria-label="Company overview tabs">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'mission'}
                  className={`home-about-sleek__tab-btn ${activeTab === 'mission' ? 'is-active' : ''}`}
                  onClick={() => setActiveTab('mission')}
                >
                  Our Mission
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'advantages'}
                  className={`home-about-sleek__tab-btn ${activeTab === 'advantages' ? 'is-active' : ''}`}
                  onClick={() => setActiveTab('advantages')}
                >
                  Our Advantages
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'promise'}
                  className={`home-about-sleek__tab-btn ${activeTab === 'promise' ? 'is-active' : ''}`}
                  onClick={() => setActiveTab('promise')}
                >
                  Our Promise
                </button>
              </div>

              {/* Active Tab Panel */}
              <div className="home-about-sleek__panel" role="tabpanel">
                <h3 className="home-about-sleek__panel-title">{tabData[activeTab].title}</h3>
                <p className="home-about-sleek__panel-desc">{tabData[activeTab].desc}</p>
              </div>

              {/* Footer Trust Notes */}
              <div className="home-about-sleek__notes">
                <span>SECURE TRANSACTIONS</span>
                <span className="home-about-sleek__dot" aria-hidden="true">•</span>
                <span>TRUSTED RATES</span>
                <span className="home-about-sleek__dot" aria-hidden="true">•</span>
                <span>NO HIDDEN CHARGES</span>
              </div>
            </div>

            {/* Right Media Photo Frame */}
            <div className="home-about-sleek__media">
              <div className="home-about-sleek__photo-frame">
                <Image
                  src="/images/about-us.png"
                  alt="Bitcoin Bazaar OTC Trade Desk"
                  width={420}
                  height={500}
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  priority
                />
                <div className="home-about-sleek__badge">
                  <span className="home-about-sleek__green-dot" aria-hidden="true" />
                  <span>FINTRAC Regulated Desk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
