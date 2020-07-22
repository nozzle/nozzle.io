import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import Link from 'next/link'
import ReadTime from 'utils/ReadTime'
import Smackdown from './Smackdown'
import tw from 'tailwind.macro'

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
  flex-wrap: wrap;
  justify-content: center;
`

const Post = styled('div')`
  flex: 0 1 325px;
  height: auto;
  margin: 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: white;
  border-radius: 1rem;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.15);

  @media only screen and (max-width: 1000px) {
    width: 48%;
  }

  @media only screen and (max-width: 600px) {
    width: 98%;
  }

  .titleImg {
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
    padding: 1.5rem;
  }

  .title {
    font-size: 1.5rem;
    line-height: 1.8rem;
    margin-bottom: 1rem;
  }

  .date {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .readTime {
    font-size: 0.8rem;
    margin-bottom: 1rem;
    opacity: 0.7;
  }

  .categories {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  .category {
    display: inline-block;
    padding: 0.4rem 0.6rem;
    border-radius: 0.5rem;
    background: rgba(0, 0, 0, 0.2);
    color: black;
    margin: 0 0.3rem 0.3rem 0;
  }

  .content {
    text-align: left;
    margin-bottom: 1rem;
  }

  .shortDescription {
    font-size: rem;
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
            const wordCount = post.fields.body.split(' ').length
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
