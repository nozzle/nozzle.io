import { Helmet } from 'react-helmet'
//
import Html from './src/Html'
import Contentful from './tools/Contentful'

export default {
  // The app (not the index)
  componentPath: './src/App',
  // Use react-helmet
  postRenderData: async () => {
    const helmet = Helmet.renderStatic()
    const data = {
      htmlProps: helmet.htmlAttributes.toComponent(),
      bodyProps: helmet.bodyAttributes.toComponent(),
      base: helmet.base.toComponent(),
      link: helmet.link.toComponent(),
      meta: helmet.meta.toComponent(),
      noscript: helmet.noscript.toComponent(),
      script: helmet.script.toComponent(),
      style: helmet.style.toComponent(),
      title: helmet.title.toComponent(),
    }
    return data
  },
  // Custom Html component
  Html,
  // Build your routes dynamically
  getRoutes: async () => {
    // Get dynamic content from contentful
    const { posts, categories } = await Contentful()

    // Build sitemap
    return [
      {
        path: '/',
      },
      {
        path: '/rank-tracker-comparison',
      },
      {
        path: '/features',
      },
      {
        path: '/pricing',
      },
      {
        path: '/about',
      },
      {
        path: '/l/onboarding',
        children: [
          {
            path: '/thanks',
          },
        ],
      },
      {
        path: '/devblog/',
        getProps: async () => ({
          posts,
          categories,
        }),
        children: [
          ...posts.map(d => {
            const path = `/post/${d.fields.slug}`
            return {
              path,
              nofollow: d.fields.nofollow,
              noindex: d.fields.noindex,
              getProps: async () => ({ post: d }),
            }
          }),
          ...categories.map(d => {
            const path = `/category/${d.fields.slug}`
            return {
              path,
              nofollow: d.fields.nofollow,
              noindex: d.fields.noindex,
              getProps: async () => {
                const categoryPosts = posts.filter(post =>
                  post.fields.category.find(cat => cat.fields.slug === d.fields.slug),
                )
                return { category: d, categoryPosts, categories }
              },
            }
          }),
        ],
      },
    ]
  },
}
