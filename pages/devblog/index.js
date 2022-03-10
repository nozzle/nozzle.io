import React from 'react'
import { fetchDevPosts } from '../../contentful'
import Link from 'next/link'
import Head from 'components/Head'
import { BlogContainer, Header, SubMenu } from 'components/Layout'
import { H1 } from 'components/Html'
import PostList from 'components/PostList'
import Pagination from 'components/Pagination'

export async function getServerSideProps({ query }) {
  const page = query.page || 1
  const props = await fetchDevPosts(page)

  return {
    props,
  }
}

export default function DevBlog({ posts, categories, total }) {
  return (
    <div>
      <Head
        title="Dev Blog | Nozzle"
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
                      href="/devblog/categories/[category]"
                      as={`/devblog/categories/${category.fields.slug}`}
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
          <PostList prefix="devblog" posts={posts} />
          <Pagination postsPerPage={12} numPosts={total} path={`/devblog`} />
        </BlogContainer>
      </main>
    </div>
  )
}
