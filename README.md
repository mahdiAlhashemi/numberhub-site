# NumberHub — Website

Marketing site for **NumberHub** ([@TheNumberHubBot](https://t.me/TheNumberHubBot)) — virtual phone numbers for OTP verification, number rentals, and travel eSIM data.

Live at **https://numberhub.io**.

## Stack
- **Next.js 16** (App Router, static export — `output: 'export'`)
- **Tailwind CSS 4**
- **lucide-react** icons
- SEO: JSON-LD (Organization / WebSite / FAQPage / Product), `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, Open Graph + Twitter cards

## Develop
```bash
npm install
npm run dev        # http://localhost:3000
```

## Build (static)
```bash
npm run build      # outputs static site to ./out
```

## Deploy
The `out/` folder is served by nginx on the production server.
```bash
npm run build && rsync ./out/ user@server:/opt/numberhub-site/out/
```

© NumberHub — Virtual Numbers & eSIM.
