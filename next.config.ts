import type { NextConfig } from "next";
import { BUCKET } from "./lib/firestore";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // The old URLs stay: /bulkCoolers.html is served by app/bulkCoolers/page.tsx.
      { source: "/index.html", destination: "/" },
      { source: "/:page.html", destination: "/:page" },
      // Photos added in the admin are kept in Firebase Storage and shown from the site's own
      // address, so a news item's image is "news-photos/<name>" like any other file of the site.
      { source: "/news-photos/:name", destination: `https://firebasestorage.googleapis.com/v0/b/${BUCKET}/o/:name?alt=media` },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" }, // no other site may show these pages in a frame
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
