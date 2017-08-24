import Contentful from './Contentful'

export default {
  exportPathMap: async () => {
    const paths = {
      '/': { page: '/' },
      '/rank-tracker-comparison': { page: '/rank-tracker-comparison' },
      '/features': { page: '/features' },
      '/pricing': { page: '/pricing' },
      '/about': { page: '/about' },
      '/devblog': { page: '/devblog' },
    }

    const { posts, authors, categories } = await Contentful

    // Posts
    posts.forEach(d => {
      paths[`/devblog/post/${d.fields.slug}`] = {
        page: '/devblog-post',
        query: { slug: d.fields.slug },
      }
    })

    // Categories
    categories.forEach(d => {
      paths[`/devblog/category/${d.fields.slug}`] = {
        page: '/devblog-category',
        query: { slug: d.fields.slug },
      }
    })

    // // Authors
    // authors.forEach(d => {
    //   paths[`/devblog/author/${d.fields.slug}`] = {
    //     page: '/devblog-author',
    //     query: { slug: d.fields.slug },
    //   }
    // })

    return paths
  },
}
