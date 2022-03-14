import React from 'react'
import App from 'next/app'
import tw from 'twin.macro'
import Script from 'next/script'

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
  return (
    <ThemeProvider>
      <Head title="Enterprise Keyword Rank Tracker Tool - Website Ranking Checker - Nozzle">
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="facebook-domain-verification"
          content="ywyj0bgycebyurwew2ipmicuwphhkq"
        />
      </Head>
      <Script
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

      <Script src="https://platform.twitter.com/widgets.js" />

      <GlobalStyles />
      <NavWrapper>
        <Component {...pageProps} />
      </NavWrapper>
    </ThemeProvider>
  )
}
