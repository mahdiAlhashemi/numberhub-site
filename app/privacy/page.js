import { LegalPage } from '../_components/chrome';
import { BRAND, OPERATOR, JURISDICTION, EMAIL, SUPPORT } from '../site-config';

export const metadata = {
  title: 'Privacy Policy',
  description: 'How NumberHub collects, uses, retains, and protects your data — and your rights. Minimal data, no ID documents for ordinary use, SMS codes deleted after delivery.',
  alternates: { canonical: '/privacy/' },
};

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy/"
      intro={`This policy explains what data ${BRAND} (${OPERATOR}) collects, why, how long we keep it, and your rights. We collect as little as possible to run the Service.`}
    >
      <h2>1. Who we are</h2>
      <p>{BRAND} is the data controller for the processing described here. For privacy requests, contact <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>

      <h2>2. Data we collect</h2>
      <ul>
        <li><strong>Telegram identifiers</strong> — your Telegram user ID (and username if set), used to operate your account and wallet. We do not require your real name, address, or ID documents for ordinary use.</li>
        <li><strong>Wallet &amp; transaction data</strong> — top-up amounts, balance, holds, purchases, and order history.</li>
        <li><strong>Order data</strong> — the service/country or eSIM destination you select, the issued number or eSIM identifier, order status and timing.</li>
        <li><strong>Verification codes (SMS content)</strong> — the one-time code received for an order is shown to you and processed transiently to deliver it. See retention below.</li>
        <li><strong>Technical / log data</strong> — limited operational logs (e.g. timestamps, error and anti-fraud signals, and, at the network layer, IP address) needed for security and reliability.</li>
      </ul>
      <p>We do <strong>not</strong> sell your data, and we do not run advertising profiles on you.</p>

      <h2>3. Why we process it (legal bases)</h2>
      <ul>
        <li><strong>To provide the Service</strong> — performing our contract with you (orders, wallet, delivery).</li>
        <li><strong>Security &amp; fraud prevention / legal compliance</strong> — our legitimate interests and legal obligations (anti-abuse, AML risk controls, responding to lawful requests).</li>
        <li><strong>Support</strong> — handling your enquiries.</li>
      </ul>

      <h2>4. Retention</h2>
      <ul>
        <li><strong>Verification codes (SMS content)</strong> are not retained long-term: they are processed to deliver the code and removed from active records shortly after the order completes.</li>
        <li><strong>Account, wallet and order records</strong> are kept while your account is active and for a limited period afterwards as needed for accounting, dispute resolution, and legal/AML obligations.</li>
        <li><strong>Operational logs</strong> are kept only as long as needed for security and reliability, then deleted or aggregated.</li>
      </ul>

      <h2>5. Sub-processors</h2>
      <p>We rely on independent providers to deliver the Service. They process only what is necessary for their function:</p>
      <ul>
        <li><strong>Upstream number/SMS providers</strong> — to issue numbers and relay verification codes.</li>
        <li><strong>eSIM provider</strong> — to issue and manage eSIM profiles.</li>
        <li><strong>Payment processor</strong> — to process crypto top-ups; on-chain transactions are inherently public on the blockchain.</li>
        <li><strong>Telegram</strong> — the messaging platform through which the Service operates, under Telegram's own privacy policy.</li>
        <li><strong>Hosting/infrastructure</strong> — the server provider that runs the Service.</li>
      </ul>

      <h2>6. Cookies &amp; this website</h2>
      <p>This marketing website is static and does not set advertising or tracking cookies. If we add privacy-respecting analytics, we will request consent first where required and update this policy. The Service itself runs inside Telegram, not via browser cookies.</p>

      <h2>7. International transfers</h2>
      <p>Our providers may process data in countries other than yours. Where required, we rely on appropriate safeguards for such transfers.</p>

      <h2>8. Your rights</h2>
      <p>Subject to applicable law (including the GDPR where it applies), you may request access to, correction of, deletion of, or a copy of your data, and may object to or restrict certain processing. To exercise these rights, contact <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or Telegram <a href={SUPPORT}>@revuas</a>. You may also complain to your local data-protection authority.</p>

      <h2>9. Security</h2>
      <p>We apply reasonable technical and organisational measures to protect data, including encryption in transit, access restricted to those with a legitimate need, and periodic security reviews. No method of transmission or storage is perfectly secure.</p>

      <h2>10. Children</h2>
      <p>The Service is not directed to anyone under 18, and we do not knowingly process their data.</p>

      <h2>11. Changes &amp; contact</h2>
      <p>We may update this policy; the effective date above reflects the latest version. This policy is governed by the laws of <strong>{JURISDICTION}</strong>. Questions: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
    </LegalPage>
  );
}
