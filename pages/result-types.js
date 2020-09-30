import React from 'react'
import { fetchSerpFeatures } from '../contentful'
import { H1, P } from 'components/Html'
import Head from 'components/Head'
import { angle } from 'utils/Styles'
import styled from 'styled-components'
import Smackdown from 'components/Smackdown'
import { Container, Center } from 'components/Layout'
import tw from 'tailwind.macro'

const Top = styled('section')`
  padding: 4% 5%;
  ${angle('left')};
  ${tw`text-white bg-primaryDarker`}
`
const Wrap = styled('div')`
  ${tw`flex flex-no-wrap m-2 w-auto`}
`
const FeatureStyles = styled('div')`
  ${tw`flex flex-wrap flex-auto m-2 `}
`

const Box = styled('div')`
  ${tw`p-5 lg:flex mb-5 pt-16 mt--12 h-auto lg:flex-grow lg:flex-shrink-0 `}
`
const Thumbnail = styled('img')`
  ${tw`h-48 lg:h-40  shadow-md mb-5`}
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

export async function getServerSideProps() {
  const props = await fetchSerpFeatures()
  return {
    props,
  }
}
export default function SerpFeatures({ serpFeature }) {
  return (
    <div>
      <Head
        title="SERP Features | Nozzle"
        description="All of the features of the SERP that Nozzle can help you understand"
      />
      {serpFeature.length ? (
        <div>
          <Center>
            <Top>
              <H1>SERP Features</H1>
              <P>
                All of the features of the SERP that Nozzle can help you
                understand
              </P>
            </Top>
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
                        {serpFeature.fields.screenshots
                          ? serpFeature.fields.screenshots.map(screenshot => {
                              console.log(screenshot)
                              return (
                                <Thumbnail
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
