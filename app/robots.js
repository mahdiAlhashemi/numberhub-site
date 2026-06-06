export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://numberhub.io/sitemap.xml',
    host: 'https://numberhub.io',
  };
}
