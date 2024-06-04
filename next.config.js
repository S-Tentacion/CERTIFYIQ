module.exports = {
  // target: 'experimental-serverless-trace',
  // target: 'serverless',

  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    // formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 300, // seconds
    domains: ["rukminim1.flixcart.com"],
  },
};
