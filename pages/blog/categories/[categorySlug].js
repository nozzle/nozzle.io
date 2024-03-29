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

const DescriptionStyles = styled('div')`
  ${tw`mx-auto p-8 max-w-full`}
`

export async function getServerSideProps({ query }) {
  const page = query.page || 1
  const props = await fetchBlogPostsByCategorySlug(query.categorySlug, page)
  return {
    props,
  }
}

export default function BlogCategory({ category, posts, total }) {
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
          <PostList prefix="blog" posts={posts} />
          <Pagination
            numPosts={total}
            path={`/blog/categories/${category.fields.slug}`}
            postsPerPage={12}
          />
        </Container>
      </main>
    </div>
  )
}
