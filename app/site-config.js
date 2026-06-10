// Single source of truth for brand links, contact, and legal identity.
export const SITE = 'https://numberhub.io';
export const BOT = 'https://t.me/TheNumberHubBot';
export const SUPPORT = 'https://t.me/revuas';
export const CHANNEL = 'https://t.me/numberhubofficial';
export const EMAIL = 'info@numberhub.io';
// Display handles — rendered text for the links above (define each exactly once).
export const BOT_HANDLE = '@TheNumberHubBot';
export const SUPPORT_HANDLE = '@revuas';
export const CHANNEL_HANDLE = '@numberhubofficial';

// Legal identity — operated by an independent sole operator under the NumberHub brand.
export const BRAND = 'NumberHub';
export const OPERATOR = 'an independent service operated by a sole operator';
// Governing law / operating jurisdiction. TODO: swap in the confirmed country
// when decided — until then the legal pages use this generic-but-valid wording.
export const JURISDICTION = "the operator's country of residence";
export const EFFECTIVE = '10 June 2026';

export const PRODUCT_LINKS = [
  ['/numbers/', 'OTP numbers'],
  ['/rent/', 'Number rentals'],
  ['/esim/', 'Travel eSIM data'],
  ['/email/', 'Email OTP'],
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
  ['Minimal data', 'We do not ask for ID documents for ordinary use, and verification codes are deleted after delivery.'],
  ['Prepaid wallet', 'Top up once; your balance is spend-only credit you control inside the bot.'],
  ['Encrypted & access-controlled', 'Data is encrypted in transit with access restricted to legitimate need.'],
  ['Clear, published policies', 'Terms, Privacy, Refund and Acceptable-Use are all public on this site.'],
  ['Real support, every day', 'Reach a human on Telegram or by email — response targets in our policies.'],
];
