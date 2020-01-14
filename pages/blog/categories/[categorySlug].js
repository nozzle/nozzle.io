import React, { Component } from 'react'
import styled from 'styled-components'
//

import Link from 'next/link'
import Icon from 'components/Icon'
import Head from 'components/Head'

import { Container, Header, SubMenu } from 'components/Layout'
import { H1 } from 'components/Html'
import PostList from 'components/PostList'
import { fetchBlogPostsByCategorySlug } from '../../../contentful'

export default class DevblogTag extends Component {
  static getInitialProps = async req => {
    return fetchBlogPostsByCategorySlug(req.query.categorySlug)
  }
  render() {
    const { category, posts } = this.props
    return (
      <div>
        <Head title={`${category.fields.name} | Nozzle`} />
        <main>
          <Header>
            <H1>Blog - {category.fields.name}</H1>
            <SubMenu>
              <ul>
                <Link href="/blog/">
                  <a>
                    <Icon i="arrow-left" /> Back
                  </a>
                </Link>
              </ul>
            </SubMenu>
          </Header>
          <Container>
            <PostList prefix="blog" posts={posts} />
          </Container>
        </main>
      </div>
    )
  }
}
