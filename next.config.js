/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...existing config...
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      type: 'asset/resource'
    });
    return config;
  }
}

module.exports = nextConfig
