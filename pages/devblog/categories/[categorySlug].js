import React from 'react'
//

import Link from 'next/link'
import Head from 'components/Head'
import Icon from 'components/Icon'
import Error from 'next/error'

import { Container, Header, SubMenu } from 'components/Layout'
import { H1 } from 'components/Html'
import PostList from 'components/PostList'
import { fetchDevPostsByCategorySlug } from '../../../contentful'
import Pagination from 'components/Pagination'

export async function getServerSideProps({ query }) {
  const page = query.page || 1
  const props = await fetchDevPostsByCategorySlug(query.categorySlug, page)
  return {
    props,
  }
}

export default function DevBlogCategory({ category, posts, total }) {
  if (category.err) {
    return <Error statusCode={category.err} />
  }
  return (
    <div>
      <Head
        title={`${category.fields.name} | Nozzle`}
        description={`${
          category.fields.metaDescription ||
          "The Nozzle blog provides SEO tips, strategies, and information for ranking better in the SERPs. Don't forget to monitor your keywords with Nozzle too. :)"
        }`}
      />
      <main>
        <Header>
          <H1>Dev Blog - {category.fields.name}</H1>
          <SubMenu>
            <ul>
              <li>
                <Link href="/devblog/">
                  <a>
                    <Icon i="arrow-left" /> Back
                  </a>
                </Link>
              </li>
            </ul>
          </SubMenu>
        </Header>
        <Container>
          <PostList prefix="devblog" posts={posts} />
          <Pagination
            postsPerPage={12}
            numPosts={total}
            path={`/blog/categories/${category.fields.slug}`}
          />
        </Container>
      </main>
    </div>
  )
}
