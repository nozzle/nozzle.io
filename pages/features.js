import React, { Component } from 'react'
import glamorous from 'glamorous'
import { keyframes } from 'glamor'
//
import Theme from './utils/Theme'
// import { angle } from './utils/Styles'
import Color from './utils/Color'
import { angle } from './utils/Styles'

import Head from './components/Head'
import Content from './components/Content'
import Link from './components/Link'
import Icon from './components/Icon'
import TrialForm from './components/TrialForm'
import {
  Button,
  H2,
  H4,
  H5,
  H6,
  P,
  Strong,
  Span,
  Ul,
  Li,
  Img,
} from './components/Html'
import { Container, Center } from './components/Layout'

const below900 = '@media screen and (max-width: 900px)'

const FeaturesNav = glamorous(props =>
  (<div {...props}>
    <div className='inner'>
      <ul data-gumshoe>
        <li>
          <Link to='#brands'>Brand Monitoring</Link>
        </li>
        <li>
          <Link to='#competition'>Competitive Analysis</Link>
        </li>
        <li>
          <Link to='#scheduling'>Scheduling</Link>
        </li>
        <li>
          <Link to='#data'>Data</Link>
        </li>
        <li>
          <Link to='#agencies'>Agency Tools</Link>
        </li>
        <li>
          <Link to='#reputation'>Reputation Management</Link>
        </li>
        <li>
          <Link to='#integrations'>Integrations</Link>
        </li>
      </ul>
    </div>
  </div>)
)({
  position: 'fixed',
  width: '100%',
  top: 55,
  left: '0',
  padding: '0',
  transition: 'all 0.3s ease',
  background: Color(Theme.colors.primaryDarkest).setAlpha(0.9).toString(),
  textAlign: 'center',
  zIndex: '999',
  overflow: 'hidden',
  '& .inner': {
    position: 'relative',
    height: '200%',
    overflow: 'hidden',
  },
  '& ul': {
    margin: 0,
    padding: 0,
    display: 'inline-block',
  },
  '& li': {
    display: 'inline-block',
    '& a': {
      color: '#fff',
      padding: '17px 10px',
      display: 'block',
      transition: 'all 0.2s ease',
      opacity: '1',
    },
  },
  '& + *': {
    paddingTop: '50px',
  },

  [below900]: {
    height: '50px',
    '&:after': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      background:
        'linear-gradient(to right, transparent, transparent 60%, rgba(0, 0, 0, 0.7))',
    },
    '& .inner': {
      height: '200%',
      overflow: 'scroll',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    '& ul': {
      whiteSpace: 'nowrap',
      marginRight: '200px',
    },
  },

  '@media screen and (min-width: 1300px)': {
    '& .subNav': {
      padding: '0 10%',
    },
  },
})

const section = {
  padding: '10% 20px',
}

const imageSwapAnimation = keyframes({
  '0%, 40%': {
    opacity: 0,
  },
  '60%, 100%': {
    opacity: 1,
  },
})

