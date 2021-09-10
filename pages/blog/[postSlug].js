import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import Error from 'next/error'
//

import { fetchBlogPostBySlug } from '../../contentful'

import ReadTime from 'utils/ReadTime'

import Head from 'components/Head'
import Icon from 'components/Icon'
import Link from 'next/link'
import Smackdown from 'components/Smackdown'

import { Container, Header } from 'components/Layout'
import { H1, H3 } from 'components/Html'
import RelatedPosts from '../../components/RelatedPosts'
import AuthorsAndContributors from '../../components/AuthorsAndContributors'
import TweetList from '../../components/TweetList'
import SocialShare from '../../components/SocialShare'
import tw from 'twin.macro'

const PostH1 = styled(H1)`
  ${tw`max-w-full`}
  width: 600px;
  font-size: ${props => props.theme.sizes.h3}rem;
  line-height: ${props => props.theme.sizes.h3 * 1.2}rem;
`

const PostContainer = styled('article')`
  .back {
    ${tw`opacity-60 inline-block mb-8 transition ease-out duration-100 hover:(opacity-100)`}
  }

  .info {
    ${tw`text-lg mb-4 opacity-70 leading-none`}
  }

  .categories {
    ${tw`text-sm mb-4 leading-none`}

    .category {
      ${tw`inline-block p-3 rounded-xl bg-primary text-white mr-1.5 mb-1.5`}
    }
  }

  .tags {
    ${tw`text-sm pt-4 leading-none`}

    .tag {
      ${tw`inline-block p-3 rounded-xl bg-gray-400 text-white mr-1.5 mb-1.5 hover:(opacity-80)`}
    }
  }
`

const PostStyles = styled('div')`
  ${tw`mx-auto p-8 max-w-full w-225`}

  @media screen and (max-width: 1500px) {
    ${tw`w-200`}
  }

  @media screen and (max-width: 1000px) {
    ${tw`w-162`}
  }

  @media screen and (max-width: 600px) {
    ${tw`px-4 pb-4`}

    p {
      ${tw`text-base`}
    }
  }
`

export async function getServerSideProps(req) {
  return {
    props: await fetchBlogPostBySlug(req.query.postSlug),
  }
}

export default function BlogPost({ post, relatedPosts }) {
  if (post.err) {
    return <Error statusCode={post.err} />
  }
  const wordCount = post.fields.body.split(' ').length

  return (
    <div>
      <Head
        title={`${post.fields.titleTag || post.fields.title} | Nozzle`}
        description={
          post.fields.metaDescription || post.fields.shortDescription
        }
        type="article"
        path={`/blog/${post.fields.slug}`}
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
            <Link href="/blog">
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
                {format(
                  new Date(post.fields.date || post.sys.createdAt),
                  'MMM dd, yyyy'
                )}
              </time>{' '}
              &bull; {ReadTime(wordCount)} min read
              <time dateTime={post.sys.createdAt} itemProp="datePublished" />
            </div>
            <div className="categories">
              {post.fields.categories.map(category => (
                <Link
                  href="/blog/categories/[category]"
                  as={`/blog/categories/${category.fields.slug}`}
                  key={category.fields.slug}
                >
                  <a className="category">{category.fields.name}</a>
                </Link>
              ))}
            </div>
          </Header>
          <Container>
            <SocialShare post={post} />
            <PostStyles itemProp="articleBody">
              {post.fields.template?.fields.name === 'Tweet List' ? (
                <>
                  <Smackdown source={post.fields.body} />
                  {post.fields.body2 ? (
                    <Smackdown source={post.fields.body2} />
                  ) : (
                    ''
                  )}
                  <TweetList tweets={post.fields.tweets} />
                </>
              ) : post.fields.body2 ? (
                <>
                  <Smackdown source={post.fields.body} />
                  <Smackdown source={post.fields.body2} />
                </>
              ) : (
                <Smackdown source={post.fields.body} />
              )}
              <div className="tags">
                {post.fields.tags?.map(tag => (
                  <Link
                    href="/blog/tags/[tag]"
                    as={`/blog/tags/${tag.fields.slug}`}
                    key={tag.fields.slug}
                  >
                    <a className="tag">{tag.fields.name}</a>
                  </Link>
                ))}
              </div>
              <AuthorsAndContributors post={post} />

              <H3
                css={`
                  ${tw`mt-4 text-center`}
                `}
              >
                More Like This
              </H3>
              <RelatedPosts posts={relatedPosts} prefix="blog" />
            </PostStyles>
          </Container>
        </PostContainer>
      </main>
    </div>
  )
}
