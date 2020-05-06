import React, { Component } from 'react'
//

import { fetchBlogPosts, fetchBlogPostsByCategorySlug } from '../../contentful'

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
    const { posts, categories } = this.props
    return (
      <div>
        <Head
          title="Blog | Nozzle"
          description="The Nozzle blog provides SEO tips, strategies, and information for ranking better in the SERPs. Don't forget to monitor your keywords with Nozzle too. :)"
        />
        <main>
          <Header>
            <H1>Blog</H1>
            {categories.length ? (
              <SubMenu>
                <ul>
                  {categories.map(category => (
                    <li key={category.fields.slug}>
                      <Link
                        href="/blog/categories/[category]"
                        as={`/blog/categories/${category.fields.slug}`}
                      >
                        <a>{category.fields.name}</a>
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
