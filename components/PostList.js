import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import Link from 'next/link'
import ReadTime from 'utils/ReadTime'
import Smackdown from './Smackdown'
import tw from 'twin.macro'
import { Img } from './Html'

const PostListStyled = styled('div')`
  ${tw`flex flex-nowrap m-2 w-auto`}
`

const PostContainer = styled('div')`
  ${tw`flex flex-wrap m-2 justify-center flex-grow `}
`

const Post = styled('div')`
  ${tw`flex-shrink h-auto w-325 m-2 bg-white rounded-xl shadow-2xl`}

  @media only screen and (max-width: 1000px) {
    ${tw`w-2/4`}
  }

  @media only screen and (max-width: 600px) {
    ${tw`w-full`}
  }

  .titleImg {
    ${tw`block bg-top bg-cover shadow-lg opacity-90 rounded-xl`}
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

export default function PostList({ prefix, posts }) {
  return (
    <PostListStyled>
      {posts.length ? (
        <PostContainer>
          {posts.map(post => {
            const wordCount = post.fields.body.split(' ').length
            return (
              <Post key={post.fields.slug} css={tw`hover:(all:(opacity-100))`}>
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
                            <a className="category">{category.fields.name}</a>
                          </Link>
                        ))}
                      </div>
                    </header>
                    <div className="shortDescription">
                      <Smackdown micro source={post.fields.shortDescription} />
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
                                height="32"
                                width="32"
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
            )
          })}
        </PostContainer>
      ) : (
        <div
          css={`
            ${tw`text-center my-0 mx-auto`}
          `}
        >
          No posts were found.
        </div>
      )}
    </PostListStyled>
  )
}
