'use client';
import { useState, useEffect } from 'react';

// Lightweight, dependency-free consent banner. Stores choice in localStorage.
// Any future analytics must check nh_cookie_consent === 'accepted' before loading.
export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem('nh_cookie_consent')) setShow(true);
    } catch {}
  }, []);

  if (!show) return null;

  const decide = (v) => {
    try { localStorage.setItem('nh_cookie_consent', v); } catch {}
    setShow(false);
  };

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed bottom-4 inset-x-4 z-[60] mx-auto max-w-2xl rounded-xl border border-bd2 bg-card2/95 backdrop-blur p-4 shadow-2xl sm:flex sm:items-center sm:gap-4"
    >
      <p className="text-sm text-mut leading-relaxed">
        We use only essential storage to run this site. With your consent we may add privacy-friendly analytics — no ads, no selling your data. See our{' '}
        <a href="/cookies/" className="text-ac underline underline-offset-2">Cookie Policy</a>.
      </p>
      <div className="mt-3 sm:mt-0 flex gap-2 shrink-0">
        <button onClick={() => decide('declined')} className="btn-ghost rounded-lg px-4 py-2 text-sm font-semibold">Decline</button>
        <button onClick={() => decide('accepted')} className="btn-brand rounded-lg px-4 py-2 text-sm">Accept</button>
      </div>
    </div>
  );
}
