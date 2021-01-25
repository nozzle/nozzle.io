import React from 'react'
import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import tw from 'twin.macro'

import * as presets from 'data/calculatorOptions'
import { number } from 'utils/Format'
import { angle } from 'utils/Styles'

import { Container } from 'components/Layout'
import { Button, H3, P, Input } from 'components/Html'
import Icon from 'components/Icon'

const belowMobile = `@media(max-width: ${700}px)`

const frequencyOptions = [
  {
    value: 'hourly',
    label: 'Hourly',
  },
  {
    value: 'daily',
    label: 'Daily',
  },
  {
    value: 'weekly',
    label: 'Weekly',
  },
  {
    value: 'monthly',
    label: 'Monthly',
  },
]

const CalculatorStyles = styled('div')`
  ${angle('right')};
  ${tw`py-5/100 px-4`}
`
const Title = styled(H3)`
  ${tw`mb-5`}
`
const SubTitle = styled(P)`
  ${tw`mb-5`}
`
const Inner = styled('div')`
  ${tw`flex flex-wrap`}
`
const Presets = styled('div')`
  ${tw`mx-auto mb-8 text-center`}

  button {
    ${tw`m-4`}
  }
`
const Top = styled('div')`
  ${tw`mx-auto mb-12`}

  .center {
    ${tw`text-center`}
  }

  th,
  td {
    ${tw`p-3`}
    :nth-child(2) {
      ${tw`border-r-2 border-solid border-primary`}
    }
    :nth-child(6) {
      ${tw`border-r-2 border-solid border-primary`}
    }
    :nth-child(7) {
      ${tw`border-r-2 border-solid border-primary`}
    }
    :last-child {
      ${tw`w-8`}
    }
  }

  tfoot {
    ${tw`font-bold text-xl leading-none`}

    tr {
      :last-child {
        ${tw`border-t-2 border-solid border-primary`}
      }
    }
  }

  input[type='number'],
  input[type='text'] {
    ${tw`text-base leading-none w-full `}
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  }

  ${belowMobile} {
    table,
    thead,
    tbody,
    tfoot,
    th,
    td,
    tr {
      ${tw`block`}
    }
    th,
    td {
      :nth-child(2) {
        ${tw`border-r-0`}
      }
      :nth-child(6) {
        ${tw`border-r-0`}
      }
      :nth-child(7) {
        ${tw`border-r-0`}
      }
      :last-child {
        ${tw`w-auto`}
      }
    }

    thead tr {
      ${tw`hidden`}
    }

    tbody {
      tr {
        ${tw`rounded-lg mb-4`}
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }

      td:nth-of-type(2):before {
        content: 'Team/Project';
      }
      td:nth-of-type(3):before {
        content: 'Hourly Keywords';
      }
      td:nth-of-type(4):before {
        content: 'Daily Keywords';
      }
      td:nth-of-type(5):before {
        content: 'Weekly Keywords';
      }
      td:nth-of-type(6):before {
        content: 'Monthly Keywords';
      }
      td:nth-of-type(7):before {
        content: 'Devices';
      }
      td:nth-of-type(8):before {
        content: 'Locations';
      }
    }

    tfoot {
      ${tw`text-center`}
      tr:nth-of-type(1) {
        td:nth-of-type(3) {
          ${tw`hidden`}
        }
        td:nth-of-type(4) {
          ${tw`hidden`}
        }
        td:nth-of-type(5) {
          ${tw`hidden`}
        }
        td:nth-of-type(6) {
          ${tw`hidden`}
        }
        td:nth-of-type(7) {
          ${tw`hidden`}
        }
      }

      tr:nth-of-type(2) {
        td:nth-of-type(2):before {
          content: 'Hourly Keywords: ';
        }
        td:nth-of-type(3):before {
          content: 'Daily Keywords: ';
        }
        td:nth-of-type(4):before {
          content: 'Weekly Keywords: ';
        }
        td:nth-of-type(5):before {
          content: 'Monthly Keywords: ';
        }
        td:nth-of-type(6):before {
          content: 'Devices: ';
        }
        td:nth-of-type(7):before {
          content: 'Locations: ';
        }
      }
    }
  }
`
const Bottom = styled('div')`
  ${tw`mx-auto flex flex-1 flex-col justify-center items-center rounded p-5 px-5 bg-gray-200`}
  min-height: 20rem;
  max-width: 60rem;
`
const TotalPulls = styled('div')`
  ${tw`text-6xl font-black leading-none`}
`
const Suggested = styled('div')`
  ${tw`text-xl leading-none`}
  padding: 20px 20px 5px;
`
const SuggestedPlan = styled('div')`
  ${tw`text-center p-2.5 text-4xl leading-none font-bold text-primaryDark `}
`
const Pricing = styled('div')`
  ${tw`m-1`}
`

