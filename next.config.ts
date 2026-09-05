import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.1.20', 'host.docker.internal'],
  /* config options here */
};

export default nextConfig;
