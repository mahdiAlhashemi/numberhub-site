import { LegalPage } from '../_components/chrome';
import { BRAND, EMAIL, SUPPORT } from '../site-config';

export const metadata = {
  title: 'Refund & Cancellation Policy',
  description: 'How NumberHub charging, holds, refunds, and cancellation windows work for OTP numbers, rentals, and eSIM data plans.',
  alternates: { canonical: '/refund/' },
};

export default function Refund() {
  return (
    <LegalPage
      title="Refund & Cancellation Policy"
      path="/refund/"
      intro={`${BRAND} uses a fair, product-specific charging model. This page explains exactly when you are charged, when you are not, and how cancellations and refunds work. Your balance is prepaid, spend-only credit.`}
    >
      <h2>1. OTP / verification numbers — charged only on delivery</h2>
      <ul>
        <li>When you order an OTP number, its price is <strong>held</strong> against your balance — not charged.</li>
        <li>You are <strong>charged only when a verification code is actually delivered</strong> to you.</li>
        <li>If <strong>no code arrives</strong> within the 20-minute activation window, or the order is cancelled or expires unfilled, the hold is <strong>released back to your balance automatically</strong> and you pay nothing.</li>
        <li><strong>Cancellation:</strong> an activation can be cancelled, releasing the hold. To match upstream provider rules, cancellation is only permitted after a short initial period (about 2 minutes) once a number has been issued; an order still waiting for a number can be cancelled immediately at no cost.</li>
        <li>If a number does not work, you can request a replacement or cancel for a release of the hold — you are never charged for a code you did not receive.</li>
      </ul>

      <h2>2. Number rentals — upfront, with a cancellation window</h2>
      <ul>
        <li>Rentals are <strong>paid upfront</strong> for the selected period.</li>
        <li>A rental can be <strong>cancelled for a refund of the upfront charge only within a short window after it starts</strong> (between roughly 2 and 20 minutes from the start), mirroring upstream provider policy. The refund is credited back to your wallet balance.</li>
        <li>After that window, the rental can be ended but is <strong>not refundable</strong>, as the dedicated number has been reserved for your period.</li>
      </ul>

      <h2>3. eSIM data plans — charged when the order is accepted</h2>
      <ul>
        <li>eSIM plans are <strong>paid upfront</strong>. The charge is finalised once the provider <strong>accepts your order</strong>, and is <strong>final once accepted</strong>, even if delivery of the QR profile is briefly delayed.</li>
        <li>You are <strong>only not charged</strong> (the hold is released) if the order <strong>cannot be placed with the provider at all</strong>.</li>
        <li>If a QR profile does not appear immediately, it is delivered automatically once provisioning completes. In the rare case it never arrives, contact support and we will make it right.</li>
        <li>Because an eSIM is a provisioned digital good, an accepted or issued plan is <strong>non-refundable</strong>.</li>
      </ul>

      <h2>4. Form of refunds</h2>
      <p>Refunds and releases are credited to your in-bot <strong>wallet balance</strong> as spend-only credit. Because top-ups are made with cryptocurrency and on-chain transactions are final and non-reversible, we do not refund to the originating blockchain wallet.</p>

      <h2>5. Things outside a refund</h2>
      <ul>
        <li>A third-party platform detecting, blocking, or banning a virtual number after a code was successfully delivered is not grounds for a refund of that delivered code.</li>
        <li>Entering the wrong service, country, or destination after a code/eSIM was correctly delivered.</li>
        <li>Losses from sending the wrong crypto asset, amount, or network during top-up (see <a href="/terms/">Terms</a>).</li>
      </ul>

      <h2>6. How to request help</h2>
      <p>Most releases and refunds are automatic. If something looks wrong, contact us within a reasonable time with your order details: <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or Telegram <a href={SUPPORT}>@revuas</a>. We aim to respond promptly.</p>

      <p>This policy forms part of, and should be read with, our <a href="/terms/">Terms of Service</a>.</p>
    </LegalPage>
  );
}
