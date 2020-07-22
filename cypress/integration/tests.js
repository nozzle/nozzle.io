describe('Components are showing up in Post', () => {
  it('AuthorsAndContributors Component is rendering', () => {
    window.cy.visit('/blog/seo-humor-from-the-twitterverse/')
    window.cy.get('.AuthorsAndContributors__Container-sc-1wovwrc-0')
  })
  it('RelatedPosts Component is rendering', () => {
    window.cy.get('.RelatedPosts__Post-gudoks-2').should('have.length', 3)
  })
  it('Tweets are centered and shown as embeds', () => {
    //Each tweet has class of twitter-tweet which centers it
    window.cy.get('.twitter-tweet').should('have.length', 39)

    //Each tweet is shown as a embedded tweet
    // window.cy.get('.twitter-tweet-rendered').should('have.length', 39)
  })
})

describe('SiteMap and robots.txt ', () => {
  it('SiteMap was generated', () => {
    window.cy.readFile('public/sitemap.xml')
  })

  it('robots.txt does not disallow our site', () => {
    window.cy
      .readFile('public/robots.txt')
      .should(
        'eq',
        'User-agent: *\nDisallow: /l\nsitemap: https://nozzle.io/sitemap.xml'
      )
  })
})
