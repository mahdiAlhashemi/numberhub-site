// Per-page metadata builder. Next.js does NOT deep-merge nested metadata
// objects: a page that sets only title/description inherits the root layout's
// openGraph/twitter verbatim (homepage og:title + og:url on every subpage).
// Every page therefore builds its COMPLETE social objects through this helper.
export function pageMeta({ title, description, path, ogTitle }) {
  const full = ogTitle || `${title} · NumberHub`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: full,
      description,
      url: path, // metadataBase resolves to the absolute URL
      siteName: 'NumberHub',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/og.png', width: 1200, height: 630, alt: full }],
    },
    twitter: { card: 'summary_large_image', title: full, description, images: ['/og.png'] },
  };
}
