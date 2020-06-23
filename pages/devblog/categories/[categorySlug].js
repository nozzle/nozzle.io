import React from 'react'
//

import Link from 'next/link'
import Head from 'components/Head'
import Icon from 'components/Icon'

import { Container, Header, SubMenu } from 'components/Layout'
import { H1 } from 'components/Html'
import PostList from 'components/PostList'
import { fetchDevPostsByCategorySlug } from '../../../contentful'
import Pagination from 'components/Pagination'

export async function getServerSideProps(req) {
  const props = await fetchDevPostsByCategorySlug(req.query.categorySlug)
  return {
    props,
  }
}

export default function DevBlogTag({ category, posts }) {
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
        <Container>
          <PostList prefix="devblog" posts={currentPosts} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts}
            paginate={paginate}
            currentPage={currentPage}
          />
        </Container>
      </main>
    </div>
  )
}
