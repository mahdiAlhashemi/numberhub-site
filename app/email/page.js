import { SubHeader, SiteFooter, Breadcrumb } from '../_components/chrome';
import { BOT } from '../site-config';
import { pageMeta } from '../_lib/meta';
import { ArrowRight, AtSign, Wallet, MousePointerClick, Zap, ShieldCheck, Plus } from 'lucide-react';

export const metadata = pageMeta({
  title: 'Email OTP — Disposable Email for Verification Codes',
  description: 'Get a disposable email address that receives the verification code for the website you choose — Instagram, Discord, X and more. From $0.05, charged only when the code arrives.',
  path: '/email/',
});

const steps = [
  [Wallet, 'Top up your wallet', 'Fund your in-bot wallet in seconds.'],
  [MousePointerClick, 'Pick site + mail domain', 'Choose the website you are signing up on and a mail domain (gmx.com, outlook.com…).'],
  [AtSign, 'Get your address', 'A working email address is issued instantly — use it on the signup form.'],
  [Zap, 'Receive the code', 'The verification code lands in the chat automatically.'],
];

const faqs = [
  ['What is an Email OTP?', 'A disposable email address that receives the verification code for one specific website — for example an Instagram or Discord signup. You never expose your personal inbox.'],
  ['When am I charged?', 'Exactly like OTP numbers: the price is held when you order and charged only when the verification code actually arrives. No code — the hold is released and you pay nothing.'],
  ['How much does it cost?', 'Email OTPs start from about $0.05 depending on the mail domain. The exact price is always shown before you buy.'],
  ['Which websites are supported?', 'Popular signup targets like Instagram, Facebook, Discord, X/Twitter, TikTok, Google, Microsoft, Amazon, Netflix, PayPal, Steam, Reddit and more.'],
  ['Can I get another code on the same address?', 'Yes — a delivered email order has a "request another" option (a fresh hold, charged only when the new code arrives).'],
];

const faqLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function EmailPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <SubHeader />
      <main id="main" className="mx-auto max-w-4xl px-5 pt-14 pb-20">
        <Breadcrumb items={[['/', 'Home'], ['/email/', 'Email OTP']]} />
        <h1 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          Email OTP — a disposable email that receives your verification code
        </h1>
        <p className="mt-4 text-lg text-mut leading-relaxed">
          Some sites verify by email, not SMS. Get a working, disposable email address for the website you choose and receive the code right in Telegram — charged only when the code arrives.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href={BOT} className="btn-brand inline-flex items-center gap-2 rounded-lg px-6 py-3 text-[15px]">Get an email OTP <ArrowRight className="w-5 h-5" /></a>
          <span className="inline-flex items-center rounded-md bg-ac/10 border border-ac/20 px-3 py-1.5 text-sm font-semibold text-[#8fb4ff]">from $0.05</span>
        </div>

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
          <div className="flex items-center gap-2 text-white font-semibold"><ShieldCheck className="w-5 h-5 text-ac3" /> Same fair model as OTP numbers</div>
          <p className="mt-2 text-sm text-mut leading-relaxed">
            The price is held at purchase and charged <strong className="text-ink">only when the verification code is delivered</strong>. If no code arrives within the window, the hold is released automatically — see the <a href="/refund/" className="text-ac underline underline-offset-2">Refund Policy</a>.
          </p>
        </div>

        <h2 className="mt-12 text-2xl font-semibold tracking-tight text-white">Email OTP — FAQ</h2>
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
          <a href="/numbers/" className="btn-ghost inline-flex items-center rounded-lg px-6 py-3 text-[15px] font-semibold">Need an SMS code instead?</a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
