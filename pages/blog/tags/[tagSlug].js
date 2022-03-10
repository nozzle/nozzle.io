import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import Error from 'next/error'
//

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

export async function getServerSideProps({ query }) {
  const page = query.page || 1
  const props = await fetchBlogPostsByTagSlug(query.tagSlug, page)
  return {
    props,
  }
}

export default function BlogTag({ tag, posts, total }) {
  if (tag.err) {
    return <Error statusCode={tag.err} />
  }

  return (
    <div>
      <Head
        title={`${tag.fields.name} | Nozzle`}
        description={`${
          tag.fields.metaDescription ||
          "The Nozzle blog provides SEO tips, strategies, and information for ranking better in the SERPs. Don't forget to monitor your keywords with Nozzle too. :)"
        }`}
      />
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
          <PostList prefix="blog" posts={posts} />
          <Pagination
            postsPerPage={12}
            numPosts={total}
            path={`/blog/tags/${tag.fields.slug}`}
          />
        </Container>
      </main>
    </div>
  )
}
