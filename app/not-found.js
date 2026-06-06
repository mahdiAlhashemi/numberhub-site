import { SubHeader, SiteFooter } from './_components/chrome';
import { BOT } from './site-config';
import { ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <SubHeader />
      <main className="mx-auto max-w-2xl px-5 py-28 text-center">
        <div className="text-6xl sm:text-7xl font-semibold tracking-tight text-ac">404</div>
        <h1 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-white">This page wandered off</h1>
        <p className="mt-3 text-mut leading-relaxed">The link may be broken or the page moved. Let's get you back.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="/" className="btn-ghost inline-flex items-center gap-2 rounded-lg px-6 py-3 text-[15px] font-semibold"><Home className="w-[18px] h-[18px]" /> Home</a>
          <a href={BOT} className="btn-brand inline-flex items-center gap-2 rounded-lg px-6 py-3 text-[15px]">Open the bot <ArrowRight className="w-5 h-5" /></a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
