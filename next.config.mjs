/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // static export -> served by nginx, no Node runtime
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
