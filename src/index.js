import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
//
import App from './App'

// For static export
export default <App />

// For dev mode
if (typeof document !== 'undefined') {
  const render = () => {
    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById('root'),
    )
  }

  render()

  // Hot Module Replacement API
  if (module.hot) {
    module.hot.accept('./App', render)
  }
}
