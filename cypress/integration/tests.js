describe('Components are showing up in Post', () => {
  it('AuthorsAndContributors Component is rendering', () => {
    window.cy.visit('/blog/seo-humor-from-the-twitterverse/')
    window.cy.get('[id=AuthorsAndContributors]')
  })
  it('RelatedPosts Component is rendering', () => {
    window.cy.get('[id=relatedPost]').should('have.length', 3)
  })
  it('Tweets are centered and shown as embeds', () => {
    //Each tweet has class of twitter-tweet which centers it and is an iframe when it shows the embedded format
    window.cy.get('iframe').parent().should('have.class', 'twitter-tweet')
  })
})

describe('SiteMap and robots.txt ', () => {
  it('SiteMap was generated', () => {
    window.cy.readFile('public/sitemap.xml')
  })

  it('robots.txt does not disallow our site', () => {
    window.cy
      .readFile('public/robots.txt')
      .should('not.contain', 'Disallow: /\n')
  })
})
