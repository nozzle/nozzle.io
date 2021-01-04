import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Heading = styled('div')`
  ${tw`text-4xl leading-none text-center p-4`}
`

const Container = styled('div')`
  ${tw`text-center`}

  button {
    ${tw`text-black no-underline m-1 cursor-pointer rounded border border-solid border-gray-300`}
    padding: 8px 16px;
    transition: background-color 0.3s;

    :hover {
      ${tw`bg-gray-300`}
    }

    :focus {
      ${tw`outline-none`}
    }
  }
  .activeTag {
    ${tw`bg-gray-300`}
  }
`
const Tweet = styled('div')`
  ${tw`p-2`}
`

export default function TweetList({ tweets }) {
  const [activeTag, setActiveTag] = React.useState('')

  const uniqueTags = []

  tweets.forEach(tweet => {
    tweet.fields.tags.forEach(tag => {
      if (!uniqueTags.includes(tag)) {
        uniqueTags.push(tag)
      }
    })
  })

  uniqueTags.sort()

  // We useMemo on this so it only every computes and changes
  // when 'activeTag' or 'tweets' change
  const filteredTweets = React.useMemo(
    () =>
      activeTag
        ? tweets.filter(tweet => tweet.fields.tags.includes(activeTag))
        : tweets,
    [activeTag, tweets]
  )

  // This will only run when 'filteredTweets' changes now
  React.useEffect(() => {
    if (window.twttr) {
      window.twttr.widgets.load()
    }
  }, [filteredTweets])

  return (
    <Container>
      <div>
        <Heading>Filters</Heading>

        <button onClick={() => setActiveTag('')}>Show All</button>

        {uniqueTags.map(tag => (
          <button
            key={tag}
            className={`${tag === activeTag ? 'activeTag' : ''}`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div>
        {filteredTweets.map(tweet => (
          <div key={tweet.sys.id}>
            {tweet.fields.comments ? tweet.fields.comments : null}
            <Tweet>
              <blockquote className="twitter-tweet">
                <a href={tweet.fields.tweetUrl}> {tweet.fields.tweetUrl} </a>
              </blockquote>
            </Tweet>
          </div>
        ))}
      </div>
    </Container>
  )
}
