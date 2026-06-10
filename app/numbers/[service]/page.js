import { SubHeader, SiteFooter, Breadcrumb } from '../../_components/chrome';
import { BOT } from '../../site-config';
import { pageMeta } from '../../_lib/meta';
import { SERVICES, SERVICE_MAP } from '../../_data/services';
import { ArrowRight, Check, Wallet, MousePointerClick, Zap, ShieldCheck, Lightbulb } from 'lucide-react';

export function generateStaticParams() {
  return SERVICES.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }) {
  const { service } = await params;
  const s = SERVICE_MAP[service];
  if (!s) return {};
  return pageMeta({
    title: `${s.name} virtual number — receive ${s.name} OTP codes`,
    description: `Get a virtual phone number to receive your ${s.name} SMS verification code, from ${s.price}. Charged only when the code arrives. 190+ countries, instant in Telegram.`,
    path: `/numbers/${s.slug}/`,
  });
}

const steps = [
  [Wallet, 'Top up your wallet', 'Fund your in-bot wallet in seconds.'],
  [MousePointerClick, 'Pick the service + country', 'Choose the app and a country with stock.'],
  [Zap, 'Get your number', 'A temporary number is issued instantly.'],
  [Check, 'Receive the code', 'The SMS code is delivered to you automatically.'],
];

export default async function ServicePage({ params }) {
  const { service } = await params;
  const s = SERVICE_MAP[service];
  if (!s) return null;

  const faqs = [
    [`How much is a ${s.name} number?`, `${s.name} numbers start from ${s.price}. The exact price depends on the country and live availability, and is always shown before you buy. You are charged only when the verification code is delivered.`],
    [`Which countries are available for ${s.name}?`, `Numbers are available across 190+ countries, including ${s.countries.slice(0, 4).join(', ')} and many more. Availability changes in real time.`],
    [`What if I don't receive the ${s.name} code?`, `If no code arrives within the activation window, the held amount is released back to your wallet automatically — no code, no charge. You can also request a replacement number.`],
    [`Do I need a SIM card?`, `No. Everything happens inside Telegram — you receive the ${s.name} code in chat on a temporary virtual number, with no physical SIM.`],
  ];
  const faqLd = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <SubHeader />
      <main id="main" className="mx-auto max-w-4xl px-5 pt-14 pb-20">
        <Breadcrumb items={[['/', 'Home'], ['/numbers/', 'Numbers'], [`/numbers/${s.slug}/`, s.name]]} />
        <h1 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          {s.name} virtual number — receive {s.name} OTP codes
        </h1>
        <p className="mt-4 text-lg text-mut leading-relaxed">{s.blurb}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href={BOT} className="btn-brand inline-flex items-center gap-2 rounded-lg px-6 py-3 text-[15px]">Get a {s.name} number <ArrowRight className="w-5 h-5" /></a>
          <span className="inline-flex items-center rounded-md bg-ac/10 border border-ac/20 px-3 py-1.5 text-sm font-semibold text-[#8fb4ff]">from {s.price}</span>
        </div>

        {s.about?.length ? (
          <section className="mt-10">
            <h2 className="text-2xl font-semibold tracking-tight text-white">Why use a temporary phone number for {s.name}?</h2>
            {s.about.map((para, i) => (
              <p key={i} className="mt-4 text-mut leading-relaxed">{para}</p>
            ))}
            {s.tip ? (
              <p className="mt-4 inline-flex items-start gap-2 rounded-xl border border-ac/20 bg-ac/5 px-4 py-3 text-sm text-ink leading-relaxed">
                <Lightbulb className="mt-0.5 w-4 h-4 shrink-0 text-ac3" aria-hidden="true" /> <span><strong>Tip:</strong> {s.tip}</span>
              </p>
            ) : null}
          </section>
        ) : null}

        <h2 className="mt-12 text-2xl font-semibold tracking-tight text-white">How to get a {s.name} number</h2>
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
          <div className="flex items-center gap-2 text-white font-semibold"><ShieldCheck className="w-5 h-5 text-ac3" /> You only pay when it works</div>
          <p className="mt-2 text-sm text-mut leading-relaxed">
            For {s.name}, the price is held when you order and charged only when the verification code is delivered. No code, no charge — see our <a href="/refund/" className="text-ac underline underline-offset-2">Refund Policy</a>.
          </p>
          <div className="mt-4 text-sm text-mut">Popular countries: <span className="text-ink">{s.countries.join(' · ')}</span></div>
        </div>

        <h2 className="mt-12 text-2xl font-semibold tracking-tight text-white">{s.name} numbers — FAQ</h2>
        <div className="mt-6 space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="group gborder rounded-xl bg-card p-5">
              <summary className="cursor-pointer list-none font-semibold text-white">{q}</summary>
              <p className="mt-3 text-sm text-mut leading-relaxed">{a}</p>
            </details>
          ))}
        </div>

        <div className="mt-10">
          <a href={BOT} className="btn-brand inline-flex items-center gap-2 rounded-lg px-6 py-3 text-[15px]">Open the bot <ArrowRight className="w-5 h-5" /></a>
        </div>

        <div className="mt-12 border-t border-bd pt-6">
          <div className="text-sm text-mut">Other services:</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {SERVICES.filter((x) => x.slug !== s.slug).map((x) => (
              <a key={x.slug} href={`/numbers/${x.slug}/`} className="rounded-full border border-bd bg-card px-3.5 py-1.5 text-sm text-mut hover:text-white transition">{x.name}</a>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
