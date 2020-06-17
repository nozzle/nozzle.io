import React from 'react'
import styled from 'styled-components'
import Smackdown from 'components/Smackdown'

const Container = styled('div')`
  position: relative;
  margin-top: 3rem;
  background: #e8e8e8;
  padding: 1rem;
  border-radius: 1rem;
  margin-bottom: 3rem;
`

const Heading = styled('div')`
  font-size: 2.5rem;
  padding-left: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 1rem;

  @media screen and (max-width: 1000px) {
    padding-top: 1rem;
    font-size: 2rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`

const AuthorBio = styled('div')`
  position: relative;
  padding: 1rem;
  border-radius: 1rem;
  background: #f9f9f9;

  .authorName {
    font-size: 2rem;
    padding-bottom: 1rem;

    @media screen and (max-width: 600px) {
      font-size: 1.5rem;
    }
  }
`

const AuthorPic = styled('img')`
  float: left;
  margin-top: 1rem;
  margin-right: 1rem;
  object-fit: cover;
  border-radius: 50%;
  height: 8rem;
  width: 8rem;
`

const BioText = styled('div')`
  padding-top: 1rem;
  overflow: auto;
`

const Contributors = styled('div')`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1.5rem;

  img {
    height: 2.75rem;
    width: 2.75rem;
    object-fit: cover;
    border-radius: 50%;
  }
  .nameBox {
    position: relative;
    display: inline-block;
  }

  .nameBox .name {
    visibility: hidden;
    width: 120px;
    background-color: #2b3640;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 120%;
    left: 50%;
    margin-left: -60px;
  }

  .nameBox .name::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }

  .nameBox:hover .name {
    visibility: visible;
  }
`

export default function AuthorsAndContributors({ post }) {
  return (
    <Container>
      {post.fields.contributors?.length ? (
        <Heading>Authors & Contributors</Heading>
      ) : post.fields.author.length > 1 ? (
        <Heading>Authors</Heading>
      ) : (
        <Heading>Author</Heading>
      )}
      <div>
        {post.fields.author.map(author => {
          const {
            fields: { profilePhoto, biography },
          } = author

          const profilePhotoURL = profilePhoto
            ? profilePhoto.fields.file.url
            : ''

          return biography ? (
            <AuthorBio key={author.sys.id}>
              {profilePhotoURL ? (
                <AuthorPic src={profilePhotoURL} alt="Author" />
              ) : null}
              <BioText>
                <div className="authorName">{author.fields.name} </div>
                <Smackdown source={biography} />
              </BioText>
            </AuthorBio>
          ) : null
        })}
      </div>
      {post.fields.contributors?.length ? (
        <Contributors>
          {post.fields.contributors.map(contributor => {
            const {
              fields: { profilePhoto },
            } = contributor

            const profilePhotoURL = profilePhoto
              ? profilePhoto.fields.file.url
              : ''

            return profilePhoto ? (
              <div className="contributor" key={contributor.fields.name}>
                {profilePhotoURL ? (
                  <div className="nameBox">
                    <img src={profilePhotoURL} alt="Contributor" />
                    <div className="name">{contributor.fields.name}</div>
                  </div>
                ) : null}
              </div>
            ) : null
          })}
        </Contributors>
      ) : null}
    </Container>
  )
}
