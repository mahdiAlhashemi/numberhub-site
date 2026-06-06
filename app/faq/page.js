import { SubHeader, SiteFooter, Breadcrumb } from '../_components/chrome';
import { BOT, SUPPORT } from '../site-config';
import { Plus, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about NumberHub — how charging works, payment, supported apps, eSIM, data handling, and support.',
  alternates: { canonical: '/faq/' },
};

const faqs = [
  ['When am I charged for a number?', 'For OTP numbers, the price is held when you buy and charged only when a verification code is delivered. If no code arrives within the 20-minute activation window, the hold is released and you pay nothing.'],
  ['How do I pay?', 'You top up your in-bot wallet, and your balance is spend-only credit used to buy numbers, rentals and eSIMs. Top-ups are made in cryptocurrency.'],
  ['Which apps are supported?', 'Over 800 services including Telegram, WhatsApp, Google, OpenAI, Instagram, Facebook, Tinder and many more, across 190+ countries.'],
  ['What is the eSIM product?', 'A data-only travel eSIM delivered as a QR code for 219 destinations — choose a local, regional or global plan and scan to install. It is usually ready within seconds.'],
  ['Can I cancel or get a refund?', 'OTP holds are released automatically if no code arrives. Rentals can be cancelled for a refund within a short window after they start, and eSIMs are charged once the provider accepts the order. Full details are in our Refund Policy.'],
  ['Do you keep my data?', 'We keep data collection minimal: no KYC for ordinary use, and verification codes are deleted after delivery. You interact through Telegram and pay in crypto. See our Privacy Policy.'],
  ['Is there support?', 'Yes — reach us on Telegram at @revuas or by email at info@numberhub.io. We aim to respond within 24 hours, usually sooner.'],
  ['Why might a number not receive a code?', 'Some third-party platforms detect or block virtual numbers. If a number does not work you can request a replacement or cancel for a release of the hold — you are never charged for a code you did not receive.'],
];

const faqLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function FAQ() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <SubHeader />
      <main id="main" className="mx-auto max-w-3xl px-5 pt-14 pb-20">
        <Breadcrumb items={[['/', 'Home'], ['/faq/', 'FAQ']]} />
        <h1 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-white">Frequently asked questions</h1>
        <p className="mt-4 text-lg text-mut leading-relaxed">Everything about how NumberHub works — charging, payment, coverage, eSIM, data and support.</p>

        <div className="mt-9 space-y-3">
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
          <a href={SUPPORT} className="btn-ghost inline-flex items-center rounded-lg px-6 py-3 text-[15px] font-semibold">Ask support</a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
