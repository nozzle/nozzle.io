import React, { Component } from 'react'
import styled from 'styled-components'
import { GetRouteProps } from 'react-static'
//

import Link from 'components/Link'
import Head from 'components/Head'
import Page from 'components/Page'
import Main from 'components/Main'
import { Container, Header, SubMenu } from 'components/Layout'
import { H1 } from 'components/Html'
import PostList from 'components/PostList'

const BlogContainer = styled(Container)`
  background: rgba(0,0,0,.02);
`

class DevblogCategory extends Component {
  render () {
    const { category, categories, categoryPosts } = this.props
    return (
      <Page>
        <Head title={`Dev Blog ${category.fields.title}`} />
        <Main>
          <Header>
            <H1>
              Devblog - {category.fields.title}
            </H1>
            <SubMenu>
              <ul>
                <li>
                  <Link to="/devblog">All</Link>
                </li>
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
            <PostList blog="devblog" posts={categoryPosts} />
          </BlogContainer>
        </Main>
      </Page>
    )
  }
}

export default GetRouteProps(DevblogCategory)
