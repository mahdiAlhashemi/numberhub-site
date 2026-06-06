# Deployment

The site is a **Next.js static export** (`output: 'export'`) served by **nginx** on the production server.

## Build
```bash
npm install
npm run build      # -> ./out
```

## Server layout
- Static files: `/opt/numberhub-site/out`
- nginx vhost: `/etc/nginx/conf.d/numberhub.conf` (copy in [`numberhub.conf`](./numberhub.conf))
- Security headers snippet: `/etc/nginx/snippets/numberhub-headers.conf` (copy in [`numberhub-headers.conf`](./numberhub-headers.conf))

## Deploy
Sync `app/` + `public/` + config to the server, then `npm install && npm run build` there, and nginx serves `out/`.

## Security headers
CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, and Permissions-Policy are applied via the snippet, included in both the server block and the `/_next/static/` location.

## HTTPS
Pending: point Cloudflare DNS A records at the origin (grey cloud / DNS-only), then:
```bash
certbot --nginx -d numberhub.io -d www.numberhub.io
```
