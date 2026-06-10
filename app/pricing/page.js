import { SubHeader, SiteFooter, Breadcrumb } from '../_components/chrome';
import { BOT } from '../site-config';
import { pageMeta } from '../_lib/meta';
import { ArrowRight, Check, RotateCcw, Gift } from 'lucide-react';

export const metadata = pageMeta({
  title: 'Virtual Number & eSIM Pricing — OTP Codes from $0.20',
  description: 'Pay-as-you-go pricing for virtual OTP numbers, number rentals, email OTPs and travel eSIM data — plus up to 10% bonus credit on top-ups. No code, no charge.',
  path: '/pricing/',
});

const pricing = [
  ['OTP — Telegram', 'United States', '$0.40'],
  ['OTP — WhatsApp', 'United Kingdom', '$0.55'],
  ['OTP — OpenAI', 'India', '$0.35'],
  ['OTP — Google', 'Indonesia', '$0.30'],
  ['Email OTP — Instagram', 'gmx.com mailbox', '$0.05'],
  ['Rental — 1 day', 'United States', 'from $3.00'],
  ['eSIM — 1GB / 7 days', 'United States', '$2.20'],
  ['eSIM — 10GB / 30 days', 'Uzbekistan (local)', '$6.40'],
  ['eSIM — 5GB / 30 days', 'Europe (regional)', '$11.00'],
];

const notes = [
  [Check, 'OTP numbers and email OTPs are charged only when a verification code is delivered — no code, no charge.'],
  [RotateCcw, 'If no code arrives, the held amount is released back to your wallet automatically.'],
  [Check, 'Rentals and eSIMs are paid upfront; see the Refund Policy for cancellation windows.'],
  [Gift, 'Top-up bonus: +5% bonus credit on any top-up, scaling up to +10% — and your first deposit gets the full +10%.'],
];

export default function Pricing() {
  return (
    <>
      <SubHeader />
      <main id="main" className="mx-auto max-w-4xl px-5 pt-14 pb-20">
        <Breadcrumb items={[['/', 'Home'], ['/pricing/', 'Pricing']]} />
        <h1 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-white">Virtual number, rental, email OTP &amp; eSIM pricing</h1>
        <p className="mt-4 text-lg text-mut leading-relaxed">
          Transparent and pay-as-you-go: you only pay for what you use. Live prices vary by service, country and availability, and the exact price is always shown before you buy. The examples below are indicative.
        </p>

        <div className="mt-8 gborder overflow-hidden rounded-xl bg-card">
          <table className="w-full text-left">
            <thead className="text-mut text-sm bg-white/[0.02]">
              <tr><th className="px-5 py-3.5 font-medium" scope="col">Product</th><th className="px-5 py-3.5 font-medium" scope="col">Example</th><th className="px-5 py-3.5 font-medium text-right" scope="col">Price</th></tr>
            </thead>
            <tbody>
              {pricing.map(([a, b, c], i) => (
                <tr key={i} className="border-t border-bd">
                  <td className="px-5 py-3.5 font-medium text-ink">{a}</td>
                  <td className="px-5 py-3.5 text-mut">{b}</td>
                  <td className="px-5 py-3.5 text-right font-semibold font-mono text-ac3">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {notes.map(([Icon, t], i) => (
            <div key={i} className="gborder rounded-xl bg-card p-5">
              <Icon className="w-5 h-5 text-ac3" strokeWidth={1.9} />
              <p className="mt-3 text-sm text-mut leading-relaxed">{t}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a href={BOT} className="btn-brand inline-flex items-center gap-2 rounded-lg px-6 py-3 text-[15px]">See live prices in the bot <ArrowRight className="w-5 h-5" /></a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
