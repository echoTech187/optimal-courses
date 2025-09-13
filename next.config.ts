import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  devIndicators: false,
  images: {
    domains: ['images.unsplash.com', 'lh3.googleusercontent.com', 'drive.google.com', 'firebasestorage.googleapis.com'],
    unoptimized: true,
  },
  turbopack: {
    root: path.join(__dirname, '..'),
  },
};

export default nextConfig;
