import { LegalPage } from '../_components/chrome';
import { BRAND, OPERATOR, JURISDICTION, EMAIL, SUPPORT } from '../site-config';

export const metadata = {
  title: 'Terms of Service',
  description: 'The terms governing use of NumberHub — virtual numbers for OTP verification, number rentals, and travel eSIM data, paid in USDT.',
  alternates: { canonical: '/terms/' },
};

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      intro={`These Terms govern your use of ${BRAND} ("the Service"), ${OPERATOR}. By accessing the Service or topping up your wallet, you agree to these Terms. If you do not agree, do not use the Service.`}
    >
      <h2>1. The Service</h2>
      <p>{BRAND} is a digital service, operated through a Telegram bot, that provides:</p>
      <ul>
        <li><strong>OTP / verification numbers</strong> — temporary virtual phone numbers that receive one-time SMS verification codes for third-party apps and websites.</li>
        <li><strong>Number rentals</strong> — a dedicated virtual number kept for a chosen period that receives the SMS codes sent to it during that period.</li>
        <li><strong>eSIM data plans</strong> — data-only travel eSIM profiles delivered as a QR code for supported destinations.</li>
      </ul>
      <p>The Service is a reseller: numbers are supplied by upstream providers and eSIMs by an upstream eSIM operator. Availability, coverage, and the ability of any number to receive a given code depend on those providers and on the third-party platform you are verifying with.</p>

      <h2>2. Eligibility</h2>
      <p>You must be at least 18 years old and legally able to enter into a contract. You must not use the Service where doing so is prohibited by the laws applicable to you. You are responsible for ensuring your use complies with the terms of any third-party platform you interact with.</p>

      <h2>3. Wallet, top-ups, and payment</h2>
      <ul>
        <li>The Service uses a prepaid, in-bot <strong>wallet</strong>. Your balance is <strong>spend-only credit</strong> usable solely to purchase products inside the Service. It is not a bank account, e-money, or investment, and it pays no interest.</li>
        <li>Top-ups are made in <strong>USDT</strong> (a US-dollar-pegged stablecoin) through our third-party payment processor. Cryptocurrency transactions are <strong>final and non-reversible</strong> once confirmed on-chain; we cannot reverse a blockchain payment.</li>
        <li>You are responsible for sending the correct amount, asset, and network. Funds sent to the wrong address or on an unsupported network may be unrecoverable.</li>
        <li>Prices are shown before each purchase and may change with provider costs and demand.</li>
      </ul>

      <h2>4. How charges work</h2>
      <p>Charging depends on the product, and is described in full in our <a href="/refund/">Refund &amp; Cancellation Policy</a>:</p>
      <ul>
        <li><strong>OTP numbers</strong> — the price is <strong>held</strong> when you order and <strong>charged only when a verification code is delivered</strong>. If no code arrives within the activation window, the hold is released and you are not charged.</li>
        <li><strong>Rentals and eSIM</strong> — paid <strong>upfront</strong> for the selected period or plan, subject to the cancellation windows in the Refund Policy.</li>
      </ul>

      <h2>5. Acceptable use</h2>
      <p>Your use of the Service is subject to our <a href="/acceptable-use/">Acceptable Use Policy</a>. You may not use the Service for fraud, impersonation, bulk creation of fake accounts, spam, harassment, evading bans, or any unlawful purpose. Breach may result in immediate suspension or termination and forfeiture of any balance tied to the abuse.</p>

      <h2>6. Anti-money-laundering &amp; risk controls</h2>
      <p>While the Service does not require identity documents to browse or transact for ordinary, low-value verification use, we operate risk controls. We may monitor transactions, set limits, request information, refuse, hold, or reverse-credit suspicious activity, and suspend or terminate accounts that show signs of fraud, money laundering, sanctions exposure, or other abuse. We will cooperate with lawful requests from competent authorities. See the <a href="/acceptable-use/">Acceptable Use Policy</a>.</p>

      <h2>7. Third-party providers</h2>
      <p>Numbers, codes, eSIM data, and payment processing are provided by independent third parties. Their performance is outside our control, and the third-party platforms you verify with may detect, block, or reject virtual numbers at their discretion. We are not responsible for the acts or omissions of these third parties.</p>

      <h2>8. No warranty</h2>
      <p>The Service is provided "as is" and "as available". We do not warrant that any specific number will successfully receive a code, that a service or country will be in stock, or that the Service will be uninterrupted or error-free. Your remedy for an undelivered OTP code is the automatic non-charge / release described in the Refund Policy.</p>

      <h2>9. Limitation of liability</h2>
      <p>To the maximum extent permitted by law, {BRAND} and its operator are not liable for indirect, incidental, special, or consequential damages, or for loss of profits, data, or opportunity. Our total aggregate liability for any claim is limited to the amount you spent on the specific transaction giving rise to the claim.</p>

      <h2>10. Suspension &amp; termination</h2>
      <p>We may suspend or terminate access at any time for breach of these Terms, suspected abuse, or legal requirement. You may stop using the Service at any time. Open holds are released and unfilled orders settled per the Refund Policy.</p>

      <h2>11. Changes</h2>
      <p>We may update these Terms. Material changes take effect when posted on this page, with an updated effective date. Continued use after changes constitutes acceptance.</p>

      <h2>12. Governing law &amp; disputes</h2>
      <p>These Terms are governed by the laws of <strong>{JURISDICTION}</strong>, without regard to conflict-of-law rules. You agree to resolve disputes first by contacting us; unresolved disputes are subject to the courts of {JURISDICTION}, unless mandatory consumer-protection law grants you other rights.</p>

      <h2>13. Contact</h2>
      <p>Questions about these Terms: <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or Telegram <a href={SUPPORT}>@revuas</a>.</p>
    </LegalPage>
  );
}
