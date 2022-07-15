/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["res.cloudinary.com", "cdn.schema.io", "www.livehealthy.hk"],
    deviceSizes: [375, 425, 768, 828, 1024, 1440, 1920, 2560],
    minimumCacheTTL: 60 * 60 * 24,
  },
};

module.exports = nextConfig;
