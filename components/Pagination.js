import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useRouter } from 'next/router'

const Container = styled('ul')`
  ${tw`pt-4 block pb-16 w-auto m-auto`}

  .page {
    ${tw`text-black float-left no-underline cursor-pointer rounded border border-solid border-gray-300 py-2 px-4 mx-1 my-0 transition duration-300 hover:(bg-gray-300)`}
  }

  .activePage {
    ${tw`bg-gray-300`}
  }
`

export default function Pagination({ numPosts, postsPerPage, path }) {
  const router = useRouter()
  const { page = 1 } = router.query

  const paginate = pageNumber => {
    router.push(`${path}/?page=${pageNumber}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const backPage = () => {
    router.push(`${path}/?page=${parseInt(page) - 1}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const nextPage = () => {
    router.push(`${path}/?page=${parseInt(page) + 1}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(numPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <Container>
      {page > 1 ? (
        <div className="page" onClick={() => backPage()}>
          ❮
        </div>
      ) : (
        ' '
      )}
      {pageNumbers.map(number => (
        <li
          key={number}
          id={number}
          onClick={() => paginate(number)}
          className={`${page == number ? 'activePage' : ''} page`}
        >
          {number}
        </li>
      ))}
      {page < pageNumbers.length ? (
        <div className="page" onClick={() => nextPage()}>
          ❯
        </div>
      ) : (
        ' '
      )}
    </Container>
  )
}
