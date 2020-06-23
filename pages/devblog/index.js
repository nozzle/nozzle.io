import React from 'react'
import { fetchDevPosts } from '../../contentful'
import Link from 'next/link'
import Head from 'components/Head'
import { BlogContainer, Header, SubMenu } from 'components/Layout'
import { H1 } from 'components/Html'
import PostList from 'components/PostList'
import Pagination from 'components/Pagination'

export async function getServerSideProps(req) {
  const props = await fetchDevPosts()

  return {
    props,
  }
}

export default function DevBlog({ posts, categories }) {
  const [currentPage, setCurrentPage] = React.useState(1)
  const postsPerPage = 12

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <Head title="Dev Blog | Nozzle" />
      <main>
        <Header>
          <H1>Blog</H1>
          {categories.length ? (
            <SubMenu>
              <ul>
                {categories.map(category => (
                  <li key={category.fields.slug}>
                    <Link
                      href="/devblog/categories/[category]"
                      as={`/devblog/categories/${category.fields.slug}`}
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
          <PostList prefix="devblog" posts={currentPosts} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts}
            paginate={paginate}
            currentPage={currentPage}
          />
        </BlogContainer>
      </main>
    </div>
  )
}
