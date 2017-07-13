import React, { Component } from 'react'
import glamorous from 'glamorous'
//
import Theme from './utils/Theme'
import Color from './utils/Color'

import Head from './components/Head'
import Content from './components/Content'
import Button from './components/Button'
import Link from './components/Link'
import NodeGarden from './components/NodeGarden'
import { H2, H3, H4, H5, P, Img, Div } from './components/Html'

const belowMobile = `@media(max-width: ${700}px)`
const belowTablet = `@media(max-width: ${1000}px)`

const Left = props => <div className='left' {...props} />
const Right = props => <div className='right' {...props} />

const section = {
  zIndex: 0,
  padding: '10% 10%',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  [belowMobile]: {
    '& .left, & .right': {
      flex: '1 1 100%',
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

// const layoutCenter = {
//   textAlign: 'center',
// }

const angle = {
  position: 'relative',
  zIndex: 1,

  '&:before, &:after': {
    background: 'inherit',
    content: '""',
    display: 'block',
    height: '50%',
    left: 0,
    position: 'absolute',
    right: 0,
    zIndex: -1,
  },
}

// const angleLeft = {
//   ...angle,
//   ':before': {
//     top: 0,
//     transform: 'skewY(-2deg)',
//     transformOrigin: '0 0',
//   },
//
//   ':after': {
//     bottom: 0,
//     transform: 'skewY(2deg)',
//     transformOrigin: '0 100%',
//   },
// }

const angleRight = {
  ...angle,
  ':before': {
    top: 0,
    transform: 'skewY(2deg)',
    transformOrigin: '100% 0',
  },

  ':after': {
    bottom: 0,
    transform: 'skewY(-2deg)',
    transformOrigin: '100%',
  },
}

const layoutDark = {
  background: Theme.colors.primaryDarker,
  color: '#fff',
}

const Centered = glamorous.div({ textAlign: 'center' })

const SectionKnowEverything = glamorous.section(section, layoutLeft, {
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
const SectionTrackAllTheThings = glamorous.section(
  section,
  layoutDark,
  layoutRight,
  angleRight,
  {
    position: 'relative',
    '& img': {
      opacity: '1',
      borderRadius: '5px',
      boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.2)',
    },
    '& .allthethings': {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: '400px',
      opacity: '0.3',
      zIndex: -1,
    },
  }
)
const SectionRankData = glamorous.section(section, layoutLeft, {
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
const SectionCompetitors = glamorous.section(
  section,
  layoutLeft,
  layoutDark,
  angleRight,
  {
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
  }
)
const SectionDataJunkie = glamorous.section(section, layoutRight, {
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
const SectionSchedules = glamorous.section(
  section,
  layoutLeft,
  layoutDark,
  angleRight,
  {
    textAlign: 'center',
    '& img': {
      width: '900px',
      maxWidth: '100%',
      borderRadius: '5px',
      boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.2)',
    },
  }
)
const SectionCantAfford = glamorous.section(section, layoutRight, {
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

const SectionContactUs = glamorous.section(section, layoutDark, {
  background: Theme.colors.primary,
  '& .left': {
    '& img': {
      maxWidth: '140%',
      width: '140%',
      borderRadius: '5px',
      boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.2)',
    },
  },
  '& .hbspt-form': {
    '& a, & .action input': {
      color: '#fff',
    },
  },
  '& .phone': {
    '& a': {
      color: '#fff',
    },
  },
})

// '@media screen and (max-width: 600px)': {
//     '& .section-1': {
//       padding: '70px 0',
//       '& .right img': {
//         maxWidth: '115%',
//       },
//     },
//     '& .section-1, & .section-2, & .section-3, & .section-4, & .section-5, & .section-6, & .section-7': {
//       padding: '70px 0',
//     },
//     '& .section-8': {
//       padding: '70px 0',
//       '& .-pad': {
//       },
//     },
//     '& .contact-us': {
//       padding: '50px 20px',
//     },
//   },
//
//   '@media screen and (max-width: 1000px)': {
//     '& .section-1 .left': {
//     },
//     '& .section-5': {
//       '& .csv, & .sql, & .main': {
//         flex: '1 1 100%',
//       },
//     },
//   },
//
//   '@media screen and (max-width: 1100px)': {
//     '& .section-8 .testimonial': {
//       flex: '1 1 100%',
//     },
//   },
// }
// )

export default class Index extends Component {
  componentDidMount () {
    // scrollr requires window
    var formChecker = setInterval(function () {
      if (window.hbspt) {
        window.hbspt.forms.create({
          target: '.hbspt-form',
          css: '',
          portalId: '2030303',
          formId: '741e3900-e931-47e0-b355-a190fbb6b301',
          onFormSubmit: function ($form) {
            window.dataLayer.push({ event: 'trialSubmit' })
            setTimeout(function () {
              window.location.pathname = '/l/onboarding/'
            }, 2000)
          },
        })
        clearInterval(formChecker)
      }
    }, 100)
  }
  render () {
    return (
      <Content>
        <Head>
          <title>Welcome!</title>
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
              <Button color='success'>I'd like a demo!</Button>
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
            <p>
              Most tools just tell you the top ranking page on your domain. We
              monitor your entire brand, including social media profiles and
              unlimited domain matches. There's a difference between knowing
              you're ranking #1 and owning the entire first page!
            </p>
            <p>
              Unlimited access doesn't just refer to today's SERP. We keep all
              your data FOREVER, so 3 years from now, you'll be able to look
              back and see what was ranking for "Pokemon Go" in 2016. :)
            </p>
            <Link to='#contact'>
              <Button color='success'>Start tracking today!</Button>
            </Link>{' '}
            <Link to='/features/#brands'>
              <Button color='primary-dark'>How does it work?</Button>
            </Link>
          </Right>
        </SectionTrackAllTheThings>
        <SectionRankData>
          <Left>
            <H2>Rank data you can only find at Nozzle</H2>
            <H5>
              <span>Track results by</span> <span className='metric'>Rank</span>
            </H5>
            <p>
              With 4 ads and rank #0 answer boxes, ranking #1 doesn’t mean what
              it used to. Nozzle won’t just tell you where you rank, we’ll tell
              you your ad adjusted rank, how many pixels down the page you are,
              whether a knowledge graph appeared and even what your prospective
              customer ate for breakfast.
            </p>

            <p>
              We include all this data for <strong>every result</strong> - no
              extra cost!
            </p>
            <ul>
              <li>search volume</li>
              <li>estimated traffic</li>
              <li>social shares</li>
              <li>Moz PA / DA</li>
              <li>inbound links</li>
              <li>product ad pricing</li>
              <li>sitelinks</li>
              <li>star ratings</li>
              <li>but wait, there's more...</li>
            </ul>
            <p />
            <Link to='/features/#data'>
              <Button>See the complete list</Button>
            </Link>
            <Link to='#contact'>
              <Button color='success'>Get the datas!</Button>
            </Link>
          </Left>
          <Right>
            <Img src='/static/img/adrank.png' />
          </Right>
          <Img className='hidden' src='/static/img/rank.png' />
          <Img className='hidden' src='/static/img/adrank.png' />
          <Img className='hidden' src='/static/img/pixelheight.png' />
        </SectionRankData>
        <SectionCompetitors>
          <Left>
            <Img src='/static/img/groupBy.png' />
          </Left>
          <Right>
            <H3>
              Squash your competitors... even the ones you don't know about yet
            </H3>
            <H5>
              <span className='topGroupByPrefix'>
                See share of voice by
              </span>{' '}
              <span className='topGroupBy'>Domain</span>
            </H5>
            <p>
              Nozzle lets you track <strong>unlimited competitors</strong>, no
              questions asked. Heck, we'll let you track as much as you can
              handle. The SERP is yours to command!
            </p>
            <p>
              If you find a new competitor you haven't been tracking, add them
              and we'll even rewrite history for you. It'll be like you were
              monitoring them from the start!
            </p>
            <Link to='#contact'>
              <Button color='success'>Show me my competitors!</Button>
            </Link>
            <Link to='/features/#competition'>
              <Button color='primary'>How does it work?</Button>
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
            <p>
              Whether your thing is pivot tables or SQL JOIN's, you can access
              your data the way you're used to. Even better, we keep all your
              data forever, including the raw html. Consider it necessary
              tooling when dealing with millions of keywords. )
            </p>
            <Link to='#contact'>
              <Button color='success'>Fix me up with 1,000 keywords!</Button>
            </Link>{' '}
            <Link to='/features/#integration'>
              <Button color='primary'>Show all integrations</Button>
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
          <p>
            Not all keywords are created equal. You're probably paying too much
            to track your long-tail keywords daily or you're only getting weekly
            data for your money making head terms. Say goodbye to those tools
            and say hello to your new best friend. Track your most important
            keywords daily, hourly or even every 5 minutes. Keep an eye on
            thousands more by scheduling them weekly or monthly without breaking
            the bank.
          </p>
          <Div>
            <Img src='/static/img/schedules.png' />
          </Div>
          <Link to='#contact'>
            <Button color='success'>Give me flexibility, stat!</Button>
          </Link>{' '}
          <Link to='/features/#scheduling'>
            <Button color='primary'>Why does it matter?</Button>
          </Link>
        </SectionSchedules>
        <SectionCantAfford>
          <Left>
            <H2>You can't afford to not try Nozzle</H2>
            <H5>
              No minimum spend, no qualification calls, white-glove onboarding,
              batteries included
            </H5>
            <p>
              After a free trial, getting started can cost you less per month
              than your secret santa gift this year. Seriously.
            </p>
            <Link to='/pricing'>
              <Button>See Our Plans</Button>
            </Link>{' '}
            <Link to='#contact'>
              <Button color='success'>Try it out!</Button>
            </Link>
          </Left>
        </SectionCantAfford>
        <SectionContactUs className='contact-us' id='contact'>
          <H2 className='text-center'>Let's start your free trial!</H2>
          <div className='hbspt-form' />
          <div className='phone'>
            <H5>or</H5>
            <br />
            <a href='tel:1855NOZZLE1' className='btn btn-primary-dark'>
              <H3>Call 1-855-NOZZLE1</H3>
            </a>
          </div>
        </SectionContactUs>
      </Content>
    )
  }
}
