import React from 'react'
import {
  fetchBlogCateogries,
  fetchBlogPosts,
  fetchFeaturedBlogPosts,
} from '../../contentful'
import Link from 'next/link'
import Head from 'components/Head'
import { BlogContainer, Header, SubMenu } from 'components/Layout'
import { H1 } from 'components/Html'
import PostList from 'components/PostList'
import Pagination from 'components/Pagination'
import FeaturedPosts from 'components/FeaturedPosts'

export async function getServerSideProps({ query }) {
  const page = query.page || 1

  const props = await fetchBlogPosts(page)
  const featuredPosts = await fetchFeaturedBlogPosts()
  const categories = await fetchBlogCateogries()

  return {
    props: { ...props, featuredPosts, categories: categories.categories },
  }
}

export default function Blog({ posts, categories, total, featuredPosts }) {
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
          <FeaturedPosts prefix="blog" posts={featuredPosts.posts} />
          <PostList prefix="blog" posts={posts} />
          <Pagination numPosts={total} postsPerPage={12} path="/blog" />
        </BlogContainer>
      </main>
    </div>
  )
}