const SectionBrands = glamorous(props =>
  (<section {...props}>
    <Container>
      <H2 className='badge'>
        <Strong>
          <Span>Brand</Span>
          <div className='line1' />
          <div className='line2' />
          <div className='line3' />
          <div className='line4' />
        </Strong>
        <Span>Tracking &amp; Monitoring</Span>
      </H2>
      <div className='images'>
        <div className='domain-wrap'>
          <H4>Other Rank Trackers</H4>
          <div className='domain'>
            <div className='img'>
              <Img src='/static/img/domainEdit.png' />
              <Img src='/static/img/cnn-small.png' />
            </div>
          </div>
        </div>
        <div className='vs'>
          <Span>VS</Span>
        </div>
        <div className='brand-wrap'>
          <Img src='/static/img/logo-blue.png' />
          <div className='brand'>
            <div className='img'>
              <Img src='/static/img/brandEdit.png' />
              <Img src='/static/img/cnn.png' />
            </div>
          </div>
        </div>
      </div>
      <div className='one'>
        <H4>100% SERP Visibility</H4>
        <P>
          With other tools, you are tied to a single domain, but with Nozzle,{' '}
          <Strong>you can track as many SERP results as you want.</Strong> We
          make this easy by using Brands, Properties, and URLs instead of single
          domains. If that's not enough, we even let you build custom rules to
          get as specific as you want! These features allow Nozzle to perform
          powerful competitive analysis between other brands, individual
          properties, and even URLs.
        </P>
      </div>
      <div className='two'>
        <H4>Use Cases</H4>
        <Ul>
          <Li>
            Track{' '}
            <Strong>
              external blogs, PR releases, guest posts on external domains,
              Quora results
            </Strong>
          </Li>
          <Li>
            Track <Strong>using Custom Rules</Strong>
          </Li>
          <Li>Automatic &amp; Dynamic Competitive Views</Li>
        </Ul>
      </div>
      <Center>
        <Link to='#trial'>
          <Button color='success' burst>
            Start tracking today!
          </Button>
        </Link>
      </Center>
    </Container>
  </section>)
)(section, {
  '& .badge': {
    textAlign: 'center',
    whiteSpace: 'nowrap',
    '& > strong, & > span': {
      display: 'inline-block',
    },
    '& > strong': {
      position: 'relative',
      padding: '10px 13px 67px',
      margin: '0 10px',
      color: 'white',
      boxShadow: '0 5px 30px 0 alpha(black, .2)',
      background: Theme.colors.primaryDark,
      borderRadius: '5px',
      '& div': {
        position: 'absolute',
        height: '10px',
        left: 10,
        zIndex: '1',
        borderRadius: '3px',
        '&.line1': {
          top: '56px',
          width: '80%',
          background: Theme.colors.primaryLight,
        },
        '&.line2': {
          top: '69px',
          width: '40%',
          background: Theme.colors.success,
        },
        '&.line3': {
          top: '81px',
          width: '65%',
          background: Theme.colors.danger,
        },
        '&.line4': {
          top: '94px',
          width: '20%',
          background: Theme.colors.warning,
        },
      },
    },
  },
  '& .images': {
    paddingTop: '60px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '60px',
  },
  '& .domain-wrap, .brand-wrap': {
    zIndex: '1',
    flex: '1 1 100%',
    margin: '0px auto',
    width: '100%',
    maxWidth: '600px',
    display: 'block',
  },
  '& .domain-wrap .domain, .brand-wrap .domain, .domain-wrap .brand, .brand-wrap .brand, .domain-wrap .img, .brand-wrap .img': {
    position: 'relative',
  },
  '& .domain-wrap .img img, .brand-wrap .img img': {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.2)',
    borderRadius: '5px',
  },
  '& .domain-wrap .img img:last-child, .brand-wrap .img img:last-child': {
    animation: `${imageSwapAnimation} 4s linear infinite alternate`,
  },
  '& .domain-wrap h4': {
    color: 'rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
    marginBottom: '20px',
  },
  '& .domain:after': {
    content: '""',
    paddingTop: '18.69%',
    display: 'block',
  },
  '& .vs': {
    zIndex: '0',
    flex: '1 1 100%',
    margin: '50px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: 'bolder',
    color: '#fff',
    '& span': {
      position: 'relative',
      background: 'rgba(0, 0, 0, 0.6)',
      borderRadius: '10px',
      padding: '12px 10px 10px',
      ':after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: '50%',
        width: '200px',
        height: '2px',
        background: 'rgba(0, 0, 0, 0.2)',
        transform: 'translateY(-50%)',
        left: '100%',
      },
      ':before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: '50%',
        width: '200px',
        height: '2px',
        background: 'rgba(0, 0, 0, 0.2)',
        transform: 'translateY(-50%)',
        right: '100%',
      },
    },
  },
  '& .brand-wrap > img': {
    display: 'block',
    width: '200px',
    margin: '0 auto 20px',
  },
  '& .brand:after': {
    content: '""',
    paddingTop: '76.16%',
    display: 'block',
  },
  '& .one': {
    display: 'block',
    margin: '0 auto',
    width: '700px',
    maxWidth: '100%',
    textAlign: 'center',
    marginBottom: '2rem',
  },
  '& .two': {
    display: 'block',
    margin: '0 auto',
    width: '500px',
    maxWidth: '100%',
    textAlign: 'center',
    marginBottom: '2rem',
    '& h4': {
      marginBottom: '20px',
    },
  },
  '@media screen and (min-width: 900px)': {
    '& > h2': {
      marginBottom: '60px',
      '& strong': {
        display: 'inline-block',
        margin: '0 10px',
      },
      '& span': {
        display: 'inline-block',
      },
    },
    '& .images': {
      flexDirection: 'row',
      '& .domain-wrap, & .brand-wrap': {
        flex: '1 1 40%',
      },
      '& .vs': {
        flex: '1 1 10%',
        marginTop: '100px',
      },
    },
  },
})

