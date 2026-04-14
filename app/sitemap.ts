import { MetadataRoute } from "next";
import { SERVICES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://unovia.in";
  const lastModified = new Date();

  const routes = ["", "/about", "/services", "/insights", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...serviceRoutes];
}
