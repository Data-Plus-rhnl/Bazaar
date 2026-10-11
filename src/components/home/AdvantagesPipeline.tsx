'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Advantage {
  num: string;
  badge: string;
  title: string;
  desc: string;
  icon: string;
}

const advantages: Advantage[] = [
  {
    num: '01',
    badge: 'ADVANTAGE 01 OF 06',
    title: 'First time buyers',
    desc: 'Our staff is happy to answer your questions if this is the first time you are purchasing crypto.',
    icon: '/images/icons/orange/strong-security.png',
  },
  {
    num: '02',
    badge: 'ADVANTAGE 02 OF 06',
    title: 'Area of Service',
    desc: 'Conveniently located in Port Coquitlam, Unit 206, serving Vancouver, Burnaby, Surrey, Tri-Cities, and the entire BC Lower Mainland.',
    icon: '/images/icons/orange/world-coverage.png',
  },
  {
    num: '03',
    badge: 'ADVANTAGE 03 OF 06',
    title: 'Payment Options',
    desc: 'We offer multiple secure settlement options: Physical Cash in person, Interac e-Transfer, and direct Bank Wire Transfers.',
    icon: '/images/icons/orange/payment-options.png',
  },
  {
    num: '04',
    badge: 'ADVANTAGE 04 OF 06',
    title: 'Wallet Setup & Care',
    desc: 'Need help choosing and configuring a secure self-custody wallet? We guide you step-by-step to keep your assets safe.',
    icon: '/images/icons/orange/add-bitcoins.png',
  },
  {
    num: '05',
    badge: 'ADVANTAGE 05 OF 06',
    title: 'Affordable Rates',
    desc: 'Transparent pricing with no hidden margins. We deliver the most competitive crypto rates in British Columbia.',
    icon: '/images/icons/orange/cost-efficiency.png',
  },
  {
    num: '06',
    badge: 'ADVANTAGE 06 OF 06',
    title: 'High Liquidity',
    desc: 'Instant settlement for high-volume transactions with deep liquidity pools and locked OTC exchange rates.',
    icon: '/images/icons/orange/high-liquidity.png',
  },
];

export default function AdvantagesPipeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : advantages.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < advantages.length - 1 ? prev + 1 : 0));
  };

  const current = advantages[activeIndex];

  return (
    <section className="home-section" aria-labelledby="advantages-heading" style={{ position: 'relative', zIndex: 1 }}>
      <div className="home-container">
        {/* Section Header */}
        <div className="reveal-fade-up" style={{ transitionDelay: '0ms' }}>
          <header className="home-section-header home-section-header--center">
            <span className="home-eyebrow">Why Choose Us</span>
            <h2 id="advantages-heading">Our Core Advantages</h2>
          </header>
        </div>

        <div className="reveal-fade-up" style={{ transitionDelay: '60ms' }}>
          <div className="home-advantages-pipeline">
            {/* Top Runway Navigation Buttons */}
            <div className="home-advantages-pipeline__runway">
              {advantages.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={item.num}
                    type="button"
                    className={`home-advantages-pipeline__node ${isActive ? 'is-active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className="home-advantages-pipeline__node-num">{item.num}</span>
                    <span className="home-advantages-pipeline__node-title">{item.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Stage Card */}
            <div className="home-advantages-pipeline__stage">
              <div className="home-advantages-pipeline__badge-row">
                <span className="home-advantages-pipeline__badge-num">{current.badge}</span>
                <div className="home-advantages-pipeline__icon" aria-hidden="true">
                  <Image
                    src={current.icon}
                    alt=""
                    width={24}
                    height={24}
                    style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                  />
                </div>
              </div>

              <h3 className="home-advantages-pipeline__stage-title">{current.title}</h3>
              <p className="home-advantages-pipeline__stage-desc">{current.desc}</p>

              {/* Navigation Controls & Indicator Dots */}
              <div className="home-advantages-pipeline__controls">
                <button
                  type="button"
                  className="home-advantages-pipeline__nav-btn"
                  aria-label="Previous advantage"
                  onClick={handlePrev}
                >
                  ← Previous
                </button>

                <div className="home-advantages-pipeline__dots">
                  {advantages.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`home-advantages-pipeline__dot ${activeIndex === index ? 'is-active' : ''}`}
                      aria-label={`Go to advantage ${index + 1}`}
                      onClick={() => setActiveIndex(index)}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  className="home-advantages-pipeline__nav-btn"
                  aria-label="Next advantage"
                  onClick={handleNext}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