const SectionCompetition = glamorous(props =>
  (<section {...props}>
    <Container>
      <H2>
        <Img src='/static/img/competitorWaves.png' />
        <div>Competitive Analysis</div>
      </H2>
      <div className='one'>
        <div className='left'>
          <Img src='/static/img/brands.png' />
        </div>
        <div className='right'>
          <H4>Unlimited competitors for free.</H4>
          <P>
            As opposed to tracking individual domains, tracking brands makes it
            easy to monitor their every move. You can do this by{' '}
            <Strong>brand, property or even URL</Strong> to get aggreggated or
            detailed comparisons as needed.
          </P>
        </div>
      </div>
      <div className='two'>
        <div className='left'>
          <Img src='/static/img/domains.png' />
        </div>
        <div className='right'>
          <H4>Share of Voice &amp; Rewriting History</H4>
          <P>
            Don't know who your competitors are? Just take a look at our
            share-of-voice dashboard to immediately detect unknown competitors
            by <Strong>Domain, Subdomain, and URL</Strong>. If you like what you
            see, add them as a named competitor and we will{' '}
            <Strong>rewrite all of your historical data</Strong> to include your
            newfound competition! It's like having a time machine!
          </P>
        </div>
      </div>
      <Center>
        <Link to='#trial'>
          <Button color='success' burst>
            Show My Competitors
          </Button>
        </Link>
      </Center>
    </Container>
  </section>)
)(section, angle('right'), {
  background: Theme.colors.primaryDarker,
  color: 'white',
  '& h2': {
    textAlign: 'center',
    margin: '0 0 50px',
    '& img': {
      width: '250px',
      marginBottom: '20px',
    },
  },
  '& strong': {
    color: Theme.colors.primaryLighter,
  },
  '& .one, & .two': {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '70px',
    textAlign: 'center',
  },
  '& .one > div, & .two > div': {
    flex: '1 1 100%',
    padding: '20px',
  },
  '& .one img, & .two img': {
    boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.3)',
    borderRadius: '5px',
  },
  '@media screen and (min-width: 900px)': {
    '& .one, & .two': {
      flexDirection: 'row',
      flex: '1 1',
    },
    '& .one > div, & .two > div': {
      flex: '0 0 50%',
    },
    '& .one .right': {
      textAlign: 'left',
    },
    '& .one .left': {
      textAlign: 'right',
    },
    '& .two': {
      textAlign: 'right',
      '& > .right': {
        order: '-1',
      },
    },
    '& .two .left': {
      textAlign: 'left',
    },
  },
})

const SectionScheduling = glamorous(props =>
  (<section {...props}>
    <Container>
      <Center>
        <Img src='/static/img/scheduleDots.png' />
        <H2>Flexible Scheduling</H2>
        <H6>
          Not all keywords are created equal. Thankfully, Nozzle is{' '}
          <Strong>
            the first and only trank tracker to offer flexible and real-time
            schedules
          </Strong>. Instead of forcing you to pay the same price to track your
          long-tail keywords as your head terms, Nozzle let's you split your
          keywords into as many different scheduling buckets you want.{' '}
        </H6>
        <Img src='/static/img/schedules.png' className='scheduleImg' />
        <P>
          This way, you can{' '}
          <Strong>closely monitor your most important keywords</Strong> daily,
          hourly or even every 5 minutes, but still{' '}
          <Strong>keep an eye on thousands more</Strong> by scheduling them
          weekly or monthly without breaking the bank.
        </P>
        <Link to='#trial'>
          <Button color='success' burst>
            Try Flexible Scheduling
          </Button>
        </Link>
      </Center>
    </Container>
  </section>)
)(section, {
  '& img': {
    display: 'block',
    margin: '0 auto 20px',
    width: '250px',
  },
  '& h2': {
    textAlign: 'center',
    margin: '0 0 3rem',
  },
  '& h6': {
    width: '800px',
    maxWidth: '100%',
  },
  '& .scheduleImg': {
    width: '750px',
  },
  '& p': {
    width: '600px',
    maxWidth: '100%',
  },
})

