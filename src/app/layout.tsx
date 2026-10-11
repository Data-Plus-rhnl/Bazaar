import type { Metadata } from 'next';
import '../styles/globals.css';
import BackgroundSystem from '@/components/layout/BackgroundSystem';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Bitcoin Bazaar - Affordable Cryptocurrency Exchange in Vancouver',
  description: 'A secure and easy way to trade Bitcoin and other cryptocurrencies with the best rates and no hidden charges in Port Coquitlam, Vancouver, and the BC Lower Mainland.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {/* Background Visual Effects */}
        <BackgroundSystem />

        {/* Global Navigation Header */}
        <Header />

        {/* Main Content Area */}
        <main id="main-content" style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
