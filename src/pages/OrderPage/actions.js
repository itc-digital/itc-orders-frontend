import { createAction } from 'redux-actions'

export const key = 'pages/OrderPage'

export const orderSubmit = createAction(`${key}/ORDER_SUBMIT`)
export const orderSubmitResult = createAction(`${key}/ORDER_SUBMIT_RESULT`)
