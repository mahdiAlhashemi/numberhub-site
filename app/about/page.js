import { SubHeader, SiteFooter } from '../_components/chrome';
import { BRAND, OPERATOR, EMAIL, SUPPORT, BOT, CHANNEL } from '../site-config';
import { MessageSquareText, CalendarClock, Signal, Wallet, ShieldCheck, ArrowRight, Mail, MessageCircle, Megaphone, Bot } from 'lucide-react';

export const metadata = {
  title: 'About',
  description: 'About NumberHub — what we sell, how the in-bot USDT wallet works, and how to reach us. A live service for virtual OTP numbers, rentals, and travel eSIM.',
  alternates: { canonical: '/about/' },
};

const offerings = [
  [MessageSquareText, 'OTP / verification numbers', 'Temporary virtual numbers that receive one-time SMS codes for 800+ apps across 190+ countries. You are charged only when the code arrives.'],
  [CalendarClock, 'Number rentals', 'A dedicated number kept for a chosen period that receives all of its codes during that time.'],
  [Signal, 'Travel eSIM data', 'Data-only eSIM profiles for 219 destinations, delivered instantly as a QR code — local, regional, and global plans.'],
];

export default function About() {
  return (
    <>
      <SubHeader />
      <main className="mx-auto max-w-4xl px-5 pt-14 pb-20">
        <div className="text-xs font-medium uppercase tracking-[0.16em] text-mut">About</div>
        <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">A live service for verification numbers &amp; travel data</h1>
        <p className="mt-4 max-w-2xl text-lg text-mut leading-relaxed">
          {BRAND} is {OPERATOR}. We make online verification and travel connectivity simple: get a virtual number to receive an SMS code, rent a number for longer, or grab a travel eSIM — all from one prepaid wallet inside Telegram, paid in USDT, with a fair "pay only when it works" model for OTP.
        </p>

        <h2 className="mt-12 text-2xl font-semibold tracking-tight text-white">What we offer</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {offerings.map(([Icon, name, desc]) => (
            <div key={name} className="gborder rounded-2xl bg-card p-6">
              <div className="grid place-items-center w-11 h-11 rounded-lg bg-gradient-to-br from-ac to-ac2"><Icon className="w-5 h-5 text-white" strokeWidth={1.9} /></div>
              <h3 className="mt-4 font-semibold text-white">{name}</h3>
              <p className="mt-1.5 text-sm text-mut leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-semibold tracking-tight text-white">How payment works</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="gborder rounded-2xl bg-card p-6">
            <Wallet className="w-6 h-6 text-ac" strokeWidth={1.9} />
            <h3 className="mt-3 font-semibold text-white">Prepaid USDT wallet</h3>
            <p className="mt-1.5 text-sm text-mut leading-relaxed">You top up an in-bot wallet with USDT, a US-dollar-pegged stablecoin, through our payment processor. Your balance is spend-only credit used to buy products inside the bot. Crypto top-ups are final and non-reversible once confirmed on-chain.</p>
          </div>
          <div className="gborder rounded-2xl bg-card p-6">
            <ShieldCheck className="w-6 h-6 text-ac3" strokeWidth={1.9} />
            <h3 className="mt-3 font-semibold text-white">Charged only when it works</h3>
            <p className="mt-1.5 text-sm text-mut leading-relaxed">For OTP numbers, the price is held when you order and charged only when a verification code is delivered. No code, no charge. Rentals and eSIMs are paid upfront with clear cancellation windows. See the <a href="/refund/" className="text-ac underline underline-offset-2">Refund Policy</a>.</p>
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-semibold tracking-tight text-white">Operating responsibly</h2>
        <p className="mt-4 text-mut leading-relaxed">
          We keep data collection minimal, delete verification codes after delivery, and operate anti-fraud and AML risk controls. The Service is for legitimate use only — fraud, spam, and unlawful activity are prohibited. Please read our <a href="/terms/" className="text-ac underline underline-offset-2">Terms</a>, <a href="/privacy/" className="text-ac underline underline-offset-2">Privacy Policy</a>, and <a href="/acceptable-use/" className="text-ac underline underline-offset-2">Acceptable Use Policy</a>.
        </p>

        <h2 className="mt-12 text-2xl font-semibold tracking-tight text-white">Contact &amp; support</h2>
        <p className="mt-4 text-mut leading-relaxed">We are reachable every day. For help with an order, account, or anything else:</p>
        <ul className="mt-4 space-y-2.5 text-mut">
          <li><a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:text-white transition"><Mail className="w-4 h-4 text-ac" /> {EMAIL}</a></li>
          <li><a href={SUPPORT} className="inline-flex items-center gap-2 hover:text-white transition"><MessageCircle className="w-4 h-4 text-ac" /> Support on Telegram — @revuas</a></li>
          <li><a href={CHANNEL} className="inline-flex items-center gap-2 hover:text-white transition"><Megaphone className="w-4 h-4 text-ac" /> Updates — @numberhubofficial</a></li>
          <li><a href={BOT} className="inline-flex items-center gap-2 hover:text-white transition"><Bot className="w-4 h-4 text-ac" /> The bot — @TheNumberHubBot</a></li>
        </ul>

        <div className="mt-12">
          <a href={BOT} className="btn-brand inline-flex items-center gap-2 rounded-lg px-6 py-3 text-[15px]">Open @TheNumberHubBot <ArrowRight className="w-5 h-5" /></a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
