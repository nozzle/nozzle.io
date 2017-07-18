import React, { Component } from 'react'
import glamorous from 'glamorous'
//
import Theme from './utils/Theme'
import Color from './utils/Color'
import { angle } from './utils/Styles'

import Head from './components/Head'
import Content from './components/Content'
import Link from './components/Link'
import NodeGarden from './components/NodeGarden'
import TrialForm from './components/TrialForm'
import {
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Ul,
  Li,
  Img,
  Div,
  Button,
  Strong,
} from './components/Html'

const belowMobile = `@media(max-width: ${700}px)`
const belowTablet = `@media(max-width: ${1000}px)`

const Left = props => <div className='left' {...props} />
const Right = props => <div className='right' {...props} />
const Section = ({ children, ...rest }) =>
  (<section {...rest}>
    <div className='inner'>
      {children}
    </div>
  </section>)

const section = {
  zIndex: 0,
  '& .inner': {
    maxWidth: Theme.maxWidth,
    margin: '0 auto',
    padding: '10% 10%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  '& img': {
    width: '100%',
  },
  [belowMobile]: {
    '& .left, & .right': {
      flex: '1 1 100%',
      marginLeft: 0,
      marginRight: 0,
    },
    '& .left': {
      marginBottom: '2rem',
    },
  },
}

const layoutLeft = {
  '& .left': {
    flex: '2 1 200px',
    textAlign: 'right',
    marginRight: 40,
  },
  '& .right': {
    flex: '3 1 300px',
  },
}

const layoutRight = {
  '& .left': {
    flex: '3 1 300px',
  },
  '& .right': {
    marginLeft: 40,
    flex: '2 1 200px',
  },
}

const layoutLeftHalf = {
  '& .left': {
    flex: '1 1 300px',
    marginRight: 40,
  },
  '& .right': {
    flex: '1 1 300px',
  },
}

const layoutDark = {
  background: Theme.colors.primaryDarker,
  color: '#fff',
}

const Centered = glamorous.div({ textAlign: 'center', width: '100%' })

const SectionKnowEverything = glamorous(Section)(section, layoutLeft, {
  position: 'relative',
  background: `radial-gradient(circle at center, ${Theme.colors
    .primaryDarker} 20%, ${Color(Theme.colors.primaryDarker)
    .darken(10)
    .toString()})`,
  color: 'white',
  '& h4': {
    color: Theme.colors.primaryLighter,
  },
  '& img': {
    maxWidth: '940px',
    width: '140%',
    borderRadius: '5px',
    boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.2)',
  },
})
const SectionTrackAllTheThings = glamorous(
  Section
)(section, layoutDark, layoutRight, angle('right'), {
  position: 'relative',
  '& .right': {
    zIndex: 0,
  },
  '& img': {
    opacity: '1',
    borderRadius: '5px',
    boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.2)',
  },
  '& .allthethings': {
    position: 'absolute',
    right: 0,
    bottom: -10,
    width: '400px',
    opacity: '0.2',
    zIndex: 0,
  },
})
const SectionRankData = glamorous(Section)(section, layoutLeftHalf, {
  '& .right': {
    '& img': {
      opacity: '1',
      maxWidth: '940px',
      width: '140%',
      borderRadius: '5px',
      boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.2)',
    },
  },
  '& .left': {
    '& p': {
      strong: {
        color: Theme.colors.primaryLighter,
      },
    },
    // '& .metric': {
    //   display: 'inline-block',
    // },
    // '& ul': {
    //   listStyleType: 'disc',
    // },
  },
})
const SectionCompetitors = glamorous(
  Section
)(section, layoutLeft, layoutDark, angle('right'), {
  '& .left': {
    direction: 'rtl',
    '& img': {
      opacity: '1',
      maxWidth: '940px',
      width: '160%',
      borderRadius: '5px',
      boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.2)',
    },
  },
  '& .right': {
    '& p': {
      '& strong': {
        color: Theme.colors.primaryLighter,
      },
    },
  },
})
const SectionDataJunkie = glamorous(Section)(section, layoutRight, {
  textAlign: 'center',
  '& .csv, .sql': {
    flex: '1 1 30%',
  },
  '& .main': {
    flex: '1 1 34%',
    margin: '0 3%',
  },
  '& img': {
    width: '250px',
    maxWidth: '100%',
  },
  [belowTablet]: {
    '& .csv, & .sql, & .main': {
      flex: '1 1 100%',
      marginBottom: '3rem',
    },
  },
})
const SectionSchedules = glamorous(Section)(
  section,
  layoutDark,
  angle('right'),
  {
    alignItems: 'center',
    textAlign: 'center',
    '& p': {
      maxWidth: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '& img': {
      width: '900px',
      maxWidth: '100%',
      borderRadius: '5px',
      boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.2)',
    },
  }
)
const SectionCantAfford = glamorous(Section)(section, layoutRight, {
  '& .right': {
    '& img': {
      opacity: '1',
      maxWidth: '940px',
      width: '140%',
      borderRadius: '5px',
      boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.2)',
    },
  },
})

