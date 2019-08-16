import { createClient } from 'contentful'
import { flatten, uniq, orderBy } from 'lodash'

const client = createClient({
  space: 'z8uwv83tofbw',
  accessToken:
    '1f346953eb0bf8aa1b57c5ac3d1abe12e8b723054e5961d8a71d410e52f6dc8f'
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
    return all.indexOf(value) === index;
  })

  return {
    ...post,
    fields: { ...post.fields, tags: post.fields.tags || [] },
    images
  }
}

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

  const posts = items.map(normalizePost)

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

  const posts = items.map(normalizePost)

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

  posts = posts.map(normalizePost)
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

  posts = posts.map(normalizePost)
  const tags = getTagsFromPosts(posts)

  return {
    posts: posts.map(normalizePost),
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
    post: normalizePost(post)
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
    post: normalizePost(post)
  }
}
