import React, { Component } from 'react'
//

import Link from 'next/link'
import Head from 'components/Head'

import { BlogContainer, Header, SubMenu } from 'components/Layout'
import { H1 } from 'components/Html'
import PostList from 'components/PostList'

import { fetchDevPosts } from '../../contentful'

export default class Devblog extends Component {
  static getInitialProps = async () => {
    return fetchDevPosts()
  }
  render() {
    const { posts, tags } = this.props
    return (
      <div>
        <Head title="Dev Blog | Nozzle" />
        <main>
          <Header>
            <H1>Devblog</H1>
            <SubMenu>
              <ul>
                {tags.map(tag => (
                  <li key={tag}>
                    <Link href={`/devblog/tags/${tag}/`}>
                      <a>{tag}</a>
                    </Link>
                  </li>
                ))}
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
