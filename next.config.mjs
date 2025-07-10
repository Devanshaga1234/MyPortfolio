import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

// The error means you are importing '@next/mdx' in your next.config.mjs but the package is not installed.
// To fix this, install the missing package or remove/comment out the MDX-related config if you don't use MDX pages.


// If you need MDX support, install the package:
// npm install @next/mdx

// If you do NOT need MDX support, open next.config.mjs and remove or comment out any lines like:
// import withMDX from '@next/mdx';
// ...and any usage of withMDX(...)

// Your next.config.mjs should look like a standard config if you don't use MDX:
export default {
  reactStrictMode: true,
  // ...other config...
};
