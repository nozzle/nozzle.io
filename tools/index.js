import fs from 'fs'
import Contentful from './Contentful'
//
import Info from 'utils/Info'

export default {
  exportPathMap: async () => {
    const paths = {
      '/': {
        page: '/',
      },
      '/rank-tracker-comparison': {
        page: '/rank-tracker-comparison',
      },
      '/features': {
        page: '/features',
      },
      '/pricing': {
        page: '/pricing',
      },
      '/about': {
        page: '/about',
      },
      '/devblog': {
        page: '/devblog',
      },
      '/l/onboarding': {
        page: '/l/onboarding',
      },
    }

    // Auto-assign page permalinks
    Object.keys(paths).forEach(key => {
      paths[key] = {
        ...paths[key],
        permalink: Info.siteRoot + key,
      }
    })

    // Get dynamic content from contentful
    const { posts, authors, categories } = await Contentful

    // Built Dev Blog
    posts.forEach(d => {
      const path = `/devblog/post/${d.fields.slug}`
      paths[path] = {
        page: '/devblog-post',
        query: { slug: d.fields.slug },
        // meta
        permalink: Info.siteRoot + path,
        nofollow: d.fields.nofollow,
        noindex: d.fields.noindex,
      }
    })

    // Build Dev Blog Categories
    categories.forEach(d => {
      const path = `/devblog/category/${d.fields.slug}`
      paths[path] = {
        page: '/devblog-category',
        query: { slug: d.fields.slug },
        // meta
        permalink: Info.siteRoot + path,
        nofollow: d.fields.nofollow,
        noindex: d.fields.noindex,
      }
    })

    // Create a sitemap using all of the paths
    createSiteMap(Object.values(paths))

    return paths
  },
}

function createSiteMap (pages) {
  const xml = generateXML({
    hostname: Info.siteRoot,
    urls: pages.map(page => ({
      url: page.permalink,
      changefreq: 600000,
      priority: page.priority || 0.5,
      lastmod: formatDate(page.sys.updatedAt),
    })),
  })
  fs.writeFile('./sitemap.xml', xml, () => console.log('[\u2713] Sitemap Generated'))
}

function generateXML ({ urls, hostname }) {
  let xml =
    '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  for (let i in urls) {
    xml += '<url>'
    xml += `<loc>${hostname}${urls[i].url}</loc>`
    xml += urls[i].lastmod ? `<lastmod>${urls[i].lastmod}</lastmod>` : ''
    xml += `<changefreq>${urls[i].changefreq}</changefreq>`
    xml += `<priority>${urls[i].priority}</priority>`
    xml += '</url>'
    i++
  }
  xml += '</urlset>'
  return xml
}

function formatDate (date) {
  const d = new Date(date)
  let month = `${d.getMonth() + 1}`
  let day = `${d.getDate()}`
  const year = d.getFullYear()

  if (month.length < 2) month = `0${month}`
  if (day.length < 2) day = `0${day}`

  return [year, month, day].join('-')
}
