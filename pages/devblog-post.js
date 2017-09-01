import React, { Component } from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
//
import Theme from '../utils/Theme'
import Data from '../utils/Data'
import ReadTime from '../utils/ReadTime'

import Icon from '../components/Icon'
import Link from '../components/Link'
import Smackdown from '../components/Smackdown'
import Head from '../components/Head'
import Content from '../components/Content'
import { Container, Header } from '../components/Layout'
import { H3 } from '../components/Html'

const PostContainer = styled.div`
  .back {
    opacity: .6;
    display: inline-block;
    margin-bottom: 2rem;
    transition: all .1s ease-out;

    :hover {
      opacity: 1;
    }
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
`

const Post = styled.div`
  margin: 0 auto;
  padding: 0 2rem 2rem;
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

    const wordCount = post.fields.body.split(' ').length

    return (
      <Content>
        <Head
          title={`Devblog - ${post.fields.title}`}
          description={post.fields.body}
          type='article'
          path={`/devblog/post/${post.fields.slug}`}
          images={[post.fields.featuredImage.fields.file.url]}
          // videos=[]
          date={post.sys.createdAt}
          categories={post.fields.category[0].fields.title}
          tags={post.fields.tags}
          author={post.fields.author[0].fields.name}
          // seriesPermalinks={[]}
          wordCount={wordCount}
        />
        <PostContainer itemscope='' itemtype='http://schema.org/BlogPosting'>
          <Header>
            <Link to='/devblog' className='back'>
              <Icon i='arrow-left' /> Back to Devblog
            </Link>
            <H3 itemProp='name headline'>
              {post.fields.title}
            </H3>
            <div className='info'>
              {post.fields.author.map(author =>
                (<span
                  itemProp='author'
                  itemScope=''
                  itemType='http://schema.org/Person'
                  key={author.fields.name}
                >
                  <span itemProp='name'>
                    {/* <a itemProp="url" rel="author" /> */}
                    {author.fields.name}
                  </span>
                </span>)
              )}{' '}
              on{' '}
              <time dateTime={post.sys.createdAt} itemProp='datePublished'>
                {format(new Date(post.sys.createdAt), 'MMM DD, YYYY')}
              </time>{' '}
              &bull; {ReadTime(wordCount)} min read
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
          <Container>
            <Post itemProp='articleBody'>
              <Smackdown source={post.fields.body} />
            </Post>
          </Container>
        </PostContainer>
      </Content>
    )
  }
}
