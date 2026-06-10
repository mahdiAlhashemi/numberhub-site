import { SubHeader, SiteFooter, Breadcrumb } from '../_components/chrome';
import { BOT } from '../site-config';
import { pageMeta } from '../_lib/meta';
import { ArrowRight, Signal, Wallet, MousePointerClick, QrCode, ShieldCheck, Globe, Plus } from 'lucide-react';

export const metadata = pageMeta({
  title: 'Travel eSIM Data Plans — 219 Destinations, Instant QR',
  description: 'Buy a travel eSIM data plan for 219 destinations — local, regional and global packages delivered instantly as a QR code. From $0.33, no physical SIM, pay from one wallet.',
  path: '/esim/',
});

const examples = [
  ['United States — 1GB / 7 days', '$2.20'],
  ['Turkey — 3GB / 30 days', '$4.80'],
  ['Uzbekistan — 10GB / 30 days', '$6.40'],
  ['Europe (regional) — 5GB / 30 days', '$11.00'],
  ['Global — 3GB / 30 days', '$14.50'],
];

const steps = [
  [Wallet, 'Top up your wallet', 'Fund your in-bot wallet in seconds.'],
  [MousePointerClick, 'Pick a destination', 'Choose a country, region, or global plan.'],
  [QrCode, 'Scan the QR code', 'Your eSIM arrives in seconds as a QR code.'],
  [Globe, 'Land connected', 'Data activates when you arrive — no roaming bills.'],
];

const faqs = [
  ['Which phones support eSIM?', 'Most recent iPhones (XS and later), Google Pixels (3 and later), and many Samsung Galaxy models support eSIM. Check Settings → Mobile/Cellular → Add eSIM on your phone — if the option exists, you are good to go.'],
  ['How fast is delivery?', 'Plans are usually provisioned within seconds: the QR code appears right in the chat. Scan it over Wi-Fi before you travel; data starts when you first connect in the destination.'],
  ['Local vs regional vs global — what should I pick?', 'Local plans (one country) are the cheapest per GB. Regional plans cover a group of countries (e.g. Europe) and global plans work in most of the world — pick those for multi-country trips.'],
  ['Can I check how much data is left?', 'Yes — the eSIM card in the bot has a "Check usage" button showing used and remaining data in real time.'],
  ['Can I get a refund on an eSIM?', 'An eSIM is charged once the provider accepts the order, because the profile is provisioned immediately. If a plan fails to provision, you are not charged — see our Refund Policy.'],
];

const faqLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function EsimPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <SubHeader />
      <main id="main" className="mx-auto max-w-4xl px-5 pt-14 pb-20">
        <Breadcrumb items={[['/', 'Home'], ['/esim/', 'Travel eSIM']]} />
        <h1 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          Travel eSIM data plans — instant QR for 219 destinations
        </h1>
        <p className="mt-4 text-lg text-mut leading-relaxed">
          Skip roaming charges and airport SIM kiosks: buy a data-only eSIM in Telegram and get the QR code in seconds. Local, regional and global plans, installed before you fly.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href={BOT} className="btn-brand inline-flex items-center gap-2 rounded-lg px-6 py-3 text-[15px]">Get a travel eSIM <ArrowRight className="w-5 h-5" /></a>
          <span className="inline-flex items-center rounded-md bg-ac/10 border border-ac/20 px-3 py-1.5 text-sm font-semibold text-[#8fb4ff]">from $0.33</span>
        </div>

        <h2 className="mt-12 text-2xl font-semibold tracking-tight text-white">Example plans</h2>
        <div className="mt-6 gborder overflow-hidden rounded-xl bg-card">
          <table className="w-full text-left text-sm">
            <thead className="text-mut bg-white/[0.02]">
              <tr><th scope="col" className="px-5 py-3.5 font-medium">Plan</th><th scope="col" className="px-5 py-3.5 font-medium text-right">Price</th></tr>
            </thead>
            <tbody>
              {examples.map(([p, c]) => (
                <tr key={p} className="border-t border-bd">
                  <td className="px-5 py-3.5 text-ink">{p}</td>
                  <td className="px-5 py-3.5 text-right font-semibold font-mono text-ac3">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-mut">Indicative prices — live plans and prices for all 219 destinations are shown in the bot.</p>

        <h2 className="mt-12 text-2xl font-semibold tracking-tight text-white">How it works</h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([Icon, t, d], i) => (
            <li key={t} className="gborder rounded-xl bg-card p-5">
              <div className="flex items-center gap-2.5">
                <div className="grid place-items-center w-9 h-9 rounded-lg bg-card2 border border-bd2"><Icon className="w-4 h-4 text-ac" strokeWidth={1.9} /></div>
                <span className="text-xs font-semibold text-mut">STEP {i + 1}</span>
              </div>
              <div className="mt-3 font-semibold text-white text-sm">{t}</div>
              <div className="mt-1 text-sm text-mut leading-relaxed">{d}</div>
            </li>
          ))}
        </ol>

        <div className="mt-10 gborder rounded-2xl bg-card p-6">
          <div className="flex items-center gap-2 text-white font-semibold"><ShieldCheck className="w-5 h-5 text-ac3" /> Install over Wi-Fi before you travel</div>
          <p className="mt-2 text-sm text-mut leading-relaxed">
            Scan the QR at home, keep the message (you may need it to reinstall), and your data activates when you first connect at the destination. The bot card also includes manual SM-DP+ codes for phones that prefer manual setup.
          </p>
        </div>

        <h2 className="mt-12 text-2xl font-semibold tracking-tight text-white">Travel eSIM — FAQ</h2>
        <div className="mt-6 space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="group gborder rounded-xl bg-card p-5">
              <summary className="cursor-pointer list-none font-semibold text-white flex items-center justify-between gap-4">
                {q}<Plus className="w-5 h-5 shrink-0 text-ac group-open:rotate-45 transition" />
              </summary>
              <p className="mt-3 text-sm text-mut leading-relaxed">{a}</p>
            </details>
          ))}
        </div>

        <div className="mt-10">
          <a href={BOT} className="btn-brand inline-flex items-center gap-2 rounded-lg px-6 py-3 text-[15px]">Open the bot <ArrowRight className="w-5 h-5" /></a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
