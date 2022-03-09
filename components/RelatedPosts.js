import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import tw from 'twin.macro'
import { Img } from './Html'
//

const PostListStyled = styled('div')`
  ${tw`flex flex-nowrap m-2 w-auto`}
`

const PostContainer = styled('div')`
  ${tw`flex flex-wrap flex-1 m-2 justify-center `}
`

const Post = styled('div')`
  ${tw`flex flex-col h-auto m-2 border-b border-solid border-gray-100 bg-white rounded-2xl shadow-xl`}
  flex: 0 0 200px;

  @media only screen and (max-width: 1000px) {
    width: 48%;
  }

  @media only screen and (max-width: 600px) {
    width: 98%;
  }

  article {
    ${tw`flex flex-1 flex-col `}
    align-items: space-between;

    > * {
      flex: 1 0 auto;
    }
  }

  .titleImg {
    ${tw`block bg-top bg-cover shadow-xl opacity-90 rounded-2xl`}
    flex: 0;
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
    ${tw`p-4 flex flex-col justify-between items-center`}
    flex: 1 0 auto;
  }

  .title {
    ${tw`text-base leading-5 mb-4 text-center`}
  }

  .authors {
    ${tw`flex flex-wrap items-center`}
  }
  .author {
    ${tw`flex items-center`}

    img {
      ${tw`w-8 h-8 rounded-full mr-2 shadow-2xl`}
    }
  }

  .image {
    ${tw`text-center`}
    img {
      ${tw`max-h-24 max-w-full w-auto`}
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
            return (
              <Post key={post.fields.slug}>
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
                    </header>
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
