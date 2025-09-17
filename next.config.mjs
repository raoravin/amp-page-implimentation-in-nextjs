/** @type {import('next').NextConfig} */
const nextConfig = {
      // Disable x-powered-by header
//   poweredByHeader: false,
  
  // Enable static exports for better performance
//   output: 'standalone',

  // Custom headers for AMP pages
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'courtbook.in', // replace with your image host
        pathname: '/**',
      },

    ],
  },
  async headers() {
    return [
      {
        source: '/amp/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/html; charset=utf-8',
          },
        ],
      },
    ];
  },
  
};

export default nextConfig;
