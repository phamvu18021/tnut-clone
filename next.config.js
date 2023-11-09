/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["bcvt.edu.vn"], // Add the domains you want to allow here
    //  domains: ["localhost"],
  },
};

module.exports = nextConfig;

