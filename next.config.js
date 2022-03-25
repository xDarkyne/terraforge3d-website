/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    loader: 'akamai',
    path: '/',
  },
};

module.exports = nextConfig;
