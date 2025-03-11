/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://michaelwiss-foodie-users-image.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = {
    experimental: {
      serverActions: {
        bodySizeLimit: '3mb',
      },
    },
  }


  