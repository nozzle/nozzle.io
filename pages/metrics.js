import React from 'react'
import { fetchMetrics } from '../contentful'
import { H1, P } from 'components/Html'
import Head from 'components/Head'
import { angle } from 'utils/Styles'
import styled, { css } from 'styled-components'
import Smackdown from 'components/Smackdown'
import { Container, Center } from 'components/Layout'
import tw from 'tailwind.macro'

const section = css`
  padding: 6% 15%;
  z-index: 1;
`
const Top = styled('section')`
  ${section};
  ${angle('left')};
  background: ${props => props.theme.colors.primaryDarker};
  color: white;
  margin-bottom: 2rem;
`

const Box = styled('div')`
  ${tw`p-5 w-full lg:max-w-full lg:flex mb-5 pt-16 mt--12`}
`
const Thumbnail = styled('img')`
  ${tw`h-48 lg:h-40  rounded-lg shadow-md mb-5`}
`
const Text = styled('div')`
  ${tw` lg:pl-5 flex flex-col leading-normal lg:text-left`}
`

const Name = styled('a')`
  ${tw`text-gray-900 font-bold text-3xl mb-2 hover:underline`}

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
          <Center>
            <Top>
              <H1>Metrics</H1>
              <P>
                The definitions of all the metrics from your Nozzle dashboard.
              </P>
            </Top>

            <Container>
              {metrics.map((metric, i) => {
                return (
                  <Box key={metric.fields.fieldId} id={metric.fields.fieldId}>
                    <Thumbnail
                      src={metric.fields.thumbnail.fields.file.url}
                      alt={metric.fields.name}
                    />
                    <Text>
                      <Name href={`#${metric.fields.fieldId}`}>
                        {metric.fields.name}
                        <div className="number">{i + 1}</div>
                      </Name>
                      <Description>
                        <Smackdown source={metric.fields.shortDescription} />
                      </Description>
                    </Text>
                  </Box>
                )
              })}
            </Container>
          </Center>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
