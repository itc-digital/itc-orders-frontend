import { createAction } from 'redux-actions'

export const key = 'services/snackbar'

export const openSnackbar = createAction(`${key}/OPEN_SNACKBAR`)
export const closeSnackbar = createAction(`${key}/CLOSE_SNACKBAR`)
