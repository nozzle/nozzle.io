import React, { useState } from 'react'
import { H1, P } from 'components/Html'
import Head from 'components/Head'
import styled from 'styled-components'
import Smackdown from 'components/Smackdown'
import { Container } from 'components/Layout'
import Icon from 'components/Icon'
import tw from 'twin.macro'

const Top = styled('div')`
  ${'' /* ${angle('left')}; */}
  ${tw` w-auto mb-4 items-center overflow-hidden text-white bg-primaryDarker pt-5/100 pb-10 px-3/20 relative z-0 text-center`}
`
const Wrap = styled('div')`
  ${tw`flex flex-nowrap m-2 w-auto text-left justify-center`}
`
const GlossaryTermStyles = styled('div')`
  ${tw`flex flex-wrap flex-auto m-2 justify-center max-w-4xl place-content-center`}
`
const Box = styled('div')`
  ${tw`p-5 mb-5 pt-16 mt--12 h-auto w-full 
	lg:(flex flex-grow flex-shrink-0 max-w-lg w-400)
	`}
`
const Text = styled('div')`
  ${tw`flex flex-col leading-normal lg:(text-left pl-5)`}
`
const Name = styled('div')`
  ${tw`text-gray-900 font-bold text-3xl mb-2 hover:cursor-default`}

  .number {
    ${tw`inline-block pl-2 invisible opacity-30`}
  }

  :hover .number {
    ${tw`visible`}
  }
`
const Shortcuts = styled('div')`
  ${tw`
    text-sm leading-none fixed left-0 top-10 bottom-0 flex items-center z-10
    md:(text-lg )
  `}

  > div {
    ${tw`
      flex flex-col bg-primaryLight opacity-90 p-1 rounded-r-2xl shadow-lg
			hover:(opacity-100 ease-in-out duration-75)
    `}
    @media (min-height: 875px) {
      font-size: 1rem;
    }

    @media (max-height: 500px) {
      display: none;
    }
  }
`

const AlphabetSectionHeader = styled('div')`
  ${tw`font-bold text-7xl w-full text-primaryDarker`}
  border-bottom: 1px solid;
  border-color: primaryDarker;
`

const AlphabetLetter = styled('a')`
  ${tw`
    text-center text-gray-50
		hover:cursor-pointer
		lg:(text-xl pl-0.5 pr-0.5)
		xl:(text-[1.6rem] leading-8 pt-0.5 pb-0.5)
  `}

  @media (max-height: 1010px) {
    font-size: 1.25rem;
    line-height: 1.65rem;
  }

  @media (max-height: 865px) {
    line-height: 1.5rem;
  }

  @media (max-height: 680px) {
    line-height: 1.4rem;
  }

  ${props => props.disabled && tw`opacity-40`}
`
const DefinitionWrapper = styled('div')`
  ${tw`text-gray-700 text-base`}

  .link {
    ${tw`hover:(underline)`}
  }
`
const Definition = styled(Smackdown)`
  > div > p > a {
    ${tw`hover:(underline)`}
  }
`

const SearchBar = styled('div')`
  ${tw`bg-white w-11/12 m-auto flex rounded-2xl px-2 items-center
	xl:w-5/12
	md:w-9/12`}
  > input {
    ${tw` text-primaryDarker text-2xl rounded-2xl border-none w-10/12 
		focus-visible:outline-none`}
  }
`

const SearchBarIcon = styled(Icon)`
  ${tw`text-primaryDarker w-10 text-xl
		hover:(cursor-pointer text-primaryLight)
	`}
`

