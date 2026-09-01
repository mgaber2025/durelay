import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/signup", "/docs", "/status"].map((path) => ({ url: `https://durelay.com${path}`, lastModified: new Date("2026-08-31"), changeFrequency: path ? "monthly" : "weekly", priority: path ? 0.7 : 1 }));
}
