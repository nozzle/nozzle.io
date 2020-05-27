import React, { Component } from 'react'
//

import { fetchBlogPosts } from '../../contentful'
import styled from 'styled-components'
import Link from 'next/link'
import Head from 'components/Head'
import { BlogContainer, Header, SubMenu } from 'components/Layout'
import { H1 } from 'components/Html'
import PostList from 'components/PostList'

const Pagination = styled('ul')`
  padding-top: 1rem;
  display: block;
  padding-bottom: 4rem;
  width: auto;
  margin: auto;

  li {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color 0.3s;
    border: 1px solid #ddd;
    margin: 0 4px;
    cursor: pointer;
    border-radius: 5px;
    border-radius: 5px;

    :hover {
      background-color: #ddd;
    }
  }

  .activePage {
    background: #ddd;
  }
`

export default class Devblog extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: 1,
      postsPerPage: 12,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  static getInitialProps = async () => {
    return fetchBlogPosts()
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    })
  }

  render() {
    const { posts, categories } = this.props
    const { currentPage, postsPerPage } = this.state

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
      pageNumbers.push(i)
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
          className={`${this.state.currentPage === number ? 'activePage' : ''}`}
        >
          {number}
        </li>
      )
    })

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
            <PostList prefix="blog" posts={currentPosts} />
            <Pagination>{renderPageNumbers}</Pagination>
          </BlogContainer>
        </main>
      </div>
    )
  }
}
