import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import Link from 'next/link'
import ReadTime from 'utils/ReadTime'
import Smackdown from './Smackdown'
import tw from 'tailwind.macro'

const PostListStyled = styled('div')`
  ${tw`flex flex-no-wrap w-auto`}
`

const PostContainer = styled('div')`
  ${tw``}
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  :after {
    content: '';
    display: table;
    clear: both;
  }
`

const Post = styled('div')`
  ${tw`bg-white rounded-xlg shadow-2xl m-2`}
  float: left;
  width: 31%;
  height: auto;

  @media only screen and (max-width: 900px) {
    ${tw``}
    width: 90%;
    display: block;
    margin-bottom: 20px;
  }

  .titleImg {
    ${tw`block bg-top bg-cover shadow-lg opacity-90 rounded-xlg`}
    transition: all 0.5s ease;

    > div {
      ${tw`pb-1/2`}
    }
  }

  :hover {
    .titleImg {
      ${tw`bg-center opacity-100`}
    }
  }

  .content {
    ${tw`p-6`}
  }

  .title {
    ${tw`text-2xl leading-7 mb-4`}
  }

  .date {
    ${tw`text-sm mb-4`}
  }

  .readTime {
    ${tw`text-sm mb-4 opacity-75`}
  }

  .categories {
    ${tw`text-sm mb-4`}
  }

  .category {
    ${tw`inline-block py-2 px-2 rounded-lg text-black bg-gray-300 mr-1 mb-1`}
  }

  .content {
    ${tw`text-left mb-4`}
  }

  .shortDescription {
    ${tw`text-base`}
  }

  .authors {
    ${tw`flex flex-wrap items-center`}
  }
  .author {
    ${tw`flex items-center`}

    img {
      ${tw`w-8 h-8 rounded-full mr-2 shadow-lg`}
    }
  }

  .image {
    ${tw`text-center`}

    img {
      ${tw`max-w-full w-auto`}
    }
  }

  .linkStyle {
    :hover {
      ${tw`underline`}
    }
  }
`

export default function FeaturedPosts({ prefix, posts }) {
  return (
    <PostListStyled>
      {posts.length ? (
        <PostContainer>
          {posts.map(post => {
            const wordCount = post.fields.body.split(' ').length
            return (
              <React.Fragment key={post.fields.slug}>
                {post.fields.featuredPost ? (
                  <Post>
                    <article>
                      {post.fields.featuredImage ? (
                        <Link
                          as={`/${prefix}/${post.fields.slug}/`}
                          href={`/${prefix}/[postSlug]`}
                        >
                          <a
                            className="titleImg"
                            style={{
                              backgroundImage: `url(${post.fields.featuredImage.fields.file.url})`,
                            }}
                          >
                            <div />
                          </a>
                        </Link>
                      ) : null}
                      <div className="content">
                        <header>
                          <h2 className="title">
                            <div className="linkStyle">
                              <Link
                                as={`/${prefix}/${post.fields.slug}/`}
                                href={`/${prefix}/[postSlug]`}
                              >
                                <a>{post.fields.title}</a>
                              </Link>
                            </div>
                          </h2>
                          <div className="date">
                            {format(
                              new Date(post.fields.date || post.sys.createdAt),
                              'MMM dd, yyyy'
                            )}{' '}
                          </div>
                          <div className="readTime">
                            {ReadTime(wordCount)} min read
                          </div>
                          <div className="categories">
                            {post.fields.categories.map(category => (
                              <Link
                                as={`/${prefix}/categories/${category.fields.slug}`}
                                href={`/${prefix}/categories/[category]`}
                                key={category.fields.slug}
                              >
                                <a className="category">
                                  {category.fields.name}
                                </a>
                              </Link>
                            ))}
                          </div>
                        </header>
                        <div className="shortDescription">
                          <Smackdown
                            micro
                            source={post.fields.shortDescription}
                          />
                        </div>
                        <div className="authors">
                          {post.fields.author.map(author => {
                            const {
                              fields: { profilePhoto },
                            } = author

                            const profilePhotoURL = profilePhoto
                              ? profilePhoto.fields.file.url
                              : ''

                            return (
                              <div className="author" key={author.fields.name}>
                                {profilePhotoURL ? (
                                  <img src={profilePhotoURL} alt="Author" />
                                ) : null}
                                <div>{author.fields.name}</div>
                              </div>
                            )
                          })}{' '}
                        </div>
                      </div>
                    </article>
                  </Post>
                ) : null}
              </React.Fragment>
            )
          })}
        </PostContainer>
      ) : null}
    </PostListStyled>
  )
}
