import React from 'react'
import tw from 'twin.macro'
//

import Link from 'next/link'
import Icon from 'components/Icon'
import Head from 'components/Head'
import Pagination from 'components/Pagination'
import styled from 'styled-components'

import { Container, Header, SubMenu } from 'components/Layout'
import { H1, P } from 'components/Html'
import PostList from 'components/PostList'
import { fetchBlogPostsByTagSlug } from '../../../contentful'

const BackButton = styled('a')`
  ${tw`opacity-60 inline-block mb-8 transition ease-out duration-100 hover:(opacity-100)`}
`

export async function getServerSideProps(req) {
  const props = await fetchBlogPostsByTagSlug(req.query.tagSlug)
  return {
    props,
  }
}

export default function BlogTag({ tag, posts }) {
  const [currentPage, setCurrentPage] = React.useState(1)
  const postsPerPage = 12

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
    window.scrollTo(0, 0)
  }
  const backPage = () => {
    setCurrentPage(currentPage - 1)
    window.scrollTo(0, 0)
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <Head title={`${tag.fields.name} | Nozzle`} />
      <main>
        <Header>
          <Link href="/blog">
            <BackButton>
              <Icon i="arrow-left" /> Back
            </BackButton>
          </Link>
          <H1>Blog - {tag.fields.name}</H1>

          <SubMenu>
            {tag.fields.description ? <P>{tag.fields.description}</P> : null}
          </SubMenu>
        </Header>
        <Container>
          <PostList prefix="blog" posts={currentPosts} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts}
            paginate={paginate}
            currentPage={currentPage}
            nextPage={nextPage}
            backPage={backPage}
          />
        </Container>
      </main>
    </div>
  )
}
