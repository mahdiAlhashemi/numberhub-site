import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

const SITE = 'https://numberhub.io';
const TITLE = 'NumberHub — Virtual Numbers for OTP Verification & Travel eSIM';
const DESC =
  'Buy virtual phone numbers to receive SMS/OTP verification codes for 800+ apps across 190+ countries, rent numbers, and get travel eSIM data for 219 destinations. Pay in USDT — charged only when your code arrives.';

export const metadata = {
  metadataBase: new URL(SITE),
  title: { default: TITLE, template: '%s · NumberHub' },
  description: DESC,
  applicationName: 'NumberHub',
  generator: 'Next.js',
  keywords: [
    'virtual phone number', 'OTP verification', 'receive SMS online', 'temporary phone number',
    'SMS verification service', 'buy virtual number', 'Telegram number', 'WhatsApp OTP',
    'travel eSIM', 'eSIM data plan', 'crypto payment', 'USDT', 'one time password', 'number rental',
  ],
  authors: [{ name: 'NumberHub' }],
  creator: 'NumberHub',
  publisher: 'NumberHub',
  alternates: { canonical: SITE },
  category: 'technology',
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  openGraph: {
    type: 'website', url: SITE, siteName: 'NumberHub', title: TITLE, description: DESC, locale: 'en_US',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'NumberHub — Virtual Numbers & eSIM' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: ['/og.png'] },
  icons: {
    icon: [
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/manifest.webmanifest',
};

export const viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

const ld = [
  {
    '@context': 'https://schema.org', '@type': 'Organization', '@id': `${SITE}/#org`,
    name: 'NumberHub', url: SITE, logo: `${SITE}/icon-512.png`, description: DESC,
    email: 'info@numberhub.io',
    sameAs: ['https://t.me/TheNumberHubBot', 'https://t.me/numberhubofficial'],
    contactPoint: [
      { '@type': 'ContactPoint', contactType: 'customer support', url: 'https://t.me/revuas', availableLanguage: ['en'] },
      { '@type': 'ContactPoint', contactType: 'customer support', email: 'info@numberhub.io', availableLanguage: ['en'] },
    ],
  },
  {
    '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${SITE}/#website`,
    name: 'NumberHub', url: SITE, description: DESC, publisher: { '@id': `${SITE}/#org` }, inLanguage: 'en',
  },
  {
    '@context': 'https://schema.org', '@type': 'Service', '@id': `${SITE}/#service`,
    name: 'Virtual numbers & travel eSIM', serviceType: 'OTP / SMS verification numbers and travel data eSIM',
    provider: { '@id': `${SITE}/#org` }, areaServed: 'Worldwide',
    offers: { '@type': 'Offer', priceCurrency: 'USD', price: '0.20', availability: 'https://schema.org/InStock', url: 'https://t.me/TheNumberHubBot' },
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://t.me" />
        <link rel="dns-prefetch" href="https://t.me" />
        {ld.map((o, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(o) }} />
        ))}
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
