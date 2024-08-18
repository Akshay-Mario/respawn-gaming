import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.respawngaming.in/',
      lastModified: new Date(),
      priority: 1,
    },
    {
        url: 'https://maps.app.goo.gl/1P1SKcRu12p1cdVY6',
        lastModified: new Date(),
        priority: 0.6,
      },
  ]
}