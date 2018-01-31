import React, { Component } from 'react'
import styled from 'styled-components'
import { RouteData } from 'react-static'
//

import Link from 'components/Link'
import Head from 'components/Head'
import Page from 'components/Page'
import Main from 'components/Main'
import { Container, Header, SubMenu } from 'components/Layout'
import { H1 } from 'components/Html'
import PostList from 'components/PostList'

const BlogContainer = styled(Container)`background: rgba(0, 0, 0, 0.02);`

export default class Devblog extends Component {
  render () {
    return (
      <RouteData
        render={({ posts, tags }) => (
          <Page>
            <Head title="Dev Blog | Nozzle" />
            <Main>
              <Header>
                <H1>Devblog</H1>
                <SubMenu>
                  <ul>
                    {tags.map(tag => (
                      <li key={tag}>
                        <Link to={`/devblog/tags/${tag}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </SubMenu>
              </Header>
              <BlogContainer>
                <PostList blog="devblog" posts={posts} />
              </BlogContainer>
            </Main>
          </Page>
        )}
      />
    )
  }
}
