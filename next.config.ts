import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/portfolio-website" : "",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["192.168.0.108"],
};

export default nextConfig;
