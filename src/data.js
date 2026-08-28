import site from './data/site.json'
import pools from './data/pools.json'
import services from './data/services.json'
import equipment from './data/equipment.json'
import gallery from './data/gallery.json'
import pages from './data/pages.json'

export { site, pools, services, equipment, gallery, pages }

export function asset(path) {
  if (!path) return ''

  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:')
  ) {
    return path
  }

  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}