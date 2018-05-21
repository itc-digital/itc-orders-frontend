import { combineReducers } from 'redux'
import { key as authKey, reducer as authReducer } from 'services/auth'
import { key as ordersKey, reducer as ordersReducer } from 'pages/Orders'
import { key as snackbarKey, reducer as snackbarReducer } from 'services/snackbar'
import { key as orderPageKey, reducer as orderPageReducer } from 'pages/OrderPage'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  router: routerReducer,
  [authKey]: authReducer,
  [ordersKey]: ordersReducer,
  [snackbarKey]: snackbarReducer,
  [orderPageKey]: orderPageReducer,
})
