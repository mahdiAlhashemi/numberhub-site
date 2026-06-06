export const dynamic = 'force-static';

export default function manifest() {
  return {
    name: 'NumberHub — Virtual Numbers & eSIM',
    short_name: 'NumberHub',
    description:
      'Virtual phone numbers for OTP verification, number rentals, and travel eSIM data. Pay in crypto.',
    start_url: '/',
    display: 'standalone',
    background_color: '#070b16',
    theme_color: '#070b16',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
