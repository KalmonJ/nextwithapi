/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    JWT_SECRET: process.env.JWT_SECRET,
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
