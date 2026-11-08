import type { NextConfig } from "next";

// The old URLs stay: /bulkCoolers.html is served by app/bulkCoolers/page.tsx.
const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/index.html", destination: "/" },
      { source: "/:page.html", destination: "/:page" },
    ];
  },
};

export default nextConfig;
