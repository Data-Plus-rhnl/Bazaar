import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import RealTimeReports from '@/components/home/RealTimeReports';
import SeamlessTrading from '@/components/home/SeamlessTrading';
import AffordablePricing from '@/components/home/AffordablePricing';
import ViewingForecastSection from '@/components/home/ViewingForecastSection';
import LiveTradeCalculator from '@/components/home/LiveTradeCalculator';
import SecurityPrivacyGrid from '@/components/home/SecurityPrivacyGrid';
import CustomerReviews from '@/components/home/CustomerReviews';
import LetUsWorkTogether from '@/components/home/LetUsWorkTogether';

export default function HomePage() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* 1. Full 100vh Hero Screen (Hero + 3D Phones + 1-Line Trust Bar) */}
      <HeroSection />

      {/* 2. Real-Time Price Reports (Simple OTC Process) */}
      <RealTimeReports />

      {/* 4. "Seamless Trading for Everyone" with 3 Overlapping Metric Badges */}
      <SeamlessTrading />

      {/* 5. Affordable Pricing Tiers */}
      <AffordablePricing />

      {/* 6. "Viewing Long Short-Term Forecast" with 2 Upright Smartphone Mockups */}
      <ViewingForecastSection />

      {/* 7. Live Interactive CAD <-> Crypto Exchange Calculator */}
      <LiveTradeCalculator />

      {/* 8. Powerful, Privacy and Protection (3 Pillars: Trust, Security, Liquidity) */}
      <SecurityPrivacyGrid />

      {/* 9. What Our Customers Are Saying (5-Star Verified Reviews) */}
      <CustomerReviews />

      {/* 10. Let's Work Together Call-To-Action Banner */}
      <LetUsWorkTogether />
    </div>
  );
}
