import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apple fetches the AASA file from this exact path. Needs
        // application/json — Next.js would otherwise serve the extensionless
        // file as application/octet-stream and Apple silently ignores it.
        source: "/.well-known/apple-app-site-association",
        headers: [
          { key: "Content-Type", value: "application/json" },
          // No caching during initial rollout so any fix propagates fast.
          // Once stable, Apple's own CDN mirror caches for us.
          { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
        ],
      },
    ];
  },
};

export default nextConfig;
