import fs from 'fs-extra'
import { createClient } from 'contentful'

const client = createClient({
  space: 'z8uwv83tofbw',
  accessToken:
    '1f346953eb0bf8aa1b57c5ac3d1abe12e8b723054e5961d8a71d410e52f6dc8f',
})

export default fetch()

async function fetch () {
  try {
    const authors = await fetchAuthors()
    const categories = await fetchCategories()
    const posts = await fetchPosts()

    const allData = {
      authors,
      categories,
      posts,
    }

    await fs.writeJSON('./data.json', allData)
    console.log('data.json successfully saved!')
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

async function fetchCategories () {
  const { items } = await client.getEntries({
    content_type: 'devCategory',
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
