import type { MetadataRoute } from 'next'

const BASE_URL = 'https://asku.app'

const routes = [
  '',
  '/about',
  '/contact',
  '/security',
  '/support',
  '/support/data-deletion',
  '/app-store',
  '/legal/privacy',
  '/legal/terms',
  '/legal/subprocessors',
  '/legal/accessibility',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return routes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/about' || path === '/contact' ? 0.8 : 0.5,
  }))
}
