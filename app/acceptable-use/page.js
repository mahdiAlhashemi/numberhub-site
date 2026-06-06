import { LegalPage } from '../_components/chrome';
import { BRAND, EMAIL, SUPPORT } from '../site-config';

export const metadata = {
  title: 'Acceptable Use Policy',
  description: 'Prohibited uses of NumberHub and our anti-fraud, anti-abuse, and AML risk controls. Fraud, spam, and unlawful use are not allowed.',
  alternates: { canonical: '/acceptable-use/' },
};

export default function AcceptableUse() {
  return (
    <LegalPage
      title="Acceptable Use Policy"
      intro={`${BRAND} is intended for legitimate verification and connectivity needs. This policy lists what you must not do, and describes the anti-fraud and anti-money-laundering controls we operate. It forms part of our Terms of Service.`}
    >
      <h2>1. Prohibited uses</h2>
      <p>You must not use the Service to do, facilitate, or attempt any of the following:</p>
      <ul>
        <li><strong>Fraud &amp; deception</strong> — payment fraud, phishing, scams, identity theft, or impersonating another person or entity.</li>
        <li><strong>Bulk fake accounts</strong> — mass creation of fake or bot accounts on third-party platforms, or evading bans, rate limits, or platform rules.</li>
        <li><strong>Spam &amp; abuse</strong> — sending spam, unsolicited messages, harassment, or facilitating malware or credential stuffing.</li>
        <li><strong>SIM-swap / account-takeover preparation</strong> — using numbers to intercept codes for accounts you are not authorised to access.</li>
        <li><strong>Money laundering &amp; sanctions evasion</strong> — laundering proceeds, terrorist financing, or transacting in breach of applicable sanctions.</li>
        <li><strong>Illegal content or activity</strong> — anything unlawful in your jurisdiction or ours, including content that exploits minors.</li>
        <li><strong>Resale or abuse of infrastructure</strong> — reselling access in breach of these terms, probing, overloading, or interfering with the Service or its providers.</li>
      </ul>
      <p>You are solely responsible for complying with the terms of any third-party platform you verify with. Many platforms restrict virtual numbers; using the Service does not exempt you from their rules.</p>

      <h2>2. Anti-fraud &amp; AML controls</h2>
      <p>To keep the Service safe and compliant, we operate risk controls that include:</p>
      <ul>
        <li>Transaction monitoring and automated anti-abuse signals;</li>
        <li>Limits and velocity checks on top-ups and orders;</li>
        <li>The right to request information, and to refuse, delay, hold, or reverse-credit activity that appears fraudulent or high-risk;</li>
        <li>Suspension or termination of accounts that breach this policy, with forfeiture of any balance directly tied to the abuse;</li>
        <li>Cooperation with lawful requests from competent authorities and payment partners.</li>
      </ul>
      <p>Where we request information from you, you must provide it within a reasonable period we specify (for example, 14 days), or your account and any pending orders may be suspended.</p>
      <p>"No KYC for ordinary use" means we do not demand identity documents for routine, low-value verification. It does <strong>not</strong> mean the Service may be used to evade AML obligations — we reserve the right to apply enhanced checks or decline service where risk warrants.</p>

      <h2>3. Enforcement</h2>
      <p>We may, at our discretion and without prior notice, remove access, cancel orders, freeze balances connected to abuse, and report unlawful activity. Enforcement under this policy is in addition to any other rights in our <a href="/terms/">Terms of Service</a>.</p>

      <h2>4. Reporting abuse</h2>
      <p>To report misuse of the Service, contact <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or Telegram <a href={SUPPORT}>@revuas</a>.</p>
    </LegalPage>
  );
}
