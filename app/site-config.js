// Single source of truth for brand links, contact, and legal identity.
export const SITE = 'https://numberhub.io';
export const BOT = 'https://t.me/TheNumberHubBot';
export const SUPPORT = 'https://t.me/revuas';
export const CHANNEL = 'https://t.me/numberhubofficial';
export const EMAIL = 'info@numberhub.io';

// Legal identity — operated by an independent sole operator under the NumberHub brand.
export const BRAND = 'NumberHub';
export const OPERATOR = 'NumberHub, an independent service operated by a sole operator';
// Governing law / operating jurisdiction. TODO: replace with the confirmed country.
export const JURISDICTION = '[Your country]';
export const EFFECTIVE = '6 June 2026';

export const PRODUCT_LINKS = [
  ['/numbers/', 'OTP numbers'],
  ['/#products', 'Number rentals'],
  ['/#products', 'eSIM data'],
  ['/pricing/', 'Pricing'],
  ['/faq/', 'FAQ'],
];

export const LEGAL_LINKS = [
  ['/about/', 'About'],
  ['/contact/', 'Contact'],
  ['/terms/', 'Terms of Service'],
  ['/privacy/', 'Privacy Policy'],
  ['/refund/', 'Refund & Cancellation'],
  ['/acceptable-use/', 'Acceptable Use'],
  ['/cookies/', 'Cookie Policy'],
];

// Truthful trust signals (NOT fabricated reviews) for the homepage trust block.
export const TRUST_POINTS = [
  ['Pay only when it works', 'OTP codes are charged only on delivery — no code, no charge, auto-refunded.'],
  ['No KYC, minimal data', 'No documents for ordinary use; verification codes are deleted after delivery.'],
  ['Crypto, no chargebacks', 'Prepaid wallet — no card or bank details ever touch the service.'],
  ['Encrypted & access-controlled', 'Data is encrypted in transit with access restricted to legitimate need.'],
  ['Clear, published policies', 'Terms, Privacy, Refund and Acceptable-Use are all public on this site.'],
  ['Real support, every day', 'Reach a human on Telegram or by email — response targets in our policies.'],
];
