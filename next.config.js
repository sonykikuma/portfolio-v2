/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  experimental:{
    appDir: true,
    typedRoutes: true,

  }
};

module.exports = nextConfig;
