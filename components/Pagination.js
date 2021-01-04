import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled('ul')`
  ${tw`pt-4 block pb-16 w-auto m-auto`}

  .page {
    ${tw`text-black float-left no-underline cursor-pointer rounded border border-solid border-gray-300`}
    padding: 8px 16px;
    transition: background-color 0.3s;
    margin: 0 4px;

    :hover {
      ${tw`bg-gray-300`}
    }
  }

  .activePage {
    ${tw`bg-gray-300`}
  }
`

export default function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  backPage,
  nextPage,
}) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts.length / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <Container>
      {currentPage > 1 ? (
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
          className={`${currentPage === number ? 'activePage' : ''} page`}
        >
          {number}
        </li>
      ))}
      {currentPage < pageNumbers.length ? (
        <div className="page" onClick={() => nextPage()}>
          ❯
        </div>
      ) : (
        ' '
      )}
    </Container>
  )
}
