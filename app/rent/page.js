import { SubHeader, SiteFooter, Breadcrumb } from '../_components/chrome';
import { BOT } from '../site-config';
import { pageMeta } from '../_lib/meta';
import { ArrowRight, CalendarClock, Wallet, MousePointerClick, Zap, ShieldCheck, RefreshCw, Plus } from 'lucide-react';

export const metadata = pageMeta({
  title: 'Rent a Phone Number — Virtual Number Rental for SMS',
  description: 'Rent a dedicated virtual phone number for 1 day to 1 month and receive every SMS it gets. From $3.00, instant in Telegram, full refund within the first 20 minutes.',
  path: '/rent/',
});

const durations = [
  ['1 day', 'from $3.00', 'Quick projects and short verifications'],
  ['3 days', 'from $6.00', 'Multi-step signups that need re-verification'],
  ['1 week', 'from $10.00', 'Ongoing access to an account'],
  ['1 month', 'from $25.00', 'A stable long-term receiving number'],
];

const steps = [
  [Wallet, 'Top up your wallet', 'Fund your in-bot wallet in seconds.'],
  [MousePointerClick, 'Pick duration + country', 'Choose how long, where, and what for.'],
  [Zap, 'Get your number', 'A dedicated number is issued instantly.'],
  [RefreshCw, 'Receive every SMS', 'All codes sent to it appear in chat, automatically.'],
];

const faqs = [
  ['How is renting different from a one-time OTP number?', 'A one-time OTP number receives a single verification code. A rental is a dedicated number reserved just for you for the whole period — it receives every SMS sent to it, so you can verify repeatedly, recover logins, and keep two-factor access.'],
  ['How much does it cost to rent a phone number?', 'Rentals start from about $3.00 for 1 day, with longer periods (3 days, 1 week, 1 month) priced accordingly. The exact price depends on service, country and availability, and is always shown before you pay.'],
  ['Can I cancel a rental and get my money back?', 'Yes — you can cancel for a full refund between 2 and 20 minutes after the rental starts. After that window the number stays yours for the whole period. See our Refund Policy.'],
  ['Can I extend a rental?', 'Yes. Active rentals show an "Extend" button in the bot — add more time and keep the same number without re-verifying anything.'],
  ['Which services can a rented number receive codes for?', 'Rentals are available for specific services or as "any service" numbers, across many countries — the bot shows live availability for each duration.'],
];

const faqLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function RentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <SubHeader />
      <main id="main" className="mx-auto max-w-4xl px-5 pt-14 pb-20">
        <Breadcrumb items={[['/', 'Home'], ['/rent/', 'Number rentals']]} />
        <h1 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          Rent a phone number — receive every SMS for days or weeks
        </h1>
        <p className="mt-4 text-lg text-mut leading-relaxed">
          A rented virtual number is yours for the whole period: every verification code and SMS it receives is delivered to you in Telegram, automatically. Perfect for accounts you need to keep, not just create.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href={BOT} className="btn-brand inline-flex items-center gap-2 rounded-lg px-6 py-3 text-[15px]">Rent a number <ArrowRight className="w-5 h-5" /></a>
          <span className="inline-flex items-center rounded-md bg-ac/10 border border-ac/20 px-3 py-1.5 text-sm font-semibold text-[#8fb4ff]">from $3.00 / day</span>
        </div>

        <h2 className="mt-12 text-2xl font-semibold tracking-tight text-white">Rental periods &amp; indicative pricing</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {durations.map(([d, p, use]) => (
            <div key={d} className="gborder rounded-xl bg-card p-5">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 font-semibold text-white"><CalendarClock className="w-4 h-4 text-ac" /> {d}</span>
                <span className="text-sm font-semibold font-mono text-ac3">{p}</span>
              </div>
              <p className="mt-2 text-sm text-mut leading-relaxed">{use}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-mut">Prices are indicative and vary by service, country and live availability — the exact price is always shown before you pay.</p>

        <h2 className="mt-12 text-2xl font-semibold tracking-tight text-white">How renting works</h2>
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
          <div className="flex items-center gap-2 text-white font-semibold"><ShieldCheck className="w-5 h-5 text-ac3" /> Fair cancellation window</div>
          <p className="mt-2 text-sm text-mut leading-relaxed">
            Rentals are paid upfront for the period. If you change your mind, cancel between 2 and 20 minutes after the rental starts for a <strong className="text-ink">full refund</strong> to your wallet — see the <a href="/refund/" className="text-ac underline underline-offset-2">Refund Policy</a>.
          </p>
        </div>

        <h2 className="mt-12 text-2xl font-semibold tracking-tight text-white">Number rentals — FAQ</h2>
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

        <div className="mt-10 flex flex-wrap gap-3">
          <a href={BOT} className="btn-brand inline-flex items-center gap-2 rounded-lg px-6 py-3 text-[15px]">Open the bot <ArrowRight className="w-5 h-5" /></a>
          <a href="/numbers/" className="btn-ghost inline-flex items-center rounded-lg px-6 py-3 text-[15px] font-semibold">One-time OTP numbers instead</a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
