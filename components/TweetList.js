export default function TweetList({ tweets }) {
  // { fields: { tweetUrl: '', tags: ['']} }

  const uniqueTags = tweets.reduce(() => {})
  // ['SEO', 'Link Tracking', ...]

  const [activeTag, setActiveTag] = React.useState('')

  const filteredTweets = activeTag ? tweets.filter(() => {}) : tweets

  return (
    <div>
      <div>
        <Heading>Filters</Heading>
        {activeTag ? (
          <button onClick={() => setActiveTag('')}>Show All</button>
        ) : null}
        {uniqueTags.map(tag => (
          <button onClick={() => setActiveTag(tag)}>{tag}</button>
        ))}
      </div>
      <div>
        {filteredTweets.map(tweet => (
          <div>{tweet.url}</div>
        ))}
      </div>
    </div>
  )
}
