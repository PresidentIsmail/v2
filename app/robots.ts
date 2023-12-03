import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://ismailshaikhnag.vercel.app/",
    sitemap: "https://ismailshaikhnag.vercel.app/sitemap.xml",
  };
}
