import React from 'react'
import { fetchMetrics } from '../contentful'
import {
  ThemeProvider,
  Stack,
  Box,
  Text,
  Image,
  Heading,
} from '@chakra-ui/core'

import Head from 'components/Head'
import { angle } from 'utils/Styles'
import styled, { css } from 'styled-components'

const section = css`
  padding: 7% 15%;
  z-index: 1;
`
const Top = styled('section')`
  ${section};
  ${angle('left')};
  background: ${props => props.theme.colors.primaryDarker};
  color: white;
`
// const Metric = styled('div')`
//   height: auto;
//   position: relative;
//   margin-bottom: 3rem;

//   .first {
//   }
//   .second {
//     background: ${props => props.theme.colors.primaryDarker};
//     color: white;
//   }
// `
// const Thumbnail = styled('img')`
//   margin: 2rem;
//   display: inline-block;
//   border-radius: 1rem;
//   border: 0.15rem solid ${props => props.theme.colors.primaryDarker};
//   height: 10rem;
//   width: auto;
// `
// const Text = styled('div')`
//   display: inline-block;
//   position: absolute;
//   top: 2rem;
//   max-width: 800px;
// `
export async function getServerSideProps(req) {
  const props = await fetchMetrics()
  return {
    props,
  }
}
export default function Metrics({ metrics }) {
  return (
    <ThemeProvider>
      <Head title="Metrics | Nozzle" />
      {metrics.length ? (
        <div>
          <Top>
            <Heading
              as="h1"
              size="2xl"
              fontWeight="semibold"
              textAlign="center"
              pb={3}
            >
              Metrics
            </Heading>
            <Text textAlign="center">
              Check out all the cool things your can track with Nozzle! Whether
              it’s Above the Fold %, Unique URLs, or Click-Through Rate (CTR),
              Nozzle has you covered.
            </Text>
          </Top>
          <Stack spacing={5}>
            {metrics.map(metric => {
              return (
                <Box p={4} display={{ md: 'flex' }} key={metric.fields.fieldId}>
                  <Box flexShrink="0">
                    <Image
                      rounded="lg"
                      width={{ sm: 250, md: 40 }}
                      border
                      shadow="md"
                      src={metric.fields.thumbnail.fields.file.url}
                      alt={metric.fields.name}
                      ml={{ sm: '20%', md: '0' }}
                    />
                  </Box>
                  <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} algin="center">
                    <Heading display="block" as="h2" fontWeight="semibold">
                      {metric.fields.name}
                    </Heading>
                    <Text mt={2} color="gray.500" maxW="1000px">
                      {metric.fields.shortDescription}
                    </Text>
                  </Box>
                </Box>
              )
            })}
          </Stack>
        </div>
      ) : (
        ''
      )}
    </ThemeProvider>
  )
}
