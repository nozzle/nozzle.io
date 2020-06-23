import React from 'react'
import App from 'next/app'
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components'
import reset from 'styled-reset'
//

import 'swagger-ui-react/swagger-ui.css'

import Theme, { ThemeContext } from 'utils/Theme'

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
    min-height: 100%;
    width: 100%;
  }
  html, body {
    background: ${props => props.theme.colors.primaryDarker};
    font-size: 16px;
    font-family: "Overpass", "Helvetica", "Georgia", sans-serif;
    font-weight: ${props => props.theme.weights.regular};
    color: #3d556b;
  }
  * {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  [data-name="mojs-shape"] {
    position: fixed !important;
    z-index: 99999999;
    pointer-events: none;
  }

  .twitter-tweet {
    margin: 0 auto;
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
  return (
    <ThemeProvider>
      <Head title="Enterprise Keyword Rank Tracker Tool - Website Ranking Checker - Nozzle">
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
