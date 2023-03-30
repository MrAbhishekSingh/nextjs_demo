/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  env: {
    SERVER: process.env.SERVER,
  },
};
module.exports = {
    pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
}
