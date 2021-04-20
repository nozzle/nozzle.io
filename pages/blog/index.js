import React from 'react'
import { fetchBlogPosts } from '../../contentful'
import Link from 'next/link'
import Head from 'components/Head'
import { BlogContainer, Header, SubMenu } from 'components/Layout'
import { H1 } from 'components/Html'
import PostList from 'components/PostList'
import Pagination from 'components/Pagination'
import FeaturedPosts from 'components/FeaturedPosts'
import { useRouter } from 'next/router'

export async function getServerSideProps(req) {
  const props = await fetchBlogPosts()

  return {
    props,
  }
}

export default function Blog({ posts, categories }) {
  const router = useRouter()
  const { page = 1 } = router.query
  const postsPerPage = 12

  const indexOfLastPost = page * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <div>
      <Head
        title="Nozzle Blog - SEO Data From An Enterprise Level Keyword Rank Tracker Tool"
        description="The Nozzle blog provides SEO tips, strategies, and information for ranking better in the SERPs. Don't forget to monitor your keywords with Nozzle too. :)"
      />
      <main>
        <Header>
          <H1>Blog</H1>
          {categories.length ? (
            <SubMenu>
              <ul>
                {categories.map(category => (
                  <li key={category.fields.slug}>
                    <Link
                      href="/blog/categories/[category]"
                      as={`/blog/categories/${category.fields.slug}`}
                    >
                      <a>{category.fields.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </SubMenu>
          ) : null}
        </Header>
        <BlogContainer>
          <FeaturedPosts prefix="blog" posts={posts} />
          <PostList prefix="blog" posts={currentPosts} />
          <Pagination
            numPosts={posts.length}
            postsPerPage={postsPerPage}
            path="/blog"
          />
        </BlogContainer>
      </main>
    </div>
  )
}
