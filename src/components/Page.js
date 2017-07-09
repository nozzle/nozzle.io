import React from 'react'
import glamorous from 'glamorous'
import 'styles/reset.css'
import 'styles/body.css'
//

const PageStyles = glamorous.div({
  fontFamily:
    '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
  fontWeight: 300,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
})

export default ({ children }) =>
  (<PageStyles>
    {children}
  </PageStyles>)
