import { handleActions } from 'redux-actions'
import { key, ordersFetchResult } from './actions'

export const selectors = {
  selectOrders: state => state[key].orders,
}

const initialState = {
  orders: [],
}

export default handleActions(
  {
    [ordersFetchResult]: (state, action) => ({
      ...state,
      orders: action.error ? [] : action.payload.orders,
    }),
  },
  initialState,
)