export default function Glossary() {
  const [searchInput, setSearchInput] = useState('')

  function HandleSearchReset() {
    var input = document.getElementById('searchInput')
    input.value = ''
    setSearchInput('')
  }

  const handleSearchInputChange = e => {
    setSearchInput(e.target.value)
  }

  const { terms, termsByLetter } = generateTerms()

  return (
    <div>
      <Head
        title="SEO Glossary | Nozzle"
        description="A definition of SEO key terms and phrases."
      />
      <Top>
        <H1>SEO Glossary</H1>
        <P>The definitions of SEO key terms and phrases.</P>
        <SearchBar>
          <SearchBarIcon i="search" onClick={HandleSearchIconClick} />
          <input
            id="searchInput"
            onChange={handleSearchInputChange}
            placeholder="Search"
            value={searchInput}
          />
          <SearchBarIcon i="x" onClick={HandleSearchReset} />
        </SearchBar>
      </Top>
      <Shortcuts>
        <div>
          {Object.keys(termsByLetter).map(letter => {
            const term = termsByLetter[letter]
            console.log(termsByLetter)
            letter = letter.toUpperCase()

            if (!term) {
              return <AlphabetLetter disabled>{letter}</AlphabetLetter>
            }
            return (
              <AlphabetLetter href={`#${term.id}`}>{letter}</AlphabetLetter>
            )
          })}
        </div>
      </Shortcuts>
      <Container>
        <Wrap>
          <GlossaryTermStyles>
            {terms.map((term, i) => {
              return term.name.length === 1 ? (
                <AlphabetSectionHeader id={term.id} href={`#${term.id}`}>
                  {term.name}
                </AlphabetSectionHeader>
              ) : (
                <Box>
                  <Text>
                    <Name id={term.id}>
                      {term.name}
                      <a className="number" href={`#${term.id}`}>
                        #
                      </a>
                    </Name>
                    <DefinitionWrapper>
                      <Definition source={term.definition} />
                    </DefinitionWrapper>
                  </Text>
                </Box>
              )
            })}
          </GlossaryTermStyles>
        </Wrap>
      </Container>
    </div>
  )

  function HandleSearchIconClick() {
    setSearchInput(document.getElementById('searchInput').value)
  }

  function generateTerms() {
    const baseTerms = [
      {
        name: 'A',
        definition: '',
      },
      {
        name: 'Absolute Link',
        definition: `A hyperlink containing the full URL. An absolute link specifies the complete transfer protocol, domain name, and file name.`,
      },
      {
        name: 'Above the Fold',
        definition: `Traditionally refers to the top portion of a newspaper, but in digital marketing terms it is the area of content that is viewable on a page before scrolling down.`,
      },
      {
        name: 'Accessibility',
        definition: `A measure of the usability of a site and the practice of making a site usable for disabled or blind people. This is considered good practice because search engines are essentially blind, meaning they cannot see pictures or Flash presentations. Because of this, accessible websites tend to rank better than inaccessible sites.`,
      },
      {
        name: 'Affiliate Marketing',
        definition:
          "A program that allows sites to sell products or services on a commission basis. The affiliate website will only earn money if someone clicks through their affiliate link to the provider's site and makes a purchase.",
      },
      {
        name: 'Agent Name',
        definition: `The name of the crawler/spider that is currently visiting a page. A spider is simply a robot or program sent out by the search engines to scan and index the websites on the internet.`,
      },
      {
        name: 'AJAX',
        definition: `Asynchronous JavaScript And XML. This allows a designer to create more user-friendly applications and web pages that feel more responsive. In simple terms, AJAX allows JavaScript scripts to send requests for data and receive responses without having to reload the entire page each time. This allows users to access powerful online programs without clicking through countless pages.`,
      },
      {
        name: 'Algorithm',
        definition: `An operational programming rule that defines how a search engine will index website content and then display the results to its users.`,
      },
      {
        name: 'Algorithm Changes',
        definition: `A major algorithmic change can usually be seen immediately, though the change sometimes takes a few weeks to completely roll out. There are three types of algorithmic changes:

New Algorithm: The search engine adds a new algorithm to improve search quality. E.g.: Google Panda, Google Penguin.

Algorithm Update: The search engine changes certain signals of an existing algorithm.

Algorithm Refresh: The search engine re-runs an existing algorithm using the exact same signals as last time.`,
      },
      {
        name: 'Alt Attribute',
        definition: `An alternative text description (HTML code) for images. It should provide a text equivalent for any images on the page. This provides information used by search engines and screen readers (for blind and visually-impaired people) to understand the contents of an image.`,
      },
      {
        name: 'Analytics',
        definition: `Software that allows website owners to track web page views, user paths, top traffic-generating keywords, and conversions in order to quantify user behavior and trends. This is usually based on interpreting log files or through the inclusion of a JavaScript tracking code placed on the website.`,
      },
      {
        name: 'Anchor Text',
        definition: `The actual text in an HTML link. This is an extremely important part of SEO because the anchor text is intended to provide contextual information to people and search engines about what the webpage or website being linked to is about.`,
      },
      {
        name: 'API',
        definition: `Application Program Interface. It is a set of routines, tools, and protocols that are used to build software applications. It also determines how a service is used through the application.`,
      },
      {
        name: 'Artificial Intelligence (AI)',
        definition: `Computers that perform tasks that require human intelligence. Rather than following a set of programmed rules (like an algorithm), an AI computer system is basically a digital brain that learns. AI can also make and carry out decisions without human intervention.`,
      },
      {
        name: 'ASP',
        definition: `Active Server Pages. This is a proprietary programming language invented by Microsoft that is used to build dynamic web pages. ASP is also an acronym for Application Service Provider, which is a hosted service offered to customers over the internet.`,
      },
      {
        name: 'Author Authority',
        definition: `Using the reputation and credentials of someone who writes content online as a ranking factor.`,
      },
      {
        name: 'Authority',
        definition: `The combination of signals search engines use to assess importance or weight given to websites and webpages for the purposes of ranking.`,
      },
      {
        name: 'B',
      },
      {
        name: 'B2B',
        definition: `Abbreviation for business-to-business. In B2B SEO, the buying cycle is typically longer, products and services are usually more expensive, and the audience is professional decision-makers.`,
      },
      {
        name: 'B2C',
        definition: `Abbreviation for business-to-consumer. In B2C SEO, the buying cycle is typically shorter (though it still varies by industry), products and services are usually cheaper, and consumers are the audience.`,
      },
      {
        name: 'Backlinks',
        definition: `Sometimes called "inbound links," these are links that point to a website from an outside source. These links are used to determine the link popularity of a site.`,
      },
      {
        name: 'Baidu',
        definition: `The most popular search engine in China, founded in January 2000 by Robin Li and Eric Xu.`,
      },
      {
        name: 'Bait and Switch',
        definition: `A spamming technique. It refers to providing one page at a URL to the search engine spiders or directory and a different page with the same URL to actual users. Another similar tactic is to submit an optimized page to the search engine and then replace it with a more user-friendly page after the original has been indexed.`,
      },
      {
        name: 'Banned',
        definition: `Removal from any search engine results pages.`,
      },
      {
        name: 'Beacon',
        definition: `A line of code that is inserted into an ad or a web page that helps to track a user’s actions. It can, for example, track registrations or purchases. web beacons are usually invisible to users because they are only 1 x 1 pixels in size and have no color. It is sometimes referred to as a web bug, invisible GIF, 1 by 1 GIF, or a tracker GIF.`,
      },
      {
        name: 'Bing',
        definition: `The name of Microsoft’s search engine. It launched in June 2009, replacing Microsoft Live Search (previously MSN Search and Windows Live Search). Since 2010, Bing has powered Yahoo’s organic search results as part of a search deal Microsoft and Yahoo struck in July 2009.`,
      },
      {
        name: 'Black Box',
        definition: `A complex computer program that is poorly understood. Inputs and outputs can be observed, but there is no access to the process itself due to its confidential nature. For example, Google’s algorithm is a black box.`,
      },
      {
        name: 'Black Hat SEO',
        definition: `Unethical SEO techniques that are employed to manipulate the relevance of a given website in an effort to rank higher in the search engines. Cloaking, keyword stuffing, or link and blog spamming are all examples of Black Hat practices. Search engines frown on such techniques and may penalize or ban the practitioner.`,
      },
      {
        name: 'Blacklist',
        definition: `Lists that are compiled by search engines, or other interested parties, of spammers. These lists might be used to ban or boycott those spammers on the search engines.`,
      },
      {
        name: 'Blog',
        definition: `The common term for a weblog. A publication of content, sorted in chronological order, with the most recent content appearing at the top. The content reflects the interests of the publisher, it may be a personal journal or for organizations to provide news, education, and commentary about their industry. A good blog is one that is regularly updated for the public to view.`,
      },
      {
        name: 'Blogroll',
        definition: `A list of links that appear on a blog. These usually link to blogs that are owned by the same company, relate to the same industry, or belong to friends of the blogger.`,
      },
      {
        name: 'Body Copy',
        definition: `The main text content of a web page that is visible to users.`,
      },
      {
        name: 'Bookmarks',
        definition: `Bookmarking within a browser is a simple tool that allows users to organize and keep track of favorite web pages. There are also many web-based services that allow you to save and share your favorite websites. These are referred to as social bookmarking sites.`,
      },
      {
        name: 'Bot',
        definition: `See <a className="link" href="#Spider">Spider</a>`,
      },
      {
        name: 'Bounce Rate',
        definition: `The percentage of visitors to a website that immediately leave rather than clicking through to other pages on the site or taking the desired action.`,
      },
      {
        name: 'Branded Keyword',
        definition: `When a user’s query includes an exact match, or variation, of a specific company or brand name.`,
      },
      {
        name: 'Breadcrumb Navigation',
        definition: `website navigation that is designed to help both search engines and users better understand the relationship between pages. It usually looks like:

Home > Products > Black Shoes

The structure is simple. It is organized by starting with the home page and listing the pages through the site structure down to the one the user is on. Each page will be linked except for the one the user is currently on.`,
      },
      {
        name: 'Bridge Page',
        definition: `See <a href="#Doorway-Page">Doorway Page.</a>`,
      },
      {
        name: 'Broken Link',
        definition: `A hyperlink that does not function properly and does not lead to the desired location. The most common reasons for broken links include:
      
• The destination website going offline
• The destination page has been moved
• The link went to content that was only temporary
• The domain’s content management system changed

Most large websites will have some broken links on their site, but if there are too many of them it will interfere with the user experience and tell the search engines that the site is outdated and less relevant, which can damage its rankings.`,
      },
      {
        name: 'C',
      },
      {
        name: 'Cache',
        definition: `Copies of web pages stored locally on a user’s hard drive or in a search engine’s database. This allows the pages to reload very quickly if the user hits the back button in their browser because the page is not being downloaded all over again. It simply loads off the hard drive.`,
      },
      {
        name: 'Call to Action',
        definition: `Content or copy used to encourage a person to complete the desired action. These could include phrases like “Buy Now”, “Click Here", or "Click to Download".`,
      },
      {
        name: 'Canonical URL',
        definition: `When a group of pages are duplicates, the canonical URL will represent the most authoritative or best representative version of the page that you want indexed by search engines. You can indicate which version you want to be the canonical by placing a rel=”canonical” link tag in the <head> of the page.`,
      },
      {
        name: 'ccTLD',
        definition: `A country-code top-level domain. For instance, a company based in the United Kingdom would have a domain like this: www.example.co.uk, where uk is the ccTLD.`,
      },
      {
        name: 'Cgi-bin',
        definition: `The most common name of the directory on a web server where a CGI (Common Gateway Interface) program is stored.`,
      },
      {
        name: 'Citation',
        definition: `In local SEO, a citation is any mention online of a brand name, address or phone number (NAP). Citations are usually found in directories, social network and community profiles, website resources lists, or any mention of a brand online that does not include a link to the website. NAPs can influence ranking and visibility on Google Maps.`,
      },
      {
        name: 'Click Bait',
        definition: `Content that is designed to entice people to click, typically by overpromising or being intentionally misleading in headlines, so publishers can earn advertising revenue.`,
      },
      {
        name: 'Click Depth',
        definition: `The number of clicks it takes to get from the home page, or an entrance page, to a destination page on a website. The more clicks it takes, the less authoritative Google considers it to be and therefore not likely to be crawled and indexed.`,
      },
      {
        name: 'Clickthrough Rate (CTR)',
        definition: `The number of people that clicked on a link (search engine listings, banner ads, etc.) compared to the number of times the link was delivered.  Clickthrough rates tend to be higher for search engine listings than banner ads.`,
      },
      {
        name: 'Cloaking',
        definition: `A black hat SEO technique. This strategy involves serving content to the search engines that is different from the content delivered to human visitors, and will usually contain a higher keyword density or other components that might imply relevance to search engine bots but could ruin user experience. This attempt to manipulate search engine rankings will result in penalties and bans from the search engines.`,
      },
      {
        name: 'CMS',
        definition: `Content Management System. A program that is used for creating, editing, and managing different types of media. It is most commonly used to easily manage the content on a website.`,
      },
      {
        name: 'Co-Citation',
        definition: `How frequently two websites (or webpages) are mentioned together by a third-party website, even if those first two items don’t link to (or reference) each other. This is a way search engines can establish subject similarity.`,
      },
      {
        name: 'Code To Text Ratio',
        definition: `The amount of text displayed on a page compared to the amount of code used to construct the page. A higher ratio of text to code is considered to provide a better user experience but is not a direct ranking factor.`,
      },
      {
        name: 'Cold Fusion',
        definition: `A web scripting language. It usually deals with accessing a database. Files written in Cold Fusion will be saved on a web server with a .CFM extension.`,
      },
      {
        name: 'Comment Spam',
        definition: `Comments written by spambots which are poorly written, often off-topic and self-promotional with the purpose of getting a link that is actually worthless.`,
      },
      {
        name: 'Competition',
        definition: `There are two types of competition:

Direct Competitors: Companies that target a similar audience both online and offline in the products/services they sell.

SEO Competitors: Companies that compete for the same keywords and organic search visibility, usually with different products/services.`,
      },
      {
        name: 'Content',
        definition: `Words, images, videos, or sounds (or any combination thereof) that convey information that is meant to be distributed to and consumed by an audience.

One of the two most important Google ranking factors (along with links). Search engines want to reward content that is useful, informative, valuable, credible, unique, and engaging with better traffic and visibility.`,
      },
      {
        name: 'Content is King',
        definition: `A phrase quoted from a 1996 Bill Gates’ essay by speakers at conferences and writers on popular SEO (and digital marketing) publications. In this context, “content is king” usually means that content is essential for you to have any SEO, digital marketing, or business success.`,
      },
      {
        name: 'Conversion',
        definition: `The act of turning a visitor into a paying customer or convincing them to perform an action on the website, such as signing up for a newsletter or downloading a program.`,
      },
      {
        name: 'Conversion Rate',
        definition: `The number of  visitors that reach a site and perform a desired action (or take a step closer to the desired action) compared to visitors that leave the site without performing any action at all. This is calculated by dividing the total number of conversions by traffic, then multiplying by 100.`,
      },
      {
        name: 'Cookie',
        definition: `A simple line of text that is stored on a user’s computer after visiting a website. A cookie (sometimes called a "tracking cookie" or "internet cookie") can be employed by a web server to remember or authenticate the user. This will allow them to remember signed-on status or show the right content based on user preferences. They are also very useful for website analytics purposes.`,
      },
      {
        name: 'Conversion Rate Optimization (CRO)',
        definition: `When a website improves the number or quality of conversions by testing and improving elements such as:

• Overall website design
• Images
• Price
• Calls-to-action
• Messaging
• Copy`,
      },
      {
        name: 'Core Update',
        definition: `When Google makes broad updates to its core algorithm. Google sometimes announces a specific update, such as the Helpful Content update, but core updates are non-specific and happen several times a year.`,
      },
      {
        name: 'Core Web Vitals',
        definition: `A set of metrics that measure the performance of the page related to user experience. Core web Vitals is a ranking factor and were introduced alongside the Page Experience update as the main signals that indicate a good user experience:

Largest Contentful Paint (LCP) – loading performance.
First Input Delay (FID) – interactivity.
Cumulative Layout Shift (CLS) – visual stability.`,
      },
      {
        name: 'Crawl Budget',
        definition: `The total number of URLs search engines can and want to crawl on a website during a specific time period.`,
      },
      {
        name: 'Crawler',
        definition: `See <a className="link" href="#Spider">Spider.</a>`,
      },
      {
        name: 'Crawling',
        definition: `The process of gathering information from all of the public webpages. This is done with a crawler to update, add, and organize web pages in a search engine’s index.`,
      },
      {
        name: 'CSS',
        definition: `Cascading Style Sheets. A style sheet language that describes the layout of a website. It will contain information about paragraph layout, colors, font sizes, and more.`,
      },
      {
        name: 'CTR',
        definition: `Click Through Rate. The number of people that clicked on a banner or search engine listing compared to the number of users that saw it.`,
      },
      {
        name: 'Customer Journey',
        definition: `All of the potential moments (or touchpoints) at which a prospect is exposed to or engages with a brand. All of these interactions are designed to eventually persuade, influence, and convert that prospect to become a customer, client, or subscriber. Typically made up of four main stages: Awareness, Consideration, Decision, Retention.`,
      },
      {
        name: 'D',
      },
      {
        name: 'Database-driven',
        definition: `Refers to a website that is connected to a database. The web page content is based, at least in part, on information that is contained in the database.`,
      },
      {
        name: 'Dead Link',
        definition: `Another word for a broken link. A hyperlink that no longer connects to the desired location because that page has either been removed completely or changed to a different URL.`,
      },
      {
        name: 'Dead-End Page',
        definition: `A webpage that links out to no other webpages. So called because once a user or bot arrives on this page, there is no place to move forward.`,
      },
      {
        name: 'Deep Link',
        definition: `A link pointing to any webpage other than the homepage or a link pointing to content within a mobile app.`,
      },
      {
        name: 'Deep Link Ratio',
        definition: `When an internal link points directly to a page other than the homepage on a site, this is known as a deep link. The ratio of deep links compared to links to your homepage is known as deep link ratio.`,
      },
      {
        name: 'Dedicated Server',
        definition: `A server that deals with only a single website or a small collection of websites that are owned by a single person. They tend to be more reliable than shared or virtual servers, but are also much more expensive.`,
      },
      {
        name: 'De-index/Delisting',
        definition: `When Google removes a website or webpage, either temporarily or permanently, from search results, specifically its search index. Google provides a Removal tool in Search Console for this; however, a website may also be de-indexed as punishment for violating Google’s webmaster Guidelines, in the form of a manual action.`,
      },
      {
        name: 'Direct Traffic',
        definition: `In Google Analytics, users that navigate directly to the site by typing the URL directly into the browser or by clicking on a bookmark are known as direct traffic. Google will also include into direct traffic any traffic sources it doesn’t recognize.`,
      },
      {
        name: 'Directory',
        definition: `A website with a categorized list of links that point to other websites. The most effective directories are the ones that are edited manually.`,
      },
      {
        name: 'Disavow',
        definition: `If your link profile includes a high number of spammy, artificial, or low-quality inbound links that may be harming your rankings, and you don’t have the ability to get them removed for a legitimate reason (e.g., the link exists on a site you have no control over) – you can use Google’s Disavow Tool tool to tell Google to ignore those links.`,
      },
      {
        name: 'DNS',
        definition: `Domain Name System. A hierarchical naming system for any computer or other resource that is connected to the internet or private network. It translates domain names that are meaningful to humans (such as: www.yoursite.com) into numerical or binary identifiers (like: 248.55.187.155) that are used for locating and addressing these devices worldwide.`,
      },
      {
        name: 'Do-follow',
        definition: `A link that doesn’t use the “nofollow” attribute. In other words, a link.`,
      },
      {
        name: 'Domain',
        definition: `A website address – typically ending in an extension like .com, .org, or .net. For example: www.nozzle.io is the domain of this website.`,
      },
      {
        name: 'Domain Age',
        definition: `The date a domain was registered on, to the current date is known as domain age. It was once considered that a greater domain age gave a domain more authority, but this idea of domain age as an influence on ranking has since been dismissed.`,
      },
      {
        name: 'Domain Authority',
        definition: `The overall “strength” of a website, built up over time, which can help a new page rank well quickly, even before that content has earned links or engagement.

A score, between 0-100, was developed by SEO software company Moz. It’s used to predict the ability of a website to rank in search results.`,
      },
      {
        name: 'Doorway Page',
        definition: `Web pages that are created to rank in search engines for specific keywords only for the purpose of redirecting users who click on that page to a different website.`,
      },
      {
        name: 'DuckDuckGo',
        definition: `A search engine that was founded on September 28, 2008. It is often praised for its heavy focus on user privacy and a lack of filter bubbles (search personalization). DuckDuckGo relies on more than 400 sources to serve its search results, including vertical search engines, its own crawler, DuckDuckBot, Bing, and Yandex.`,
      },
      {
        name: 'Duplicate Content',
        definition: `Identical, or near identical, content that appears on two or more different URLs. Search engines do not want to index multiple versions of the same content, and have become very strict and very adept at filtering out content that they see as duplicate in nature.`,
      },
      {
        name: 'Dynamic Content',
        definition: `Content that can change over time, or to serve different content to different users based on their behavior or interests. It usually uses a dynamic language to help render the page.`,
      },
      {
        name: 'E',
      },
      {
        name: 'E-A-T',
        definition: `Expertise, Authoritativeness, and Trustworthiness is a concept taken from the Google Search Quality Evaluator Guidelines that has become known as E-A-T.

E-A-T represents signals that Google uses to determine quality content but it is not a direct ranking factor.

Google has committed to stopping the spread of disinformation, especially from any site operating in Your Money Your Life (YMYL) niches such as finance or health.`,
      },
      {
        name: 'E-commerce',
        definition: `The buying and selling of products, all conducted online.`,
      },
      {
        name: 'Editorial Link',
        definition: `A link that is given by one website to another without the recipient asking or paying for it.

Also known as a natural link.`,
      },
      {
        name: '.edu Links',
        definition: `Educational-focused institutions have a top-level domain (TLD) of .edu. For example, stanford.edu. A link from such a site is known as a .edu link.`,
      },
      {
        name: 'Engagement Metrics',
        definition: `Methods to measure how users interact with web pages and content. Examples of engagement metrics include:

• Click-through rate
• Conversion rate
• Bounce rate
• Time on page/site
• New vs. returning visitors
• Frequency and recency
• Dwell time`,
      },
      {
        name: 'Entities',
        definition: `People, places, organizations, websites, events, groups, facts, and other things.`,
      },
      {
        name: 'Error Page',
        definition: `A web page that is served to a user to state that an error, such as a "File Not Found" has occurred.`,
      },
      {
        name: 'External Link',
        definition: `A link that points to another domain. Contrary to what many people believe, linking to outside, related resources is a good way to help search engines understand your site. If you are linking to high quality content, it can reflect well on your own site.`,
      },
      {
        name: 'F',
      },
      {
        name: 'Favicon',
        definition: `A shortened version of the term "Favorite Icon." It is the 16x16 pixel square icon that shows a logo or other image that is associated with the website and appears in the browser address bar. It can also show up next to the site name in a bookmarks list and on the tabs in a browser.`,
      },
      {
        name: 'Featured Snippet',
        definition: `For certain queries, usually questions (i.e., who/what/where/when/why/how), Google sometimes shows a special block above the organic search results. This box contains a summary (in the form of paragraph, list, table, or video), as well as the publication date, page title, link to the webpage from which the answer originated, and URL.`,
      },
      {
        name: 'Feed',
        definition: `An RSS or XML feed allows a user to subscribe to content update notifications, such as news feeds or updates on new blog content.  A feed could also refer to pay-per-click syndicated feeds or merchant product feeds.`,
      },
      {
        name: 'Findability',
        definition: `A measure of how easily your site can be found on the search engines.`,
      },

      {
        name: 'Firefox',
        definition: `A popular, open source web browser.`,
      },
      {
        name: 'First Link Priority',
        definition: `A concept in internal linking is that Google treats links differently if there are two links on a web page pointing to the same page. It was thought Google would consider the anchor text from the first link to have more influence. 

There is no definitive evidence for how Google treats the same link on a page. When adding links to a page, it’s recommended to do this on a user-first basis and apply the link to anchor text where it is relevant.`,
      },
      {
        name: 'Flux',
        definition: `The slight shuffling of search engine positions that naturally occurs in between major search engine updates.`,
      },
      {
        name: 'Footer Link',
        definition: `Links that appear in the bottom section (or “footer) of a website.`,
      },
      {
        name: 'Forum',
        definition: `An online collection of conversational threads that are used to exchange information between members of an online community. Users post messages and responses in different categories, making it possible to have a discussion between many users over a span of time.`,
      },
      {
        name: 'Freshness',
        definition: `Freshness refers to the age of content published online. 

It is considered that Google gives priority to fresh content in some niches for some queries depending on certain factors. For example, searches related to COVID announcements or sports results.

Query Deserves Freshness (QDF) is part of the Google algorithm that determines when a query should show up-to-date information, especially in breaking news, recurring events, information queries, and product queries.`,
      },
      {
        name: 'Fresh Content',
        definition: `Refers to frequently updating or changing content on a website. If Googlebot or other search engine spiders learn that a particular website’s content is changing on a regular basis, it will revisit and re-index the site regularly.`,
      },
      {
        name: 'FTP',
        definition: `File Transfer Protocol. This protocol allows users to transfer data between computers. There are many free or cheap FTP programs, and many content management systems include FTP capabilities. These can make it much easier to exchange or update content.`,
      },
      {
        name: 'G',
      },
      {
        name: 'Gateway Page',
        definition: `See also: <a href="#Doorway-Page">Doorway Page.</a> A web page that offers very little value to human visitors because they are designed almost entirely for the search engines. Its sole purpose is to drive traffic to another page.`,
      },
      {
        name: 'Google',
        definition: `The world’s leading search engine. It uses a complex algorithm to discover the relevance of a given web page and rank it accordingly.`,
      },
      {
        name: 'Google Analytics',
        definition: `A free analytics tool that can collect detailed website visitor statistics. Once the tool is implemented on a website it can track most of the activities that take place on the site, including visits, page views, pages per visit, average time on site, bounce rate, and more.  `,
      },
      {
        name: 'Google Bombing',
        definition: `An attempt to build search engine rankings for a website (other than your own) for rankings that are out of context for that site. It is most often used as an unethical attempt to associate rival companies or organizations with demeaning keywords, and is accomplished by gaining a sudden and huge volume of links with the demeaning keyword in the anchor text.`,
      },
      {
        name: 'Google Cache',
        definition: `Google caches each page (stores it in memory) as it is indexed. This is the page that Google is basing its rankings on. A user can see exactly which page was used by clicking on the "Cached" link next to the result.`,
      },
      {
        name: 'Google Checkout',
        definition: `The online payment processing service that is offered by Google and was designed to simplify online purchasing. It allows users to store credit or debit card information along with their shipping information in their Google Account. This way they can make purchases at participating sites with a simple click of a button. The system offers fraud protection and a system for tracking purchases and their status.`,
      },
      {
        name: 'Google Dance',
        definition: `When Google indexes are updated there is a period of fluctuations in the index size and this can cause some noticeable changes in search engine result positions. This fluctuation is caused by Google’s many data centers updating out of sync, and that means there will be a time when a website seems to "dance" up and down the rankings.`,
      },
      {
        name: 'Google Hummingbird',
        definition: `A Google search algorithm that was officially announced in September 2013 after it had been in use for a month. The purpose of Hummingbird was to better understand the full context of queries (i.e., semantic search), rather than certain keywords, in order to provide better results.`,
      },
      {
        name: 'Google Juice',
        definition: `A term that refers to the amount of authority that theoretically transfers between websites through hyperlinks. In other words, pages with a lot of links pointing at them can be said to have a lot of Google or "link juice" going to their site.`,
      },
      {
        name: 'Google Panda Algorithm Update',
        definition: `A major Google algorithm update that initially rolled out in February 2011, it was followed by numerous subsequent updates. The goal of Google Panda was to reduce the visibility of low-value content, often produced by “content farms. In 2016, Panda became part of Google’s core ranking algorithm.`,
      },
      {
        name: 'Google Penguin Algorithm Update',
        definition: `A major Google algorithm update that launched in April 2012, it was followed by a series of updates and refreshes. The goal of Penguin was to reduce the visibility of overly-optimized sites, or sites that excessively abused certain spammy tactics (e.g., building low-quality links, keyword stuffing). In 2016, Penguin started running in real-time as a part of Google’s core algorithm.`,
      },
      {
        name: 'Google Pigeon Update',
        definition: `The name (given by the SEO industry, not Google) of a significant Google local search update launched July 24, 2014. The goal of Pigeon was to improve the accuracy and relevance of local searches by leveraging more traditional Google ranking signals and improving distance and locating ranking parameters.`,
      },
      {
        name: 'Google RankBrain',
        definition: `A major Google algorithm change that was officially introduced in October 2015, although it had been in testing for months before this. With RankBrain, Google added machine learning to its algorithm and has been called the third most important ranking signal. In June 2016, it was revealed that RankBrain has been involved in every query and has an impact on rankings.`,
      },
      {
        name: 'Google Sandbox',
        definition: `A theorized and debated (but never confirmed by Google) “waiting period” that prevents new websites from seeing the full benefit of their optimization efforts. Typically, this effect is witnessed most often with new sites targeting competitive keywords and can only be overcome when the site gains enough authority.`,
      },
      {
        name: 'Google Search Console',
        definition: `Google’s Search Console helps you monitor your site in search results. It offers several helpful features, including the ability to measure traffic and monitor sites for indexing errors and site speed.`,
      },
      {
        name: 'Google Search Quality Rater Guidelines',
        definition: `Google uses a document of guidelines for its internal Quality Raters to reference when manually reviewing websites. 

The original internal document was confidential and then Google publicly released the Search Quality Rater Guidelines online which is updated from time to time.

Information in the document is a guide to creating quality content and features the concept of E-A-T. The guidelines are not a list of any direct ranking factors.`,
      },
      {
        name: 'Google Supplemental Index',
        definition: `A secondary index that Google uses to store supplemental results or pages that are deemed to have less importance by Google’s algorithm.  They will also relegate less trusted sites to the supplemental index. Pages in the supplemental index can still be ranked in the search results, but this will depend on the number of pages still in the main index that are relevant to the search.`,
      },
      {
        name: 'Google Trends',
        definition: `A tool that allows you to see the popularity of search queries in Google Search. It shows how search volume on keywords have changed over a period of time, showing data as far back as 2004. It is presented in a line graph with the horizontal axis representing time and the vertical axis showing how often the term was searched for. It can be further broken down by region, city, or language, and multiple search terms can be compared against each other.`,
      },
      {
        name: 'Google Webmaster Guidelines',
        definition: `Google’s guidance on good website optimization practices, as well as practices that can result in manual action. Simply: 

• Make unique, valuable, and engaging websites and webpages for users, not search engines.
• Avoid tricks and techniques that deceive users and are intended only to improve search rankings.`,
      },
      {
        name: 'Googlebot',
        definition: `The search bot used by Google to collect documents from the web and build a searchable index. website owners can restrict the information that Googlebot (or other search engines spiders) can see by using the appropriate directives in a robots.txt file.`,
      },
      {
        name: '.gov Links',
        definition: `Government organizations have a top-level domain (TLD) of .gov. For example, usa.gov. A link from such a site is known as a .gov link. 

Only government entities in the US can apply and gain a .gov TLD. Other countries have their own country-specific version, such as .gov.uk.

Government TLD domains are tightly regulated and trusted sources of information. For this reason, a link from a .gov domain is considered to have significant value and has been targeted by link spam.`,
      },
      {
        name: 'Guerilla Marketing',
        definition: `Marketing strategies that are designed for companies with a small marketing budget. These strategies employ unconventional and creative tactics to draw attention to the product or service. Often these activities are targeted at unexpected places in order to create a memorable experience for potential customers. It is vital to get maximum impact out of the campaign for minimum resources.`,
      },
      {
        name: 'Guest Blogging',
        definition: `A popular link building tactic that involves developing content for other websites in exchange for a backlink pointing at your own page.`,
      },
      {
        name: 'H',
      },
      {
        name: 'Hallway Page',
        definition: `A web page that is used as an index to a group of other pages you want to make sure the search engine spiders find. The spider starts by indexing the hallway page and then follows all the links to those other pages.`,
      },
      {
        name: 'Heading Tag',
        definition: `An HTML tag that is used to denote a section or page heading of a web page. Heading tags are important to SEO efforts because they can really help search engines understand what the page is about.`,
      },
      {
        name: 'Head Term',
        definition: `A popular keyword with high search volume that is usually difficult to rank for. Also known as: Head Keyword, Short-Tail.`,
      },
      {
        name: 'Hidden Text',
        definition: `A search engine spam tactic. It involves hiding text in such a way that human visitors won’t see it, but the search engine spiders will. There are different ways to accomplish this, but the original purpose was to fill a page with as much keyword-rich content as possible in an attempt to gain rankings. Sometimes website owners simply wanted to hide the text because they thought it detracted from the overall design. The practice is specifically forbidden by the search engines and any website that is caught using this tactic will suffer some severe penalties.`,
      },
      {
        name: 'Hijacking Websites',
        definition: `A form of search engine spam in which spammers try to make a search engine believe that a certain website resides at a different URL. This is an illegal and unethical tactic that some spammers will use to try and get their site to rank above another. An example of this sort of hijacking would be when there are two pages online with the exact same content but different URLs: widgetmaker.com (the original site) and wedgetmaker.net (the rogue site). When spiders crawl these websites they will choose which one they believe is authentic. Spammers use this tactic to try and rank over the real site.`,
      },
      {
        name: 'Hilltop Algorithm',
        definition: `Influenced by the HITS Algorithm, and added to Google’s algorithm in 2003, Hilltop assigned “expert” status to certain websites or web pages published about a specific topic that also link to unaffiliated pages about that topic.`,
      },
      {
        name: 'Hits',
        definition: `A download of a file from a web server. It is important to note that this is not the same metric as website visits. Each graphic on a web page, for example, counts as a hit. That means if there are 10 unique graphics on the page, it will register as 11 total hits (one for the HTML page and 10 for the graphics).`,
      },
      {
        name: 'HITS Algorithm',
        definition: `Hyperlink-Induced Topic Search is a link analysis algorithm that assesses a value not just based on content and inbound links (authorities), but also its outbound links (hubs).`,
      },
      {
        name: 'Homepage',
        definition: `The main or introductory page to a website. Its main function is to welcome a visitor and capture their attention at a quick glance. It should offer an intuitive navigation system that will organize the content to lead visitors to other parts of the website. The URL for the page usually ends with the domain name extension (.com, .org, .net, etc) and usually accumulates the most link juice. Depending on the search query, though, people can go directly to other pages within the site and never see the front page.`,
      },
      {
        name: '.htaccess',
        definition: `A directory-level configuration file for Apache that can be used to password protect files or redirect files. A .htaccess file that is incorrectly edited can cause a lot of trouble, so it is important that you always back up the file before editing it.`,
      },
      {
        name: 'HTML',
        definition: `HyperText Markup Language. A common markup language used to create web pages and properly format content on the site. It defines how data is structured and tells the browser how the page is to be displayed. HTML has become an international standard and it is maintained by the World Wide web Consortium (W3C).`,
      },
      {
        name: 'HTML Source',
        definition: `The basic, unrendered programming or markup code that tells a browser how to display the web pages. It can be seen by going to the "View" menu of a browser and clicking on "Page Source." `,
      },
      {
        name: 'HTTP',
        definition: `HyperText Transfer Protocol. The most commonly used protocol for communication between servers and web browsers.`,
      },

      {
        name: 'HTTP Status Codes',
        // definition: ``
        definition: `• 301 Status Code: A status code that means that the requested URL has permanently moved and has been given a new URL.
				 
• 302 Status Code: A status code that means the requested URL is temporarily residing under a different URL. 

• 400 Status Code: A "Bad Request" status code that means a server is unable to understand the request because of poorly formed syntax. The user will be required to modify the request before repeating it.

• 401 Status Code: The status code that means "Unauthorized." The server will require user authentication before continuing with the request.

• 403 Status Code: The status code that means "Forbidden." In other words, the server understood the request, but is refusing to fulfill it. 

• 404 Status Code: The status code that is displayed as a response error message when a document cannot be found. 

• 410 Status Code: A status code that signals when a page is intentionally missing and there is no forwarding address. It is usually used for limited display pages like promotional information and the 410 message will be removed at the discretion of the webmaster.

• 500 Status Code: The status code that indicates an internal server error has taken place and that is why a document request was not fulfilled.

• 501 Status Code: A status code that is displayed when the server does not recognize the request method for the document. The server will state that the request was "Not Implemented" because it was incapable of fulfilling the request.`,
      },
      {
        name: 'Hubs',
        definition: `A range of centralized websites that link out to many different topical-authority websites. They will generally have a lot of outbound links to those topically relevant sites, and will contain a lot of highly focused content.  `,
      },
      {
        name: 'Hyperlinks',
        definition: `See <a href="#Link">Links.</a> `,
      },
      {
        name: 'I',
      },
      {
        name: 'Inbound Links',
        definition: `Also called “backlinks”. A link from an off-site page to the website. They are used to determine a site’s link popularity. `,
      },
      {
        name: 'Index',
        definition: `The database in which a search engine will store all the content from every page that the spiders or bots visit. `,
      },
      {
        name: 'Indexability',
        definition: `How easily a search engine bot can understand and add a webpage to its index. `,
      },
      {
        name: 'Indexed Page',
        definition: `A webpage that has been discovered by a crawler, has been added to a search engine index, and is eligible to appear in search results for relevant queries. `,
      },
      {
        name: 'Information Architecture',
        definition: `How a website is organized and where various content and navigational elements are located on webpages. `,
      },
      {
        name: 'Information Retrieval',
        definition: `The process of searching for information (e.g., text, images, video) from a large database and then presenting the most relevant information to an end user. `,
      },
      {
        name: 'Invisible Web',
        definition: `A term to describe the huge amount of information on the web that is not indexed by the search engines. `,
      },
      {
        name: 'IP Address',
        definition: `Internet Protocol Address. It is sometimes simply referred to as an IP or internet Address. An IP address is a four-part series of numbers separated by periods. These numbers identify the senders and receivers of network data. The numbers represent first the domain, then the network, then the subnetwork and finally the host computer. `,
      },
      {
        name: 'ISP',
        definition: `Internet Service Provider. An ISP can provide a wide range of different services related to the internet. Some common services include internet connections, email, web hosting, and more. While most often thought of as a commercial business that charges a monthly fee, an ISP can be any entity (such as a school, university, or government organization) that provides access to the internet. `,
      },
      {
        name: 'J',
      },
      {
        name: 'Java Applets',
        definition: `Smaller programs that are written in the Java programming language. These programs are then embedded into web pages. These programs run on a user’s computer rather than the web server. Most browsers have discontinued Java applet support, so it is important to note that if the website navigation or content is in an applet, it will be invisible to the search engines. `,
      },
      {
        name: 'JavaScript',
        definition: `A scripting language that is used to develop interactive elements on a web page. `,
      },
      {
        name: 'K',
      },
      {
        name: 'Key Performance Indicators (KPIs)',
        definition: `Indicators or goals that are both measurable and key to the success of the company. Once they are agreed upon, these indicators are used to reflect the level of success that has been achieved. `,
      },
      {
        name: 'Key Phrase (or Keyword Phrase)',
        definition: `See <a href="#Keyword">Keyword.</a> `,
      },
      {
        name: 'Keyword',
        definition: `The word that a user enters into a search engine to find relevant web pages. Websites that are properly optimized for those keywords are more likely to appear in the search engine results. `,
      },
      {
        name: 'Keyword Cannibalization',
        definition: `A type of self-competition that occurs when multiple pages from one website compete to rank for the same query on a SERP. This can result in a lower CTR, diminished authority, and lower conversion rates than from having one consolidated webpage that ranks well. `,
      },
      {
        name: 'Keyword Density',
        definition: `The number of times a keyword appears on a given web page in relation to the total word count. A high keyword density can tell a search engine that the page is very relevant to that term, but a density that is too high will tell a search engine you are actually keyword stuffing, and you may be penalized for it. `,
      },
      {
        name: 'Keyword Research',
        definition: `The process of discovering and determining the phrases that people most often use to find particular products, services, or information.  `,
      },
      {
        name: 'Keyword Stemming',
        definition: `In language and grammar, words are constructed around a variation upon a root or stem. For example, shopping, shopped, shops are all variations of the stem ‘shop’.

When trying to rank for a term such as ‘shop’, using variations of the word on the page (shopping, shopped) will all be considered the same stem keyword by Google. This also applies to plurals such as bikes/bikes or fly/flies.

Keyword stemming is Google’s ability to understand the variations of a keyword and is part of its algorithm.
			`,
      },

      {
        name: 'Keyword Stuffing',
        definition: `Including an excessive amount of keywords in the body copy and the HTML tags of your webpages. This implies that someone is sacrificing the readability of the page in an attempt to boost the page’s search engine ranking. Keyword stuffing can refer to hiding keywords by making them the same color as the background, hiding keywords in comment tags or filling alt tags with a long list of keywords. These practices should never be used. `,
      },
      {
        name: 'Keyword-rich',
        definition: `A page that is focused on relevant keywords and includes a large amount of targeted words or phrases without disrupting the readability of the content is said to be keyword-rich. `,
      },
      {
        name: 'Knowledge Graph',
        definition: `An entity database Google uses to surface facts and information on people, places, and things (a.k.a., entities) and their connections in a Knowledge Panel or carousel at the top of search results on relevant queries. `,
      },
      {
        name: 'Knowledge Panel',
        definition: `A box that appears at the top of, or on the right side (desktop only), of page 1 of Google’s search results for relevant queries. This panel contains facts and information on people, places, and things, as well as links to related websites or Google searches. `,
      },
      {
        name: 'L',
      },
      {
        name: 'Landing Page',
        definition: `The web page that visitors will see once they click on an online advertisement or natural search listing. They are designed to encourage users to quickly complete a "call to action." Landing pages are often used to make it easy for users to sign up for a newsletter, download some trial software, or even purchase a product. `,
      },
      {
        name: 'Latent Semantic Indexing (LSI)',
        definition: `An information retrieval method designed to help search engines identify the correct context of a word. LSI doesn’t play a useful role in SEO today. `,
      },
      {
        name: 'Lead',
        definition: `A person who may or may not be interested in your product(s) and/or service(s). A lead willingly shares their email address (and usually other personal or contact information) in exchange for something they deem of value from the website. `,
      },
      {
        name: 'Link',
        definition: `A connection between two websites built using HTML code. A link enables users to navigate to websites, social networks, and apps. Links play a critical role in how search engines evaluate and rank websites. `,
      },
      {
        name: 'Link Bait',
        definition: `Web content that is either very useful or very entertaining and encourages others to link to it. `,
      },
      {
        name: 'Link Building',
        definition: `The activities, strategies, and processes that are used to attract inbound links to a website in an attempt to increase its link popularity and search engine rankings. `,
      },
      {
        name: 'Link Equity',
        definition: `A measure of the strength and authority of a website based on the number of inbound links and the authority of the sites providing the links. `,
      },
      {
        name: 'Link Farm',
        definition: `A group of tightly interlinked websites that were created with the sole purpose of inflating link popularity. This is a form of spamming the search engines and should never be used. `,
      },
      {
        name: 'Link Hoarding',
        definition: `An attempt to keep all your link popularity by never linking out to other sites, or only linking through JavaScript or other unnecessary redirects. This is a bad idea because people will be less likely to link to you if you are unwilling to link out. Also, some search engines see it as a sign of credibility that you are pointing to other authority sites which can increase your relevancy scores. `,
      },
      {
        name: 'Link Popularity',
        definition: `The quantity and quality of the inbound links to a website. This is an important measure that some search engines use to determine the site’s relevance to a certain keyword. `,
      },
      {
        name: 'Link Profile',
        definition: `Every type of link that points to a particular website. The quality of a website’s link profile can vary widely, depending on how they were acquired and the anchor text used. `,
      },
      {
        name: 'Link Spam',
        definition: `Using an excessive amount of links in an attempt to take advantage of link-based algorithms that are used by certain search engines. `,
      },
      {
        name: 'Link Stability',
        definition: `Where a link remains on a page consistently for a period of time without being changed or updated. 

 Google did apply for a patent that referred to link churn and how often the links on a page were changed, but there is no evidence that link stability has any influence on ranking.`,
      },
      {
        name: 'Link Velocity',
        definition: `How quickly (or slowly) a website accumulates links. A sudden increase in link velocity could potentially be a sign of spamming, or could be due to viral marketing or doing something newsworthy (either intentionally or unintentionally). `,
      },
      {
        name: 'Links, Internal',
        definition: `Links that navigate from one page to another page on the same domain. Internal links can be inserted on a page, in the main navigation menu, or in the sitemap. 

Internal links can be used to indicate the importance of a page on a site. For example, a page that is directly linked from the home page compared to a page that is four clicks from the homepage.

Internal links are important because Googlebot crawlers follow internal links to navigate your site and find new pages.`,
      },
      {
        name: 'Links, NoFollow',
        definition: `In a hyperlink, rel=”nofollow” is an attribute added to the link to show that you are not passing any credit or endorsement to the page you are linking to. 

Nofollow was originally introduced by Google to limit comment spam and devalued all nofollow links, but they have since changed how the directive works.

Nofollow is now considered a ‘hint’ which means they may still use some information about linking patterns, but generally, still accept that no weight should be passed through the link.`,
      },
      {
        name: 'Log File',
        definition: `A record kept on the web server of anyone that accessed a website. The logged information usually includes the user IP address, the date and time, the user’s browser, the referring web page, and more. `,
      },
      {
        name: 'Log File Analysis',
        definition: `The process of exploring the data contained in a log file to identify trends, administer the site, track user movement around the site, gather demographic information, and understand how search bots are crawling the website. `,
      },
      {
        name: 'Long Tail Keyword',
        definition: `Longer, more specific keyword phrases that tend to generate less traffic but produce a higher conversion rate. For example, someone searching for "red [brand name] shoes" has a specific product in mind and is probably ready to make a purchase. Someone searching for "shoes", on the other hand, is probably still shopping around and considering a lot of different options. `,
      },
      {
        name: 'M',
      },
      {
        name: 'Machine Learning',
        definition: `A subset of Artificial Intelligence in which a system uses data to learn and adjust a complex process without human intervention. `,
      },
      {
        name: 'Manual Action',
        definition: `Google’s term for a penalty. Google will take manual action on a website after a human reviewer (i.e., a Google employee) manually reviews a website to confirm whether it has failed to comply with Google’s webmaster guidelines. Penalized websites can either be demoted or removed entirely from search results. Manual actions can be assessed to the entire website or just certain webpages. `,
      },
      {
        name: 'Manual Submitting',
        definition: `The process of submitting a website to an individual search engine manually. `,
      },
      {
        name: 'Meta DefinitionWrapper',
        definition: `A meta tag in the HTML that is used to describe the page’s content. This description is what a user may see when your website appears in the search results. While it does not have any influence on search rankings, it can influence whether or not a user will ultimately choose to visit your site. `,
      },
      {
        name: 'Meta Keywords',
        definition: `A meta tag that lists the keywords that have relevance to the page. This tag was heavily abused in the early days, so it does not currently provide any benefit to search engine rankings. `,
      },
      {
        name: 'Meta Tag Stuffing',
        definition: `Repeating the same keywords in the meta tags or using keywords in the meta tags that are unrelated to the content of the page. `,
      },
      {
        name: 'Meta Tag',
        definition: `Information about the website that users do not need to see is included in tags in the head section of the HTML. There are many different meta tags, though only a few are relevant to search engine spiders. The two most well-known tags are the meta description and meta keyword tags, but neither of them have any influence on search engine rankings. `,
      },
      {
        name: 'Metric',
        definition: `A way to measure activity and performance in order to assess the success (or lack thereof) of an SEO initiative. `,
      },

      {
        name: 'Mod_Rewrite',
        definition: `A module or plugin that is used with Apache web servers to rewrite a URL on the fly. This can be used to generate search engine friendly URLs and increase the chance to index pages that rely on a dynamic database to drive the website. `,
      },
      {
        name: 'Mouseover',
        definition: `When a mouse hovers over a text or graphic and, without clicking the mouse, some action happens on the page.  `,
      },
      {
        name: 'Mozilla Firefox',
        definition: `See <a href="#Firefox">Firefox.</a> `,
      },
      {
        name: 'MSN (Bing)',
        definition: `Can refer to Microsoft Network and their search engine. Now, though, the search engine provided by Microsoft is called "Bing." `,
      },
      {
        name: 'N',
      },
      {
        name: 'Navigation Bar (Nav Bar)',
        definition: `The navigation links on a website, usually arranged in a row along the top or down the side of the page. Intuitive navigation is a crucial component of a website because it will help lead visitors deeper into the site and direct search engine spiders to the most important content. `,
      },
      {
        name: 'Negative SEO',
        definition: `An attempt to lower a competitor’s rankings in the search engines rather than building your own. See Google Bowling. `,
      },
      {
        name: 'Niche',
        definition: `A specific market or area of interest consisting of a group of people with its own unique preferences. `,
      },
      {
        name: 'Noarchive Tag',
        definition: `A meta tag that tells search engines not to store a cached copy of your page. `,
      },
      {
        name: 'Noframes Tag',
        definition: `A way to use non-framed HTML on a frameset page so older, non-frames capable web browsers and search engines can read the text. A framed website, however, is not very search engine friendly, so the better method is to scrap the frames and rebuild the site. `,
      },
      {
        name: 'Nofollow',
        definition: `The attribute that prevents a link from passing any link authority. Most often used on sites that have a lot of user generated content such as blog comments. Nofollow can also be used in a robots meta tag to prevent the search engines from counting any and all outbound links on a page.  `,
      },
      {
        name: 'Noindex Tag',
        definition: `A meta tag that tells search engines not to include a specific webpage in its index. `,
      },
      {
        name: 'Nosnippet Tag',
        definition: `A meta tag that tells search engines not to show a description with your listing. `,
      },
      {
        name: 'Not Provided',
        definition: `After search engines moved to secure search in 2011, keyword data was removed from Google Analytics, replaced with “not provided”, thus making it impossible to know which queries were responsible for visitors finding a website. `,
      },
      {
        name: 'O',
      },
      {
        name: 'Off-Page SEO',
        definition: `Demand generation and brand awareness activities that take place outside of a website. In addition to link building, promotion tactics can include social media marketing, content marketing, email marketing, influencer marketing, and even offline marketing channels (e.g., TV, radio, billboards). `,
      },
      {
        name: 'On-Page SEO',
        definition: `These activities all take place within a website. In addition to publishing relevant, high-quality content, on-page SEO includes optimizing HTML code (e.g., title tags, meta tags), information architecture, website navigation, and URL structure.`,
      },
      {
        name: 'On-theme',
        definition: `Content that stays consistent on a single or particular topic.`,
      },
      {
        name: 'Open Source',
        definition: `Refers to software that is distributed with its source code so that developers can modify it to fit individual needs.`,
      },
      {
        name: 'Organic Search Results',
        definition: `Organic search results show up "naturally" and are determined by relevance to a given search query. Studies have shown that organic search results receive far more clicks than paid listings.`,
      },
      {
        name: 'Orphan Page',
        definition: `Any webpage that is not linked to by any other pages on that website.`,
      },
      {
        name: 'Outbound Links',
        definition: `A link on a website that points to a website on a different domain.`,
      },
      {
        name: 'P',
      },
      {
        name: 'Page Title',
        definition: `See <a href="#Title-Tag">Title Tag.</a>`,
      },
      {
        name: 'Pagejacking',
        definition: `Stealing the content from a high-ranking website and using it on your own site in an attempt to boost your own search engine rankings. This is another unethical method of optimization and should be discouraged.`,
      },
      {
        name: 'PageRank (PR)',
        definition: `A method that was used by Google to weigh the link popularity of a website and assign it relevance. Links from sites with a higher PageRank were more valuable than those from lower-ranked sites. Since October 14, 2009, however, Google removed PageRank from its webmaster Tools section.`,
      },
      {
        name: 'Pageviews',
        definition: `Sometimes called "page impressions", it is the total number of pages (not files) that a visitor views while on a site.`,
      },
      {
        name: 'Paid Inclusion',
        definition: `Paying a search engine in order to be listed in its index.`,
      },
      {
        name: 'Paid Placement',
        definition: `Paying a search engine in order to get a listing to show up in a prominent position on the results pages. These listings will usually be separated and labeled as "sponsored listings."`,
      },
      {
        name: 'Pay-Per-Click (PPC)/Paid Search',
        definition: `An internet advertising method that involves an advertiser paying only for the click throughs on an ad. Pay-per-click advertisements appear above (and often below) the organic results on search engines.`,
      },
      {
        name: 'PBN',
        definition: `Stands for Private Blog Network.`,
      },
      {
        name: 'Penalty',
        definition: `See: Manual Action`,
      },
      {
        name: 'Persona',
        definition: `A fictionalized representation of an ideal website visitor or customer – their demographics, behavior, needs, motivations, and goals – all based on actual data. 
	
Also known as: Buyer Persona, Marketing Persona`,
      },
      {
        name: 'Personalization',
        definition: `When search engines use search history, web browsing history, location, and relationships to create a set of search results tailored to a specific user.`,
      },
      {
        name: 'PHP',
        definition: `An extremely popular, open source programming language that is used to build dynamic websites. Currently, it is being used on over nine million websites because it is considered to have good security, add quick response times, and deliver transparency to the end user.`,
      },
      {
        name: 'Pogo-sticking',
        definition: `When, after entering a query, a searcher bounces back and forth between a SERP and the pages listed in those search results.`,
      },
      {
        name: 'Pop-Up',
        definition: `A web page that appears in a new, usually smaller browser window. Most often used for promotional purposes, they are almost universally disliked by internet users. Search engine spiders will usually not follow pop-up links.`,
      },
      {
        name: 'Portal',
        definition: `A website that is used as a point of access to other information. These are usually hubs for a specific subject or a popular content-driven site.`,
      },
      {
        name: 'Position',
        definition: `See: Rank`,
      },
      {
        name: 'Q',
      },
      {
        name: 'QDF',
        definition: `Stands for query deserves freshness, where a search engine might decide to show newer webpages in search results (rather than older pages) if a particular search term is trending, perhaps because a news event has resulted in a surge in searches on that topic.`,
      },
      {
        name: 'Quality Content',
        definition: `Content that helps you successfully achieve business or marketing goals (e.g., driving organic traffic or social shares, earning top search rankings, generating leads/sales).`,
      },
      {
        name: 'Quality Link',
        definition: `A link that is considered to carry more weight than others. A quality link is generally considered to be one that comes from a trusted source, is hard to acquire, is from a site that has been online long enough to establish itself as an authority, and is related to the content of your own website. If the link appears in the content of the referring site, and uses appropriate anchor text, this can help you rank even better.`,
      },
      {
        name: 'Query',
        definition: `The keyword or phrase that a user enters into a search engine database. `,
      },
      {
        name: 'R',
      },
      {
        name: 'Rank',
        definition: `Where a webpage appears within the organic search results for a specific query. `,
      },
      {
        name: 'Ranking Factor',
        definition: `An individual component which contributes to a complex series of algorithms that determine where web pages should appear within the organic search results for a specific query. For years, Google has said that its algorithms “rely on more than 200 unique signals” to help users find the most relevant webpage or answer. 
		
Also known as: Ranking Signal.`,
      },
      {
        name: 'Reciprocal Links',
        definition: `Links from another website that were secured only because of an agreement to link back to them. The practice of trading links with other websites.`,
      },
      {
        name: 'Redirect',
        definition: `The process of automatically sending a user to another web page or website address without requiring another click on a different link.`,
      },
      {
        name: 'Registrar',
        definition: `A company that allows you to register a domain name.`,
      },
      {
        name: 'Referral Fees',
        definition: `A fee paid in return for a qualified sales lead.`,
      },
      {
        name: 'Referrer',
        definition: `An outside website that linked to your site and delivered a visitor. This includes search engine results pages that contain links to your site that a user clicked on.`,
      },
      {
        name: 'Reinclusion',
        definition: `The process of asking a search engine to return a website or webpage(s) to its search index after de-indexing.`,
      },
      {
        name: 'Relative Link',
        definition: `A link that does not have the entire reference URL within the <a href> tag. Because of issues related to canonical links and possible hijacking, the preferred method of linking within a site is to always use absolute links.`,
      },
      {
        name: 'Relevance',
        definition: `A measure of how likely a given web page will be useful or of interest to a user that has queried a search engine on a given keyword.`,
      },
      {
        name: 'Render',
        definition: `Formatting the HTML code to show what the page will look like on the visitors screen.`,
      },
      {
        name: 'Repeat Visitor',
        definition: `A single individual or browser that accesses a website or webpage more than once over a specific period of time.`,
      },
      {
        name: 'Reputation Management',
        definition: `An online marketing strategy that is used to make sure that keywords related to your brand will only display results which reinforce your brand, rather than sites that have disparaging content about the brand.`,
      },
      {
        name: 'Responsive Website',
        definition: `A website designed to automatically adapt to a user’s screen size, whether it’s being viewed on a desktop or mobile device.`,
      },
      {
        name: 'Reverse Index',
        definition: `An index of keywords which also stores the matching documents that include those keywords.`,
      },
      {
        name: 'Rich Snippet',
        definition: `Structured data can be added to the HTML of a website to provide contextual information to the search engines during crawling. This information can then be displayed in the SERPs, resulting in an enhanced listing, known as a rich snippet.`,
      },
      {
        name: 'Return on Investment (ROI)',
        definition: `A way to measure the performance of SEO activities. This is calculated by dividing how much revenue you earned via organic search by the cost of the total investment, then multiplying by 100.`,
      },
      {
        name: 'Robot',
        definition: `See <a href="#Spider">Spider.</a>`,
      },
      {
        name: 'Robots.txt',
        definition: `A text file in the root directory of the website that controls the actions of search engine spiders on the site and allows or denies access to different pages.`,
      },
      {
        name: 'ROI',
        definition: `Return On Investment. A measure of the sales generated by the SEO campaign compared to the amount of money invested.`,
      },
      {
        name: 'RSS',
        definition: `Real Simple Syndication. A method of syndicating information through a feed reader or other software that allows users to set up subscriptions to the content they are interested in.`,
      },
      {
        name: 'S',
      },
      {
        name: 'Safari',
        definition: `A popular web browser developed by Apple.`,
      },
      {
        name: 'Schema',
        definition: `A form of microdata which, once added to a webpage, can create an enhanced description (commonly known as a rich snippet), which appears in search results.`,
      },
      {
        name: 'Scraper Sites',
        definition: `A website that is created by "scraping" content from other sites or search engine results pages to develop their own content. These sites are usually full of advertising or will direct users to other sites.`,
      },
      {
        name: 'Search Engine',
        definition: `A website that uses programs to index numerous web pages on the internet and allows users to query its database to find a site that is related to a given keyword. `,
      },
      {
        name: 'Search History',
        definition: `Search engines track every search users conduct (text and voice), every webpage visited, and every ad clicked on. Search engines may use this data to personalize the results for signed in users.`,
      },
      {
        name: 'Search Term',
        definition: `A keyword or key phrase that a user might employ to conduct a query on a search engine.`,
      },
      {
        name: 'SEM',
        definition: `Search Engine Marketing. A term that refers to the strategies and techniques that are used to promote a website and increase the amount of leads that are generated as well as the quality of those leads. This includes both Search Engine Optimization and Pay-Per-Click activities.`,
      },
      {
        name: 'SEO',
        definition: `Search Engine Optimization. The strategies and techniques that are employed to improve a website’s rankings in organic search engine results. Common practices include developing the content, improving the structure, and building link popularity.`,
      },
      {
        name: 'SEO Copywriting',
        definition: `Writing content that will tell the search engines that it is relevant to certain search queries. The content must be appealing and readable to human visitors, and it must also help the search engines understand the site.`,
      },
      {
        name: 'SERP',
        definition: `The page search engines display to users after conducting a search. Typically, search engines show about 10 organic search results, sorted by relevance. Depending on the query, other search features may be shown, including: 
		
• Ads (above and below the organic search results)
		
• Featured snippets
		
• Images
		
• Knowledge panels
		
• Local Pack (with map)
		
• News
		
• Related questions
		
• Related searches
		
• Shopping results
		
• Sitelinks
		
• Tweets
		
• Videos`,
      },
      {
        name: 'Session',
        definition: `See <a href="#User-Session">User Session.</a>`,
      },
      {
        name: 'Share of Voice',
        definition: `How many impressions a brand receives in the SERPs for search terms when compared to the total impressions that the brand’s competitors receive for those same search terms.`,
      },
      {
        name: 'Site Search',
        definition: `A simple search function that allows a user to search a single website rather than the entire internet.`,
      },
      {
        name: 'Sitemap',
        definition: `A web page that can give a search engine a secondary way to navigate through all the pages of the site. Ideally, the website navigation should help the search engines find all the necessary pages, but sitemaps can help search engines further understand what the pages are about. There are two types of sitemaps: 
		
• HTML: This type of sitemap, typically organized by topics, helps site users navigate a website.
		
• XML: This type of sitemap provides crawlers with a list of webpages on a website.`,
      },
      {
        name: 'Sitewide Links',
        definition: `A link that appears on every page of a website, typically in a sidebar or footer of blogs or websites that use templates. `,
      },
      {
        name: 'Social Signal',
        definition: `Any factors that demonstrate authority and influence on popular social networking websites. For example, the social authority of a user on Twitter. 
		
Although many correlation studies have indicated that socials signals impact rankings (e.g., number of Likes/shares a piece of content receives), Google has publicly stated that social signals are not a direct ranking factor. Popular sites that have a lot of social media engagement tend to rank well for other reasons.`,
      },
      {
        name: 'Spam',
        definition: `Refers to any internet marketing technique that is designed to try and manipulate the search engine results or otherwise interfere with a search engine’s ability to provide relevant and valid results. Examples of spam techniques include: keyword stuffing, doorway pages, invisible text, and placing hundreds of useless comments on different blogs. Also, any media, such as unsolicited email, that is intrusive and untargeted can be considered spam.`,
      },
      {
        name: 'Spamming',
        definition: `The act of using SPAM techniques to manipulate search engine results or to send unsolicited commercial email. `,
      },
      {
        name: 'Spider',
        definition: `Also called a Bot, Robot, or Crawler. It is a program that a search engine will use to explore the web and index the HTML content from the available websites. A spider will usually create a copy of the visited pages for processing by the search engine, and once the pages are indexed a search can be done much faster. A spider starts with a few URLs, and then it will follow the hyperlinks on those pages and start the indexing process on the new URLs.`,
      },
      {
        name: 'Spider Trap',
        definition: `Refers to an infinite loop that a spider can get caught in if it is exploring a dynamic website that uses URLs that are constantly changing. If, for example, a spider were to attempt to completely index a dynamic website, it could end up crawling countless pages that have basically the same content.`,
      },
      {
        name: 'Splash Page',
        definition: `An entry page to a website that conveys an important message necessary for the user to proceed to the website.`,
      },
      {
        name: 'Split Testing',
        definition: `A controlled experiment used to compare at least two webpages to measure the effects of a different variable on conversions. After the pages are shown for a long enough period of time to site visitors to gather an adequate amount of performance data, a “winner” can be declared. 
		
Also known as: A/B Testing.`,
      },
      {
        name: 'SSL Certificate',
        definition: `A digital certificate used for website identity authentication and to encrypt information sent to the server using Secure Sockets Layer technology.`,
      },
      {
        name: 'Static Content',
        definition: `Content that is created and saved as an HTML file. It is not created dynamically from a database, but will present the same content unless it is changed manually.`,
      },
      {
        name: 'Stemming',
        definition: `A process that is used by search engines to deliver results based on the root spelling of a word. This way it can return similar results for similar yet different words, such as plural and singular versions of keywords.`,
      },
      {
        name: 'Stop Character',
        definition: `Characters in a page URL that tell a search engine that it is looking at  a dynamic web page. These characters include the ampersand (&), equals sign (=), and a question mark (?). Search engine spiders are careful when it comes to indexing dynamic web pages because they want to avoid spider traps, so pages with these characters in the URL risk not getting indexed. `,
      },
      {
        name: 'Stop Word',
        definition: `Words that are so common and generally meaningless that a search engine won’t bother including them in the index or database of website content. Examples of stop words include: "the," "a," "an," "of," "with," and others.`,
      },
      {
        name: 'Subdomain',
        definition: `A separate section that exists within a main domain.`,
      },
      {
        name: 'Supplemental Pages',
        definition: `Pages in Google’s supplemental index. These pages will only be shown after normal results. Pages end up in this index for various reasons, including a loss of inbound link popularity or the search engine deciding that the page is just duplicate content.`,
      },
      {
        name: 'T',
      },
      {
        name: 'Tagging, Tags',
        definition: `Word descriptions that can be associated with a piece of information.`,
      },
      {
        name: 'Target Audience',
        definition: `A market segment defined by its demographics, purchase behavior, psychographics, or media or product usage.`,
      },
      {
        name: 'Taxonomy',
        definition: `A classification system that uses a controlled vocabulary to organize topical subjects. Usually this will classify a hierarchical system.`,
      },
      {
        name: 'Term Frequency',
        definition: `The number of times a term appears in a document. See also: Keyword Density.`,
      },
      {
        name: 'Term Vector Database',
        definition: `A database that uses relative vectors (or, in other words, relevancy) for different search phrases and pages.`,
      },
      {
        name: 'Theme',
        definition: `The main keywords that a web page is focusing on.`,
      },
      {
        name: 'Time on Page',
        definition: `An inexact estimation of how long a user spent looking at a particular webpage. Pages with high exit rates can greatly skew this data.`,
      },
      {
        name: 'Title Tag',
        definition: `The title of the document, displayed in the browser tab. This is an extremely important tag for the search engines, even if most users never actually notice the text. Keywords in the title tag are usually weighted very heavily, but they will also often display the title tag in the search results.`,
      },
      {
        name: 'Token',
        definition: `A tracer or tag that is attached to the URL of a page that was requested by a user. It will last through a series of requests by a user in order to count the number of unique visitors to a website.`,
      },
      {
        name: 'Top-Level Domain (TLD)',
        definition: `The extension of a given web address. These include: 
		
• .com
		
• .org
		
• .net
		
• .info
		
There are also many more industry and country-specific options.
		
Also known as: gTLD (Generic Top-Level Domain); Domain Extension.`,
      },
      {
        name: 'Trackback',
        definition: `A method for notifying an author of a web page or article when someone else has linked to one of their documents. The method is often employed to make it easy to discover who is linking or referring to an article.`,
      },
      {
        name: 'Tracking',
        definition: `Following audience response throughout the entire length of a campaign. Tracking tools can help you improve online advertising campaigns by delivering immediate results so you can see what is working and what is not. For some metrics, tracking mechanisms need to be built into your website.`,
      },
      {
        name: 'Traffic',
        definition: `The number of internet users that visit a site.`,
      },
      {
        name: 'Trust',
        definition: `Generally applies to the history of a domain (e.g., whether it cites or features expert sources, builds a positive reputation, adheres to webmaster Guidelines).`,
      },
      {
        name: 'U',
      },
      {
        name: 'Unethical SEO',
        definition: `Techniques that are considered unscrupulous and will often result in the perpetrator being banned from the search engines. See also: Black Hat SEO, SPAM, Doorway Page, Keyword Stuffing.`,
      },
      {
        name: 'Unique Visitor',
        definition: `A single user that has accessed a website. A visit and a unique visitor are two different metrics because one user may generate multiple visits.`,
      },
      {
        name: 'Universal Search',
        definition: `When search engines pull data from multiple speciality databases to display on the same SERP. Results can include images, videos, news, shopping, and other types of results.`,
      },
      {
        name: 'URL',
        definition: `Uniform Resource Locator. It is the web address of a site.`,
      },
      {
        name: 'URL Parameter',
        definition: `The values added to a URL in order to track where traffic comes from (i.e., which link someone clicked on to discover your website or webpage). Also known as: Query String.`,
      },
      {
        name: 'URL Rewrite',
        definition: `The process of modifying a URL’s appearance to be more user and search engine friendly.`,
      },
      {
        name: 'Usability',
        definition: `A measure of how user friendly a website actually is, or how easily a user can use the navigation and interface to perform an action or task.`,
      },
      {
        name: 'User Agent',
        definition: `The name of the browser spider that is currently visiting the page.`,
      },
      {
        name: 'User Experience (UX)',
        definition: `The overall feeling users are left with after interacting with a brand, its online presence, and its product/services.`,
      },
      {
        name: 'User-Generated Content',
        definition: `Refers to content that is created and published by an end user. It is most often employed on sites that focus on media like videos, podcasts, wikis, etc.`,
      },
      {
        name: 'User Session',
        definition: `When an internet user accesses a website for a given interval. A user session is usually considered to be finished after a chosen period of inactivity).`,
      },
      {
        name: 'V',
      },
      {
        name: 'Vertical Search',
        definition: `A specialized type of search where the focus is only on a specific topic, type of content, or media. For example, YouTube (video), Amazon (shopping), Kayak (travel), Yelp (business reviews).`,
      },
      {
        name: 'Viral Marketing',
        definition: `A marketing technique that relies on the target audience to spread the message or brand awareness. It uses pre-existing social networks and the message can be almost any form of media, from videos and games to articles and podcasts. If it is appealing or useful to a small segment of a community, they will pass it on to others, allowing the message to "self replicate" like a virus.`,
      },
      {
        name: 'Visibility',
        definition: `A term that describes how well your website ranks in the search engines for relevant keywords. If a user is likely to see your listing in the results, it can be described as "visible."`,
      },
      {
        name: 'Visits',
        definition: `The instances of an internet user arriving on a website.`,
      },
      {
        name: 'Visitor',
        definition: `A person who visits a site. The number of visitors can include multiple user sessions so it does not reflect the number of unique visitors to a site.`,
      },
      {
        name: 'Voice Search',
        definition: `A type of voice-activated technology that allows users to speak into a device (usually a smartphone) to ask questions or conduct an online search.`,
      },
      {
        name: 'W',
      },
      {
        name: 'Web Analytics',
        definition: `See <a href="#Analytics">Analytics.</a>`,
      },
      {
        name: 'Web Browser',
        definition: `A computer program that allows users to view websites. `,
      },
      {
        name: 'Web Crawler',
        definition: `Also called a "web robot" or a "web spider." A crawler is a program that search engines use to methodically search the web and index the HTML content from the websites.`,
      },
      {
        name: 'Web Hosting',
        definition: `A service that allows individuals or companies to publish a website and make it available to internet users.`,
      },
      {
        name: 'Web Standards',
        definition: `The accepted guidelines for CSS, HTML, etc. By following the accepted web standards, sites will be more accessible to more platforms and users. Search engines also tend to prefer sites that adhere to the standards.`,
      },
      {
        name: 'Webpage',
        definition: `A document that exists on the web and can be viewed by web browsers.`,
      },
      {
        name: 'Website',
        definition: `A collection of webpages hosted together on the web.`,
      },
      {
        name: 'Website Navigation',
        definition: `How a website connects its webpages to help visitors navigate that site. Website navigation comes in a few different forms, including: 
		
• Main Navigation
		
• Secondary Navigation
		
• Footer Navigation
		
• Related Links
		
• Content Links
		
• Breadcrumb Navigation`,
      },
      {
        name: 'White Hat SEO',
        definition: `The SEO practices and strategies that conform to the guidelines set up by the search engines. These tactics are considered ethical because there are no deceptive practices involved. Common white hat strategies include developing relevant content and building quality links to the site.`,
      },
      {
        name: 'Wiki',
        definition: `A collection of web pages that are designed to allow user contributions and are open to be edited or modified by the users. It is often used to develop a collaborative community around a certain topic, business, or product.`,
      },
      {
        name: 'Word Count',
        definition: `The total number of words that appear within the copy of content.`,
      },
      {
        name: 'WordPress',
        definition: `An open source web publishing and Content Management System (CMS). It is most often used as a blogging platform and has been designed for managing content that is frequently updated.`,
      },
      {
        name: 'X',
      },
      {
        name: 'XHTML',
        definition: `Extensible HyperText Markup Language. A class of specifications that can move HTML so that it conforms to XML formatting.`,
      },
      {
        name: 'XML',
        definition: `Extensible Markup Language. A scripting language that allows a user to define the properties of a given document.`,
      },
      {
        name: 'XML Sitemap',
        definition: `An XML file that lists all the available URLs on a site. The purpose of the page is to notify search engines about the URLs that are available for indexing, and it can include information about the pages, like when it was added or updated and how important it is in the context of the site. From an SEO standpoint, your site should already be completely accessible to the search engines, but there are times (like sites that are filled with Flash or AJAX) when a sitemap can be a huge benefit.`,
      },
      {
        name: 'Y',
      },
      {
        name: 'Yahoo!',
        definition: `Yahoo! used to be a big deal in the search space but as of September 2022 has only 1.32% of the worldwide search engine market share. It boasts 3.02% of share in the United States. Unfortunately, it has been dying a slow death for the last decade in terms of search engine users.`,
      },
      {
        name: 'Yandex',
        definition: `The most popular search engine in Russia, Yandex was founded September 23, 1997 by Arkady Volozh and Ilya Segalovich.`,
      },
    ]

    if (searchInput.length > 0) {
      console.log(searchInput)
      baseTerms.filter(term => {
        return term.name.match(searchInput) && term.name.length > 1
      })
    }

    const terms = baseTerms
      .map(term => {
        return {
          ...term,
          id: toSlug(term.name),
        }
      })
      .sort((a, b) =>
        a.id.toLowerCase() > b.id.toLowerCase()
          ? 1
          : a.id.toLowerCase() === b.id.toLowerCase()
          ? 0
          : -1
      )
      .filter(term => {
        return term.name.toLowerCase().match(searchInput.toLowerCase())
      })

    const termsByLetter = {}

    const letters = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ]

    letters.forEach(letter => {
      termsByLetter[letter] = null
    })

    terms.forEach(term => {
      let [letter] = term.id.split('')
      letter = letter.toLowerCase()
      if (!termsByLetter[letter]) {
        termsByLetter[letter] = term
      }
    })

    return { terms, termsByLetter }
  }
}

function toSlug(str) {
  var temp = str.replace(/([.])/gm, '')
  return temp.replace(/([^a-zA-Z0-9.])/gm, '-')
}
