import {
  MessageSquareText, CalendarClock, Signal, Globe,
  Wallet, MousePointerClick, Zap, CheckCircle2, RotateCcw, RefreshCw,
  Bitcoin, Plus, ArrowRight, Send, Bot, MessageCircle, Megaphone, ShieldCheck,
} from 'lucide-react';

const BOT = 'https://t.me/TheNumberHubBot';
const SUPPORT = 'https://t.me/revuas';
const CHANNEL = 'https://t.me/numberhubofficial';

const stats = [
  ['800+', 'Services'],
  ['190+', 'Countries'],
  ['219', 'eSIM destinations'],
  ['~40s', 'Avg. code time'],
];

const products = [
  { Icon: MessageSquareText, name: 'OTP Numbers', price: 'from $0.20', low: '0.20', grad: 'from-[#4f8cff] to-[#7b5cff]',
    desc: 'A temporary number to receive one-time SMS verification codes for Telegram, WhatsApp, Google, OpenAI, Instagram and 800+ apps. Charged only when the code arrives.' },
  { Icon: CalendarClock, name: 'Number Rentals', price: 'from $3.00', low: '3.00', grad: 'from-[#22d3ee] to-[#4f8cff]',
    desc: 'Keep a dedicated number for 1 day to 1 month and receive all of its codes during that period — perfect for ongoing access to an account.' },
  { Icon: Signal, name: 'eSIM Data Plans', price: 'from $0.33', low: '0.33', grad: 'from-[#ff7eb3] to-[#ff5c8a]',
    desc: 'Instant travel-data eSIM for 219 destinations delivered as a QR code — local, regional and global plans. No physical SIM, no roaming.' },
];

const steps = [
  [Wallet, 'Top up', 'Fund your wallet with crypto (USDT) in seconds.'],
  [MousePointerClick, 'Pick', 'Choose a service + country, or an eSIM destination.'],
  [Zap, 'Receive', 'Get your number or eSIM QR instantly.'],
  [CheckCircle2, 'Verify', 'The SMS code is delivered to you automatically.'],
];

const pricing = [
  ['OTP — Telegram', 'United States', '$0.40'],
  ['OTP — WhatsApp', 'United Kingdom', '$0.55'],
  ['OTP — OpenAI', 'India', '$0.35'],
  ['eSIM — 1GB / 7 days', 'United States', '$2.20'],
  ['eSIM — 10GB / 30 days', 'Uzbekistan (local)', '$6.40'],
  ['eSIM — 5GB / 30 days', 'Europe (regional)', '$11.00'],
];

const features = [
  [CheckCircle2, 'Pay only when it works', 'For OTP numbers you are charged only when the verification code actually arrives.'],
  [RotateCcw, 'Automatic refund', 'No code, no charge — held funds are released instantly back to your balance.'],
  [Zap, 'Instant delivery', 'Numbers and eSIM QR codes are issued in seconds, 24/7.'],
  [Bitcoin, 'Crypto payments', 'Top up your wallet in USDT — no card, no bank, no chargebacks.'],
  [Globe, 'Huge coverage', '800+ services, 190+ countries, 219 eSIM destinations.'],
  [RefreshCw, 'Replace anytime', 'Swap a non-working number for a fresh one in one tap.'],
];

const faqs = [
  ['When am I charged for a number?', 'For OTP numbers, the price is held when you buy and charged only when a verification code is delivered. If no code arrives, the hold is released and you pay nothing.'],
  ['How do I pay?', 'You top up your in-bot wallet with cryptocurrency (USDT). Your balance is spend-only credit used to buy numbers, rentals and eSIMs.'],
  ['Which apps are supported?', 'Over 800 services including Telegram, WhatsApp, Google, OpenAI, Instagram, Facebook, Tinder and many more, across 190+ countries.'],
  ['What is the eSIM product?', 'A data-only travel eSIM delivered instantly as a QR code for 219 destinations — choose a local, regional or global plan and scan to install.'],
  ['Is there support?', 'Yes — reach us anytime on Telegram at @revuas, or follow @numberhubofficial for updates.'],
];

const faqLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};
const productsLd = {
  '@context': 'https://schema.org', '@type': 'ItemList',
  itemListElement: products.map((p, i) => ({
    '@type': 'ListItem', position: i + 1,
    item: {
      '@type': 'Product', name: p.name, description: p.desc, brand: { '@type': 'Brand', name: 'NumberHub' },
      offers: { '@type': 'Offer', priceCurrency: 'USD', price: p.low, availability: 'https://schema.org/InStock', url: BOT },
    },
  })),
};

