/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['react-daisyui'])

const nextConfig = withTM({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["placeimg.com"],
  },
}
)
module.exports = nextConfig
