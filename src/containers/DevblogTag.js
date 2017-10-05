import React, { Component } from 'react'
import styled from 'styled-components'
import { getRouteProps } from 'react-static'
//

import Link from 'components/Link'
import Head from 'components/Head'
import Page from 'components/Page'
import Main from 'components/Main'
import { Container, Header, SubMenu } from 'components/Layout'
import { H1 } from 'components/Html'
import PostList from 'components/PostList'

const BlogContainer = styled(Container)`background: rgba(0, 0, 0, 0.02);`

class DevblogTag extends Component {
  render () {
    const { tag, tags, tagPosts } = this.props
    return (
      <Page>
        <Head title={`${tag} | Nozzle`} />
        <Main>
          <Header>
            <H1>Devblog - {tag}</H1>
            <SubMenu>
              <ul>
                <li>
                  <Link to="/devblog/">All</Link>
                </li>
                {tags.map(tag => (
                  <li key={tag}>
                    <Link to={`/devblog/tag/${tag}/`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </SubMenu>
          </Header>
          <BlogContainer>
            <PostList blog="devblog" posts={tagPosts} />
          </BlogContainer>
        </Main>
      </Page>
    )
  }
}

export default getRouteProps(DevblogTag)
