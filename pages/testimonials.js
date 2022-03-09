import React from 'react'
import { fetchTestimonials } from '../contentful'
import { H1, P } from 'components/Html'
import Head from 'components/Head'
import { angle } from 'utils/Styles'
import styled from 'styled-components'
import Smackdown from 'components/Smackdown'
import { Container, Center } from 'components/Layout'
import tw from 'twin.macro'
import { loadScript } from '../utils/loadScript'
import { Img } from '../components/Html'

const Top = styled('section')`
  ${angle('left')};
  ${tw`text-white bg-primaryDarker py-4/100 px-5/100`}
`

const belowTablet = `@media(max-width: ${1000}px)`
const belowMobile = `@media(max-width: ${700}px)`
const TestimonialStyles = styled('div')`
  column-count: 3;

  ${belowTablet} {
    column-count: 2;
  }

  ${belowMobile} {
    column-count: 1;
  }
`

const Testimonial = styled('div')`
  ${tw`shadow-lg rounded-lg flex justify-center items-center flex-wrap bg-white m-4`}
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
`

export async function getServerSideProps() {
  const props = await fetchTestimonials()
  return {
    props,
  }
}
export default function Testimonials({ testimonial }) {
  console.log(testimonial)
  React.useEffect(() => {
    ;(async () => {
      await loadScript('https://www.youtube.com/iframe_api')

      let players = []
      window.onYouTubeIframeAPIReady = setInterval(() => {
        if (!window.YT.loaded) {
          return
        }

        const videos = document.querySelectorAll('iframe')
        const videoEls = Array.from(videos).filter(
          video =>
            video.src.startsWith('http://www.youtube.com') ||
            video.src.startsWith('https://www.youtube.com')
        )

        videoEls.forEach(videoEl => {
          if (players.find(d => d.videoEl.src === videoEl.src)) {
            return
          }

          const player = new window.YT.Player(youtube_parser(videoEl.src), {
            videoId: youtube_parser(videoEl.src),
            events: {
              onStateChange: event => {
                if (event.data == window.YT.PlayerState.PLAYING) {
                  var temp = event.target.playerInfo.videoUrl

                  players.forEach(player => {
                    if (player.player.playerInfo.videoUrl != temp) {
                      player.player.stopVideo()
                    }
                  })
                }
              },
            },
          })

          players.push({
            player,
            videoEl,
          })
        })
      }, 1000)

      function youtube_parser(url) {
        var regExp =
          /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
        var match = url.match(regExp)
        return match && match[7].length == 11 ? match[7] : false
      }
    })()
  }, [])
  return (
    <div>
      <Head
        title="Testimonials | Nozzle"
        description="What people are saying about Nozzle."
      />

      {testimonial.length ? (
        <div tw="mb-16">
          <Center>
            <Top>
              <H1>Testimonials & Shout-outs</H1>
              <P>Here's what people are saying about Nozzle</P>
            </Top>
          </Center>
          <Container>
            <Center>
              <div>
                <TestimonialStyles>
                  {testimonial.map(testimonial => {
                    return (
                      <Testimonial key={testimonial.fields.name}>
                        <div tw="w-full p-4">
                          <Smackdown
                            source={testimonial.fields.testimonial}
                            css="img{margin: 0;}"
                          />
                        </div>

                        <div>
                          <div tw="text-gray-900 font-bold flex gap-2 pb-8">
                            {testimonial.fields.image ? (
                              <Img
                                tw="h-12 rounded-full shadow-md "
                                src={`https:${testimonial.fields.image.fields.file.url}`}
                                alt={testimonial.fields.name}
                              />
                            ) : null}
                            <div tw="text-left">
                              <div tw="text-xl">{testimonial.fields.name}</div>
                              {testimonial.fields.companyName ? (
                                <div tw="text-gray-600 font-semibold text-lg">
                                  {testimonial.fields.companyWebsite ? (
                                    <a
                                      href={testimonial.fields.companyWebsite}
                                      target="_blank"
                                      rel="noreferrer"
                                      tw="hover:(underline)"
                                    >
                                      {testimonial.fields.companyName}
                                    </a>
                                  ) : (
                                    <div tw="text-gray-600 font-semibold text-lg ">
                                      {testimonial.fields.companyName}
                                    </div>
                                  )}
                                </div>
                              ) : (
                                ''
                              )}
                            </div>
                          </div>
                        </div>
                      </Testimonial>
                    )
                  })}
                </TestimonialStyles>
              </div>
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
