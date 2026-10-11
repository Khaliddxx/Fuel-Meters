import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1 },
    { path: "/products", priority: 0.9 },
    { path: "/applications", priority: 0.8 },
    { path: "/about", priority: 0.6 },
    { path: "/contact", priority: 0.7 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
