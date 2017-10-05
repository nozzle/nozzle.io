import Html from './src/Html'
import Contentful from './tools/Contentful'

export default {
  siteRoot: 'https://nozzle.io',
  Html,
  getRoutes: async () => {
    const { posts, tags } = await Contentful()
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
        noindex: true,
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
          tags,
        }),
        children: [
          ...posts.map(d => {
            const path = `/${d.fields.slug}`
            return {
              path,
              nofollow: d.fields.nofollow,
              noindex: d.fields.noindex,
              getProps: async () => ({ post: d }),
            }
          }),
          ...tags.map(tag => {
            const path = `/tags/${tag}`
            return {
              path,
              getProps: async () => {
                const tagPosts = posts.filter(post => post.fields.tags.includes(tag))
                return { tag, tagPosts, tags }
              },
            }
          }),
        ],
      },
    ]
  },
}
