import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.respawngaming.in/',
      lastModified: new Date(),
      priority: 1,
    },
  ]
}