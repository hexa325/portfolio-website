import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/portfolio-website" : "",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["10.40.140.184"],
};

export default nextConfig;
