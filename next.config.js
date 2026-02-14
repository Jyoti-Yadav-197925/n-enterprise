/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Replace domains with remotePatterns (FIX for warning 2)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Add quality configuration (FIX for warning 1)
    qualities: [25, 50, 75, 100],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig