import React from 'react'
import { injectGlobal } from 'styled-components'
import { Router } from 'react-static'
import { Route, Switch, Redirect } from 'react-router-dom'
//
import Theme from 'utils/Theme'

import NavWrapper from 'components/NavWrapper'

import Home from 'containers/Home'
import RankTrackerComparison from 'containers/RankTrackerComparison'
import Features from 'containers/Features'
import Pricing from 'containers/Pricing'
import About from 'containers/About'
import Devblog from 'containers/Devblog'

injectGlobal`{
  html, body, body, [data-reactroot] {
    min-height: 100%;
    width: 100%;
  }
  html, body {
    background: ${Theme.colors.primaryDarker};
    overflow-x: hidden;
    overflow-y: scroll;
    font-size: 16px;
    font-family: "Overpass", "Helvetica", "Georgia", sans-serif;
    font-weight: ${Theme.weights.regular};
    color: #3d556b;
  }
  * {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  #nprogress .bar {
    background: white !important;
  }
  [data-name="mojs-shape"] {
    position: fixed !important;
    z-index: 99999999;
    pointer-events: none;
  }
}
`

export default () =>
  (<Router>
    <NavWrapper>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rank-tracker-comparison" component={RankTrackerComparison} />
        <Route path="/features" component={Features} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/about" component={About} />
        <Route path="/devblog" component={Devblog} />
        <Redirect to="/" />
      </Switch>
    </NavWrapper>
  </Router>)
