import React from 'react'
import classnames from 'classnames'
import glamorous from 'glamorous'
//
import { color } from './Html'

const icons = {
  users: 'fa fa-users',
  team: 'fa fa-th',
  brand: 'fa fa-suitcase',
  cog: 'fa fa-cog',
  help: 'fa fa-question-circle-o',
  user: 'fa fa-user-circle-o',
  'user-add': 'fa fa-user-plus',
  laptop: 'fa fa-laptop',
  'sign-out': 'fa fa-sign-out',
  gauge: 'fa fa-dashboard',
  bullet: 'fa fa-circle',
  bullseye: 'fa fa-bullseye',
  'arrow-left': 'fa fa-arrow-left',
  'arrow-right': 'fa fa-arrow-right',
  plus: 'fa fa-plus-circle',
  filter: 'fa fa-filter',
  clock: 'fa fa-clock-o',
  'circle-full': 'fa fa-dot-circle-o',
  'chevron-right': 'fa fa-angle-right',
  tags: 'fa fa-tags',
  check: 'fa fa-check-circle',
  x: 'fa fa-times-circle',
  graph: 'fa fa-area-chart',
  search: 'fa fa-search',
  trophy: 'fa fa-trophy',
  flash: 'fa fa-flash',
  share: 'fa fa-share-alt',
  star: 'fa fa-star',
  copy: 'fa fa-files-o',
  link: 'fa fa-link',
  'star-outline': 'fa fa-star-o',
  dollar: 'fa fa-usd',
  bug: 'fa fa-bug',
  chat: 'fa fa-comments-o',
  facebook: 'fa fa-facebook-official',
  google: 'fa fa-google',
  minus: 'fa fa-minus-circle',
  lock: 'fa fa-lock',
  desktop: 'fa fa-desktop',
  mobile: 'fa fa-mobile-phone',
  pencil: 'fa fa-pencil-square-o',
  database: 'fa fa-database',
  calendar: 'fa fa-calendar',
  warning: 'fa fa-warning',
  info: 'fa fa-info-circle',
  bell: 'fa fa-bell-o',
  marker: 'fa fa-map-marker',
  globe: 'fa fa-globe',
}

const IStyled = glamorous.i(
  {
    minWidth: '1em',
    textAlign: 'center',
  },
  ({ size }) => ({
    fontSize: size === 'large' ? '2em' : '1em',
  }),
  color
)

export default function Icon ({ i, className, ...rest }) {
  const icon = icons[i]
  if (i && !icon) {
    console.warn(`Could not find an icon class for "${i}"`)
  }
  return (
    <IStyled className={classnames(`Icon-${i}`, icon, className)} {...rest} />
  )
}
