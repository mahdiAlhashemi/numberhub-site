export const dynamic = 'force-static';

export default function sitemap() {
  const base = 'https://numberhub.io';
  return [
    { url: `${base}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/#products`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/#pricing`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/#how`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/#faq`, changeFrequency: 'monthly', priority: 0.6 },
  ];
}
