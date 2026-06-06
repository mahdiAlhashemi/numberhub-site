import { SERVICES } from './_data/services';

export const dynamic = 'force-static';

export default function sitemap() {
  const base = 'https://numberhub.io';
  return [
    { url: `${base}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/numbers/`, changeFrequency: 'weekly', priority: 0.9 },
    ...SERVICES.map((s) => ({ url: `${base}/numbers/${s.slug}/`, changeFrequency: 'weekly', priority: 0.7 })),
    { url: `${base}/pricing/`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/faq/`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about/`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact/`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/terms/`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/privacy/`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/refund/`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/acceptable-use/`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/cookies/`, changeFrequency: 'monthly', priority: 0.4 },
  ];
}
