/** @type {import('next').NextConfig} */

const imageOptions =
  process.env.NODE_ENV === 'production'
    ? {
        basePath: '/terraforge3d-website',
        images: {
          loader: 'akamai',
          path: '/',
        },
      }
    : {};

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  ...imageOptions,
};

module.exports = nextConfig;
