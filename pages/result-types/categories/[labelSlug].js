import React from 'react'
//

import Link from 'next/link'
import Icon from 'components/Icon'
import Head from 'components/Head'
import styled from 'styled-components'
import Smackdown from 'components/Smackdown'

import { Container, Header, SubMenu, Center } from 'components/Layout'
import { H1 } from 'components/Html'

import { fetchResultTypesByLabelSlug } from '../../../contentful'
import tw from 'tailwind.macro'

const Wrap = styled('div')`
  ${tw`flex flex-no-wrap m-2 w-auto`}
`
const FeatureStyles = styled('div')`
  ${tw`flex flex-wrap flex-auto m-2 justify-center `}
`

const Box = styled('div')`
  ${tw`pt-5 lg:flex mb-5  h-auto`}
`
const Thumbnail = styled('img')`
  ${tw`h-16 sm:h-24 md:h-32 lg:h-32 xl:h-40 shadow-md mb-5`}
`
const Text = styled('div')`
  ${tw` lg:mr-10 leading-normal lg:text-left`}
`

const Name = styled('div')`
  ${tw`text-gray-900 font-bold text-3xl mb-2 `}
`

const Description = styled('div')`
  ${tw`text-gray-700 text-base`}
`

export async function getServerSideProps(req) {
  const props = await fetchResultTypesByLabelSlug(req.query.categorySlug)
  return {
    props,
  }
}

export default function FeatureTag({ serpFeatures, category }) {
  return (
    <div>
      <Head title={`${category.fields.name} | Nozzle`} />
      <main>
        <Header>
          <H1>SERP Features - {category.fields.name}</H1>
          <SubMenu>
            <ul>
              <Link href="/result-types/">
                <a>
                  <Icon i="arrow-left" /> Back
                </a>
              </Link>
            </ul>
          </SubMenu>
        </Header>
        <Container>
          <Center>
            <Wrap>
              <FeatureStyles>
                {serpFeatures.map(serpFeature => {
                  return (
                    <Box key={serpFeature.fields.name}>
                      <Text>
                        <Name>{serpFeature.fields.name}</Name>
                        <Description>
                          <Smackdown source={serpFeature.fields.description} />
                        </Description>
                      </Text>
                      {serpFeature.fields.screenshots
                        ? serpFeature.fields.screenshots.map(screenshot => {
                            return (
                              <Thumbnail
                                key={serpFeature.fields.name}
                                src={screenshot.fields.file.url}
                                alt={serpFeature.fields.name}
                              />
                            )
                          })
                        : ''}
                    </Box>
                  )
                })}
              </FeatureStyles>
            </Wrap>
          </Center>
        </Container>
      </main>
    </div>
  )
}
