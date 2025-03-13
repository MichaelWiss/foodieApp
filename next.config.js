const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'michaelwiss-foodie-users-image.s3.us-east-2.amazonaws.com',
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


  