const SectionData = glamorous(props =>
  (<section {...props}>
    <Container>
      <div className='-header'>
        <H2 className='-one'>Serp</H2>
        <Img src='/static/img/serp.png' />
        <H2 className='-two'>Data</H2>
      </div>
      <Center>
        <H6 className='description'>
          Out of the box, Nozzle can show you data you've probably only imagined
          in your wildest dreams.{' '}
          <Strong>Ad-adjusted rank, pixel height,</Strong> and even{' '}
          <Strong> click-to-call phone numbers</Strong> are just a few examples
          of the immense detail we give you on the SERP. Honestly, we can't wait
          to see what you can do with it!
        </H6>
      </Center>
      <div className='boxes'>
        <div className='box -metrics'>
          <H4>
            <Icon i='gauge' /> Metrics
          </H4>
          <div className='-image'>
            <Img src='/static/img/metrics.png' />
          </div>
          <div className='content'>
            <ul>
              <li>Estimated Traffic</li>
              <li>PPC Value</li>
              <li>Search Volume</li>
            </ul>
            <P>
              Advanced metrics that go above and beyond to help identify and{' '}
              <Strong>assign dollar amounts and revenue to your SEO</Strong>
            </P>
          </div>
        </div>
        <div className='box -data'>
          <H4>
            <Icon i='trophy' /> Rank
          </H4>
          <div className='-image'>
            <Img src='/static/img/rank-wide.png' />
          </div>
          <div className='content'>
            <ul>
              <li>Pixels from Top</li>
              <li>Ad-adjusted Rank</li>
              <li>Blended Rank</li>
            </ul>
            <P>
              Blended Rank is expected from any rank tracker, but at Nozzle we
              don't think that's enough. <Strong>Ad-adjusted Rank</Strong> and{' '}
              <Strong>Pixels from Top of page</Strong> are new and powerful
              metrics unique to Nozzle, and will surely put your rank tracking
              above your competitors.
            </P>
          </div>
        </div>
        <div className='box -keywordGroups'>
          <H4>
            <Icon i='bullseye' /> Keyword Groups
          </H4>
          <div className='-image'>
            <Img src='/static/img/keywordGroups.png' />
          </div>
          <div className='content'>
            <ul>
              <li>Group-level Scheduling</li>
              <li>Pay Once, Use Anywhere</li>
              <li>Bulk-Keyword Management</li>
            </ul>
            <div>
              <P>
                Nozzle takes keyword groups to a whole new level with{' '}
                <Strong>
                  group-driven performance dashboards, drill-through, and
                  comparison
                </Strong>. If that wasn't cool enough, you can place keywords in{' '}
                <Strong>as many groups as you want</Strong>, and only pay{' '}
                <Strong>once</Strong>
              </P>
            </div>
          </div>
        </div>
        <div className='box -globalLocal'>
          <H4>
            <Icon i='marker' /> Global &amp; Local
          </H4>
          <div className='-image'>
            <Img src='/static/img/location.png' />
          </div>
          <div className='content'>
            <ul>
              <li>Any Engine</li>
              <li>Any Country</li>
              <li>Any Location</li>
            </ul>
            <P>
              To <Strong>understand your audience</Strong>, you need to search
              like your audience. Want the results from a Bing search at that
              famous coffee shop in downtown London? We've got them.
            </P>
          </div>
        </div>
        <div className='box -mozSocial'>
          <H4>
            <Icon i='mobile' /> Devices &amp; OS
          </H4>
          <div className='-image'>
            <Img src='/static/img/devices.png' />
          </div>
          <div className='content'>
            <ul>
              <li>Desktop, Tablet, Mobile</li>
              <li>Windows, MacOS, iOS, Android</li>
              <li>App Store, Play Store</li>
            </ul>
            <P>
              Track your rankings at the deepest level of user engagement with
              Nozzle's powerful <Strong>device, OS, and platform</Strong>{' '}
              options. Uncover untapped marketing opportunities and beat the
              competition from every angle.
            </P>
          </div>
        </div>
        <div className='box -ads'>
          <H4>
            <Icon i='dollar' /> Ads
          </H4>
          <div className='-image'>
            <Img src='/static/img/abs.png' />
          </div>
          <div className='content'>
            <ul>
              <li>AdWords</li>
              <li>Ad Extensions</li>
              <li>Product Listing Ads (PLA)</li>
            </ul>
            <P>
              Get up close and personal with paid results and{' '}
              <Strong>discover how they affect</Strong> your results day to day.
            </P>
          </div>
        </div>
      </div>
      <Center>
        <Link to='#trial'>
          <Button color='success' burst>
            Get the Datas!
          </Button>
        </Link>
      </Center>
    </Container>
  </section>)
)(section, angle('right'), {
  background: Theme.colors.primaryDarker,
  color: 'white',
  '& .-header': {
    '& h2, img': {
      margin: '0 auto',
      display: 'block',
      textAlign: 'center',
    },
    '& h2': {
      '.-one': {
        fontSize: '120px',
        fontWeight: 'bolder',
        textTransform: 'uppercase',
        lineHeight: '90px',
        marginBottom: '5px',
      },
      '.-two': {
        marginBottom: '30px',
      },
    },
    '& img': {
      width: '230px',
    },
  },
  '& .description': {
    margin: '0 auto 40px',
    maxWidth: '700px',
  },
  '& .boxes': {
    display: 'flex',
    flexWrap: 'wrap',
  },
  '& .box': {
    flex: '1 1 100%',
    marginBottom: '20px',
    background: '#fff',
    color: 'initial',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '& h4': {
      margin: '10px 0 0',
      padding: '10px',
      fontWeight: 'bold',
      color: 'rgba(0, 0, 0, 0.7)',
      textAlign: 'center',
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
      '& i': {
        marginRight: '10px',
        ':before': {
          transform: 'scale(1.3)',
          display: 'inline-block',
        },
      },
    },
    '.-metrics': {
      '& i': {
        color: Theme.colors.success,
      },
      '& li:before': {
        backgroundColor: Theme.colors.success,
      },
    },
    '.-data': {
      '& i': {
        color: '#ff4a4a',
      },
      '& li:before': {
        backgroundColor: '#ff4a4a',
      },
    },
    '.-keywordGroups': {
      '& i': {
        color: Theme.colors.primaryLight,
      },
      '& li:before': {
        backgroundColor: Theme.colors.primaryLight,
      },
    },
    '.-globalLocal': {
      '& i': {
        color: '#f76f00',
      },
      '& li:before': {
        backgroundColor: '#f76f00',
      },
    },
    '.-mozSocial': {
      '& i': {
        color: '#c300a4',
      },
      '& li:before': {
        backgroundColor: '#c300a4',
      },
    },
    '.-ads': {
      '& i': {
        color: Theme.colors.vendors.bing,
      },
      '& li:before': {
        backgroundColor: Theme.colors.vendors.bing,
      },
    },
    '& .-image': {
      position: 'relative',
      width: '100%',
      ':before': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        zIndex: '1',
        boxShadow:
          'inset 0 40px 40px -40px rgba(0, 0, 0, 0.3), inset 0 -40px 40px -40px rgba(0, 0, 0, 0.3)',
      },
      '& img': {
        display: 'block',
        margin: '0 auto',
        zIndex: '0',
      },
    },
    '& .content': {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      justifyContent: 'stretch',
      padding: '20px 10px',
      '& > *': {
        flex: '1 1 50%',
      },
    },
    '& p': {
      margin: 0,
      padding: '10px 10px 0 0',
    },
    '& ul': {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: Theme.colors.text,
    },
    '& li': {
      padding: '10px 10px 10px 30px',
      position: 'relative',
      ':before': {
        content: '""',
        position: 'absolute',
        width: '12px',
        height: '12px',
        left: '10px',
        top: '50%',
        borderRadius: '50px',
        transform: 'translateY(-50%)',
      },
    },
  },
  '@media screen and (max-width: 400px)': {
    '& .box .content > *': {
      flex: '1 1 100%',
    },
  },

  '@media screen and (min-width: 700px)': {
    '& .box': {
      flex: '1 1 48%',
      margin: '0 1% 20px',
    },
  },

  '@media screen and (min-width: 1200px)': {
    '& .box': {
      flex: '1 1 31%',
      margin: '0 1% 20px',
    },
  },
})

