import { SubHeader, SiteFooter, Breadcrumb } from '../_components/chrome';
import { BRAND, EMAIL, SUPPORT, CHANNEL, BOT } from '../site-config';
import { Mail, MessageCircle, Megaphone, Bot, Clock, ArrowRight } from 'lucide-react';
import { pageMeta } from '../_lib/meta';

export const metadata = pageMeta({
  title: 'Contact & Support',
  description: 'Contact NumberHub support by email or Telegram. We aim to respond within 24 hours, usually much sooner.',
  path: '/contact/',
});

const channels = [
  [Mail, 'Email', 'info@numberhub.io', `mailto:${EMAIL}`, 'Best for account, billing, and compliance enquiries.'],
  [MessageCircle, 'Telegram support', '@revuas', SUPPORT, 'Fastest for help with an order or your wallet.'],
  [Bot, 'The bot', '@TheNumberHubBot', BOT, 'Buy numbers, rentals and eSIMs, and manage your wallet.'],
  [Megaphone, 'Channel', '@numberhubofficial', CHANNEL, 'Status, updates and announcements.'],
];

export default function Contact() {
  return (
    <>
      <SubHeader />
      <main id="main" className="mx-auto max-w-3xl px-5 pt-14 pb-20">
        <Breadcrumb items={[['/', 'Home'], ['/contact/', 'Contact']]} />
        <h1 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-white">Contact &amp; support</h1>
        <p className="mt-4 text-lg text-mut leading-relaxed">
          We're a small team and we answer every message. Reach us by email or on Telegram — whichever is easiest for you.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-bd bg-card px-4 py-2.5 text-sm text-ink">
          <Clock className="w-4 h-4 text-ac" /> We aim to respond within <strong className="text-white">24 hours</strong> — usually much sooner.
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {channels.map(([Icon, label, handle, href, desc]) => (
            <a key={label} href={href} className="group gborder rounded-2xl bg-card p-6 transition hover:-translate-y-0.5">
              <div className="grid place-items-center w-11 h-11 rounded-lg bg-card2 border border-bd2 text-ac"><Icon className="w-5 h-5" strokeWidth={1.9} /></div>
              <div className="mt-4 font-semibold text-white">{label}</div>
              <div className="mt-0.5 text-sm text-ac">{handle}</div>
              <p className="mt-2 text-sm text-mut leading-relaxed">{desc}</p>
            </a>
          ))}
        </div>

        <div className="mt-10 gborder rounded-2xl bg-card p-6">
          <h2 className="text-lg font-semibold text-white">Before you write</h2>
          <p className="mt-2 text-sm text-mut leading-relaxed">
            Most order issues resolve automatically — OTP holds are released if no code arrives, and refunds are credited to your wallet per our <a href="/refund/" className="text-ac underline underline-offset-2">Refund Policy</a>. If you message us about an order, include your order details so we can help faster.
          </p>
        </div>

        <div className="mt-10">
          <a href={BOT} className="btn-brand inline-flex items-center gap-2 rounded-lg px-6 py-3 text-[15px]">Open the bot <ArrowRight className="w-5 h-5" /></a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
