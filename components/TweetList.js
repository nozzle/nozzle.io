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
    margin: 0 4px;
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
  const uniqueTags = []
  tweets.forEach(tweet => {
    for (let i = 0; i < tweet.fields.tags.length; i++) {
      if (!uniqueTags.includes(tweet.fields.tags[i])) {
        uniqueTags.push(tweet.fields.tags[i])
      }
    }
  })

  const [activeTag, setActiveTag] = React.useState('')

  const filteredTweets = activeTag
    ? tweets.filter(tweet => tweet.fields.tags.includes(activeTag))
    : tweets

  React.useEffect(() => {
    if (filteredTweets) {
    }
    window.twttr.widgets.load()
  }, [filteredTweets])

  return (
    <Container>
      <div>
        <Heading>Filters</Heading>

        <button onClick={() => setActiveTag('')}>Show All</button>

        {uniqueTags.map(tag => (
          <button
            className={`${tag === activeTag ? 'activeTag' : ''}`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div>
        {filteredTweets.map(tweet => (
          <div>
            {tweet.fields.comments ? tweet.fields.comments : ''}
            <Tweet>
              <blockquote class="twitter-tweet">
                <a href={tweet.fields.tweetUrl}></a>
              </blockquote>
            </Tweet>
          </div>
        ))}
        {
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        }
      </div>
    </Container>
  )
}
