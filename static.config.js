import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'
import Contentful from './tools/Contentful'

export default {
  siteRoot: 'https://nozzle.io',
  preact: true,
  getRoutes: async () => {
    const { posts, tags } = await Contentful()
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: 'rank-tracker-comparison',
        component: 'src/containers/RankTrackerComparison',
      },
      {
        path: 'features',
        component: 'src/containers/Features',
      },
      {
        path: 'pricing',
        component: 'src/containers/Pricing',
      },
      {
        path: 'about',
        component: 'src/containers/About',
      },
      {
        path: 'l/onboarding',
        component: 'src/containers/Onboarding',
        noindex: true,
        children: [
          {
            path: 'thanks',
            component: 'src/containers/OnboardingThanks',
          },
        ],
      },
      {
        path: 'devblog',
        component: 'src/containers/Devblog',
        getData: async () => ({
          posts,
          tags,
        }),
        children: [
          ...posts.map(d => {
            const path = `${d.fields.slug}`
            return {
              path,
              component: 'src/containers/DevblogPost',
              nofollow: d.fields.nofollow,
              noindex: d.fields.noindex,
              getData: async () => ({ post: d }),
            }
          }),
          ...tags.map(tag => {
            const path = `tags/${tag}`
            return {
              path,
              component: 'src/containers/DevblogTag',
              getData: async () => {
                const tagPosts = posts.filter(post => post.fields.tags.includes(tag))
                return { tag, tagPosts, tags }
              },
            }
          }),
        ],
      },
      {
        is404: true,
        component: 'src/containers/NotFound',
      },
    ]
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render () {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
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
              href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
              rel="stylesheet"
            />
            {renderMeta.styleTags}
          </Head>
          <Body>
            <noscript>
              <iframe
                title="google-tag-manager"
                src="https://www.googletagmanager.com/ns.html?id=GTM-PPH2PX"
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
            {children}
          </Body>
        </Html>
      )
    }
  },
}
