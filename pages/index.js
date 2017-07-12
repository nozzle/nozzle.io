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
import { H2, H3, H4, H5, P } from './components/Html'

const Styled = glamorous.div({
  '& .section-1': {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    overflow: 'hidden',
    padding: '100px 0',
    position: 'relative',
    background: `radial-gradient(circle at center, ${Theme.colors
      .primaryDarker} 20%, ${Color(Theme.colors.primaryDarker)
      .darken(10)
      .toString()})`,
    color: 'white',
    '& .left': {
      flex: '1 1 400px',
      textAlign: 'right',
      padding: '0 20px',
      marginBottom: '40px',
      zIndex: 1,
      '& h4': {
        color: Theme.colors.primaryLight,
      },
      '& p': {
        marginBottom: '20px',
      },
    },
    '& .right': {
      flex: '1 1 600px',
      padding: '0 20px',
      zIndex: 1,
      '& img': {
        opacity: '1',
        maxWidth: '940px',
        width: '140%',
        borderRadius: '5px',
        boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.2)',
      },
    },
  },
  '& .section-2': {
    overflow: 'hidden',
    background: Theme.colors.primary,
    color: '#fff',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: '100px 10%',
    '& .left': {
      flex: '1 1 400px',
      padding: '0 20px',
      marginBottom: '40px',
      zIndex: '1',
      '& h4': {
        textAlign: 'center',
      },
      '& img': {
        opacity: '1',
        borderRadius: '5px',
        boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.2)',
        marginBottom: '20px',
      },
    },
    '& .right': {
      flex: '1 1 400px',
      padding: '0 20px',
      zIndex: '1',
      '& h2': {
        margin: '20px 0',
      },
      '& p': {
        marginBottom: '20px',
      },
    },
    '& .allthethings': {
      position: 'absolute',
      right: '0',
      bottom: '0',
      width: '400px',
      opacity: '0.3',
      zIndex: '0',
    },
  },
  '& .section-3': {
    overflow: 'hidden',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: '100px 10%',
    '& .right': {
      flex: '1 1 300px',
      padding: '0 20px',
      marginBottom: '30px',
      '& img': {
        opacity: '1',
        maxWidth: '940px',
        width: '140%',
        borderRadius: '5px',
        boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.2)',
      },
    },
    '& .left': {
      flex: '1 1 300px',
      padding: '0 20px',
      marginBottom: '40px',
      '& p': {
        marginBottom: '20px',
        strong: {
          color: Theme.colors.primaryLighter,
        },
      },
      '& h2': {
        margin: '20px 0',
      },
      '& h5': {
        height: '2em',
      },
      '& .metric': {
        display: 'inline-block',
      },
      '& ul': {
        listStyleType: 'disc',
        marginTop: '-10px',
        '& li': {
          marginLeft: '30px',
        },
      },
    },
  },
  '& .section-4': {
    overflow: 'hidden',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: '100px 10%',
    background: Theme.colors.primaryDark,
    color: '#fff',
    '& .left': {
      flex: '1 1 400px',
      padding: '0 20px',
      direction: 'rtl',
      marginBottom: '30px',
      '& img': {
        opacity: '1',
        maxWidth: '940px',
        width: '160%',
        borderRadius: '5px',
        boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.2)',
      },
    },
    '& .right': {
      flex: '1 1 400px',
      padding: '0 20px',
      marginBottom: '40px',
      '& h5': {
        height: '2em',
      },
      '& p': {
        marginBottom: '20px',
        '& strong': {
          color: Theme.colors.primaryLighter,
        },
      },
      '& .topGroupBy': {
        display: 'inline-block',
      },
    },
  },
  '& .section-5': {
    overflow: 'hidden',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: '100px 10%',
    '& .csv, .sql': {
      flex: '1 1 30%',
      textAlign: 'center',
      padding: '0 20px',
      marginBottom: '60px',
    },
    '& .main': {
      textAlign: 'center',
      padding: '0 20px',
      marginBottom: '60px',
      flex: '1 1 40%',
      '& p': {
        marginBottom: '20px',
      },
    },
    '& img': {
      width: '250px',
      maxWidth: '100%',
    },
  },
  '& .section-6': {
    overflow: 'hidden',
    background: Theme.colors.primaryDark,
    padding: '100px 10%',
    color: '#fff',
    '& .first': {
      padding: '0 20px',
    },
    '& h2': {
      textAlign: 'center',
      margin: '20px 0',
      strong: {
        display: 'inline-block',
      },
    },
    '& p': {
      maxWidth: '700px',
      margin: '0 auto 40px',
      textAlign: 'center',
    },
    '& img': {
      width: '900px',
      maxWidth: '100%',
      margin: '0 auto',
      borderRadius: '5px',
      boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.2)',
      marginBottom: '40px',
    },
  },
  '& .section-7': {
    overflow: 'hidden',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: '100px 10%',
    '& .left': {
      flex: '1 1 400px',
      textAlign: 'right',
      padding: '0 20px',
      marginBottom: '40px',
      '& p': {
        marginBottom: '20px',
      },
    },
    '& .right': {
      flex: '1 1 400px',
      padding: '0 20px',
      '& img': {
        opacity: '1',
        maxWidth: '940px',
        width: '140%',
        borderRadius: '5px',
        boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.2)',
      },
    },
  },
  '& .section-8': {
    overflow: 'hidden',
    padding: '100px 10%',
    background: Theme.colors.primaryDark,
    '& h3, & h4': {
      textAlign: 'center',
    },
    '& h3': {
      color: '#fff',
    },
    '& h4': {
      color: Theme.colors.primaryLight,
    },
    '& .testimonials': {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
    },
    '& .testimonial': {
      position: 'relative',
      flex: '0 1 30%',
      padding: '90px 20px 20px',
      textAlign: 'center',
      margin: '120px 1.5% 0',
      alignSelf: 'stretch',
      background: '#fff',
      borderRadius: '5px',
      boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2)',
      '& .photo-wrap': {
        position: 'absolute',
        top: '0',
        left: '50%',
      },
      '& .photo': {
        width: '150px',
        height: '150px',
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: 'solid 5px #fff',
        borderRadius: '100%',
        boxShadow: '0 7px 20px 0 rgba(0, 0, 0, 0.3)',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
      },
      '& p': {
        marginBottom: '15px',
      },
      '& h6': {
        margin: '5px 0',
      },
    },
  },
  '& .contact-us': {
    background: Theme.colors.primary,
    color: '#fff',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: '100px 10%',
    '& h2': {
      margin: '50px 0',
    },
    '& .left': {
      flex: '1 1 400px',
      padding: '0 20px',
      marginBottom: '20px',
      '& img': {
        opacity: '1',
        maxWidth: '140%',
        width: '140%',
        borderRadius: '5px',
        boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.2)',
      },
    },
    '& .right': {
      flex: '1 1 400px',
      padding: '0 20px',
      '& h2': {
        margin: '20px 0',
      },
      '& p': {
        marginBottom: '20px',
      },
    },
  },
  '& .hbspt-form': {
    '& a, & .action input': {
      color: '#fff',
    },
  },
  '& .phone': {
    marginTop: '0px',
    width: '100%',
    textAlign: 'center',
    '& a': {
      margin: '20px 0',
      color: '#fff',
    },
    '& h3': {
      margin: '0',
    },
  },

  '@media screen and (max-width: 600px)': {
    '& .section-1': {
      padding: '70px 0',
    },
    '& .section-1 .right img': {
      maxWidth: '115%',
    },
    '& .section-2': {
      padding: '70px 0',
    },
    '& .section-3': {
      padding: '70px 0',
    },
    '& .section-4': {
      padding: '70px 0',
    },
    '& .section-5': {
      padding: '70px 0',
    },
    '& .section-6': {
      padding: '70px 0',
    },
    '& .section-7': {
      padding: '70px 0',
    },
    '& .section-8': {
      padding: '70px 0',
      '& .-pad': {
        padding: '0 20px',
      },
    },
    '& .contact-us': {
      padding: '50px 20px',
    },
  },

  '@media screen and (max-width: 1000px)': {
    '& .section-1 .left': {
      textAlign: 'left',
    },
    '& .section-5': {
      '& .csv, & .sql, & .main': {
        flex: '1 1 100%',
      },
    },
  },

  '@media screen and (max-width: 1100px)': {
    '& .section-8 .testimonial': {
      flex: '1 1 100%',
    },
  },
})

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
        <Styled>
          <div className='home'>
            <section className='section-1'>
              <NodeGarden
                color={Color('white').setAlpha(0.1).toString()}
                style={{
                  position: 'absolute',
                  top: '0px',
                  left: '0px',
                  zIndex: 0,
                }}
              />
              <div className='left'>
                <H2>Know everything Google knows</H2>
                <H4>If you can handle it</H4>
                <P>
                  If you want access to more enterprise level SERP data than any
                  tool has ever offered, you've come to the right place
                </P>
                <Link to='#contact'>
                  <Button color='success'>I'd like a demo!</Button>
                </Link>
              </div>
              <div className='right'>
                <img src='/static/img/dashboard.png' />
              </div>
            </section>

            <section className='section-2' id='tracking'>
              <div className='left'>
                <H4>Don't just track the top result.</H4>
                <img src='/static/img/cnn-small.png' />
                <H4>Get unlimited access to the entire SERP</H4>
                <img src='/static/img/cnn.png' />
              </div>
              <div className='right'>
                <H2>Track all the things!</H2>
                <p>
                  Most tools just tell you the top ranking page on your domain.
                  We monitor your entire brand, including social media profiles
                  and unlimited domain matches. There's a difference between
                  knowing you're ranking #1 and owning the entire first page!
                </p>
                <p>
                  Unlimited access doesn't just refer to today's SERP. We keep
                  all your data FOREVER, so 3 years from now, you'll be able to
                  look back and see what was ranking for "Pokemon Go" in 2016.
                  :)
                </p>
                <a className='btn btn-success' href='#contact'>
                  Start tracking today!
                </a>
                <a className='btn btn-primary-dark' href='/features/#brands'>
                  How does it work?
                </a>
              </div>
              <img
                className='allthethings'
                src='/static/img/allthethings.png'
              />
            </section>

            <section className='section-3' id='data'>
              <div className='left'>
                <H2>Rank data you can only find at Nozzle</H2>
                <H5>
                  <span>Track results by</span>{' '}
                  <span className='metric'>Rank</span>
                </H5>
                <p>
                  With 4 ads and rank #0 answer boxes, ranking #1 doesn’t mean
                  what it used to. Nozzle won’t just tell you where you rank,
                  we’ll tell you your ad adjusted rank, how many pixels down the
                  page you are, whether a knowledge graph appeared and even what
                  your prospective customer ate for breakfast.
                </p>

                <p>
                  We include all this data for <strong>every result</strong> -
                  no extra cost!
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
                <a className='btn btn' href='/features/#data'>
                  See the complete list
                </a>
                <a className='btn btn-success' href='#contact'>
                  Get the datas!
                </a>
              </div>
              <div className='right'>
                <img src='/static/img/adrank.png' />
              </div>
              <img className='hidden' src='/static/img/rank.png' />
              <img className='hidden' src='/static/img/adrank.png' />
              <img className='hidden' src='/static/img/pixelheight.png' />
            </section>

            <section className='section-4' id='competition'>
              <div className='left'>
                <img src='/static/img/groupBy.png' />
              </div>
              <div className='right'>
                <H3>
                  Squash your competitors... even the ones you don't know about
                  yet
                </H3>
                <H5>
                  <span className='topGroupByPrefix'>
                    See share of voice by
                  </span>{' '}
                  <span className='topGroupBy'>Domain</span>
                </H5>
                <p>
                  Nozzle lets you track <strong>unlimited competitors</strong>,
                  no questions asked. Heck, we'll let you track as much as you
                  can handle. The SERP is yours to command!
                </p>
                <p>
                  If you find a new competitor you haven't been tracking, add
                  them and we'll even rewrite history for you. It'll be like you
                  were monitoring them from the start!
                </p>
                <a className='btn btn-success' href='#contact'>
                  Show me my competitors!
                </a>
                <a className='btn btn-primary' href='/features/#competition'>
                  How does it work?
                </a>
              </div>
            </section>

            <section className='section-5'>
              <div className='csv'>
                <img src='/static/img/csv.png' />
              </div>
              <div className='main'>
                <H3>A Data Junkie's Paradise</H3>
                <H5>CSV, SQL, API and BigQuery</H5>
                <p>
                  Whether your thing is pivot tables or SQL JOIN's, you can
                  access your data the way you're used to. Even better, we keep
                  all your data forever, including the raw html. Consider it
                  necessary tooling when dealing with millions of keywords. )
                </p>
                <a className='btn btn-success' href='#contact'>
                  Fix me up with 1,000 keywords!
                </a>
                <a className='btn btn-primary' href='/features/#integration'>
                  Show all integrations
                </a>
              </div>
              <div className='sql'>
                <img src='/static/img/sql.png' />
              </div>
            </section>

            <section className='section-6' id='scheduling'>
              <div className='first'>
                <H2>
                  Get rankings on <strong>your</strong> schedule
                </H2>
                <p>
                  Not all keywords are created equal. You're probably paying too
                  much to track your long-tail keywords daily or you're only
                  getting weekly data for your money making head terms. Say
                  goodbye to those tools and say hello to your new best friend.
                  Track your most important keywords daily, hourly or even every
                  5 minutes. Keep an eye on thousands more by scheduling them
                  weekly or monthly without breaking the bank.
                </p>
                <div className='text-center'>
                  <img src='/static/img/schedules.png' />
                </div>
                <div className='text-center'>
                  <a className='btn btn-success' href='#contact'>
                    Give me flexibility, stat!
                  </a>
                  <a className='btn btn-primary' href='/features/#scheduling'>
                    Why does it matter?
                  </a>
                </div>
              </div>
            </section>

            <section className='section-7' id='pricing'>
              <div className='left'>
                <H2>You can't afford to not try Nozzle</H2>
                <H5>
                  No minimum spend, no qualification calls, white-glove
                  onboarding, batteries included
                </H5>
                <p>
                  After a free trial, getting started can cost you less per
                  month than your secret santa gift this year. Seriously.
                </p>
                <a className='btn' href='/pricing'>
                  See Our Plans
                </a>
                <a className='btn btn-success' href='#contact'>
                  Try it out!
                </a>
              </div>
            </section>
            <section className='contact-us' id='contact'>
              <H2 className='text-center'>Let's start your free trial!</H2>
              <div className='hbspt-form' />
              <div className='phone'>
                <H5>or</H5>
                <br />
                <a href='tel:1855NOZZLE1' className='btn btn-primary-dark'>
                  <H3>Call 1-855-NOZZLE1</H3>
                </a>
              </div>
            </section>
          </div>
        </Styled>
      </Content>
    )
  }
}
