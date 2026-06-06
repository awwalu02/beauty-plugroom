import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zejwykmechcjtahaoyin.supabase.co",
      },
    ],
  },
};

export default nextConfig;