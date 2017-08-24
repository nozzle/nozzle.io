import React, { Component } from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
//
import Theme from './utils/Theme'
import Data from './utils/Data'

import Smackdown from './components/Smackdown'
// import Link from './components/Link'
import Head from './components/Head'
import Content from './components/Content'
import { Container, Header } from './components/Layout'
import { H3 } from './components/Html'

const PostContainer = styled(Container)`
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
`

const Post = styled.div`
  margin: 0 auto;
  padding: 0 2rem 2rem;
  width: 750px;
  max-width: 100%;

  @media screen and (max-width: 600px) {
    padding: 0 1rem 1rem;
    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`

export default class DevblogPost extends Component {
  static async getInitialProps ({ query: { slug } }) {
    try {
      const { posts } = await Data()
      return {
        post: posts.find(d => d.fields.slug === slug),
      }
    } catch (e) {
      console.log(e)
      return {}
    }
  }
  render () {
    const { post } = this.props
    return (
      <Content>
        <Head>
          <title>
            {post.fields.title}
          </title>
        </Head>
        <PostContainer>
          <Header>
            <H3>
              {post.fields.title}
            </H3>
            <div className='info'>
              {post.fields.author.map(author =>
                (<span key={author.fields.name}>
                  {author.fields.name}
                </span>)
              )}{' '}
              on {format(new Date(post.sys.createdAt), 'MMM DD, YYYY')}
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
          </Header>
          <Post>
            <Smackdown source={post.fields.body} />
          </Post>
        </PostContainer>
      </Content>
    )
  }
}
