// import fs from 'fs-extra'
import { createClient } from 'contentful'
import { flatten, uniq } from 'lodash'

const client = createClient({
  space: 'z8uwv83tofbw',
  accessToken: '1f346953eb0bf8aa1b57c5ac3d1abe12e8b723054e5961d8a71d410e52f6dc8f',
})

export default async function fetch () {
  try {
    const authors = await fetchAuthors()
    const posts = await fetchPosts()
    const tags = uniq(flatten(posts.map(d => d.fields.tags)))

    const allData = {
      authors,
      tags,
      posts,
    }

    return allData
  } catch (e) {
    console.error(e)
  }
}

async function fetchAuthors () {
  const { items } = await client.getEntries({
    content_type: '1kUEViTN4EmGiEaaeC6ouY',
    limit: 1000,
  })
  return items
}

async function fetchPosts () {
  const { items } = await client.getEntries({
    content_type: 'devPost',
    limit: 1000,
  })
  return items
}
