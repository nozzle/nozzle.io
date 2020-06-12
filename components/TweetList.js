import React from 'react'
import styled from 'styled-components'

const Heading = styled('div')`
  font-size: 2.5rem;
  text-align: center;
  padding: 1rem;
`

const Container = styled('div')`
  text-align: center;

  button {
    color: black;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color 0.3s;
    border: 1px solid #ddd;
    margin: 0.25rem;
    cursor: pointer;
    border-radius: 5px;
    border-radius: 5px;

    :hover {
      background-color: #ddd;
    }

    :focus {
      outline: 0;
    }
  }
  .activeTag {
    background-color: #ddd;
  }
`
const Tweet = styled('div')`
  padding: 0.5rem;
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
