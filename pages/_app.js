import React from 'react'
import App from 'next/app'
import tw from 'twin.macro'
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components'
import reset from 'styled-reset'
//

import 'swagger-ui-react/swagger-ui.css'

import Theme, { ThemeContext } from 'utils/Theme'
import { loadScript } from 'utils/loadScript'

import Head from 'components/Head'
import NavWrapper from 'components/NavWrapper'

if (typeof document !== 'undefined') {
  if (!window.sayHelloToDevs) {
    console.log(
      `Are you a front-end developer?! Well, you're in luck. It turns out we're always looking for top talent in that area. :)

  - Check out the repo for this webiste at https://github.com/nozzle/nozzle.io
  - Send us your resume at careers@nozzle.io and we'll get in touch!
  `
    )
    window.sayHelloToDevs = true
  }
}

const GlobalStyles = createGlobalStyle`
  ${reset};
  html, body, body, [data-reactroot] {
    ${tw`min-h-full w-full`}
   
  }
  html, body {
    ${tw`bg-primaryDarker text-base leading-none font-normal`}
    font-family: "Overpass", "Helvetica", "Georgia", sans-serif;
    color: #3d556b;
  }
  * {
    ${tw`box-border`}
  }
  a {
     ${tw`no-underline`}
    color: inherit;
  }
  [data-name="mojs-shape"] {
     ${tw`fixed! pointer-events-none`}
    z-index: 99999999;
  }

  .twitter-tweet {
     ${tw`mx-auto`}
  }
`

function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={Theme}>
      <StyledThemeProvider theme={Theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export default function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    ;(async () => {
      await loadScript('https://www.youtube.com/iframe_api')

      let players = []

      setInterval(() => {
        if (!window.YT) {
          return
        }

        const videos = document.querySelectorAll('iframe')
        const videoEls = Array.from(videos).filter(video =>
          video.src.startsWith('https://www.youtube.com')
        )

        videoEls.forEach((videoEl, i) => {
          if (players.find(d => d.videoEl === videoEl)) {
            return
          }

          const player = new window.YT.Player(`youtube${i}`, {
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
    <ThemeProvider>
      <Head title="Enterprise Keyword Rank Tracker Tool - Website Ranking Checker - Nozzle">
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="facebook-domain-verification"
          content="ywyj0bgycebyurwew2ipmicuwphhkq"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-PPH2PX');
                `,
          }}
        />
        <link
          href="//fonts.googleapis.com/css?family=Overpass:200,300,400,400i,600,700,800"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700"
          rel="stylesheet"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
          rel="stylesheet"
        />

        <script src="https://platform.twitter.com/widgets.js" />
      </Head>
      <GlobalStyles />
      <NavWrapper>
        <Component {...pageProps} />
      </NavWrapper>
    </ThemeProvider>
  )
}
