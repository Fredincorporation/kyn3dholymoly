import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap { return [{ url: 'https://kyn3d-holymoly.example', lastModified: new Date('2026-09-14'), changeFrequency: 'monthly', priority: 1 }, { url: 'https://kyn3d-holymoly.example/privacy-policy', lastModified: new Date('2026-09-14'), changeFrequency: 'yearly', priority: .8 }] }
