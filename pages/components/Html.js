import glamorous from 'glamorous'
//
import Theme from '../utils/Theme'

const margin = { marginBottom: `1rem` }
const full = ({ full }) => ({
  width: full && '100%',
})

export const H1 = glamorous.h1(margin, full, {
  fontSize: Theme.sizes.h1,
})
export const H2 = glamorous.h2(margin, full, {
  fontSize: Theme.sizes.h2,
})
export const H3 = glamorous.h3(margin, full, {
  fontSize: Theme.sizes.h3,
})
export const H4 = glamorous.h4(margin, full, {
  fontSize: Theme.sizes.h4,
})
export const H5 = glamorous.h5(margin, full, {
  fontSize: Theme.sizes.h5,
})
export const H6 = glamorous.h6(margin, full, {
  fontSize: Theme.sizes.h6,
})
export const P = glamorous.p(margin, {
  marginBottom: '.2rem',
})
export const Div = glamorous.div(margin)
export const Img = glamorous.img({
  maxWidth: '100%',
})
