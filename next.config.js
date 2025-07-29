/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // basePath: '/Website',
  // assetPrefix: '/Website/',
  // Add this to help with static assets
  experimental: {
    images: {
      allowFutureImage: true
    }
  }
}

module.exports = nextConfig
module.exports = nextConfig
