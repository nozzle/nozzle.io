import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import Error from 'next/error'
//
import { useRouter } from 'next/router'
import Link from 'next/link'
import Icon from 'components/Icon'
import Head from 'components/Head'
import Pagination from 'components/Pagination'
import Smackdown from 'components/Smackdown'

import { Container, Header, SubMenu } from 'components/Layout'
import { H1 } from 'components/Html'
import PostList from 'components/PostList'
import { fetchBlogPostsByTagSlug } from '../../../contentful'

const DescriptionStyles = styled('div')`
  ${tw`mx-auto p-8 max-w-full`}
`

export async function getServerSideProps(req) {
  const props = await fetchBlogPostsByTagSlug(req.query.tagSlug)
  return {
    props,
  }
}

export default function BlogTag({ tag, posts }) {
  const router = useRouter()
  const { page = 1 } = router.query
  const postsPerPage = 12

  const indexOfLastPost = page * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  if (tag.err) {
    return <Error statusCode={tag.err} />
  }

  return (
    <div>
      <Head title={`${tag.fields.name} | Nozzle`} />
      <main>
        <Header>
          <H1>Blog - {tag.fields.name}</H1>
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
          {tag.fields.description ? (
            <DescriptionStyles>
              <Smackdown source={tag.fields.description} />
            </DescriptionStyles>
          ) : null}
          <PostList prefix="blog" posts={currentPosts} />
          <Pagination
            postsPerPage={postsPerPage}
            numPosts={posts.length}
            path={`/blog/tags/${tag.fields.slug}`}
          />
        </Container>
      </main>
    </div>
  )
}
