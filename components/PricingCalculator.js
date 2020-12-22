import React from 'react'
import * as presets from 'data/calculatorOptions'
import { Container } from 'components/Layout'
import { Button, H3, P, Input } from 'components/Html'
import Icon from 'components/Icon'
import { number } from 'utils/Format'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import tw from 'tailwind.macro'
import { angle } from 'utils/Styles'
import styled from 'styled-components'

const belowMobile = `@media(max-width: ${700}px)`

const SectionCalculator = styled(PricingCalculator)`
  ${angle('right')};
  padding: 5% 1rem 10%;
  .title {
    text-align: center;
    margin-bottom: 20px;
  }
  .inner {
    display: flex;
    flex-wrap: wrap;
  }
  .presets {
    margin: 0 auto;
    margin-bottom: 2rem;
    text-align: center;
    button {
      margin: 1rem;
    }
  }

  th,
  td {
    padding: 0.75rem;
    :nth-child(2) {
      border-right: 2px solid ${props => props.theme.colors.primary};
    }
    :nth-child(6) {
      border-right: 2px solid ${props => props.theme.colors.primary};
    }
    :nth-child(7) {
      border-right: 2px solid ${props => props.theme.colors.primary};
    }
    :last-child {
      width: 2rem;
    }
  }

  tfoot {
    font-weight: bold;
    font-size: 1.25rem;
    tr {
      :last-child {
        border-top: 2px solid ${props => props.theme.colors.primary};
      }
    }
  }

  .center {
    text-align: center;
  }

  .add {
    text-align: center;
    color: ${props => props.theme.colors.success};
    :hover {
      transform: scale(1.1);
    }
  }

  .delete {
    color: ${props => props.theme.colors.danger};
    :hover {
      transform: scale(1.1);
    }
  }
  .top {
    margin: 0 auto;
    margin-bottom: 3rem;

    input[type='number'],
    input[type='text'] {
      font-size: 1em;
      width: 100%;
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
        display: block;
      }
      th,
      td {
        border-right: none;
        :last-child {
          width: auto;
        }
      }

      thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
      }

      tbody {
        tr {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
          border-radius: 0.5rem;
          margin-bottom: 1rem;
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
        text-align: center;
        tr:nth-of-type(1) {
          td:nth-of-type(3) {
            display: none;
          }
          td:nth-of-type(4) {
            display: none;
          }
          td:nth-of-type(5) {
            display: none;
          }
          td:nth-of-type(6) {
            display: none;
          }
          td:nth-of-type(7) {
            display: none;
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
  }
  .bottom {
    margin: 0 auto;
    flex: 1;
    padding: 0 20px;
    display: flex;
    min-height: 20rem;
    max-width: 60rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #e7e7e7;
    border-radius: 5px;
    padding: 20px;
    .amount {
      font-size: 3.8em;
      font-weight: 900;
    }
    .suggested {
      padding: 20px 20px 5px;
      font-size: 20px;
    }
    .suggested-plan {
      text-align: center;
      padding: 10px;
      font-size: 2.5rem;
      font-weight: bold;
      color: ${props => props.theme.colors.primaryDark};
    }

    .pricing {
      margin: 0.25rem;
    }
  }
`

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

function PricingCalculator(props) {
  const plans = props.plans
  console.log(plans)
  const [rows, setRows] = React.useState(presets.reset)
  const [dirty, setDirty] = React.useState(false)

  React.useEffect(() => {
    if (rows == presets.reset) {
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
    keywords += parseInt(row.keywords.hourly || 0) * 30 * 24 * 5
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
    <section {...props}>
      <Container>
        <H3 className="title">How many pulls do I need per month?</H3>
        <P className="title">
          Not sure where to start? Try using one of our preset options to find
          the right plan for you.
        </P>
        <div className="inner">
          <div className="presets">
            {dirty ? (
              <Button color="gray" onClick={() => setRows(presets.reset)}>
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
              Large Site Tracking Multiple Locations
            </Button>
            <Button onClick={() => setRows(presets.largerSite)}>
              Enterprise
            </Button>
          </div>
          <div className="top">
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
                        <Icon
                          i="x"
                          onClick={deleteRow(index)}
                          className="delete"
                        />
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
                    <Icon i="plus" onClick={addRow} className="add" />
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
          </div>
          <div className="bottom">
            {suggestedPlan ? (
              <>
                <div className="amount">{number(totalPulls)}</div>

                <div
                  css={`
                    ${tw`p-2 mb-4 text-2xl`}
                  `}
                >
                  pulls
                </div>
                <div className="suggested">Suggested Plan:</div>
                <div className="suggested-plan">
                  <AnchorLink href={'#intro'}>{suggestedPlan.label}</AnchorLink>
                </div>
                {suggestedPlan == plans[0] ? (
                  <>
                    <div className="pricing">Call us for a quote</div>
                  </>
                ) : (
                  <>
                    <div className="pricing">
                      ${suggestedPlan.annually}/mo Billed Annually{' '}
                      {suggestedPlan.totalOverage > 0
                        ? `+ $${suggestedPlan.totalOverage.toFixed(
                            2
                          )} in Overage Charges`
                        : ''}
                    </div>
                    <div className="pricing">
                      ${suggestedPlan.monthly}/mo Billed Monthly{' '}
                      {suggestedPlan.totalOverage > 0
                        ? `+ $${suggestedPlan.totalOverage.toFixed(
                            2
                          )} in Overage Charges`
                        : ''}
                    </div>
                  </>
                )}
              </>
            ) : (
              <span>Enter your requirements to see a suggested plan</span>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
export default function Calculator({ plans }) {
  return <SectionCalculator plans={plans} />
}
