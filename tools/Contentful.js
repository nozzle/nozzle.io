// import fs from 'fs-extra'
import { createClient } from 'contentful'
import { flatten, uniq, orderBy } from 'lodash'

const client = createClient({
  space: 'z8uwv83tofbw',
  accessToken:
    '1f346953eb0bf8aa1b57c5ac3d1abe12e8b723054e5961d8a71d410e52f6dc8f'
})

export default async function fetch() {
  try {
    const authors = await fetchAuthors()
    const devPosts = (await fetchDevPosts()).map(d => ({
      ...d,
      fields: { ...d.fields, tags: d.fields.tags || [] }
    }))
    const blogPosts = (await fetchBlogPosts()).map(d => ({
      ...d,
      fields: { ...d.fields, tags: d.fields.tags || [] }
    }))
    const devTags = uniq(flatten(devPosts.map(d => d.fields.tags)))
    const blogTags = uniq(flatten(blogPosts.map(d => d.fields.tags)))

    const allData = {
      authors,
      devTags,
      devPosts,
      blogPosts,
      blogTags
    }

    return allData
  } catch (e) {
    console.error(e)
  }
}

async function fetchAuthors() {
  const { items } = await client.getEntries({
    content_type: '1kUEViTN4EmGiEaaeC6ouY',
    limit: 1000
  })
  return items
}

async function fetchDevPosts() {
  const { items } = await client.getEntries({
    content_type: 'devPost',
    limit: 1000
  })
  return orderBy(items, [d => d.sys.createdAt], ['desc'])
}

async function fetchBlogPosts() {
  const { items } = await client.getEntries({
    content_type: '2wKn6yEnZewu2SCCkus4as',
    limit: 1000
  })
  return orderBy(items, [d => d.sys.createdAt], ['desc'])
}
