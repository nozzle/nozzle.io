import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useRouter } from 'next/router'
import Icon from 'components/Icon'

const ShareFabs = styled('div')`
  .top {
    ${tw`absolute top-96 right-3`}
  }
  .below {
    ${tw`fixed top-24 right-3`}
  }

  .fab {
    ${tw`text-white w-14 text-2xl leading-none p-4 m-0.5 rounded block `}

    :hover {
      ${tw`opacity-70`}
    }
  }

  .twitter {
    ${tw`bg-twitter`}
  }
  .facebook {
    ${tw`bg-facebook`}
  }
  .linkedin {
    ${tw`bg-linkedin`}
  }
  .buffer {
    ${tw`bg-gray-300`}
  }

  @media screen and (max-width: 700px) {
    .top,
    .below {
      ${tw`top-0 relative py-6 pl-4 text-center`};
    }

    .facebook {
      ${tw`px-5`}
    }

    .fab {
      ${tw`inline`}
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
