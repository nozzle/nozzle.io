import React, { Component } from 'react'
//

import { fetchBlogPosts } from '../../contentful'

import Link from 'next/link'
import Head from 'components/Head'
import { BlogContainer, Header, SubMenu } from 'components/Layout'
import { H1 } from 'components/Html'
import PostList from 'components/PostList'

export default class Devblog extends Component {
  static getInitialProps = async () => {
    return fetchBlogPosts()
  }
  render() {
    const { posts, tags } = this.props
    return (
      <div>
        <Head title="Blog | Nozzle" />
        <main>
          <Header>
            <H1>Blog</H1>
            {tags.length ? (
              <SubMenu>
                <ul>
                  {tags.map(tag => (
                    <li key={tag}>
                      <Link href="/blog/tags/[tag]" as={`/blog/tags/${tag}`}>
                        <a>{tag}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </SubMenu>
            ) : null}
          </Header>
          <BlogContainer>
            <PostList prefix="blog" posts={posts} />
          </BlogContainer>
        </main>
      </div>
    )
  }
}
