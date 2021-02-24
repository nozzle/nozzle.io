import React from 'react'
import { fetchFaqs } from '../contentful'
import { H1, P } from 'components/Html'
import Head from 'components/Head'
import { angle } from 'utils/Styles'
import styled from 'styled-components'
import Smackdown from 'components/Smackdown'
import { Container, Center } from 'components/Layout'
import tw from 'twin.macro'

const Top = styled('section')`
  ${angle('left')};
  ${tw`lg:(flex) mb-4 items-center overflow-hidden  text-white bg-primaryDarker py-5/100 px-3/20`}
`
const Wrap = styled('div')`
  ${tw`flex flex-nowrap m-2 w-auto`}
`
const FaqStyles = styled('div')`
  ${tw`flex flex-wrap flex-auto mx-8 `}
  img {
    ${tw`lg:(w-3/4)`}
  }
`

const Box = styled('div')`
  ${tw`pt-16 mt--8`}
`

const Text = styled('div')`
  ${tw`flex flex-col leading-normal text-left `}
`

const Question = styled('a')`
  ${tw`text-gray-900 font-bold text-3xl mb-4 hover:(underline)`}

  .number {
    ${tw`inline-block align-top text-sm font-normal pl-1 invisible`}
  }

  :hover .number {
    ${tw`visible`}
  }
`

const Answer = styled('div')`
  ${tw`text-gray-700 text-base`}
`

export async function getServerSideProps(req) {
  const props = await fetchFaqs()
  return {
    props,
  }
}
export default function Faq({ faqs }) {
  return (
    <div>
      <Head
        title="Faq | Nozzle"
        description="Some common questions that people have about nozzle"
      />
      {faqs.length ? (
        <div>
          <Top>
            <Container>
              <Center>
                <H1>Frequently Asked Questions</H1>
                <P>Some common questions that people have about nozzle.</P>
              </Center>
            </Container>
          </Top>
          <Container>
            <Center>
              <Wrap>
                <FaqStyles>
                  {faqs.map((faq, i) => {
                    return (
                      <Box key={i} id={i + 1}>
                        <Text>
                          <Question href={`#${i + 1}`}>
                            {faq.fields.question}
                            <div className="number">{i + 1}</div>
                          </Question>
                          <Answer>
                            <Smackdown source={faq.fields.answer} />
                          </Answer>
                        </Text>
                      </Box>
                    )
                  })}
                </FaqStyles>
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
