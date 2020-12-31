import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { format } from 'date-fns'
//

import { fetchDevPostBySlug } from '../../contentful'

import ReadTime from 'utils/ReadTime'

import Head from 'components/Head'
import Icon from 'components/Icon'
import Link from 'next/link'
import Smackdown from 'components/Smackdown'
import Comments from 'components/Comments'

import { Container, Header } from 'components/Layout'
import { H1 } from 'components/Html'

const PostH1 = styled(H1)`
  ${tw`max-w-full `}
  width: 600px;
  font-size: ${props => props.theme.sizes.h3}rem;
  line-height: ${props => props.theme.sizes.h3 * 1.2}rem;
`

const PostContainer = styled('article')`
  .back {
    ${tw`opacity-60 inline-block mb-8`}
    transition: all 0.1s ease-out;

    :hover {
      ${tw`opacity-100`}
    }
  }

  .info {
    ${tw`text-lg leading-none mb-4 opacity-70`}
  }

  .categories {
    ${tw`text-sm mb-4 leading-none`}

    .category {
      ${tw`inline-block p-3 rounded-xl bg-primary text-white`}
      margin: 0 0.3rem 0.3rem 0;
    }
  }
`

const PostStyles = styled('div')`
  ${tw`mx-auto p-8 max-w-full`}
  width: 900px;

  @media screen and (max-width: 1500px) {
    width: 800px;
  }

  @media screen and (max-width: 1000px) {
    width: 650px;
  }

  @media screen and (max-width: 600px) {
    padding: 0 1rem 1rem;
    p {
      ${tw`text-base`}
    }
  }
`
export async function getServerSideProps(req) {
  return {
    props: await fetchDevPostBySlug(req.query.postSlug),
  }
}

export default function DevBlogPost({ post }) {
  const wordCount = post.fields.body.split(' ').length

  return (
    <div>
      <Head
        title={`${post.fields.title} | Nozzle`}
        description={post.fields.shortDescription}
        type="article"
        path={`/devblog/${post.fields.slug}`}
        images={post.images}
        // videos=[]
        date={post.sys.createdAt}
        categories={post.fields.categories}
        author={post.fields.author[0].fields.name}
        // seriesPermalinks={[]}
        wordCount={wordCount}
      />
      <main>
        <PostContainer itemScope itemType="http://schema.org/BlogPosting">
          <Header>
            <Link href="/devblog">
              <a className="back">
                <Icon i="arrow-left" /> Back
              </a>
            </Link>
            <PostH1 itemProp="name headline">{post.fields.title}</PostH1>
            <div className="info">
              {post.fields.author.map(author => (
                <span
                  itemScope
                  itemProp="author"
                  itemType="http://schema.org/Person"
                  key={author.fields.name}
                >
                  <span itemProp="name">
                    {/* <a itemProp="url" rel="author" /> */}
                    {author.fields.name}
                  </span>
                </span>
              ))}{' '}
              on{' '}
              <time dateTime={post.sys.updatedAt} itemProp="dateModified">
                {format(new Date(post.sys.updatedAt), 'MMM dd, yyyy')}
              </time>{' '}
              &bull; {ReadTime(wordCount)} min read
              <time dateTime={post.sys.createdAt} itemProp="datePublished" />
            </div>
            <div className="categories">
              {post.fields.categories.map(category => (
                <Link
                  as={`/devblog/categories/${category.fields.slug}`}
                  href="/devblog/categories/[category]"
                  key={category.fields.slug}
                >
                  <a className="category">{category.fields.name}</a>
                </Link>
              ))}
            </div>
          </Header>
          <Container>
            <PostStyles itemProp="articleBody">
              <Smackdown source={post.fields.body} />
            </PostStyles>
          </Container>
        </PostContainer>
        <PostStyles>
          <Comments
            path={`/devblog/${post.fields.slug}`}
            title={post.fields.title}
          />
        </PostStyles>
      </main>
    </div>
  )
}
