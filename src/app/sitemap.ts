import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { getAllLabPosts } from "@/lib/lab";
import { site } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllLabPosts();

  const staticPages = ["", "/projects", "/lab", "/about"].map((path) => ({
    url: `${site.url}${path}`,
  }));

  const projectPages = projects.map((project) => ({
    url: `${site.url}/projects/${project.slug}`,
  }));

  const labPages = posts.map((post) => ({
    url: `${site.url}/lab/${post.slug}`,
    lastModified: post.date,
  }));

  return [...staticPages, ...projectPages, ...labPages];
}