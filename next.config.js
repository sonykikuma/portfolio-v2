/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  /*output:"standalone",*/
  reactStrictMode:true,
  /*experimental:{
    appDir: true,
    typedRoutes: true,

  }*/
};

module.exports = nextConfig;
