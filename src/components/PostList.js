import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
//
import Theme from 'utils/Theme'
import ReadTime from 'utils/ReadTime'

import Smackdown from './Smackdown'

import Link from './Link'
import { Button } from './Html'

const PostListStyled = styled('div')`
  display: flex;
  flex-wrap: nowrap;
  padding-top: 2rem;
  margin: 0.5rem;
  width: auto%;
`

const PostContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  padding-top: 2rem;
  margin: 0.5rem;
`

const Post = styled('div')`
  width: 32%;
  height: auto;
  margin: 0.5rem;
  padding: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: white;
  border-radius: 0.5rem;
  box-shadow: inset 0 0 0 1px #dae4ed, 0 5px 15px -5px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 1250px) {
    width: 48%;
  }

  @media only screen and (max-width: 835px) {
    width: 98%;
  }

  .title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .info {
    display: flex;
    font-size: 0.85rem;
    margin-bottom: 1rem;
    opacity: 0.7;
    justify-content: space-between;
  }

  .tags {
    font-size: 0.8rem;
    margin-bottom: 1rem;

    .tag {
      display: inline-block;
      padding: 0.4rem 0.6rem;
      border-radius: 0.5rem;
      background: ${Theme.colors.primaryDark};
      color: white;
      margin: 0 0.3rem 0.3rem 0;
    }
  }

  .summary {
    position: relative;

    .content {
      text-align: left;
      margin-bottom: 1rem;
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
      }
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

  .titleImg {
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 2rem;
      max-height: 10rem;
      max-width: 100%;
      width: auto;
    }
  }
`

export default function PostList({ blog, posts }) {
  return (
    <PostListStyled>
      <PostContainer>
        {posts.map(post => {
          const wordCount = post.fields.body.split(' ').length
          return (
            <Post key={post.fields.slug}>
              <article>
                <header>
                  <div className="titleImg">
                    <Link to={`/${blog}/${post.fields.slug}/`}>
                      <img
                        src={
                          post.fields.featuredImage && [
                            post.fields.featuredImage.fields.file.url
                          ]
                        }
                      />
                    </Link>
                  </div>
                  <h2 className="title">
                    <div className="linkStyle">
                      <Link to={`/${blog}/${post.fields.slug}/`}>
                        {post.fields.title}
                      </Link>
                    </div>
                  </h2>
                  <div className="info">
                    <div>
                      {format(new Date(post.sys.createdAt), 'MMM DD, YYYY')}{' '}
                    </div>
                    <div>{ReadTime(wordCount)} min read</div>
                  </div>
                  <div className="tags">
                    {post.fields.tags.map(tag => (
                      <Link
                        to={`/devblog/tags/${tag}`}
                        className="tag"
                        key={tag}
                        style={{
                          background: Theme.colors.tags[tag]
                        }}
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </header>
                <div className="summary">
                  <div className="content">
                    <Smackdown micro source={post.fields.shortDescription} />
                  </div>
                  <div className="authors">
                    {post.fields.author.map(author => {
                      const {
                        fields: { profilePhoto }
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
    </PostListStyled>
  )
}

// Button
{
  /*                   <div className="more">
                    <Button size="sm" burst>
                      <Link to={`/${blog}/${post.fields.slug}/`}>
                        Read More
                      </Link>
                    </Button>
                  </div> */
}
