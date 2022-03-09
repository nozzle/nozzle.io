import React from 'react'
import { fetchMetrics } from '../contentful'
import { H1, P } from 'components/Html'
import Head from 'components/Head'
import { angle } from 'utils/Styles'
import styled from 'styled-components'
import Smackdown from 'components/Smackdown'
import { Container, Center } from 'components/Layout'
import tw from 'twin.macro'
import { Img } from '../components/Html'

const Top = styled('section')`
  ${angle('left')};
  ${tw`lg:(flex) mb-4 items-center overflow-hidden text-white bg-primaryDarker py-5/100 px-3/20`}
`
const Wrap = styled('div')`
  ${tw`flex flex-nowrap m-2 w-auto`}
`
const MetricStyles = styled('div')`
  ${tw`flex flex-wrap flex-auto m-2 justify-center`}
`
const Title = styled('div')`
  ${tw`lg:w-1/3 lg:(text-right pr-10) text-center`};
`
const Screenshot = styled('div')`
  ${tw`lg:(w-1/2)`}
  img {
    ${tw`rounded-md max-w-screen-xl w-double`}
  }
`
const Box = styled('div')`
  ${tw`p-5 mb-5 pt-16 mt--12 h-auto lg:(flex flex-grow flex-shrink-0 w-600)`}
`
const Thumbnail = styled('img')`
  ${tw`h-48 lg:(h-40) rounded-lg shadow-md mb-5`}
`
const Text = styled('div')`
  ${tw`flex flex-col leading-normal lg:(text-left pl-5)`}
`

const Name = styled('a')`
  ${tw`text-gray-900 font-bold text-3xl mb-2 hover:(underline)`}

  .number {
    ${tw`inline-block align-top text-sm font-normal pl-1 invisible`}
  }

  :hover .number {
    ${tw`visible`}
  }
`

const Description = styled('div')`
  ${tw`text-gray-700 text-base`}
`

export async function getServerSideProps(req) {
  const props = await fetchMetrics()
  return {
    props,
  }
}
export default function Metrics({ metrics }) {
  return (
    <div>
      <Head
        title="Metrics | Nozzle"
        description="The definitions of all the metrics from your Nozzle dashboard."
      />
      {metrics.length ? (
        <div>
          <Top>
            <Title>
              <H1>Metrics</H1>
              <P>
                The definitions of all the metrics from your Nozzle dashboard.
              </P>
            </Title>
            <Screenshot>
              <Img src="img/metricsScreenshot.png" alt="Nozzle Metrics" />
            </Screenshot>
          </Top>
          <Container>
            <Center>
              <Wrap>
                <MetricStyles>
                  {metrics.map((metric, i) => {
                    return (
                      <Box
                        key={metric.fields.fieldId}
                        id={metric.fields.fieldId}
                      >
                        <Thumbnail
                          src={`https:${metric.fields.thumbnail.fields.file.url}`}
                          alt={metric.fields.name}
                        />
                        <Text>
                          <Name href={`#${metric.fields.fieldId}`}>
                            {metric.fields.name}
                            <div className="number">{i + 1}</div>
                          </Name>
                          <Description>
                            <Smackdown
                              source={metric.fields.shortDescription}
                            />
                          </Description>
                        </Text>
                      </Box>
                    )
                  })}
                </MetricStyles>
              </Wrap>
            </Center>
          </Container>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
