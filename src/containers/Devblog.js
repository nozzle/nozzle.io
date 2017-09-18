import React, { Component } from 'react'
import styled from 'styled-components'
import { Route, Switch, Redirect } from 'react-router-dom'
import { GetRouteProps } from 'react-static'
//

import Link from 'components/Link'
import Head from 'components/Head'
import Page from 'components/Page'
import Main from 'components/Main'
import { Container, Header, SubMenu } from 'components/Layout'
import { H1 } from 'components/Html'
import PostList from 'components/PostList'

import DevblogPost from 'containers/DevblogPost'
import DevblogCategory from 'containers/DevblogCategory'

const BlogContainer = styled(Container)`
  background: rgba(0,0,0,.02);
`

class Devblog extends Component {
  render () {
    const { posts, categories, match } = this.props
    return (
      <Switch>
        <Route
          path={match.url}
          exact
          render={() =>
            (<Page>
              <Head title="Nozzle Dev Blog" />
              <Main>
                <Header>
                  <H1>Devblog</H1>
                  <SubMenu>
                    <ul>
                      {categories.map(category =>
                        (<li key={category.fields.slug}>
                          <Link to={`/devblog/category/${category.fields.slug}`}>
                            {category.fields.title}
                          </Link>
                        </li>),
                      )}
                    </ul>
                  </SubMenu>
                </Header>
                <BlogContainer>
                  <PostList blog="devblog" posts={posts} />
                </BlogContainer>
              </Main>
            </Page>)}
        />
        <Route path={`${match.url}/post/:slug`} component={DevblogPost} />
        <Route path={`${match.url}/category/:slug`} component={DevblogCategory} />
        <Redirect to={match.url} />
      </Switch>
    )
  }
}

export default GetRouteProps(Devblog)
