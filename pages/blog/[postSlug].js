import React, { Component } from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
//

import { fetchBlogPostBySlug } from '../../contentful'

import ReadTime from 'utils/ReadTime'

import Head from 'components/Head'
import Icon from 'components/Icon'
import Link from 'next/link'
import Smackdown from 'components/Smackdown'
import Comments from 'components/Comments'

import { Container, Header } from 'components/Layout'
import { H1, H3, Img } from 'components/Html'
import RelatedPosts from '../../components/RelatedPosts'

const PostH1 = styled(H1)`
  width: 600px;
  max-width: 100%;
  font-size: ${props => props.theme.sizes.h3}rem;
  line-height: ${props => props.theme.sizes.h3 * 1.2}rem;
`

const PostContainer = styled('article')`
  .back {
    opacity: 0.6;
    display: inline-block;
    margin-bottom: 2rem;
    transition: all 0.1s ease-out;

    :hover {
      opacity: 1;
    }
  }

  .info {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    opacity: 0.7;
  }

  .categories {
    font-size: 0.8rem;
    margin-bottom: 1rem;

    .category {
      display: inline-block;
      padding: 0.7rem;
      border-radius: 0.5rem;
      background: ${props => props.theme.colors.primary};
      color: white;
      margin: 0 0.3rem 0.3rem 0;
    }
  }
`

const PostStyles = styled('div')`
  margin: 0 auto;
  padding: 2rem;
  width: 900px;
  max-width: 100%;

  @media screen and (max-width: 1500px) {
    width: 800px;
  }

  @media screen and (max-width: 1000px) {
    width: 650px;
  }

  @media screen and (max-width: 600px) {
    padding: 0 1rem 1rem;
    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`

export default class DevblogPost extends Component {
  static getInitialProps = async req => {
    return fetchBlogPostBySlug(req.query.postSlug)
  }
  render() {
    const { post, relatedPosts } = this.props

    const wordCount = post.fields.body.split(' ').length

    return (
      <div>
        <Head
          title={`${post.fields.title} | Nozzle`}
          description={post.fields.shortDescription}
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
                  {format(new Date(post.sys.createdAt), 'MMM dd, yyyy')}
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
              <PostStyles itemProp="articleBody">
                <Smackdown source={post.fields.body} />
              </PostStyles>
            </Container>
          </PostContainer>
          <PostStyles>
            <Comments
              path={`/blog/${post.fields.slug}`}
              title={post.fields.title}
            />
            <H3
              css={`
                margin-top: 1rem;
                text-align: center;
              `}
            >
              More Like This
            </H3>
            <RelatedPosts posts={relatedPosts} prefix="blog" />
          </PostStyles>
        </main>
      </div>
    )
  }
}
