/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { ApplyTheme } from 'rambler-ui/theme'
import createHistory from 'history/createBrowserHistory'
import 'normalize.css'

import './index.css'
import App from './components/App'
import './services/auth/storage'
import configureStore from './configureStore'

const history = createHistory()
export const store = configureStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ApplyTheme>
        <App />
      </ApplyTheme>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)
