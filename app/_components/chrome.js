import { Bot, MessageCircle, Megaphone, Mail, ArrowLeft, ArrowRight } from 'lucide-react';
import { SITE, BOT, SUPPORT, CHANNEL, EMAIL, BRAND, PRODUCT_LINKS, LEGAL_LINKS, EFFECTIVE } from '../site-config';

// Breadcrumb nav + BreadcrumbList JSON-LD. items: [['/', 'Home'], ['/terms/', 'Terms']]
export function Breadcrumb({ items }) {
  const ld = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: items.map(([href, name], i) => ({
      '@type': 'ListItem', position: i + 1, name, item: `${SITE}${href}`,
    })),
  };
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-mut">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map(([href, name], i) => (
          <li key={href + name} className="inline-flex items-center gap-1.5">
            {i > 0 && <span className="opacity-50" aria-hidden="true">/</span>}
            {i < items.length - 1
              ? <a href={href} className="hover:text-white transition">{name}</a>
              : <span className="text-ink">{name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Logo({ href = '/' }) {
  return (
    <a href={href} className="flex items-center gap-2.5 font-semibold text-lg tracking-tight text-white">
      <img src="/logo.png" alt="NumberHub logo" width="34" height="34" className="rounded-lg" />
      <span className="text-ac">{BRAND}</span>
    </a>
  );
}

// Simple header for sub-pages (legal / about / 404)
export function SubHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-bd bg-black/70 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-3">
          <a href="/" className="hidden sm:inline-flex items-center gap-1.5 text-sm text-mut hover:text-white transition">
            <ArrowLeft className="w-4 h-4" /> Home
          </a>
          <a href={BOT} className="btn-brand inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm">
            Open the bot <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative border-t border-bd bg-black">
      <div className="mx-auto max-w-6xl px-5 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-mut leading-relaxed">Virtual numbers for OTP verification, number rentals, and travel eSIM data — operated via Telegram.</p>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3 text-white">Product</div>
          <ul className="space-y-2 text-sm text-mut">
            {PRODUCT_LINKS.map(([href, label]) => (
              <li key={label}><a href={href} className="hover:text-white transition">{label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3 text-white">Legal</div>
          <ul className="space-y-2 text-sm text-mut">
            {LEGAL_LINKS.map(([href, label]) => (
              <li key={label}><a href={href} className="hover:text-white transition">{label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3 text-white">Connect</div>
          <ul className="space-y-2 text-sm text-mut">
            <li><a href={BOT} className="inline-flex items-center gap-2 hover:text-white transition"><Bot className="w-4 h-4" /> @TheNumberHubBot</a></li>
            <li><a href={SUPPORT} className="inline-flex items-center gap-2 hover:text-white transition"><MessageCircle className="w-4 h-4" /> Support @revuas</a></li>
            <li><a href={CHANNEL} className="inline-flex items-center gap-2 hover:text-white transition"><Megaphone className="w-4 h-4" /> @numberhubofficial</a></li>
            <li><a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:text-white transition"><Mail className="w-4 h-4" /> {EMAIL}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-bd">
        <div className="mx-auto max-w-6xl px-5 py-6 text-xs text-mut">
          © 2026 NumberHub — Virtual Numbers &amp; eSIM. Balance is spend-only credit. OTP numbers are charged only when a code is delivered — no code, no charge.
        </div>
      </div>
    </footer>
  );
}

// Wrapper for long-form legal / policy pages.
export function LegalPage({ title, path = '/', intro, updated = EFFECTIVE, children }) {
  return (
    <>
      <SubHeader />
      <main id="main" className="mx-auto max-w-3xl px-5 pt-14 pb-20">
        <Breadcrumb items={[['/', 'Home'], [path, title]]} />
        <h1 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-white">{title}</h1>
        <p className="mt-3 text-sm text-mut">Effective date: {updated}</p>
        {intro ? <p className="mt-4 text-mut leading-relaxed">{intro}</p> : null}
        <hr className="my-8 border-bd" />
        <div className="legal">{children}</div>
      </main>
      <SiteFooter />
    </>
  );
}
