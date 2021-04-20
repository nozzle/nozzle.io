import React from 'react'
import Error from 'next/error'
//
import styled from 'styled-components'
import Link from 'next/link'
import Icon from 'components/Icon'
import Head from 'components/Head'
import Pagination from 'components/Pagination'
import Smackdown from 'components/Smackdown'

import { Container, Header, SubMenu } from 'components/Layout'
import { H1 } from 'components/Html'
import PostList from 'components/PostList'
import { fetchBlogPostsByCategorySlug } from '../../../contentful'
import tw from 'twin.macro'
import { useRouter } from 'next/router'

const DescriptionStyles = styled('div')`
  ${tw`mx-auto p-8 max-w-full`}
`

export async function getServerSideProps(req) {
  const props = await fetchBlogPostsByCategorySlug(req.query.categorySlug)
  return {
    props,
  }
}

export default function BlogCategory({ category, posts }) {
  const router = useRouter()
  const { page = 1 } = router.query
  const postsPerPage = 12

  const indexOfLastPost = page * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  if (category.err) {
    return <Error statusCode={category.err} />
  }

  return (
    <div>
      <Head title={`${category.fields.name} | Nozzle`} />
      <main>
        <Header>
          <H1>Blog - {category.fields.name}</H1>
          <SubMenu>
            <ul>
              <Link href="/blog/">
                <a>
                  <Icon i="arrow-left" /> Back
                </a>
              </Link>
            </ul>
          </SubMenu>
        </Header>
        <Container>
          {category.fields.description ? (
            <DescriptionStyles>
              <Smackdown source={category.fields.description} />
            </DescriptionStyles>
          ) : null}
          <PostList prefix="blog" posts={currentPosts} />
          <Pagination
            numPosts={posts.length}
            path={`/blog/categories/${category.fields.slug}`}
            postsPerPage={postsPerPage}
          />
        </Container>
      </main>
    </div>
  )
}
