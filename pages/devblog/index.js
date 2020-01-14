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
    const { posts, categories } = this.props
    return (
      <div>
        <Head title="Dev Blog | Nozzle" />
        <main>
          <Header>
            <H1>Devblog</H1>
            <SubMenu>
              <ul>
                {categories.map(category => (
                  <li key={category.fields.slug}>
                    <Link
                      as={`/devblog/categories/${category.fields.slug}`}
                      href="/devblog/categories/[category]"
                    >
                      <a>{category.fields.name}</a>
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
