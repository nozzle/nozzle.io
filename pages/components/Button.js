import glamorous from 'glamorous'
//
import Theme from '../utils/Theme'
import Easing from '../utils/Easing'

export default glamorous.button(
  {
    display: 'inline-block',
    padding: '15px 20px',
    marginBottom: '5px',
    border: '0',
    fontSize: '15px',
    outline: '0',
    borderRadius: '2px',
    transition: `all .2s ${Easing.css.easeOutBack}`,
    cursor: 'pointer',
    textDecoration: 'none',
    background: Theme.colors.primary,
    color: 'white',
    ':hover': {
      transform: `scale(1.1) translateY(5%)`,
      boxShadow: `0 10px 20px 0 rgba(0,0,0, .2)`,
    },
    ':active': {
      transition: `all .08s ${Easing.css.easeOutBack}`,
      transform: `none`,
      boxShadow: `none`,
    },
  },
  ({ color }) => ({
    background: Theme.colors[color],
  })
)
