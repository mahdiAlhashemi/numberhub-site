import { LegalPage } from '../_components/chrome';
import { BRAND, EMAIL } from '../site-config';
import { pageMeta } from '../_lib/meta';

export const metadata = pageMeta({
  title: 'Cookie Policy',
  description: 'How NumberHub uses cookies and local storage. We use only essential storage; any analytics is privacy-friendly and consent-gated.',
  path: '/cookies/',
});

export default function Cookies() {
  return (
    <LegalPage
      title="Cookie Policy"
      path="/cookies/"
      intro={`This policy explains how ${BRAND}'s website uses cookies and similar local storage. The Service itself runs inside Telegram and does not rely on browser cookies.`}
    >
      <h2>1. What we use</h2>
      <ul>
        <li><strong>Essential storage</strong> — a small <code>localStorage</code> value that remembers your cookie choice so we don't ask again. This is required for the site to function and is not used for tracking.</li>
        <li><strong>Analytics (optional, consent-gated)</strong> — if and when we enable privacy-friendly analytics, it loads <strong>only after you accept</strong> in the consent banner. We do not use advertising cookies, and we do not sell your data.</li>
      </ul>

      <h2>2. Your choice</h2>
      <p>When you first visit, a banner lets you <strong>Accept</strong> or <strong>Decline</strong> optional analytics. You can change your mind by clearing this site's storage in your browser, which makes the banner appear again. Declining does not affect access to the site.</p>

      <h2>3. Third parties</h2>
      <p>Pages may link to Telegram and other external sites, which set their own cookies under their own policies. We are not responsible for third-party cookies on sites we link to.</p>

      <h2>4. Contact</h2>
      <p>Questions about this policy: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. See also our <a href="/privacy/">Privacy Policy</a>.</p>
    </LegalPage>
  );
}
