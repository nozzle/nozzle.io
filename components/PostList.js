import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
//
import Theme from '../utils/Theme'
import ReadTime from '../utils/ReadTime'

import Smackdown from './Smackdown'

import Link from './Link'
import { Button } from './Html'

const PostListStyled = styled.div`
  display: flex;
  flex-direction: column;
`

const Post = styled(Link)`
  width: 100%;
  max-width: 50rem;
  padding: 3rem;
  margin: 0 auto;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  margin-bottom: 3rem;
  background: white;
  border-radius: .5rem;
  box-shadow: inset 0 0 0 1px #dae4ed, 0 5px 15px -5px rgba(0,0,0,.1);

  .title {
    font-size: 1.7rem;
    margin-bottom: 1rem;
  }

  .info {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    opacity: .7;
  }

  .categories {
    font-size: .8rem;
    margin-bottom: 1rem;

    .category {
      display: inline-block;
      padding: 0.7rem;
      border-radius: .5rem;
      background: ${Theme.colors.primary};
      color: white;
    }
  }

  .summary {
    position: relative;

    .content {
      text-align: left;
      margin-bottom: 1rem;
    }

    .more {
      text-align: center;
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
`

export default function PostList ({ blog, posts }) {
  return (
    <PostListStyled>
      {posts.map(post => {
        const wordCount = post.fields.body.split(' ').length
        return (
          <Post to={`/${blog}/post/${post.fields.slug}`} key={post.fields.slug}>
            <div className='title'>
              {post.fields.title}
            </div>
            <div className='info'>
              {post.fields.author.map(author =>
                (<span key={author.fields.name}>
                  {author.fields.name}
                </span>)
              )}{' '}
              on {format(new Date(post.sys.createdAt), 'MMM DD, YYYY')} &bull;{' '}
              {ReadTime(wordCount)} min read
            </div>
            <div className='categories'>
              {post.fields.category.map(category =>
                (<span
                  className='category'
                  key={category.fields.slug}
                  style={{
                    background: Theme.colors.categories[category.fields.title],
                  }}
                >
                  {category.fields.title}
                </span>)
              )}
            </div>
            <div className='summary'>
              <div className='content'>
                <Smackdown micro source={post.fields.body} />
              </div>
              <div className='more'>
                <Button size='sm' burst>
                  Read More
                </Button>
              </div>
            </div>
          </Post>
        )
      })}
    </PostListStyled>
  )
}
