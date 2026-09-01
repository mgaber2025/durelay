import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Durelay", short_name: "Durelay", description: "Multi-tenant webhook relay platform", start_url: "/", display: "standalone", background_color: "#09090b", theme_color: "#035FFB", icons: [{ src: "/brand/durelay-circle-blue.svg", sizes: "any", type: "image/svg+xml" }] };
}
