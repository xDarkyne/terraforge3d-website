/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/terraforge3d-website',
  poweredByHeader: false,
  images: {
    loader: 'akamai',
    path: '/',
  },
};

module.exports = nextConfig;
