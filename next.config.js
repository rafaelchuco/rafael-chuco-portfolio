/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ─── Image optimisation ───────────────────────────────────────────────────
  images: {
    // Modern formats (WebP + AVIF) for smaller payloads
    formats: ["image/avif", "image/webp"],

    // Allowed breakpoints for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Remote domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
      // Add your own CDN here when you migrate assets, e.g.:
      // { protocol: "https", hostname: "res.cloudinary.com" },
    ],

    // Minimum cache TTL for optimised images (1 week)
    minimumCacheTTL: 604800,
  },

  // ─── Compiler options ─────────────────────────────────────────────────────
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === "production",
  },

  // ─── Headers ──────────────────────────────────────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      // Cache static assets aggressively
      {
        source: "/(.*)\\.(ico|png|jpg|jpeg|webp|avif|svg|woff2|woff)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

