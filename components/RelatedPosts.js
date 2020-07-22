import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import tw from 'tailwind.macro'
//

const PostListStyled = styled('div')`
  display: flex;
  flex-wrap: nowrap;
  margin: 0.5rem;
  width: auto;
`

const PostContainer = styled('div')`
  flex: 1;
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Post = styled('div')`
  flex: 0 0 200px;
  height: auto;
  margin: 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: white;
  border-radius: 1rem;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1000px) {
    width: 48%;
  }

  @media only screen and (max-width: 600px) {
    width: 98%;
  }

  article {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: space-between;

    > * {
      flex: 1 0 auto;
    }
  }

  .titleImg {
    flex: 0;
    display: block;
    background-position: top;
    background-size: cover;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    opacity: 0.9;
    transition: all 0.5s ease;
    border-radius: 1rem;

    > div {
      padding-bottom: 50%;
    }
  }

  :hover {
    .titleImg {
      background-position: center;
      opacity: 1;
    }
  }

  .content {
    flex: 1 0 auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    font-size: 1rem;
    line-height: 1.2rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .authors {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .author {
    display: flex;
    align-items: center;

    img {
      width: 2rem;
      height: 2rem;
      border-radius: 2rem;
      margin-right: 0.5rem;
      box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
    }
  }

  .image {
    text-align: center;
    img {
      max-height: 6rem;
      max-width: 100%;
      width: auto;
    }
  }

  .linkStyle {
    :hover {
      text-decoration: underline;
    }
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