const AddIcon = styled(Icon)`
  ${tw`text-center text-success`}
  :hover {
    transform: scale(1.1);
  }
`
const DeleteIcon = styled(Icon)`
  ${tw`text-danger`}
  :hover {
    transform: scale(1.1);
  }
`

export default function PricingCalculator({ plans, monthly }) {
  const [rows, setRows] = React.useState(presets.original)
  const [dirty, setDirty] = React.useState(false)

  React.useEffect(() => {
    if (rows == presets.original) {
      setDirty(false)
    } else {
      setDirty(true)
    }
  }, [setDirty, rows])

  const handleChange = index => e => {
    const { dataset, name, value } = e.target
    const changedRows = [...rows]

    dataset.nested === 'nested'
      ? (changedRows[index] = {
          ...changedRows[index],
          keywords: {
            ...changedRows[index].keywords,
            [name]: value,
          },
        })
      : (changedRows[index] = {
          ...changedRows[index],
          [name]: value,
        })
    setRows([...changedRows])
  }

  const addRow = () => {
    const item = {
      name: '',
      keywords: {
        hourly: '',
        daily: '',
        weekly: '',
        monthly: '',
      },
      devices: 1,
      locations: 1,
    }
    setRows([...rows, item])
  }

  const deleteRow = index => () => {
    const rowsArray = [...rows]
    const newRows = rowsArray.filter((row, i) => i !== index)
    setRows(newRows)
  }

  let totalHourly = 0
  let totalDaily = 0
  let totalWeekly = 0
  let totalMonthly = 0
  let totalDevices = 0
  let totalLocations = 0
  let totalPulls = 0

  rows.forEach(row => {
    let keywords = 0
    totalHourly += parseInt(row.keywords.hourly || 0)
    totalDaily += parseInt(row.keywords.daily || 0)
    totalWeekly += parseInt(row.keywords.weekly || 0)
    totalMonthly += parseInt(row.keywords.monthly || 0)
    totalDevices += parseInt(row.devices)
    totalLocations += parseInt(row.locations)
    keywords += parseInt(row.keywords.hourly || 0) * 30 * 24 * 2
    keywords += parseInt(row.keywords.daily || 0) * 30
    keywords += parseInt(row.keywords.weekly || 0) * 4
    keywords += parseInt(row.keywords.monthly || 0)
    totalPulls += keywords * parseInt(row.devices) * parseInt(row.locations)
  })

  plans.forEach((plan, i) => {
    plan.totalPrice = plan.monthly
    plan.totalOverage = 0

    if (totalPulls > plan.pulls) {
      plan.totalOverage = ((totalPulls - plan.pulls) / 1000) * plan.overage
      plan.totalPrice += plan.totalOverage
    }
  })
  let suggestedPlan = plans.reduce((res, obj) => {
    return obj.totalPrice < res.totalPrice ? obj : res
  })

  return (
    <CalculatorStyles>
      <Container>
        <Title>How many pulls do I need per month?</Title>
        <SubTitle>
          Not sure where to start? Try using one of our preset options to find
          the right plan for you.
        </SubTitle>
        <Inner>
          <Presets>
            {dirty ? (
              <Button color="gray" onClick={() => setRows(presets.original)}>
                <Icon i="undo" /> Reset
              </Button>
            ) : (
              ''
            )}

            <Button onClick={() => setRows(presets.smallSMBAgency)}>
              Small SMB Agency
            </Button>
            <Button onClick={() => setRows(presets.largerAgency)}>
              Larger Agency
            </Button>
            <Button onClick={() => setRows(presets.largeSiteMultipleLocations)}>
              Multi-Location
            </Button>
            <Button onClick={() => setRows(presets.largerSite)}>
              Enterprise
            </Button>
          </Presets>
          <Top>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Team/Project</th>
                  <th>Hourly Keywords</th>
                  <th>Daily Keywords</th>
                  <th>Weekly Keywords</th>
                  <th>Monthly Keywords</th>
                  <th>Devices</th>
                  <th>Locations</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((item, index) => (
                  <tr key={index}>
                    <td>
                      {rows.length > 1 ? (
                        <DeleteIcon i="x" onClick={deleteRow(index)} />
                      ) : (
                        ''
                      )}
                    </td>
                    <td>
                      <Input
                        type="text"
                        name="name"
                        value={rows[index].name}
                        onChange={handleChange(index)}
                      />
                    </td>
                    {frequencyOptions.map(option => (
                      <td className="row keywords" key={option.value}>
                        <Input
                          name={option.value}
                          type="number"
                          value={rows[index].keywords[option.value]}
                          min="0"
                          data-nested="nested"
                          onChange={handleChange(index)}
                        />
                      </td>
                    ))}
                    <td>
                      <Input
                        type="number"
                        name="devices"
                        value={rows[index].devices}
                        min="1"
                        max="5"
                        onChange={handleChange(index)}
                      />
                    </td>
                    <td>
                      <Input
                        type="number"
                        name="locations"
                        value={rows[index].locations}
                        min="1"
                        onChange={handleChange(index)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                  <td className="center">
                    <AddIcon i="plus" onClick={addRow} />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <th>Totals</th>
                  <td>{totalHourly || ''}</td>
                  <td>{totalDaily || ''}</td>
                  <td>{totalWeekly || ''}</td>
                  <td>{totalMonthly || ''}</td>
                  <td>{totalDevices || ''}</td>
                  <td>{totalLocations || ''}</td>
                </tr>
              </tfoot>
            </table>
          </Top>
          <Bottom>
            {suggestedPlan ? (
              <>
                <TotalPulls>{number(totalPulls)}</TotalPulls>

                <div
                  css={`
                    ${tw`p-2 mb-4 text-2xl`}
                  `}
                >
                  pulls
                </div>
                <Suggested>Suggested Plan:</Suggested>
                <SuggestedPlan>
                  <AnchorLink href={'#intro'}>{suggestedPlan.label}</AnchorLink>
                </SuggestedPlan>
                {suggestedPlan == plans[0] ? (
                  <>
                    <Pricing>Call us for a quote</Pricing>
                  </>
                ) : (
                  <>
                    {monthly ? (
                      <Pricing>
                        ${suggestedPlan.monthly}/mo Billed Monthly{' '}
                        {suggestedPlan.totalOverage > 0
                          ? `+ $${suggestedPlan.totalOverage.toFixed(
                              2
                            )} in Overage Charges`
                          : ''}
                      </Pricing>
                    ) : (
                      <Pricing>
                        ${suggestedPlan.annually}/mo Billed Annually{' '}
                        {suggestedPlan.totalOverage > 0
                          ? `+ $${suggestedPlan.totalOverage.toFixed(
                              2
                            )} in Overage Charges`
                          : ''}
                      </Pricing>
                    )}
                  </>
                )}
              </>
            ) : (
              <span>Enter your requirements to see a suggested plan</span>
            )}
          </Bottom>
        </Inner>
      </Container>
    </CalculatorStyles>
  )
}
