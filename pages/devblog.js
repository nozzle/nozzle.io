import React, { Component } from 'react'
import styled from 'styled-components'
//
import Data from '../utils/Data'

import Link from '../components/Link'
import Head from '../components/Head'
import Content from '../components/Content'
import { Container, Header, SubMenu } from '../components/Layout'
import { H1 } from '../components/Html'
import PostList from '../components/PostList'

const BlogContainer = styled(Container)`
  background: rgba(0,0,0,.02);
`

export default class Devblog extends Component {
  static async getInitialProps () {
    try {
      const { posts, categories } = await Data()
      return {
        categories,
        posts,
      }
    } catch (e) {
      console.log(e)
      return {
        posts: [],
      }
    }
  }
  render () {
    const { posts, categories } = this.props
    return (
      <Content>
        <Head title='Nozzle Dev Blog' />
        <Header>
          <H1>Devblog</H1>
          <SubMenu>
            <ul>
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
