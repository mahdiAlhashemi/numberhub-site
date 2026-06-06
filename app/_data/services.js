// Data for programmatic per-service SEO landing pages at /numbers/[service]/.
export const SERVICES = [
  { slug: 'telegram', name: 'Telegram', price: '$0.40',
    blurb: 'Receive your Telegram login or signup code on a temporary virtual number — no SIM and no need to share your personal number.',
    countries: ['United States', 'United Kingdom', 'Indonesia', 'India', 'Nigeria'] },
  { slug: 'whatsapp', name: 'WhatsApp', price: '$0.55',
    blurb: 'Get a WhatsApp verification code on a virtual number to register or set up a separate account.',
    countries: ['United Kingdom', 'United States', 'Brazil', 'India', 'Indonesia'] },
  { slug: 'google', name: 'Google', price: '$0.30',
    blurb: 'Receive a Google / Gmail verification code on a temporary number to create or verify an account.',
    countries: ['Indonesia', 'United States', 'India', 'Philippines', 'Brazil'] },
  { slug: 'openai', name: 'OpenAI', price: '$0.35',
    blurb: 'Get the SMS code to verify an OpenAI / ChatGPT account on a temporary virtual number.',
    countries: ['India', 'United States', 'Indonesia', 'Nigeria', 'United Kingdom'] },
  { slug: 'instagram', name: 'Instagram', price: '$0.40',
    blurb: 'Receive an Instagram confirmation code on a virtual number for a new or additional account.',
    countries: ['United States', 'Brazil', 'India', 'Indonesia', 'Turkey'] },
  { slug: 'facebook', name: 'Facebook', price: '$0.40',
    blurb: 'Get a Facebook verification code on a temporary number to register or recover an account.',
    countries: ['United States', 'Philippines', 'India', 'Brazil', 'Vietnam'] },
  { slug: 'tiktok', name: 'TikTok', price: '$0.45',
    blurb: 'Receive a TikTok SMS code on a virtual number to sign up without using your personal SIM.',
    countries: ['United States', 'Indonesia', 'United Kingdom', 'Brazil', 'Vietnam'] },
  { slug: 'discord', name: 'Discord', price: '$0.35',
    blurb: 'Get a Discord phone-verification code on a temporary number to verify your account.',
    countries: ['United States', 'United Kingdom', 'Germany', 'India', 'Brazil'] },
];

export const SERVICE_MAP = Object.fromEntries(SERVICES.map((s) => [s.slug, s]));
