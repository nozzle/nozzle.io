import glamorous from 'glamorous'
//
import Theme from '../utils/Theme'

export const Container = glamorous.div({
  maxWidth: Theme.maxWidth,
  margin: '0 auto',
})
export const Pad = glamorous.div(
  {
    padding: 20,
  },
  ({ size }) => ({
    padding: size,
  })
)
export const Center = glamorous.div({
  textAlign: 'center',
})
