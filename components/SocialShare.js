import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Icon from 'components/Icon'

const ShareFabs = styled('div')`
  .top {
    position: absolute;
    top: 25rem;
    right: 0.75rem;
  }
  .below {
    position: fixed;
    top: 6rem;
    right: 0.75rem;
  }

  .fab {
    color: white;
    width: 3.5rem;
    font-size: 1.5rem;
    padding: 1rem;
    margin: 0.15rem;
    border-radius: 0.3rem;
    display: block;

    :hover {
      opacity: 0.75;
    }
  }

  .twitter {
    background-color: #1da1f2;
  }
  .facebook {
    background-color: #4267b2;
  }
  .linkedin {
    background-color: #2867b2;
  }
  .buffer {
    background-color: lightgray;
  }

  @media screen and (max-width: 700px) {
    .top,
    .below {
      top: 0rem;
      position: relative;
      padding-top: 1.5rem;
      padding-left: 1rem;
      padding-bottom: 1.5rem;
      text-align: center;
    }

    .facebook {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    }

    .fab {
      display: inline;
    }
  }
`

export default function SocialShare({ post }) {
  const router = useRouter()

  const [locationHref, setLocationHref] = React.useState(
    'https://nozzle.io/' + router.asPath
  )

  React.useEffect(() => {
    setLocationHref(window.location.href)
  }, [])

  const shareURL = encodeURIComponent(locationHref)
  const shareTitle = encodeURIComponent(post.fields.title)

  const [scroll, setScroll] = React.useState(false)

  React.useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY > 300
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    })
  })

  return (
    <ShareFabs>
      <div className={scroll ? 'below' : 'top'}>
        <a
          href={
            'https://twitter.com/share?url=' +
            shareURL +
            '&amp;text=' +
            shareTitle +
            '&amp;via=nozzleio'
          }
          target="_blank"
          rel="noreferrer"
        >
          <Icon className="twitter" i="twitter" />
        </a>

        <a
          href={'http://www.facebook.com/sharer.php?u=' + shareURL}
          target="_blank"
          rel="noreferrer"
        >
          <Icon className="facebook" i="facebookLetter" />
        </a>

        <a
          href={
            'https://www.linkedin.com/shareArticle?mini=true&amp;url=' +
            shareURL
          }
          target="_blank"
          rel="noreferrer"
        >
          <Icon className="linkedin" i="linkedin" />
        </a>

        <a
          href={'https://bufferapp.com/add?url=' + shareURL}
          target="_blank"
          rel="noreferrer"
        >
          <Icon className="buffer" i="buffer" />
        </a>
      </div>
    </ShareFabs>
  )
}
