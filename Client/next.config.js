/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['unavatar.io', 'i.ibb.co'],
  },
}

module.exports = nextConfig