const SectionAgencies = glamorous(props =>
  (<section {...props}>
    <Container>
      <Img src='/static/img/agency.png' />
      <H2>Agency Tools</H2>
      <div className='wrap'>
        <div className='one'>
          <Img src='/static/img/teams.png' />
        </div>
        <div className='two'>
          <H4>Manage your agency like a boss.</H4>
          <Ul className='list'>
            <Li>Segment Teams &amp; Clients</Li>
            <Li>Aggregated views and bulk keyword management</Li>
            <Li>User and Team permissions</Li>
          </Ul>
          <br />
          <br />
          <Link to='#trial'>
            <Button color='success' burst>
              Try it out!
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  </section>)
)(section, {
  '& img': {
    display: 'block',
    margin: '0 auto 20px',
    width: '200px',
  },
  '& h2': {
    textAlign: 'center',
    margin: '0 0 70px',
  },
  '& .wrap': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '& .one': {
    margin: '0 0 70px',
    textAlign: 'center',
    '& img': {
      width: '400px',
      boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.3)',
      borderRadius: '7px',
    },
  },
  '& .two': {
    fontSize: '1.2em',
    textAlign: 'center',
    '& h4': {
      margin: '0 0 20px',
    },
    '& ul': {
      display: 'inline-block',
      textAlign: 'left',
    },
  },
  '@media screen and (min-width: 900px)': {
    '& .wrap': {
      flexDirection: 'row',
      '& .one, & .two': {
        flex: '1 1 50%',
      },
      '& .one': {
        margin: '0',
      },
      '& .two': {
        padding: '20px',
        textAlign: 'left',
      },
    },
  },
})

