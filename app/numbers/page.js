import { SubHeader, SiteFooter, Breadcrumb } from '../_components/chrome';
import { BOT } from '../site-config';
import { SERVICES } from '../_data/services';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { pageMeta } from '../_lib/meta';

export const metadata = pageMeta({
  title: 'Virtual Numbers by Service — Receive SMS Online',
  description: 'Get a temporary phone number to receive OTP codes for Telegram, WhatsApp, Google, OpenAI, Instagram and 800+ more apps. Charged only when the code arrives.',
  path: '/numbers/',
});

export default function NumbersHub() {
  return (
    <>
      <SubHeader />
      <main id="main" className="mx-auto max-w-5xl px-5 pt-14 pb-20">
        <Breadcrumb items={[['/', 'Home'], ['/numbers/', 'Numbers']]} />
        <h1 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-white">Virtual numbers by service</h1>
        <p className="mt-4 text-lg text-mut leading-relaxed">
          Receive SMS verification codes for the apps you use, on a temporary virtual number — no SIM, charged only when the code arrives. Below are some of the most popular; the bot supports 800+ services in 190+ countries.
        </p>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <a key={s.slug} href={`/numbers/${s.slug}/`} className="group gborder rounded-2xl bg-card p-6 transition hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-white">{s.name}</h2>
                <ArrowUpRight className="w-4 h-4 text-mut group-hover:text-white transition" />
              </div>
              <p className="mt-2 text-sm text-mut leading-relaxed line-clamp-3">{s.blurb}</p>
              <div className="mt-4 inline-flex items-center rounded-md bg-ac/10 border border-ac/20 px-2.5 py-1 text-xs font-semibold text-[#8fb4ff]">from {s.price}</div>
            </a>
          ))}
        </div>

        <div className="mt-10">
          <a href={BOT} className="btn-brand inline-flex items-center gap-2 rounded-lg px-6 py-3 text-[15px]">See all 800+ services in the bot <ArrowRight className="w-5 h-5" /></a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
