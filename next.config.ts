import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
        bodySizeLimit: '10mb'
    }
  },
  devIndicators:false,
  domains: ["https://mlvzqvovtyfotcreirkv.supabase.co"],
  remotePatterns: [
    {
        protocol: 'https',
        hostname: 'mlvzqvovtyfotcreirkv.supabase.co',
        port: '',
        pathname: '/**'
    }
  ]
};

export default nextConfig;
