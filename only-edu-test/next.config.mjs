/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindcomponents.com",
      },
    ],
  },
};

export default nextConfig;
