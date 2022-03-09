import React from 'react'
//

import Link from 'next/link'
import Head from 'components/Head'
import Icon from 'components/Icon'

import { Container, Header, SubMenu } from 'components/Layout'
import { H1 } from 'components/Html'
import PostList from 'components/PostList'
import { fetchDevPostsByCategorySlug } from '../../../contentful'
import Pagination from 'components/Pagination'
import { useRouter } from 'next/router'

export async function getServerSideProps(req) {
  const props = await fetchDevPostsByCategorySlug(req.query.categorySlug)
  return {
    props,
  }
}

export default function DevBlogTag({ category, posts }) {
  const router = useRouter()
  const { page = 1 } = router.query
  const postsPerPage = 12

  const indexOfLastPost = page * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

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
          <PostList prefix="devblog" posts={currentPosts} />
          <Pagination
            postsPerPage={postsPerPage}
            numPosts={posts.length}
            path={`/blog/categories/${category.fields.slug}`}
          />
        </Container>
      </main>
    </div>
  )
}
