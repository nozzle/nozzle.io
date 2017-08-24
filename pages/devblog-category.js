import React, { Component } from 'react'
import styled from 'styled-components'
//
import Data from './utils/Data'

import Link from './components/Link'
import Head from './components/Head'
import Content from './components/Content'
import { Container, Header, SubMenu } from './components/Layout'
import { H1 } from './components/Html'
import PostList from './components/PostList'

const BlogContainer = styled(Container)`
  background: rgba(0,0,0,.02);
`

export default class DevblogCategory extends Component {
  static async getInitialProps ({ query: { slug } }) {
    try {
      const { posts, categories } = await Data()
      return {
        categories,
        posts: posts.filter(d =>
          d.fields.category.find(dd => dd.fields.slug === slug)
        ),
        slug,
      }
    } catch (e) {
      console.log(e)
      return {}
    }
  }
  render () {
    const { posts, categories, slug } = this.props
    const category = categories.find(d => d.fields.slug === slug)
    return (
      <Content>
        <Head>
          <title>Nozzle Dev Blog</title>
        </Head>
        <Header>
          <H1>
            Devblog - {category.fields.title}
          </H1>
          <SubMenu>
            <ul>
              <li>
                <Link to='/devblog'>All</Link>
              </li>
              {categories.map(category =>
                (<li key={category.fields.slug}>
                  <Link to={`/devblog/category/${category.fields.slug}`}>
                    {category.fields.title}
                  </Link>
                </li>)
              )}
            </ul>
          </SubMenu>
        </Header>
        <BlogContainer>
          <PostList blog='devblog' posts={posts} />
        </BlogContainer>
      </Content>
    )
  }
}