const SectionReputation = glamorous(props =>
  (<section {...props}>
    <Container>
      <Img src='/static/img/reputation.png' />
      <H2>Reputation Management</H2>
      <div className='wrap'>
        <div className='one'>
          <H4>Keep the "you know what" from hitting the fan.</H4>
          <P>
            <Ul>
              <Li>Track and discover both positive and negative domains</Li>
              <Li>Get notified when they enter or exit any page or position</Li>
              <Li>Preventative - Catch negative sites before they rank high</Li>
            </Ul>
          </P>
          <Link to='#trial'>
            <Button color='success' burst>
              Show My Trends
            </Button>
          </Link>
        </div>
        <div className='two'>
          <Img src='/static/img/reputationChange.png' />
        </div>
      </div>
    </Container>
  </section>)
)(section, angle('right'), {
  background: Theme.colors.primaryDarker,
  color: 'white',
  '& img': {
    display: 'block',
    margin: '0 auto 20px',
    width: '350px',
  },
  '& h2': {
    textAlign: 'center',
    margin: '0 0 70px',
  },
  '& .wrap': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '& .one': {
    textAlign: 'center',
    margin: '0 0 70px',
    '& h4': {
      margin: '0 0 30px',
    },
    '& ul': {
      display: 'inline-block',
      // textAlign: 'left',
    },
  },
  '& .two': {
    textAlign: 'center',
    '& img': {
      width: '400px',
      boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.3)',
      borderRadius: '7px',
    },
  },
  '@media screen and (min-width: 900px)': {
    '& .wrap': {
      flexDirection: 'row',
      '& .one, & .two': {
        flex: '1 1 50%',
      },
      '& .one': {
        padding: '20px',
        textAlign: 'right',
      },
      '& .two': {
        margin: '0',
      },
    },
  },
})

