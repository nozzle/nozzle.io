import React from 'react'
import Link from 'next/link'
import { fetchSerpFeatures } from '../../contentful'
import { H1, P } from 'components/Html'
import Head from 'components/Head'
import styled from 'styled-components'
import Smackdown from 'components/Smackdown'
import { Header, Container, Center, SubMenu } from 'components/Layout'
import tw from 'tailwind.macro'

const Wrap = styled('div')`
  ${tw`flex flex-no-wrap m-2 w-auto`}
`
const FeatureStyles = styled('div')`
  ${tw`w-full justify-center`}
`

const Box = styled('div')`
  ${tw`lg:flex pt-5  mb-5  h-auto `}
`
const Screenshots = styled('div')`
  ${tw`lg:flex-1 `}
`

const Screenshot = styled('img')`
  ${tw`flex w-325 sm:w-325 md:w-325 lg:w-400 xl:w-500 shadow-md mb-5 mr-10 lg:mr-5 mx-auto`}
`
const Text = styled('div')`
  ${tw`lg:flex-1 lg:ml-10 leading-normal lg:text-left`}
`

const Name = styled('div')`
  ${tw`text-gray-900 font-bold text-3xl mb-2 `}
`

const Description = styled('div')`
  ${tw`text-gray-700 text-base`}
`

export async function getServerSideProps() {
  const props = await fetchSerpFeatures()
  return {
    props,
  }
}
export default function SerpFeatures({ serpFeature, labels }) {
  return (
    <div>
      <Head
        title="Result Types | Nozzle"
        description="All of the features of the SERP that Nozzle can help you understand"
      />
      {serpFeature.length ? (
        <div>
          <Center>
            <Header>
              <H1>SERP Features</H1>
              <P>
                All of the features of the SERP that Nozzle can help you
                understand
              </P>
              {labels.length ? (
                <SubMenu>
                  <ul>
                    {labels.map(label => (
                      <li key={label.fields.slug}>
                        <Link
                          href="/result-types/categories/[labels]"
                          as={`/result-types/categories/${label.fields.slug}`}
                        >
                          <a>{label.fields.name}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </SubMenu>
              ) : null}
            </Header>
          </Center>
          <Container>
            <Center>
              <Wrap>
                <FeatureStyles>
                  {serpFeature.map(serpFeature => {
                    return (
                      <Box key={serpFeature.fields.name}>
                        <Text>
                          <Name>{serpFeature.fields.name}</Name>
                          <Description>
                            <Smackdown
                              source={serpFeature.fields.description}
                            />
                          </Description>
                        </Text>
                        {serpFeature.fields.screenshots ? (
                          <Screenshots>
                            {serpFeature.fields.screenshots.map(screenshot => {
                              return (
                                <Screenshot
                                  key={serpFeature.fields.name}
                                  src={screenshot.fields.file.url}
                                  alt={serpFeature.fields.name}
                                />
                              )
                            })}
                          </Screenshots>
                        ) : (
                          ''
                        )}
                      </Box>
                    )
                  })}
                </FeatureStyles>
              </Wrap>
            </Center>
          </Container>
        </div>
      ) : (
        <div
          css={`
            ${tw`text-center my-8 mx-auto`}
          `}
        >
          No SERP Features were found.
        </div>
      )}
    </div>
  )
}
