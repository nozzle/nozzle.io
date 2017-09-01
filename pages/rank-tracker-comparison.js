import React, { Component } from 'react'
import styled, { css } from 'styled-components'
//
import Theme from '../utils/Theme'
import { angle } from '../utils/Styles'

import Head from '../components/Head'
import Content from '../components/Content'
import Link from '../components/Link'
import Icon from '../components/Icon'
import { H1, H2, P, Strong, Table } from '../components/Html'
import { Container, Center } from '../components/Layout'

import Competitors from '../data/competitors'

const sectionedCompetitors = []
Competitors.forEach((d, i) => {
  if (i && d.section !== Competitors[i - 1].section) {
    sectionedCompetitors.push({ name: d.section, isHeader: true })
  }
  sectionedCompetitors.push(d)
})

// let featureSections = {}
// Competitors.forEach(d => {
//   featureSections[d.section] = featureSections[d.section] || []
//   featureSections[d.section].push(d)
// })
// featureSections = Object.keys(featureSections)
//   .map(d => ({
//     section: d,
//     features: featureSections[d],
//   }))
//   .sort((a, b) => a.features[0].sectionOrder - b.features[0].sectionOrder)

const section = css`
  padding: 10% 5%;
  z-index: 1;
`

const SectionWhyAnother = styled.section`
  ${section};
  ${angle('right')};

  background: ${Theme.colors.primaryDarker};
  color: white;
`

const TableSection = styled.section`${section};`

const header = name =>
  (<tr
    key={name}
    style={{
      borderTop: name && 'solid 50px transparent',
      fontWeight: Theme.weights.bold,
    }}
  >
    <td>
      {name || 'Feature'}
    </td>
    <td>Nozzle</td>
    <td>Conductor</td>
    <td>BrightEdge</td>
    <td>STAT</td>
    <td>Moz</td>
    <td>Agency Analytics</td>
  </tr>)

export default class RankTrackerComparison extends Component {
  render () {
    return (
      <Content>
        <Head title='Why Us? - A rank tracker comparison' />
        <SectionWhyAnother>
          <Container>
            <Center>
              <H2>Why Another Rank Tracker?</H2>
              <P
                css={{
                  width: 900,
                  maxWidth: '100%',
                }}
              >
                As life-long marketers and software developers with over 20
                years of experience, we know first-hand the pains and challenges
                that come with rank tracking. There are, literally, hundreds of
                marketing tools to choose from, and we have evaluating almost
                every single one along with their strengths and weaknesses. Our
                findings left us wanting and needing more power and flexibility
                in a tool that didn't exist yet. As other providers continued to
                neglect our needs of a modern rank tracker, we were left with
                only one choice: Build the biggest, baddest rank tracker anyone
                has ever used.
              </P>
            </Center>
          </Container>
        </SectionWhyAnother>

        <TableSection>
          <Container>
            <Center>
              <H1>Rank Tracker Comparison</H1>
              <P>
                A comprehensive comparison between all of the top rank trackers
                in the industry, and how <Strong>Nozzle</Strong> stacks up.
              </P>
            </Center>

            <Table>
              <thead>
                {header()}
              </thead>
              <tbody>
                {sectionedCompetitors.map(
                  (feature, i) =>
                    feature.isHeader
                      ? header(feature.name)
                      : <tr key={i}>
                        <td>
                          {feature.featureID
                            ? <Link to={`/features/#${feature.featureID}`}>
                              {feature.name}
                            </Link>
                            : feature.name}
                            &nbsp;
                        </td>
                        <td>
                          {feature.nozzle === true
                            ? <Icon i='check' color='success' />
                            : feature.nozzle}
                        </td>
                        <td>
                          {feature.conductor === true
                            ? <Icon i='check' color='success' />
                            : feature.conductor}
                        </td>
                        <td>
                          {feature.brightEdge === true
                            ? <Icon i='check' color='success' />
                            : feature.brightEdge}
                        </td>
                        <td>
                          {feature.stat === true
                            ? <Icon i='check' color='success' />
                            : feature.stat}
                        </td>
                        <td>
                          {feature.moz === true
                            ? <Icon i='check' color='success' />
                            : feature.moz}
                        </td>
                        <td>
                          {feature.agencyAnalytics === 'x'
                            ? <Icon i='check' color='success' />
                            : feature.agencyAnalytics}
                        </td>
                      </tr>
                )}
              </tbody>
            </Table>
          </Container>
        </TableSection>
      </Content>
    )
  }
}
