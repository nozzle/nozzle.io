import React from 'react'
import classnames from 'classnames'
import styled from 'styled-components'
//
import { color } from './Html'

const icons = {
  users: 'fas fa-users',
  team: 'fas fa-th',
  brand: 'fas fa-suitcase',
  cog: 'fas fa-cog',
  help: 'far fa-question-circle',
  user: 'far fa-user-circle',
  'user-add': 'fas fa-user-plus',
  laptop: 'fas fa-laptop',
  'sign-out': 'fas fa-sign-out-alt',
  gauge: 'fas fa-tachometer-alt',
  bullet: 'fas fa-circle',
  bullseye: 'fas fa-bullseye',
  'arrow-left': 'fas fa-arrow-left',
  'arrow-right': 'fas fa-arrow-right',
  plus: 'fas fa-plus-circle',
  filter: 'fas fa-filter',
  clock: 'far fa-clock',
  'circle-full': 'far fa-dot-circle',
  'chevron-right': 'fas fa-angle-right',
  tags: 'fas fa-tags',
  check: 'fas fa-check-circle',
  x: 'fas fa-times-circle',
  graph: 'fas fa-area-chart',
  search: 'fas fa-search',
  trophy: 'fas fa-trophy',
  flash: 'fas fa-bolt',
  share: 'fas fa-share-alt',
  star: 'fas fa-star',
  copy: 'far fa-copy',
  link: 'fas fa-link',
  'star-outline': 'far fa-star',
  dollar: 'fas fa-dollar-sign',
  bug: 'fas fa-bug',
  chat: 'far fa-comments',
  facebook: 'fab fa-facebook-square',
  google: 'fab fa-google',
  minus: 'fas fa-minus-circle',
  lock: 'fas fa-lock',
  desktop: 'fas fa-desktop',
  mobile: 'fas fa-mobile-alt',
  pencil: 'far fa-pencil-square',
  database: 'fas fa-database',
  calendar: 'far fa-calendar-alt',
  warning: 'fas fa-exclamation-triangle',
  info: 'fas fa-info-circle',
  bell: 'far fa-bell',
  marker: 'fas fa-map-marker-alt',
  globe: 'fas fa-globe-americas',
  twitter: 'fab fa-twitter',
  linkedin: 'fab fa-linkedin-in',
  buffer: 'fab fa-buffer',
  facebookLetter: 'fab fa-facebook-f',
}

const IStyled = styled('i')`
  min-width: 1em;
  text-align: center;
  font-size: ${props => (props.size === 'large' ? '2em' : '1em')};
  ${color};
`

export default function Icon({ i, className, ...rest }) {
  const icon = icons[i]
  if (i && !icon) {
    console.warn(`Could not find an icon class for "${i}"`)
  }
  return (
    <IStyled className={classnames(`Icon-${i}`, icon, className)} {...rest} />
  )
}
