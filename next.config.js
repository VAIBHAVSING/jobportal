/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable static site generation (SSG) and incremental static regeneration (ISR)
  // for better performance on Vercel
  images: {
    domains: ['images.unsplash.com'], // Add any image domains you might use
  },
  // You can add redirects, rewrites, etc. here
}

module.exports = nextConfig