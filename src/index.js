/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { injectGlobal } from 'styled-components'
import 'semantic-ui-css/semantic.min.css'
import 'normalize.css'

import App from './components/App'
import './services/auth/storage'
import configureStore from './configureStore'

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-size: 16px;
  }
`

const browserHistory = createHistory()
export const store = configureStore(browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
)
