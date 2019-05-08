import React, { Component } from 'react'
import { RouteData } from 'react-static'
//

import Link from 'components/Link'
import Head from 'components/Head'
import Page from 'components/Page'
import Main from 'components/Main'
import { BlogContainer, Header, SubMenu } from 'components/Layout'
import { H1 } from 'components/Html'
import PostList from 'components/PostList'

export default class Devblog extends Component {
  render() {
    return (
      <RouteData>
        {({ posts, tags }) => (
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
                <PostList prefix="devblog" posts={posts} />
              </BlogContainer>
            </Main>
          </Page>
        )}
      </RouteData>
    )
  }
}
