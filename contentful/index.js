import { createClient } from 'contentful'
import { flatten, uniq, orderBy } from 'lodash'

const client = createClient({
  space: 'z8uwv83tofbw',
  accessToken:
    '1f346953eb0bf8aa1b57c5ac3d1abe12e8b723054e5961d8a71d410e52f6dc8f'
})

const normalizePostTags = post => ({
  ...post,
  fields: { ...post.fields, tags: post.fields.tags || [] }
})

const getTagsFromPosts = posts => uniq(flatten(posts.map(d => d.fields.tags)))

export async function fetchAuthors() {
  const { items } = await client.getEntries({
    content_type: '1kUEViTN4EmGiEaaeC6ouY',
    limit: 1000
  })
  return items
}

export async function fetchDevPosts() {
  const { items } = await client.getEntries({
    content_type: 'devPost',
    limit: 1000
  })

  const posts = items.map(normalizePostTags)

  return {
    posts: orderBy(posts, [d => d.sys.createdAt], ['desc']),
    tags: getTagsFromPosts(posts)
  }
}

export async function fetchBlogPosts() {
  const { items } = await client.getEntries({
    content_type: '2wKn6yEnZewu2SCCkus4as',
    limit: 1000
  })

  const posts = items.map(normalizePostTags)

  return {
    posts: orderBy(posts, [d => d.sys.createdAt], ['desc']),
    tags: getTagsFromPosts(posts)
  }
}

export async function fetchDevPostsByTag(tag) {
  let { items: posts } = await client.getEntries({
    content_type: 'devPost',
    'fields.tags[in]': tag
  })

  posts = posts.map(normalizePostTags)
  const tags = getTagsFromPosts(posts)

  return {
    posts: orderBy(posts, [d => d.sys.createdAt], ['desc']),
    tags,
    tag
  }
}

export async function fetchBlogPostsByTag(tag) {
  let { items: posts } = await client.getEntries({
    content_type: '2wKn6yEnZewu2SCCkus4as',
    'fields.tags[in]': tag
  })

  posts = posts.map(normalizePostTags)
  const tags = getTagsFromPosts(posts)

  return {
    posts: posts.map(normalizePostTags),
    tags,
    tag
  }
}

export async function fetchBlogPostBySlug(slug) {
  const {
    items: [post]
  } = await client.getEntries({
    content_type: '2wKn6yEnZewu2SCCkus4as',
    'fields.slug[in]': slug
  })

  return {
    post: normalizePostTags(post)
  }
}

export async function fetchDevPostBySlug(slug) {
  const {
    items: [post]
  } = await client.getEntries({
    content_type: 'devPost',
    'fields.slug[in]': slug
  })

  return {
    post: normalizePostTags(post)
  }
}
