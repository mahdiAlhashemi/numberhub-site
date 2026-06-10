// Data for programmatic per-service SEO landing pages at /numbers/[service]/.
// Each entry carries genuinely service-specific copy (`about` paragraphs + `tip`)
// so the pages are differentiated, not thin near-duplicate templates.
export const SERVICES = [
  { slug: 'telegram', name: 'Telegram', price: '$0.40',
    blurb: 'Receive your Telegram login or signup code on a temporary virtual number — no SIM and no need to share your personal number.',
    countries: ['United States', 'United Kingdom', 'Indonesia', 'India', 'Nigeria'],
    about: [
      'Telegram requires a working phone number for every new account, and the same number can hold only one active account at a time. A temporary virtual number lets you register a second profile — for a project, a channel, a shop, or simple privacy — without buying a SIM card or exposing the number your contacts already know.',
      'Telegram codes usually arrive within seconds, and the platform is one of the most reliable services for virtual-number verification. After signup, set a cloud password (two-step verification) so you keep access even after the temporary number expires.',
    ],
    tip: 'Set a Telegram cloud password right after registering — then the number is never needed again.' },
  { slug: 'whatsapp', name: 'WhatsApp', price: '$0.55',
    blurb: 'Get a WhatsApp verification code on a virtual number to register or set up a separate account.',
    countries: ['United Kingdom', 'United States', 'Brazil', 'India', 'Indonesia'],
    about: [
      'WhatsApp ties each account to a phone number and is stricter than most apps about which numbers it accepts — it actively filters data-center and VOIP ranges. The numbers offered for WhatsApp come from mobile ranges, which is why they cost slightly more than for other services.',
      'A separate WhatsApp number is the standard way to split business from personal messaging, run a regional account, or test WhatsApp Business features. If a particular country fails to register, trying a different country usually solves it — availability and acceptance vary in real time.',
    ],
    tip: 'If registration is rejected, replace the number or switch country — WhatsApp acceptance varies by range.' },
  { slug: 'google', name: 'Google', price: '$0.30',
    blurb: 'Receive a Google / Gmail verification code on a temporary number to create or verify an account.',
    countries: ['Indonesia', 'United States', 'India', 'Philippines', 'Brazil'],
    about: [
      'Google asks for phone verification when you create a Gmail account, and again when it sees a login it considers unusual. A temporary number completes that check without linking the new mailbox to your personal phone — useful for project accounts, testing, or keeping work and personal identities separate.',
      'One number can typically verify one Google account, and Google remembers numbers it has seen before — so a fresh virtual number has a much better acceptance rate than a recycled personal one. Add a recovery email immediately so the account never depends on the temporary number.',
    ],
    tip: 'Add a recovery email right after signup — Google then never needs the number again.' },
  { slug: 'openai', name: 'OpenAI', price: '$0.35',
    blurb: 'Get the SMS code to verify an OpenAI / ChatGPT account on a temporary virtual number.',
    countries: ['India', 'United States', 'Indonesia', 'Nigeria', 'United Kingdom'],
    about: [
      'OpenAI requires SMS phone verification when activating API access and some ChatGPT features, and each phone number can only verify a small number of accounts. If your country is not supported on the platform, or your number is already used, a virtual number from a supported country gets you through the check.',
      'OpenAI rejects most VOIP ranges, so use the mobile numbers offered specifically for OpenAI in the bot. Codes typically land within a minute; if nothing arrives, a one-tap replacement gets a fresh number at no extra cost — you are only ever charged for a delivered code.',
    ],
    tip: 'Pick the OpenAI-specific service in the bot — generic numbers are more likely to be rejected as VOIP.' },
  { slug: 'instagram', name: 'Instagram', price: '$0.40',
    blurb: 'Receive an Instagram confirmation code on a virtual number for a new or additional account.',
    countries: ['United States', 'Brazil', 'India', 'Indonesia', 'Turkey'],
    about: [
      'Instagram lets you register with an email, but increasingly asks for SMS confirmation when an account is created — and almost always when it flags an account for review. A virtual number answers that check instantly, whether you are opening a brand account, a second profile, or recovering from a verification loop.',
      'For accounts you plan to keep, complete the profile and add an email as the primary contact. Instagram allows several accounts per device, so a temporary number per account is a clean way to keep them independent.',
    ],
    tip: 'Add an email to the new account straight away so it never depends on the temporary number.' },
  { slug: 'facebook', name: 'Facebook', price: '$0.40',
    blurb: 'Get a Facebook verification code on a temporary number to register or recover an account.',
    countries: ['United States', 'Philippines', 'India', 'Brazil', 'Vietnam'],
    about: [
      'Facebook uses SMS verification at signup and as a recurring checkpoint — new accounts, new devices, and flagged logins all trigger it. A temporary virtual number passes the check without putting your personal number into the Facebook ad graph.',
      'Match the number country to the profile details you enter (name, language, location) — consistent signals make the new account far less likely to hit an immediate review. Switch the primary contact to an email after registration.',
    ],
    tip: 'Match the number country to the account language/location to avoid an instant review.' },
  { slug: 'tiktok', name: 'TikTok', price: '$0.45',
    blurb: 'Receive a TikTok SMS code on a virtual number to sign up without using your personal SIM.',
    countries: ['United States', 'Indonesia', 'United Kingdom', 'Brazil', 'Vietnam'],
    about: [
      'TikTok accounts are region-locked at creation: the country of the registering phone number influences which content market and creator features the account gets. A US or UK virtual number is the usual way to open an account in those markets from anywhere.',
      'TikTok verification codes are typically delivered fast, and one number registers one account. For creator accounts you intend to grow, bind an email and password immediately — then the temporary number is just the entry ticket.',
    ],
    tip: 'The number country sets the account market — pick US/UK numbers for those content regions.' },
  { slug: 'discord', name: 'Discord', price: '$0.35',
    blurb: 'Get a Discord phone-verification code on a temporary number to verify your account.',
    countries: ['United States', 'United Kingdom', 'Germany', 'India', 'Brazil'],
    about: [
      'Many Discord servers require phone-verified accounts, and Discord itself demands a phone number when it suspects automation or when you join from a flagged IP. One phone number can only verify one Discord account at a time, so a fresh virtual number is the practical way to verify an alt or a community account.',
      'Discord blocks numbers it has seen before and most VOIP ranges, so fresh mobile numbers have the best acceptance. The code arrives in seconds; if Discord rejects the number, replace it for free and try a neighbouring country.',
    ],
    tip: 'Discord rejects reused numbers — always verify with a fresh one, never a recycled personal SIM.' },
];

export const SERVICE_MAP = Object.fromEntries(SERVICES.map((s) => [s.slug, s]));
