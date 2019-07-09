import React, { Component } from 'react'
import styled from 'styled-components'
//

import Link from 'next/link'
import Icon from 'components/Icon'
import Head from 'components/Head'

import { Container, Header, SubMenu } from 'components/Layout'
import { H1 } from 'components/Html'
import PostList from 'components/PostList'
import { fetchBlogPostsByTag } from '../../../contentful'

const BlogContainer = styled(Container)`
  background: rgba(0, 0, 0, 0.02);
`

export default class DevblogTag extends Component {
  static getInitialProps = async req => {
    return fetchBlogPostsByTag(req.query.tag)
  }
  render() {
    const { tag, tags, posts } = this.props
    return (
      <div>
        <Head title={`${tag} | Nozzle`} />
        <main>
          <Header>
            <H1>Blog - {tag}</H1>
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
          <BlogContainer>
            <PostList blog="blog" posts={posts} />
          </BlogContainer>
        </main>
      </div>
    )
  }
}
