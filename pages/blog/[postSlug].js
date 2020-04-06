import React, { Component } from 'react'
import { useRouter } from 'next/router'
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

const Bio = styled('div')`
  flex: 0 0 200px;
  height: auto;
  margin: 0.5rem;
  border-top: .15rem solid lightgray;
  border-bottom: .15rem solid lightgray;
  padding-top: 1rem;
  
    img {
      width: 10rem;
      height: 10rem;
      border-radius: 5rem;
      margin-right: 1rem;
      display: inline-block;
      float: left;
    }
  }
`
const ShareFabs = styled('div')`
  position: fixed;
  padding-top: 3rem;
  right: 0.75rem;

  .fab {
    color: white;
    width: 3.5rem;
    font-size: 1.5rem;
    padding: 1rem;
    margin: 0.15rem;
    border-radius: 0.3rem;
    display: block;

    :hover {
      opacity: 0.75;
    }
  }

  .twitter {
    background-color: #1da1f2;
  }
  .facebook {
    background-color: #4267b2;
  }
  .linkedin {
    background-color: #2867b2;
  }
  .buffer {
    background-color: lightgray;
  }

  @media screen and (max-width: 700px) {
    position: relative;
    padding-top: 1.5rem;
    padding-left: 1rem;
    padding-bottom: 1.5rem;

    .fab {
      display: inline;
    }
  }
`

export async function getServerSideProps(req) {
  return {
    props: await fetchBlogPostBySlug(req.query.postSlug),
  }
}

export default function BlogPost({ post, relatedPosts }) {
  const router = useRouter()
  const wordCount = post.fields.body.split(' ').length

  // `window` does not exist on the server, so we have to use
  // the next router to make a best guess
  const [locationHref, setLocationHref] = React.useState(
    'https://nozzle.io/' + router.asPath
  )

  // This effect will run only once, after the page mounts in the
  // browser, thus we can update the locationHref to the real `window.location.href`
  React.useEffect(() => {
    setLocationHref(window.location.href)
  }, [])

  // Then we build the share urls from that
  const shareURL = encodeURIComponent(locationHref)
  const shareTitle = encodeURIComponent(post.fields.title)

  return (
    <div>
      <Head
        title={`${post.fields.titleTag || post.fields.title} | Nozzle`}
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
            <ShareFabs>
              <a
                href={
                  'https://twitter.com/share?url=' +
                  shareURL +
                  '&amp;text=' +
                  shareTitle +
                  '&amp;via=nozzleio'
                }
                target="_blank"
              >
                <Icon className="twitter" i="twitter" />
              </a>

              <a
                href={'http://www.facebook.com/sharer.php?u=' + shareURL}
                target="_blank"
              >
                <Icon className="facebook" i="facebookLetter" />
              </a>

              <a
                href={
                  'https://www.linkedin.com/shareArticle?mini=true&amp;url=' +
                  shareURL
                }
                target="_blank"
              >
                <Icon className="linkedin" i="linkedin" />
              </a>

              <a
                href={'https://bufferapp.com/add?url=' + shareURL}
                target="_blank"
              >
                <Icon className="buffer" i="buffer" />
              </a>
            </ShareFabs>
            <PostStyles itemProp="articleBody">
              <Smackdown source={post.fields.body} />
            </PostStyles>
          </Container>
        </PostContainer>
        <Container>
          <PostStyles>
            {post.fields.author.map(author => {
              const {
                fields: { profilePhoto, biography },
              } = author
              const profilePhotoURL = profilePhoto
                ? profilePhoto.fields.file.url
                : ''
              return biography ? (
                <div className="author" key={author.fields.name}>
                  <Bio>
                    {profilePhotoURL ? (
                      <img src={profilePhotoURL} alt="Author" />
                    ) : null}
                    <Smackdown source={biography} />
                  </Bio>
                </div>
              ) : null
            })}
          </PostStyles>
        </Container>
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