const SectionContactUs = glamorous(Section)(
  section,
  layoutDark,
  angle('right'),
  {
    ':after': {
      display: 'none',
    },
    background: Theme.colors.primaryDarker,
    '& .inner': {
      display: 'block',
      textAlign: 'center',
    },
  }
)

const rankDataImages = [
  '/static/img/rank.png',
  '/static/img/adrank.png',
  '/static/img/pixelheight.png',
]

export default class Index extends Component {
  constructor () {
    super()
    this.state = {
      rankDataImageIndex: 0,
      rankDataImage: rankDataImages[0],
    }
  }
  componentDidMount () {
    this.rankDataImageInterval = window.setInterval(
      () =>
        this.setState(state => ({
          rankDataImageIndex: state.rankDataImageIndex + 1,
          rankDataImage: rankDataImages[(state.rankDataImageIndex + 1) % 3],
        })),
      2000
    )
  }
  componentWillUnmount () {
    window.clearInterval(this.rankDataImageInterval)
  }
  render () {
    const { rankDataImage } = this.state
    return (
      <Content>
        <Head>
          <title>Nozzle - Enterprise SEO Keyword Rank Tracker</title>
        </Head>
        <SectionKnowEverything>
          <NodeGarden
            color={Color('white').setAlpha(0.1).toString()}
            style={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              zIndex: -1,
            }}
          />
          <Left>
            <H2>Know everything Google knows</H2>
            <H4>And deal with it.</H4>
            <P>
              If you want access to more enterprise level SERP data than any
              tool has ever offered, you've come to the right place
            </P>
            <Link to='#contact'>
              <Button color='success' burst>
                I'd like a demo!
              </Button>
            </Link>
          </Left>
          <Right>
            <Img src='/static/img/dashboard.png' />
          </Right>
        </SectionKnowEverything>
        <SectionTrackAllTheThings>
          <Img
            className='allthethings'
            src='/static/img/allthethings-white.png'
          />
          <Left>
            <Centered>
              <H4>Don't just track the top result.</H4>
            </Centered>
            <Div>
              <Img src='/static/img/cnn-small.png' />
            </Div>
            <Div>
              <Centered>
                <H4>Get unlimited access to the entire SERP</H4>
              </Centered>
            </Div>
            <Img src='/static/img/cnn.png' />
          </Left>
          <Right>
            <H2>Track all the things!</H2>
            <P>
              Most tools just tell you the top ranking page on your domain. We
              monitor your entire brand, including social media profiles and
              unlimited domain matches. There's a difference between knowing
              you're ranking #1 and owning the entire first page!
            </P>
            <P>
              Unlimited access doesn't just refer to today's SERP. We keep all
              your data FOREVER, so 3 years from now, you'll be able to look
              back and see what was ranking for "Pokemon Go" in 2016. :)
            </P>
            <Link to='#contact'>
              <Button color='success' burst>
                Start tracking today!
              </Button>
            </Link>{' '}
            <Link to='/features'>
              <Button color='primary' burst>
                How does it work?
              </Button>
            </Link>
          </Right>
        </SectionTrackAllTheThings>
        <SectionRankData>
          <Left>
            <H2 color='primaryDark'>Rank data you can only find at Nozzle</H2>
            <H5 weight='regular'>
              Track results by{' '}
              <Strong>Rank, Ad Adjusted Rank, Pixel Height</Strong> and more!
            </H5>
            <P>
              With 4 ads and rank #0 answer boxes, ranking #1 doesn’t mean what
              it used to. Nozzle won’t just tell you where you rank, we’ll tell
              you your ad adjusted rank, how many pixels down the page you are,
              whether a knowledge graph appeared and even what your prospective
              customer ate for breakfast.
            </P>
            <P>
              We include <Strong>over 350+ data points</Strong> for{' '}
              <Strong>every result on the serp</Strong> - no extra cost!
            </P>
            <Ul>
              <Li>search volume</Li>
              <Li>estimated traffic</Li>
              <Li>social shares</Li>
              <Li>Moz PA / DA</Li>
              <Li>inbound links</Li>
              <Li>product ad pricing</Li>
              <Li>sitelinks</Li>
              <Li>star ratings</Li>
              <Li>but wait, there's more...</Li>
            </Ul>
            <p />
            <Link to='/features/#data'>
              <Button burst>See the complete list</Button>
            </Link>{' '}
            <Link to='#contact'>
              <Button color='success' burst>
                Get the datas!
              </Button>
            </Link>
          </Left>
          <Right>
            <Img src={rankDataImage} />
            {rankDataImages.map(img =>
              <Img key={img} src={img} style={{ display: 'none' }} />
            )}
          </Right>
        </SectionRankData>
        <SectionCompetitors>
          <Left>
            <Img src='/static/img/groupBy.png' />
          </Left>
          <Right>
            <H3>
              Squash your competitors... even the ones you don't know about yet
            </H3>
            <H5 weight='regular'>
              See share of voice by{' '}
              <Strong color='primaryLighter'>
                Domain, Subdomain, URL, and Brand
              </Strong>
            </H5>
            <P>
              Nozzle lets you track <Strong>unlimited competitors</Strong>, no
              questions asked. Heck, we'll let you track as much as you can
              handle. The SERP is yours to command!
            </P>
            <P>
              If you find a new competitor you haven't been tracking, add them
              and we'll even rewrite history for you. It'll be like you were
              monitoring them from the start!
            </P>
            <Link to='#contact'>
              <Button color='success' burst>
                Show me my competitors!
              </Button>
            </Link>{' '}
            <Link to='/features/#competition'>
              <Button color='primary' burst>
                How does it work?
              </Button>
            </Link>
          </Right>
        </SectionCompetitors>
        <SectionDataJunkie>
          <div className='csv'>
            <Img src='/static/img/csv.png' />
          </div>
          <div className='main'>
            <H3>A Data Junkie's Paradise</H3>
            <H5>CSV, SQL, API and BigQuery</H5>
            <P>
              Whether your thing is pivot tables or SQL JOIN's, you can access
              your data the way you're used to. Even better, we keep all your
              data forever, including the raw html. Consider it necessary
              tooling when dealing with millions of keywords. )
            </P>
            <Link to='#contact'>
              <Button color='success' burst>
                Fix me up with 1,000 keywords!
              </Button>
            </Link>{' '}
            <Link to='/features/#integration'>
              <Button color='primary' burst>
                Show all integrations
              </Button>
            </Link>
          </div>
          <div className='sql'>
            <Img src='/static/img/sql.png' />
          </div>
        </SectionDataJunkie>
        <SectionSchedules>
          <H2 full>
            Get rankings on <em>your</em> schedule
          </H2>
          <P>
            Not all keywords are created equal. You're probably paying too much
            to track your long-tail keywords daily or you're only getting weekly
            data for your money making head terms. Say goodbye to those tools
            and say hello to your new best friend. Track your most important
            keywords daily, hourly or even every 5 minutes. Keep an eye on
            thousands more by scheduling them weekly or monthly without breaking
            the bank.
          </P>
          <Div>
            <Img src='/static/img/schedules.png' />
          </Div>
          <Centered>
            <Link to='#contact'>
              <Button color='success' burst>
                Give me flexibility, stat!
              </Button>
            </Link>{' '}
            <Link to='/features/#scheduling'>
              <Button color='primary' burst>
                Why does it matter?
              </Button>
            </Link>
          </Centered>
        </SectionSchedules>
        <SectionCantAfford>
          <Left>
            <H2>You can't afford to not try Nozzle</H2>
            <H5>
              No minimum spend, no qualification calls, white-glove onboarding,
              batteries included
            </H5>
            <P>
              After a free trial, getting started can cost you less per month
              than your secret santa gift this year. Seriously.
            </P>
            <Link to='/pricing'>
              <Button burst>See Our Plans & Pricing</Button>
            </Link>{' '}
            <Link to='#contact'>
              <Button color='success' burst>
                Try it out!
              </Button>
            </Link>
          </Left>
        </SectionCantAfford>
        <SectionContactUs id='contact'>
          <H2 full>Let's start your free trial!</H2>
          <TrialForm />
          <H6 full>or</H6>
          <Link to={'tel:1855NOZZLE1'}>
            <Button color='primaryDark' burst>
              Call 1-855-NOZZLE1
            </Button>
          </Link>
        </SectionContactUs>
      </Content>
    )
  }
}
