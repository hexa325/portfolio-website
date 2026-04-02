import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/portfolio-website" : "",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["192.168.0.108", "172.30.36.53", "10.40.4.254"],
};

export default nextConfig;
