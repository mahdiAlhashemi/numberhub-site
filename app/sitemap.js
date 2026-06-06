export const dynamic = 'force-static';

export default function sitemap() {
  const base = 'https://numberhub.io';
  return [
    { url: `${base}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/about/`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/terms/`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/privacy/`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/refund/`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/acceptable-use/`, changeFrequency: 'monthly', priority: 0.5 },
  ];
}
