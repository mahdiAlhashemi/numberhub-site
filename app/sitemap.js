import { SERVICES } from './_data/services';

export const dynamic = 'force-static';

export default function sitemap() {
  const base = 'https://numberhub.io';
  // Static export rebuilds on every deploy, so build time is an honest lastmod.
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/numbers/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    ...SERVICES.map((s) => ({ url: `${base}/numbers/${s.slug}/`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 })),
    { url: `${base}/rent/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/esim/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/email/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/pricing/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/faq/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/terms/`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/privacy/`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/refund/`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/acceptable-use/`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/cookies/`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
  ];
}
