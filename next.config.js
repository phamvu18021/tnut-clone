/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["nologin.tnut.vn", "localhost"] // Add the domains you want to allow here
  },
  async rewrites() {
    return [
      {
        source: "/robots.txt",
        destination: "/api/robots"
      }
    ];
  }
};

module.exports = nextConfig;
