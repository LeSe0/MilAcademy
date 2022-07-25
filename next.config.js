/** @type {import('next').NextConfig} */

const currentUrl = process.env.HOST;

const imagesUrl = ["localhost", new URL(currentUrl).hostname /**cut http:// and :port from url */];

const nextConfig = {
  reactStrictMode: false,
  env: {
    HOST: currentUrl
  },
  images: {
    domains: imagesUrl
  }
}

module.exports = nextConfig
