import React, { Component } from 'react'
import styled from 'styled-components'
import { Switch, Redirect, Route } from 'react-router-dom'
import { getRouteProps } from 'react-static'
//

import Link from 'components/Link'
import Head from 'components/Head'
import Page from 'components/Page'
import Main from 'components/Main'
import { Container, Header, SubMenu } from 'components/Layout'
import { H1 } from 'components/Html'
import PostList from 'components/PostList'

import DevblogPost from 'containers/DevblogPost'
import DevblogTag from 'containers/DevblogTag'

const BlogContainer = styled(Container)`background: rgba(0, 0, 0, 0.02);`

class Devblog extends Component {
  render () {
    const { posts, tags, match } = this.props
    return (
      <Switch>
        <Route
          path={match.url}
          exact
          render={() => (
            <Page>
              <Head title="Dev Blog | Nozzle" />
              <Main>
                <Header>
                  <H1>Devblog</H1>
                  <SubMenu>
                    <ul>
                      {tags.map(tag => (
                        <li key={tag}>
                          <Link to={`/devblog/tag/${tag}/`}>{tag}</Link>
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
        <Route path={`${match.url}/tag/:slug`} component={DevblogTag} />
        <Route path={`${match.url}/:slug`} component={DevblogPost} />
        <Redirect to={match.url} />
      </Switch>
    )
  }
}

export default getRouteProps(Devblog)
