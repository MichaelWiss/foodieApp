/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    experimental: {
      serverActions: {
        bodySizeLimit: '2mb',
      },
    },
  }