function Logo() {
  return (
    <div className="flex items-center gap-2.5 font-extrabold text-xl">
      <img src="/logo.png" alt="NumberHub logo" width="36" height="36" className="rounded-lg" />
      NumberHub
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productsLd) }} />

      <div className="relative overflow-hidden">
        <div className="blob pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#4f8cff]" aria-hidden="true" />
        <div className="blob pointer-events-none absolute top-[420px] -right-52 w-[560px] h-[560px] rounded-full bg-[#9b6bff]" aria-hidden="true" />

        <header className="sticky top-0 z-20 border-b border-[#2a2456]/70 bg-[#0a0c22]/80 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
            <Logo />
            <nav className="hidden md:flex items-center gap-7 text-sm text-[#98a4c4]" aria-label="Primary">
              <a href="#products" className="hover:text-white transition">Products</a>
              <a href="#pricing" className="hover:text-white transition">Pricing</a>
              <a href="#how" className="hover:text-white transition">How it works</a>
              <a href="#faq" className="hover:text-white transition">FAQ</a>
            </nav>
            <a href={BOT} className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#4f8cff] to-[#3a6fe0] px-4 py-2 text-sm font-semibold text-white hover:brightness-110 transition">
              Open the bot <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </header>

        <main>
          {/* hero */}
          <section className="relative mx-auto max-w-6xl px-5 pt-20 pb-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2a2456] bg-[#16143a]/60 px-4 py-1.5 text-xs text-[#98a4c4]">
              <Zap className="w-3.5 h-3.5 text-[#22d3ee]" /> Instant OTP numbers, rentals &amp; eSIM — pay in crypto
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-[1.1] tracking-tight">
              Virtual numbers for{' '}
              <span className="bg-gradient-to-r from-[#4f8cff] to-[#9b6bff] bg-clip-text text-transparent">OTP verification</span>
              <br className="hidden sm:block" /> &amp; travel eSIM data
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#98a4c4]">
              Get a temporary phone number to receive SMS verification codes for 800+ apps across 190+ countries — or an instant data eSIM for your trip. You only pay when your code actually arrives.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a href={BOT} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#4f8cff] to-[#3a6fe0] px-6 py-3.5 font-semibold text-white hover:brightness-110 transition shadow-lg shadow-[#4f8cff]/20">
                <Send className="w-5 h-5" /> Start on Telegram
              </a>
              <a href="#pricing" className="rounded-xl border border-[#2a2456] px-6 py-3.5 font-semibold text-white hover:bg-[#16143a] transition">View pricing</a>
            </div>
            <ul className="mx-auto mt-14 grid max-w-3xl grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map(([n, l]) => (
                <li key={l} className="rounded-2xl border border-[#2a2456] bg-[#16143a]/50 px-4 py-5">
                  <div className="text-2xl font-extrabold bg-gradient-to-r from-[#4f8cff] to-[#9b6bff] bg-clip-text text-transparent">{n}</div>
                  <div className="mt-1 text-xs text-[#98a4c4]">{l}</div>
                </li>
              ))}
            </ul>
          </section>

          {/* products */}
          <section id="products" className="relative mx-auto max-w-6xl px-5 py-16">
            <h2 className="text-3xl font-bold tracking-tight">What we sell</h2>
            <p className="mt-2 text-[#98a4c4]">Three products, one crypto wallet — delivered instantly inside Telegram.</p>
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {products.map(({ Icon, name, desc, price, grad }) => (
                <article key={name} className="group rounded-3xl border border-[#2a2456] bg-[#16143a]/60 p-7 hover:border-[#4f8cff]/60 transition">
                  <div className={`grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br ${grad}`}>
                    <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{name}</h3>
                  <p className="mt-2 text-sm text-[#98a4c4] leading-relaxed">{desc}</p>
                  <div className="mt-5 inline-flex items-center rounded-lg bg-[#22d3ee]/10 px-3 py-1 text-sm font-bold text-[#22d3ee]">{price}</div>
                </article>
              ))}
            </div>
          </section>

          {/* how */}
          <section id="how" className="relative mx-auto max-w-6xl px-5 py-16">
            <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
            <p className="mt-2 text-[#98a4c4]">From sign-up to verified in under a minute.</p>
            <ol className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(([Icon, t, d], i) => (
                <li key={t} className="rounded-2xl border border-[#2a2456] bg-[#16143a]/60 p-6">
                  <div className="flex items-center gap-2.5">
                    <div className="grid place-items-center w-9 h-9 rounded-xl bg-[#4f8cff]">
                      <Icon className="w-5 h-5 text-white" strokeWidth={2.2} />
                    </div>
                    <span className="text-xs text-[#98a4c4]">Step {i + 1}</span>
                  </div>
                  <div className="mt-4 font-bold">{t}</div>
                  <div className="mt-1 text-sm text-[#98a4c4]">{d}</div>
                </li>
              ))}
            </ol>
          </section>

          {/* pricing */}
          <section id="pricing" className="relative mx-auto max-w-6xl px-5 py-16">
            <h2 className="text-3xl font-bold tracking-tight">Example pricing</h2>
            <p className="mt-2 text-[#98a4c4]">Live prices vary by service, country and availability — shown in real time inside the bot.</p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-[#2a2456]">
              <table className="w-full text-left">
                <thead className="bg-[#120e30] text-[#98a4c4] text-sm">
                  <tr><th className="px-5 py-3.5 font-medium" scope="col">Product</th><th className="px-5 py-3.5 font-medium" scope="col">Example</th><th className="px-5 py-3.5 font-medium text-right" scope="col">Price</th></tr>
                </thead>
                <tbody>
                  {pricing.map(([a, b, c], i) => (
                    <tr key={i} className="border-t border-[#2a2456] bg-[#16143a]/40">
                      <td className="px-5 py-3.5">{a}</td>
                      <td className="px-5 py-3.5 text-[#98a4c4]">{b}</td>
                      <td className="px-5 py-3.5 text-right font-bold text-[#22d3ee]">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* features */}
          <section className="relative mx-auto max-w-6xl px-5 py-16">
            <h2 className="text-3xl font-bold tracking-tight">Why NumberHub</h2>
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(([Icon, t, d]) => (
                <div key={t} className="rounded-2xl border border-[#2a2456] bg-[#16143a]/60 p-6">
                  <Icon className="w-7 h-7 text-[#4f8cff]" strokeWidth={2} />
                  <div className="mt-3 font-bold">{t}</div>
                  <div className="mt-1 text-sm text-[#98a4c4]">{d}</div>
                </div>
              ))}
            </div>
          </section>

          {/* faq */}
          <section id="faq" className="relative mx-auto max-w-3xl px-5 py-16">
            <h2 className="text-3xl font-bold tracking-tight text-center">Frequently asked</h2>
            <div className="mt-9 space-y-3">
              {faqs.map(([q, a]) => (
                <details key={q} className="group rounded-2xl border border-[#2a2456] bg-[#16143a]/60 p-5">
                  <summary className="cursor-pointer list-none font-semibold flex items-center justify-between gap-4">
                    {q}<Plus className="w-5 h-5 shrink-0 text-[#98a4c4] group-open:rotate-45 transition" />
                  </summary>
                  <p className="mt-3 text-sm text-[#98a4c4] leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* cta */}
          <section className="relative mx-auto max-w-6xl px-5 py-16">
            <div className="rounded-3xl border border-[#2a2456] bg-gradient-to-br from-[#16143a] to-[#0e0a28] p-10 sm:p-14 text-center">
              <ShieldCheck className="mx-auto w-10 h-10 text-[#22d3ee]" strokeWidth={2} />
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">Get your first code in 60 seconds</h2>
              <p className="mx-auto mt-3 max-w-xl text-[#98a4c4]">Open the bot, top up with crypto, and grab a number or eSIM instantly.</p>
              <a href={BOT} className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#4f8cff] to-[#9b6bff] px-8 py-4 font-bold text-white hover:brightness-110 transition">
                Open @TheNumberHubBot <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </section>
        </main>

        {/* footer */}
        <footer className="relative border-t border-[#2a2456] bg-[#0a0c22]">
          <div className="mx-auto max-w-6xl px-5 py-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <Logo />
                <p className="mt-3 max-w-sm text-sm text-[#98a4c4]">Virtual numbers for OTP verification, number rentals, and travel eSIM data — operated via Telegram.</p>
              </div>
              <nav className="flex flex-wrap gap-3 text-sm" aria-label="Contact">
                <a href={BOT} className="inline-flex items-center gap-2 rounded-xl border border-[#2a2456] px-4 py-2.5 hover:border-[#4f8cff] transition"><Bot className="w-4 h-4" /> @TheNumberHubBot</a>
                <a href={SUPPORT} className="inline-flex items-center gap-2 rounded-xl border border-[#2a2456] px-4 py-2.5 hover:border-[#4f8cff] transition"><MessageCircle className="w-4 h-4" /> Support @revuas</a>
                <a href={CHANNEL} className="inline-flex items-center gap-2 rounded-xl border border-[#2a2456] px-4 py-2.5 hover:border-[#4f8cff] transition"><Megaphone className="w-4 h-4" /> @numberhubofficial</a>
              </nav>
            </div>
            <div className="mt-8 border-t border-[#2a2456] pt-6 text-xs text-[#98a4c4]">
              © 2026 NumberHub — Virtual Numbers &amp; eSIM. Payments processed in cryptocurrency (USDT). Balance is spend-only credit. OTP numbers are charged only when a code is delivered; no code, no charge.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
