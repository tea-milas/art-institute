/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.artic.edu",
        port: "",
      },
    ],
  },
};

export default nextConfig;
