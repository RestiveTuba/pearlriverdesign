import { MetadataRoute } from 'next'
import { NICHE_SLUGS } from '@/lib/niches'

export default function sitemap(): MetadataRoute.Sitemap {
  const nichePages: MetadataRoute.Sitemap = NICHE_SLUGS.map((slug) => ({
    url: `https://pearlriverdesign.dev/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [
    {
      url: 'https://pearlriverdesign.dev',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...nichePages,
    {
      url: 'https://pearlriverdesign.dev/about',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: 'https://pearlriverdesign.dev/onboarding',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://pearlriverdesign.dev/privacy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://pearlriverdesign.dev/terms',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
