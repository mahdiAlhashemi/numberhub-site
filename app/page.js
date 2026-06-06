import {
  MessageSquareText, CalendarClock, Signal, Globe, Wallet, MousePointerClick,
  Zap, CheckCircle2, RotateCcw, RefreshCw, Bitcoin, Plus, ArrowRight, Send,
  Bot, MessageCircle, Megaphone, ShieldCheck, Copy, Check, X, Sparkles, Lock,
} from 'lucide-react';

const BOT = 'https://t.me/TheNumberHubBot';
const SUPPORT = 'https://t.me/revuas';
const CHANNEL = 'https://t.me/numberhubofficial';

const services = ['Telegram', 'WhatsApp', 'Google', 'OpenAI', 'Instagram', 'Facebook', 'X / Twitter', 'TikTok', 'Discord', 'Tinder', 'Steam', 'PayPal', 'Amazon', 'Microsoft', 'Signal', 'Uber', 'LinkedIn', 'Apple'];

const stats = [['800+', 'Supported services'], ['190+', 'Countries'], ['219', 'eSIM destinations'], ['~40s', 'Avg. code delivery']];

const products = [
  { Icon: MessageSquareText, name: 'OTP Numbers', price: 'from $0.20', low: '0.20',
    desc: 'A temporary number that receives one-time SMS codes for Telegram, WhatsApp, Google, OpenAI and 800+ apps. Charged only when the code arrives.' },
  { Icon: CalendarClock, name: 'Number Rentals', price: 'from $3.00', low: '3.00',
    desc: 'Keep a dedicated number for a day to a month and receive all of its codes during that period — perfect for ongoing access.' },
  { Icon: Signal, name: 'eSIM Data Plans', price: 'from $0.33', low: '0.33',
    desc: 'Instant travel-data eSIM for 219 destinations, delivered as a QR code — local, regional and global plans. No physical SIM.' },
];

const steps = [
  [Wallet, 'Top up', 'Fund your wallet with crypto (USDT) in seconds.'],
  [MousePointerClick, 'Choose', 'Pick a service + country, or an eSIM destination.'],
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
  [Bitcoin, 'Crypto payments', 'Top up in USDT — no card, no bank, no chargebacks.'],
  [Globe, 'Global coverage', '800+ services, 190+ countries, 219 eSIM destinations.'],
  [RefreshCw, 'Replace anytime', 'Swap a non-working number for a fresh one in one tap.'],
];

const compare = [
  ['Charged only when the code arrives', true, false],
  ['Automatic refund if no code', true, false],
  ['Crypto / USDT payments', true, 'sometimes'],
  ['Travel eSIM data included', true, false],
  ['800+ services · 190+ countries', true, 'varies'],
  ['Replace a number instantly', true, false],
  ['Instant in-app delivery', true, 'often slow'],
];

const faqs = [
  ['When am I charged for a number?', 'For OTP numbers, the price is held when you buy and charged only when a verification code is delivered. If no code arrives, the hold is released and you pay nothing.'],
  ['How do I pay?', 'You top up your in-bot wallet with cryptocurrency (USDT). Your balance is spend-only credit used to buy numbers, rentals and eSIMs.'],
  ['Which apps are supported?', 'Over 800 services including Telegram, WhatsApp, Google, OpenAI, Instagram, Facebook, Tinder and many more, across 190+ countries.'],
  ['What is the eSIM product?', 'A data-only travel eSIM delivered instantly as a QR code for 219 destinations — choose a local, regional or global plan and scan to install.'],
  ['Do you keep my data?', 'No KYC, no accounts of yours, no SMS content retained long-term. You interact entirely through Telegram and pay in crypto.'],
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
    item: { '@type': 'Product', name: p.name, description: p.desc, brand: { '@type': 'Brand', name: 'NumberHub' },
      offers: { '@type': 'Offer', priceCurrency: 'USD', price: p.low, availability: 'https://schema.org/InStock', url: BOT } },
  })),
};

function Logo() {
  return (
    <div className="flex items-center gap-2.5 font-semibold text-lg tracking-tight">
      <img src="/logo.png" alt="NumberHub logo" width="34" height="34" className="rounded-lg" />
      NumberHub
    </div>
  );
}

function Eyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-mut)]">
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-blue)]" />
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productsLd) }} />

      {/* announcement */}
      <div className="relative z-30 text-center text-xs sm:text-sm py-2 px-4 bg-white/[0.03] border-b border-[var(--color-bd)] text-[var(--color-mut)]">
        <Sparkles className="inline w-3.5 h-3.5 mb-0.5 text-white" /> Now with travel <b className="text-white font-semibold">eSIM data</b> in 219 destinations — instant QR delivery.
      </div>

      <div className="relative overflow-hidden">
        <div className="grid-bg pointer-events-none absolute inset-0 h-[820px]" aria-hidden="true" />

        {/* nav */}
        <header className="sticky top-0 z-20 border-b border-[var(--color-bd)] bg-black/70 backdrop-blur-xl">
          <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
            <Logo />
            <nav className="hidden md:flex items-center gap-8 text-sm text-[var(--color-mut)]" aria-label="Primary">
              <a href="#products" className="hover:text-white transition">Products</a>
              <a href="#pricing" className="hover:text-white transition">Pricing</a>
              <a href="#how" className="hover:text-white transition">How it works</a>
              <a href="#compare" className="hover:text-white transition">Why us</a>
              <a href="#faq" className="hover:text-white transition">FAQ</a>
            </nav>
            <a href={BOT} className="btn-primary inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm">
              Open the bot <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </header>

        <main>
          {/* hero */}
          <section className="relative mx-auto max-w-6xl px-5 pt-16 pb-14 grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-bd)] bg-[var(--color-card)] px-3.5 py-1.5 text-xs text-[var(--color-mut)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-blue)] animate-pulse" /> Live · pay in crypto · no KYC
              </div>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.05] tracking-[-0.02em] bg-gradient-to-b from-white to-[var(--color-mut)] bg-clip-text text-transparent">
                Virtual numbers for OTP verification &amp; travel eSIM
              </h1>
              <p className="mt-5 max-w-xl text-lg text-[var(--color-mut)] leading-relaxed">
                Receive SMS verification codes for 800+ apps across 190+ countries, or get instant travel data — all from one crypto wallet inside Telegram. You only pay when your code actually arrives.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href={BOT} className="btn-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 text-[15px]">
                  <Send className="w-[18px] h-[18px]" /> Start on Telegram
                </a>
                <a href="#pricing" className="btn-ghost inline-flex items-center rounded-lg px-6 py-3 text-[15px] font-semibold">View pricing</a>
              </div>
              <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--color-mut)]">
                {[[Lock, 'No KYC'], [Zap, 'Instant'], [RotateCcw, 'Auto-refund'], [Bitcoin, 'USDT']].map(([I, t]) => (
                  <li key={t} className="inline-flex items-center gap-1.5"><I className="w-4 h-4 text-[var(--color-mut)]" strokeWidth={1.75} /> {t}</li>
                ))}
              </ul>
            </div>

            {/* product visual */}
            <div className="reveal relative">
              <div className="gborder glow relative rounded-2xl bg-[var(--color-card)] p-5">
                <div className="flex items-center justify-between text-xs text-[var(--color-mut)]">
                  <span className="inline-flex items-center gap-2"><img src="/logo.png" alt="" width="20" height="20" className="rounded" /> NumberHub</span>
                  <span className="inline-flex items-center gap-1.5 text-[var(--color-blue)]"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-blue)]" /> online</span>
                </div>
                <div className="mt-4 rounded-xl border border-[var(--color-bd)] bg-black p-4">
                  <div className="text-xs text-[var(--color-mut)]">Your number · United States</div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="font-mono text-lg font-semibold text-white">+1 (555) 012-3456</span>
                    <Copy className="w-4 h-4 text-[var(--color-mut)]" />
                  </div>
                </div>
                <div className="mt-3 rounded-xl rounded-tl-md bg-white/[0.04] border border-white/10 p-4">
                  <div className="text-xs text-[var(--color-mut)]">Incoming SMS · Telegram</div>
                  <div className="mt-1 text-[15px] text-[var(--color-ink)]">Your login code is <b className="font-mono text-white">384&nbsp;729</b></div>
                </div>
                <div className="mt-3 flex items-center justify-between rounded-xl border border-[var(--color-bd)] bg-black px-4 py-3 text-sm">
                  <span className="inline-flex items-center gap-2 text-[var(--color-blue)]"><Check className="w-4 h-4" /> Delivered in 38s</span>
                  <span className="text-[var(--color-mut)]">charged <b className="text-white">$0.40</b></span>
                </div>
              </div>
            </div>
          </section>

          {/* service marquee */}
          <section className="relative py-8 border-y border-[var(--color-bd)] bg-[var(--color-bg2)]">
            <p className="text-center text-xs uppercase tracking-[0.16em] text-[var(--color-mut)]">Works with 800+ services, including</p>
            <div className="marquee-mask mt-5 overflow-hidden">
              <div className="marquee flex w-max gap-3">
                {[...services, ...services].map((s, i) => (
                  <span key={i} className="shrink-0 rounded-full border border-[var(--color-bd)] bg-[var(--color-card)] px-4 py-1.5 text-sm text-[var(--color-mut)]">{s}</span>
                ))}
              </div>
            </div>
          </section>

          {/* stats */}
          <section className="relative mx-auto max-w-6xl px-5 py-16">
            <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map(([n, l]) => (
                <div key={l} className="gborder rounded-xl bg-[var(--color-card)] px-5 py-7 text-center">
                  <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">{n}</div>
                  <div className="mt-1.5 text-sm text-[var(--color-mut)]">{l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* products */}
          <section id="products" className="relative mx-auto max-w-6xl px-5 py-16">
            <Eyebrow>Products</Eyebrow>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">One wallet, three products</h2>
            <p className="mt-2 max-w-2xl text-[var(--color-mut)]">Numbers, rentals and travel data — all delivered instantly inside Telegram.</p>
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {products.map(({ Icon, name, desc, price }) => (
                <article key={name} className="group gborder reveal rounded-2xl bg-[var(--color-card)] p-7 transition hover:-translate-y-1">
                  <div className="grid place-items-center w-12 h-12 rounded-xl bg-[var(--color-card2)] border border-[var(--color-bd2)]">
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{name}</h3>
                  <p className="mt-2 text-sm text-[var(--color-mut)] leading-relaxed">{desc}</p>
                  <div className="mt-5 inline-flex items-center rounded-md bg-white/[0.06] border border-[var(--color-bd)] px-3 py-1 text-sm font-semibold text-white">{price}</div>
                </article>
              ))}
            </div>
          </section>

          {/* features */}
          <section className="relative mx-auto max-w-6xl px-5 py-16">
            <Eyebrow>Why it's different</Eyebrow>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">Built around a fair money model</h2>
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(([Icon, t, d]) => (
                <div key={t} className="group gborder reveal rounded-xl bg-[var(--color-card)] p-6">
                  <div className="grid place-items-center w-10 h-10 rounded-lg bg-[var(--color-card2)] border border-[var(--color-bd2)] text-white"><Icon className="w-5 h-5" strokeWidth={1.75} /></div>
                  <div className="mt-4 font-semibold text-white">{t}</div>
                  <div className="mt-1 text-sm text-[var(--color-mut)] leading-relaxed">{d}</div>
                </div>
              ))}
            </div>
          </section>

          {/* how */}
          <section id="how" className="relative mx-auto max-w-6xl px-5 py-16">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">Verified in under a minute</h2>
            <ol className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(([Icon, t, d], i) => (
                <li key={t} className="gborder reveal rounded-xl bg-[var(--color-card)] p-6">
                  <div className="flex items-center gap-2.5">
                    <div className="grid place-items-center w-10 h-10 rounded-lg bg-[var(--color-card2)] border border-[var(--color-bd2)]"><Icon className="w-5 h-5 text-white" strokeWidth={1.9} /></div>
                    <span className="text-xs font-semibold text-[var(--color-mut)]">STEP {i + 1}</span>
                  </div>
                  <div className="mt-4 font-semibold text-white">{t}</div>
                  <div className="mt-1 text-sm text-[var(--color-mut)]">{d}</div>
                </li>
              ))}
            </ol>
          </section>

          {/* compare */}
          <section id="compare" className="relative mx-auto max-w-4xl px-5 py-16">
            <Eyebrow>Comparison</Eyebrow>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">NumberHub vs typical SMS sites</h2>
            <div className="mt-8 gborder overflow-hidden rounded-xl bg-[var(--color-card)]">
              <div className="grid grid-cols-[1fr_auto_auto] text-sm">
                <div className="px-5 py-3.5 text-[var(--color-mut)] font-medium">Feature</div>
                <div className="px-5 py-3.5 text-center font-semibold text-white">NumberHub</div>
                <div className="px-5 py-3.5 text-center text-[var(--color-mut)] font-medium">Others</div>
                {compare.map(([f, a, b], i) => (
                  <div key={i} className="contents">
                    <div className="px-5 py-3.5 border-t border-[var(--color-bd)] text-[var(--color-ink)]">{f}</div>
                    <div className="px-5 py-3.5 border-t border-[var(--color-bd)] grid place-items-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div className="px-5 py-3.5 border-t border-[var(--color-bd)] grid place-items-center text-[var(--color-mut)]">
                      {b === true ? <Check className="w-5 h-5 text-white" /> : typeof b === 'string' ? <span className="text-xs">{b}</span> : <X className="w-5 h-5 text-[var(--color-mut2)]" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* pricing */}
          <section id="pricing" className="relative mx-auto max-w-5xl px-5 py-16">
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">Transparent, pay-as-you-go</h2>
            <p className="mt-2 text-[var(--color-mut)]">Live prices vary by service, country and availability — always shown before you buy.</p>
            <div className="mt-8 gborder overflow-hidden rounded-xl bg-[var(--color-card)]">
              <table className="w-full text-left">
                <thead className="text-[var(--color-mut)] text-sm bg-white/[0.02]">
                  <tr><th className="px-5 py-3.5 font-medium" scope="col">Product</th><th className="px-5 py-3.5 font-medium" scope="col">Example</th><th className="px-5 py-3.5 font-medium text-right" scope="col">Price</th></tr>
                </thead>
                <tbody>
                  {pricing.map(([a, b, c], i) => (
                    <tr key={i} className="border-t border-[var(--color-bd)]">
                      <td className="px-5 py-3.5 font-medium text-[var(--color-ink)]">{a}</td>
                      <td className="px-5 py-3.5 text-[var(--color-mut)]">{b}</td>
                      <td className="px-5 py-3.5 text-right font-semibold font-mono text-white">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* faq */}
          <section id="faq" className="relative mx-auto max-w-3xl px-5 py-16">
            <div className="text-center"><Eyebrow>FAQ</Eyebrow></div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-center text-white">Frequently asked</h2>
            <div className="mt-9 space-y-3">
              {faqs.map(([q, a]) => (
                <details key={q} className="group gborder rounded-xl bg-[var(--color-card)] p-5">
                  <summary className="cursor-pointer list-none font-semibold text-white flex items-center justify-between gap-4">
                    {q}<Plus className="w-5 h-5 shrink-0 text-[var(--color-mut)] group-open:rotate-45 transition" />
                  </summary>
                  <p className="mt-3 text-sm text-[var(--color-mut)] leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* cta */}
          <section className="relative mx-auto max-w-6xl px-5 py-16">
            <div className="gborder reveal relative overflow-hidden rounded-2xl bg-[var(--color-card)] p-10 sm:p-16 text-center glow">
              <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
              <ShieldCheck className="relative mx-auto w-11 h-11 text-white" strokeWidth={1.75} />
              <h2 className="relative mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-white">Get your first code in 60 seconds</h2>
              <p className="relative mx-auto mt-3 max-w-xl text-[var(--color-mut)]">Open the bot, top up with crypto, and grab a number or eSIM instantly.</p>
              <a href={BOT} className="btn-primary relative mt-8 inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-[15px]">
                Open @TheNumberHubBot <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </section>
        </main>

        {/* footer */}
        <footer className="relative border-t border-[var(--color-bd)] bg-black">
          <div className="mx-auto max-w-6xl px-5 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Logo />
              <p className="mt-4 max-w-sm text-sm text-[var(--color-mut)] leading-relaxed">Virtual numbers for OTP verification, number rentals, and travel eSIM data — operated via Telegram, paid in crypto.</p>
            </div>
            <div>
              <div className="text-sm font-semibold mb-3 text-white">Product</div>
              <ul className="space-y-2 text-sm text-[var(--color-mut)]">
                <li><a href="#products" className="hover:text-white transition">OTP numbers</a></li>
                <li><a href="#products" className="hover:text-white transition">Number rentals</a></li>
                <li><a href="#products" className="hover:text-white transition">eSIM data</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold mb-3 text-white">Connect</div>
              <ul className="space-y-2 text-sm text-[var(--color-mut)]">
                <li><a href={BOT} className="inline-flex items-center gap-2 hover:text-white transition"><Bot className="w-4 h-4" /> @TheNumberHubBot</a></li>
                <li><a href={SUPPORT} className="inline-flex items-center gap-2 hover:text-white transition"><MessageCircle className="w-4 h-4" /> Support @revuas</a></li>
                <li><a href={CHANNEL} className="inline-flex items-center gap-2 hover:text-white transition"><Megaphone className="w-4 h-4" /> @numberhubofficial</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[var(--color-bd)]">
            <div className="mx-auto max-w-6xl px-5 py-6 text-xs text-[var(--color-mut)]">
              © 2026 NumberHub — Virtual Numbers &amp; eSIM. Payments processed in cryptocurrency (USDT); balance is spend-only credit. OTP numbers are charged only when a code is delivered — no code, no charge.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
