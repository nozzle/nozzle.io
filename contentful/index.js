import { createClient } from 'contentful'
import { flatten, uniq, orderBy, sample, sampleSize } from 'lodash'

const client = createClient({
  space: 'z8uwv83tofbw',
  accessToken:
    '1f346953eb0bf8aa1b57c5ac3d1abe12e8b723054e5961d8a71d410e52f6dc8f',
})

const normalizePost = post => {
  let images = []

  if (post.fields.featuredImage) {
    images.push(post.fields.featuredImage.fields.file.url)
  }

  let match

  const findMarkdownImages = /\!\[.+\]\((.+)\)/gm

  while ((match = findMarkdownImages.exec(post.fields.body)) !== null) {
    images.push(match[1])
  }

  images = images.filter((value, index, all) => {
    return all.indexOf(value) === index
  })

  return {
    ...post,
    fields: { ...post.fields, categories: post.fields.categories || [] },
    images,
  }
}

const getCategoriesFromPosts = posts =>
  uniq(
    flatten(
      posts.map(d => d.fields.categories),
      d => d.sys.id
    ),
    d => d.sys.id
  )

export async function fetchAuthors() {
  const { items } = await client.getEntries({
    content_type: '1kUEViTN4EmGiEaaeC6ouY',
    limit: 1000,
  })
  return items
}

export async function fetchDevPosts() {
  const { items } = await client.getEntries({
    content_type: 'devPost',
    limit: 1000,
  })

  const posts = items.map(normalizePost)

  return {
    posts: orderBy(posts, [d => d.fields.date || d.sys.createdAt], ['desc']),
    categories: getCategoriesFromPosts(posts),
  }
}

export async function fetchBlogPosts() {
  const { items } = await client.getEntries({
    content_type: '2wKn6yEnZewu2SCCkus4as',
    limit: 1000,
  })

  const posts = items.map(normalizePost)

  return {
    posts: orderBy(posts, [d => d.fields.date || d.sys.createdAt], ['desc']),
    categories: getCategoriesFromPosts(posts),
  }
}

export async function fetchDevPostsByCategorySlug(categorySlug) {
  const {
    items: [category],
  } = await client.getEntries({
    content_type: 'devBlogCategory',
    'fields.slug': categorySlug,
  })

  let { items: posts } = await client.getEntries({
    content_type: 'devPost',
    'fields.categories.sys.id': category.sys.id,
  })

  posts = posts.map(normalizePost)
  const categories = getCategoriesFromPosts(posts)

  return {
    posts: orderBy(posts, [d => d.fields.date || d.sys.createdAt], ['desc']),
    categories,
    category,
  }
}

export async function fetchBlogPostsByCategorySlug(categorySlug) {
  const {
    items: [category],
  } = await client.getEntries({
    content_type: 'blogCategory',
    'fields.slug': categorySlug,
  })

  let { items: posts } = await client.getEntries({
    content_type: '2wKn6yEnZewu2SCCkus4as',
    'fields.categories.sys.id': category.sys.id,
  })

  posts = posts.map(normalizePost)
  const categories = getCategoriesFromPosts(posts)

  return {
    posts: orderBy(posts, [d => d.fields.date || d.sys.createdAt], ['desc']),
    categories,
    category,
  }
}

export async function fetchBlogPostBySlug(slug) {
  const {
    items: [post],
  } = await client.getEntries({
    content_type: '2wKn6yEnZewu2SCCkus4as',
    'fields.slug[in]': slug,
  })

  const category = sample(post.fields.categories)

  let { posts: relatedPosts } = await fetchBlogPostsByCategorySlug(
    category.fields.slug
  )

  relatedPosts = sampleSize(
    relatedPosts.filter(d => d.sys.id !== post.sys.id),
    3
  )

  const need = 3 - relatedPosts.length

  const usedPosts = relatedPosts.map(relatedPosts => {
    return relatedPosts.sys.id
  })

  if (need) {
    const { posts } = await fetchBlogPosts()
    relatedPosts = [
      ...relatedPosts,
      ...sampleSize(
        posts.filter(
          d => usedPosts.includes(d.sys.id) == false && d.sys.id !== post.sys.id
        ),
        need
      ),
    ]
  }

  return {
    post: normalizePost(post),
    relatedPosts,
  }
}

export async function fetchDevPostBySlug(slug) {
  const {
    items: [post],
  } = await client.getEntries({
    content_type: 'devPost',
    'fields.slug[in]': slug,
  })

  return {
    post: normalizePost(post),
  }
}

export async function fetchMetrics() {
  const { items } = await client.getEntries({
    content_type: 'metrics',
    limit: 1000,
  })
  const metrics = items.map(normalizeMetrics)
  return {
    metrics: orderBy(metrics, [d => d.fields.name], ['asc']),
  }
}
const normalizeMetrics = metric => {
  return {
    ...metric,
  }
}

export async function fetchTestimonials() {
  const { items } = await client.getEntries({
    content_type: 'testimonial',
    limit: 1000,
  })
  const testimonial = items.map(normalizeTestimonial)
  return {
    testimonial: orderBy(testimonial, [d => d.fields.orderNumber], ['asc']),
  }
}
const normalizeTestimonial = testimonial => {
  return {
    ...testimonial,
  }
}
