import fs from 'fs-extra'
import path from 'path'
import { fetchDevPosts, fetchBlogPosts } from '../../contentful'

const siteRoot = 'https://nozzle.io'
const ignores = ['_app', '_document', '/l/', /[\[\]]/]
const outPath = './public/sitemap.xml'

run()

async function run() {
  try {
    await main()
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

async function main() {
  const staticPages = getPages()
  const dynamicPages = await getDynamicPages()

  const pages = {
    ...staticPages,
    ...dynamicPages,
  }

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
  ${Object.keys(pages)
    .map(
      path => `<url>
    <loc>${siteRoot}${path}</loc>
    <lastmod>${formatDate(new Date(pages[path].lastModified))}</lastmod>
  </url>`
    )
    .join('\n')}
</urlset>`

  fs.writeFileSync(path.resolve(__dirname, '../../', outPath), sitemapXml)
}

function getPages() {
  const fileObj = {}

  const walkSync = dir => {
    // Get all files of the current directory & iterate over them
    const files = fs.readdirSync(dir)
    files.forEach(file => {
      // Construct whole file-path & retrieve file's stats
      const filePath = `${dir}${file}`
      const fileStat = fs.statSync(filePath)

      if (ignores.some(ignore => filePath.match(ignore))) {
        return
      }

      if (fileStat.isDirectory()) {
        // Recurse one folder deeper
        walkSync(`${filePath}/`)
      } else {
        // Construct this file's pathname excluding the "pages" folder & its extension
        const fileName = filePath
          .substr(0, filePath.lastIndexOf('.'))
          .replace('pages/', '')

        // Add this file to `fileObj`
        fileObj[`/${fileName}`] = {
          page: `/${fileName}`,
          lastModified: fileStat.mtime,
        }
      }
    })
  }

  // Start recursion to fill `fileObj`
  walkSync('pages/')

  return fileObj
}

async function getDynamicPages() {
  const pages = {}
  const blogPostsPromise = fetchBlogPosts()
  const devBlogPostsPromise = fetchDevPosts()

  const {
    posts: blogPosts,
    categories: blogCategories,
  } = await blogPostsPromise
  const {
    posts: devBlogPosts,
    categories: devBlogCategories,
  } = await devBlogPostsPromise

  blogPosts.forEach(blogPost => {
    pages[`/blog/${blogPost.fields.slug}`] = {
      page: `/blog/${blogPost.fields.slug}`,
      lastModified: blogPost.sys.updatedAt,
    }
  })

  devBlogPosts.forEach(blogPost => {
    pages[`/devblog/${blogPost.fields.slug}`] = {
      page: `/devblog/${blogPost.fields.slug}`,
      lastModified: blogPost.sys.updatedAt,
    }
  })

  blogCategories.forEach(category => {
    pages[`/blog/categories/${category.fields.slug}`] = {
      page: `/blog/categories/${category.fields.slug}`,
      lastModified: new Date(),
    }
  })

  devBlogCategories.forEach(category => {
    pages[`/devblog/categories/${category.fields.slug}`] = {
      page: `/devblog/categories/${category.fields.slug}`,
      lastModified: new Date(),
    }
  })

  return pages
}

function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [year, month, day].join('-')
}
