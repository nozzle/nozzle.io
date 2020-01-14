import React, { Component } from 'react'
import styled from 'styled-components'
//

import Link from 'next/link'
import Head from 'components/Head'
import Icon from 'components/Icon'

import { Container, Header, SubMenu } from 'components/Layout'
import { H1 } from 'components/Html'
import PostList from 'components/PostList'
import { fetchDevPostsByCategorySlug } from '../../../contentful'

const BlogContainer = styled(Container)`
  background: rgba(0, 0, 0, 0.02);
`

export default class DevblogTag extends Component {
  static getInitialProps = async req => {
    return fetchDevPostsByCategorySlug(req.query.categorySlug)
  }
  render() {
    const { category, posts } = this.props
    return (
      <div>
        <Head title={`${category.fields.name} | Nozzle`} />
        <main>
          <Header>
            <H1>Dev Blog - {category.fields.name}</H1>
            <SubMenu>
              <ul>
                <li>
                  <Link href="/devblog/">
                    <a>
                      <Icon i="arrow-left" /> Back
                    </a>
                  </Link>
                </li>
              </ul>
            </SubMenu>
          </Header>
          <BlogContainer>
            <PostList prefix="devblog" posts={posts} />
          </BlogContainer>
        </main>
      </div>
    )
  }
}
