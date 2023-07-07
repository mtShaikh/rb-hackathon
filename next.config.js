/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "avatar.vercel.sh",
      "img.freepik.com",
      "www.emotivebrand.com",
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["@tremor/react"],
  },
};

module.exports = nextConfig;
