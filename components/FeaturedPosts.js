import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import Link from 'next/link'
import ReadTime from 'utils/ReadTime'
import Smackdown from './Smackdown'
import tw from 'twin.macro'
import { Img } from './Html'

const PostListStyled = styled('div')`
  ${tw`flex flex-nowrap w-auto`}
`

const PostContainer = styled('div')`
  ${tw`flex flex-wrap justify-center`}

  :after {
    ${tw`table clear-both`}
    content: '';
  }
`

const Post = styled('div')`
  ${tw`bg-white rounded-xl shadow-2xl m-2 float-left h-auto w-3/10`}

  @media only screen and (max-width: 900px) {
    ${tw`block mb-5 w-11/12`}
  }

  .titleImg {
    ${tw`block bg-top bg-cover shadow-lg opacity-90 rounded-xl transition-all duration-500 `}
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
    ${tw`flex items-center gap-2`}
  }

  .image {
    ${tw`text-center`}

    img {
      ${tw`max-w-full w-auto`}
    }
  }

  .linkStyle {
    ${tw`hover:(underline)`}
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
                  <Post css={tw`hover:(all:(opacity-100))`}>
                    <article>
                      {post.fields.featuredImage ? (
                        <Link
                          as={`/${prefix}/${post.fields.slug}/`}
                          href={`/${prefix}/[postSlug]`}
                        >
                          <div
                            css={tw`block shadow-lg opacity-80 rounded-xl transition-all duration-500`}
                          >
                            <Img
                              src={`http:${post.fields.featuredImage.fields.file.url}`}
                              layout="responsive"
                              width="300"
                              height="150"
                              css={tw`rounded-xl`}
                            />
                          </div>
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
                                  <Img
                                    src={`https:${profilePhotoURL}`}
                                    alt="Author"
                                    width="32"
                                    height="32"
                                    css={tw`rounded-full`}
                                  />
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
