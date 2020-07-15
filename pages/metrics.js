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
`

const Box = styled('div')`
  ${tw`p-5 w-full lg:max-w-full lg:flex mb-5  `}
`
const Thumbnail = styled('img')`
  ${tw`h-48 lg:h-40  rounded-lg shadow-md mb-5`}
`
const Text = styled('div')`
  ${tw` lg:pl-5 flex flex-col leading-normal lg:text-left`}
`

const Name = styled('div')`
  ${tw`text-gray-900 font-bold text-3xl mb-2`}
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
  const [appear, setAppear] = React.useState(false)

  return (
    <div>
      <Head title="Metrics | Nozzle" />
      {metrics.length ? (
        <div>
          <Center>
            <Top>
              <H1>Metrics</H1>
              <P>
                Check out all the cool things your can track with Nozzle!
                Whether it’s Above the Fold %, Unique URLs, or Click-Through
                Rate (CTR), Nozzle has you covered.
              </P>
            </Top>

            <Container>
              <div>
                {metrics.map(metric => {
                  return (
                    <Box key={metric.fields.fieldId}>
                      <Thumbnail
                        src={metric.fields.thumbnail.fields.file.url}
                        alt={metric.fields.name}
                      />
                      <Text>
                        <Name>{metric.fields.name}</Name>
                        <Description>
                          <Smackdown source={metric.fields.shortDescription} />
                        </Description>
                      </Text>
                    </Box>
                  )
                })}
              </div>
            </Container>
          </Center>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
