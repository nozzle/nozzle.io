import React from 'react'
import styled from 'styled-components'

const Container = styled('ul')`
  padding-top: 1rem;
  display: block;
  padding-bottom: 4rem;
  width: auto;
  margin: auto;

  .page {
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