const SectionIntegrations = glamorous(props =>
  (<section {...props}>
    <Container>
      <Img src='/static/img/integrations.png' />
      <H2>Integrations &amp; Export</H2>
      <P>
        We've made sure that all of the data you pay for is truly yours to
        command. Every data point is ultra-portable and accessible through a
        variety of providers and exportable data types.
      </P>
      <div className='-boxes'>
        <div className='-box'>
          <H5>Business Intelligence</H5>
          <ul>
            <li>
              <Link to='http://www.tableau.com/' target='_blank'>
                Tableau
              </Link>
            </li>
            <li>
              <Link
                to='https://www.google.com/analytics/data-studio/'
                target='_blank'
              >
                Google Data Studio
              </Link>
            </li>
            <li>
              <Link to='https://www.domo.com/' target='_blank'>
                Domo
              </Link>
            </li>
          </ul>
        </div>
        <div className='-box'>
          <H5>Marketing</H5>
          <ul>
            <li>
              <Link to='http://datarama.com/' target='_blank'>
                Datarama
              </Link>
            </li>
            <li>
              <Link to='https://reportgarden.com/' target='_blank'>
                Report Garden
              </Link>
            </li>
          </ul>
        </div>
        <div className='-box'>
          <H5>Data</H5>
          <ul>
            <li>API</li>
            <li>Big Query / MySQL</li>
            <li>CSV</li>
          </ul>
        </div>
      </div>
      <Center>
        <Link to='#trial'>
          <Button color='success' burst>
            Try it out!
          </Button>
        </Link>
      </Center>
    </Container>
  </section>)
)(section, angle('right'), {
  '& img': {
    display: 'block',
    margin: '0 auto 20px',
    width: '150px',
  },
  '& h2': {
    textAlign: 'center',
    margin: '0 0 30px',
  },
  '& p': {
    display: 'block',
    margin: '0 auto 40px',
    fontSize: '1.2em',
    width: '800px',
    maxWidth: '100%',
  },
  '& .-boxes': {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontSize: '1.2em',
  },
  '& .-box': {
    flex: '1 1 100%',
    background: '#fff',
    boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2)',
    margin: '0 0 20px',
    padding: '20px',
    textAlign: 'center',
    '& h5': {
      color: Theme.colors.primaryDarker,
      margin: '0 0 20px',
      borderBottom: '3px solid rgba(0, 0, 0, 0.1)',
      paddingBottom: '10px',
    },
    '& ul': {
      display: 'inline-block',
    },
    '& li': {
      marginBottom: '10px',
      fontWeight: '600',
    },
    '& a': {
      color: Theme.colors.primaryLight,
    },
  },
  '@media screen and (min-width: 600px)': {
    '& .-box': {
      flex: '1 1 300px',
      margin: '0 1% 20px',
    },
  },
})

const SectionContactUs = glamorous(props =>
  (<section {...props}>
    <Container>
      <H2 full>Let's start your free trial!</H2>
      <TrialForm />
      <H6 full>or</H6>
      <Link to={'tel:1855NOZZLE1'}>
        <Button color='primaryDark' burst>
          Call 1-855-NOZZLE1
        </Button>
      </Link>
    </Container>
  </section>)
)(section, angle('right'), {
  background: Theme.colors.primaryDarker,
  color: 'white',
  ':after': {
    display: 'none',
  },
  display: 'block',
  textAlign: 'center',
})

export default class Features extends Component {
  render () {
    return (
      <Content>
        <Head>
          <title>Nozzle Features</title>
        </Head>
        <FeaturesNav />
        <SectionBrands id='brands' />
        <SectionCompetition id='competition' />
        <SectionScheduling id='scheduling' />
        <SectionData id='data' />
        <SectionAgencies id='agencies' />
        <SectionReputation id='reputation' />
        <SectionIntegrations id='integrations' />
        <SectionContactUs id='trial' />
      </Content>
    )
  }
}
