import React from 'react'
import { fetchTestimonials } from '../contentful'
import { H1, P } from 'components/Html'
import Head from 'components/Head'
import { angle } from 'utils/Styles'
import styled from 'styled-components'
import Smackdown from 'components/Smackdown'
import { Container, Center } from 'components/Layout'
import tw from 'twin.macro'

const Top = styled('section')`
  ${angle('left')};
  ${tw`text-white bg-primaryDarker py-4/100 px-5/100`}
`
const Wrap = styled('div')`
  ${tw`flex flex-nowrap m-2 w-auto`}
`
const TestimonialStyles = styled('div')`
  ${tw`flex flex-wrap flex-auto m-2 justify-center`}
`

const Box = styled('div')`
  ${tw`p-5 mb-5 pt-16 mt--12 h-auto lg:(flex flex-grow flex-shrink-0 w-600)`}
`
const Thumbnail = styled('img')`
  ${tw`h-48 rounded-full shadow-md mb-5 lg:(h-40)`}
`
const Text = styled('div')`
  ${tw`flex flex-col leading-normal lg:(text-left pl-5)`}
`

const Name = styled('div')`
  ${tw`text-gray-900 font-bold text-3xl mb-2 `}

  .company {
    ${tw`text-gray-600 font-semibold text-lg `}
    a {
      ${tw`hover:(underline)`}
    }
  }
`

const Testimonial = styled('div')`
  ${tw`text-gray-700 text-base`}

  iframe {
    ${tw`w-80 md:(w-125)`}
  }
`

export async function getServerSideProps() {
  const props = await fetchTestimonials()
  return {
    props,
  }
}
export default function Testimonials({ testimonial }) {
  return (
    <div>
      <Head
        title="Testimonials | Nozzle"
        description="What people are saying about Nozzle."
      />

      {testimonial.length ? (
        <div>
          <Center>
            <Top>
              <H1>Testimonials & Shout-outs</H1>
              <P>Here's what people are saying about Nozzle</P>
            </Top>
          </Center>
          <Container>
            <Center>
              <Wrap>
                <TestimonialStyles>
                  {testimonial.map(testimonial => {
                    return (
                      <Box key={testimonial.fields.name}>
                        {testimonial.fields.image ? (
                          <Thumbnail
                            src={testimonial.fields.image.fields.file.url}
                            alt={testimonial.fields.name}
                          />
                        ) : (
                          ''
                        )}
                        <Text>
                          <Name>
                            {testimonial.fields.name}
                            {testimonial.fields.companyName ? (
                              <div className="company">
                                {testimonial.fields.companyWebsite ? (
                                  <a
                                    href={testimonial.fields.companyWebsite}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {testimonial.fields.companyName}
                                  </a>
                                ) : (
                                  <div className="company">
                                    {testimonial.fields.companyName}
                                  </div>
                                )}
                              </div>
                            ) : (
                              ''
                            )}
                          </Name>

                          <Testimonial>
                            <Smackdown
                              source={testimonial.fields.testimonial}
                            />
                          </Testimonial>
                        </Text>
                      </Box>
                    )
                  })}
                </TestimonialStyles>
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
          No testimonials were found.
        </div>
      )}
    </div>
  )
}
