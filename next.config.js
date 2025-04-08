/** @type {import('next').NextConfig} */
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


// module.exports = nextConfig,
//  {
//     experimental: {
//       serverActions: {
//         bodySizeLimit: '4mb',
//       },
//     },
//   }

  module.exports = nextConfig;





  