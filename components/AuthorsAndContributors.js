import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Smackdown from 'components/Smackdown'
import { Img } from './Html'

const Container = styled('div')`
  ${tw`relative mt-4 mb-8 p-4 rounded-xl bg-gray-200`}
`

const Heading = styled('div')`
  ${tw`text-4xl pl-4 py-4 leading-none`}

  @media screen and (max-width: 1000px) {
    ${tw`text-3xl`}
  }

  @media screen and (max-width: 600px) {
    ${tw`text-2xl`}
  }
`

const AuthorBio = styled('div')`
  ${tw`relative p-4 rounded-xl bg-white`}

  .authorName {
    ${tw`text-4xl pb-4 leading-none`}

    @media screen and (max-width: 600px) {
      ${tw`text-2xl`}
    }
  }
`

const BioText = styled('div')`
  ${tw`pt-4 overflow-auto`}
`

const Contributors = styled('div')`
  ${tw`absolute top-0 right-0 p-6`}

  img {
    ${tw`h-11 w-11 object-cover rounded-full`}
  }
  .nameBox {
    ${tw`relative inline-block`}
  }

  .nameBox .name {
    ${tw`invisible w-28 text-white text-center rounded absolute left-1/2 z-1 `}
    background-color: #2b3640;
    padding: 5px 0;
    bottom: 120%;
    margin-left: -60px;
  }

  .nameBox .name::after {
    ${tw`absolute top-full left-1/2`}
    content: '';
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }

  .nameBox:hover .name {
    ${tw`visible`}
  }
`

export default function AuthorsAndContributors({ post }) {
  return (
    <Container id="AuthorsAndContributors">
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
                <div css={tw`float-left mt-4 mr-4 object-cover `}>
                  <Img
                    src={`https:${profilePhotoURL}`}
                    alt="Author"
                    width="128"
                    height="128"
                    css={tw`rounded-full`}
                  />
                </div>
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
                    <Img src={`https:${profilePhotoURL}`} alt="Contributor" />
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
