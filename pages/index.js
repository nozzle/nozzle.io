import React, { Component } from 'react'
import glamorous from 'glamorous'
//
import Theme from './utils/Theme'

import Head from './components/Head'
import Content from './components/Content'

const Styled = glamorous.div({
  '& .section-1': {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: '100px 10%',
    '& .left': {
      flex: '1 1 400px',
      textAlign: 'right',
      padding: '0 20px',
      marginBottom: '40px',
      '& h2': {
        margin: '10px 0',
        fontSize: '3em',
        fontWeight: '700',
        lineHeight: '1.2em',
      },
      '& h4': {
        color: Theme.colors.primaryLight,
      },
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
  '& .section-2': {
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
        margin: '10px 0',
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
        fontWeight: '300',
        height: '2em',
      },
      '& .metric': {
        fontWeight: '600',
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
      '& .topGroupByPrefix': {
        fontWeight: '300',
      },
      '& .topGroupBy': {
        display: 'inline-block',
      },
    },
  },
  '& .section-5': {
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
      '& h3': {
        margin: '10px 0',
      },
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
        fontWeight: '700',
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
      '& h2': {
        margin: '10px 0 30px',
      },
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
    padding: '100px 10%',
    background: Theme.colors.primaryDark,
    '& h3, & h4': {
      textAlign: 'center',
    },
    '& h3': {
      margin: '10px 0',
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
      fontSize: '3em',
      fontWeight: '700',
      lineHeight: '1.2em',
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
              <div
                className='left'
                data-0='transform:translateY(0px)'
                data-top-bottom='transform:translateY(80px)'
              >
                <h2>Know everything Google knows</h2>
                <h4>If you can handle it</h4>
                <p>
                  If you want access to more enterprise level SERP data than any
                  tool has ever offered, you've come to the right place
                </p>
                <a className='btn btn-success' href='#contact'>
                  I'd like a demo!
                </a>
              </div>
              <div className='right'>
                <img
                  src='/static/img/1.png'
                  data-0='transform:translateY(0px)'
                  data-top-bottom='transform:translateY(120px)'
                />
              </div>
            </section>

            <section className='section-2' id='tracking'>
              <div
                className='left'
                data-bottom-top='transform:translateY(-50px)'
                data-top-bottom='transform:translateY(50px)'
              >
                <h4>Don't just track the top result.</h4>
                <img src='/static/img/cnn-small.png' />
                <h4>Get unlimited access to the entire SERP</h4>
                <img src='/static/img/cnn.png' />
              </div>
              <div className='right'>
                <h2>Track all the things!</h2>
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
                data-bottom-top='transform[swing]:translateX(200px)'
                data-center='transform[swing]:translateX(-100px)'
              />
            </section>

            <section className='section-3' id='data'>
              <div className='left'>
                <h2>Rank data you can only find at Nozzle</h2>
                <h5>
                  <span>Track results by</span>{' '}
                  <span className='metric'>Rank</span>
                </h5>
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
                <h3>
                  Squash your competitors... even the ones you don't know about
                  yet
                </h3>
                <h5>
                  <span className='topGroupByPrefix'>
                    See share of voice by
                  </span>{' '}
                  <span className='topGroupBy'>Domain</span>
                </h5>
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
                <img
                  src='/static/img/csv.png'
                  data-bottom-top='transform[swing]:translateX(-500px)'
                  data-center='transform[swing]:translateX(0px)'
                />
              </div>
              <div className='main'>
                <h3>A Data Junkie's Paradise</h3>
                <h5>CSV, SQL, API and BigQuery</h5>
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
                <img
                  src='/static/img/sql.png'
                  data-bottom-top='transform[swing]:translateX(500px)'
                  data-center='transform[swing]:translateX(0px)'
                />
              </div>
            </section>

            <section className='section-6' id='scheduling'>
              <div className='first'>
                <h2>
                  Get rankings on <strong>your</strong> schedule
                </h2>
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
                  <img
                    src='/static/img/schedules.png'
                    data-bottom-top='transform[swing]:scale(0.98)'
                    data-center-top='transform[swing]:scale(1)'
                  />
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
              <div
                className='left'
                data-bottom-top='transform[swing]:translateY(-20px)'
                data-top-bottom='transform[swing]:translateY(30px)'
              >
                <h2>You can't afford to not try Nozzle</h2>
                <h5>
                  No minimum spend, no qualification calls, white-glove
                  onboarding, batteries included
                </h5>
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
              <h2 className='text-center'>Let's start your free trial!</h2>
              <div className='hbspt-form' />
              <div className='phone'>
                <h5>or</h5>
                <br />
                <a href='tel:1855NOZZLE1' className='btn btn-primary-dark'>
                  <h3>Call 1-855-NOZZLE1</h3>
                </a>
              </div>
            </section>
          </div>
        </Styled>
      </Content>
    )
  }
}
