import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // ESLint runs separately via `npm run lint`
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Type-check runs separately via `npm run type-check`
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
  },
}

export default nextConfig
