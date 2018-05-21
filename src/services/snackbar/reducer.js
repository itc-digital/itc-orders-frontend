import { handleActions } from 'redux-actions'
import mapValues from 'lodash/mapValues'
import { key, openSnackbar, closeSnackbar } from './actions'

const initialState = {
  isOpened: false,
  actionButton: undefined,
  autoCloseDuration: 0,
  fsaForAction: undefined,
  message: '',
  onAction: undefined,
  positionY: 'bottom',
  positionX: 'center',
  showClose: true,
  type: 'primary',
}

export const selectors = mapValues(initialState, (value, stateKey) => state =>
  state[key][stateKey])

export default handleActions(
  {
    [openSnackbar]: (state, { payload }) => ({
      ...state,
      isOpened: true,
      ...payload,
    }),
    [closeSnackbar]: state => ({
      ...state,
      isOpened: false,
    }),
  },
  initialState,
)
