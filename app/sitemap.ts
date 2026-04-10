import fs from 'fs'
import path from 'path'
import { MetadataRoute } from 'next'
import {
  getCompetencies,
  getServiceClusters,
  getServices,
  getProjects,
} from '@/components/md/utils'

export const dynamic = 'force-static'

const BASE_URL = 'https://inros-lackner.com.kh'

/** Returns the filesystem mtime of a content file, falling back to now. */
function fileMtime(folder: string, slug: string): string {
  try {
    const filePath = path.join(process.cwd(), folder, `${slug}.md`)
    return fs.statSync(filePath).mtime.toISOString()
  } catch {
    return new Date().toISOString()
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`,                 priority: 1.0,  changeFrequency: 'weekly',  lastModified: now },
    { url: `${BASE_URL}/about/`,           priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/competencies/`,    priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/services/`,        priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/service-clusters/`,priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/projects/`,        priority: 0.8,  changeFrequency: 'weekly',  lastModified: now },
    { url: `${BASE_URL}/partners/`,        priority: 0.6,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/contact/`,         priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
  ]

  const competencyRoutes: MetadataRoute.Sitemap = getCompetencies().map((item) => ({
    url: `${BASE_URL}/competencies/${item.slug}/`,
    priority: 0.8,
    changeFrequency: 'monthly',
    lastModified: fileMtime('content/competencies', item.slug),
  }))

  const serviceClusterRoutes: MetadataRoute.Sitemap = getServiceClusters().map((item) => ({
    url: `${BASE_URL}/service-clusters/${item.slug}/`,
    priority: 0.7,
    changeFrequency: 'monthly',
    lastModified: fileMtime('content/service-clusters', item.slug),
  }))

  const serviceRoutes: MetadataRoute.Sitemap = getServices().map((item) => ({
    url: `${BASE_URL}/services/${item.slug}/`,
    priority: 0.7,
    changeFrequency: 'monthly',
    lastModified: fileMtime('content/services', item.slug),
  }))

  const projectRoutes: MetadataRoute.Sitemap = getProjects().map((item) => ({
    url: `${BASE_URL}/projects/${item.slug}/`,
    priority: 0.65,
    changeFrequency: 'monthly',
    lastModified: fileMtime('content/projects', item.slug),
  }))

  return [
    ...staticRoutes,
    ...competencyRoutes,
    ...serviceClusterRoutes,
    ...serviceRoutes,
    ...projectRoutes,
  ]
}
