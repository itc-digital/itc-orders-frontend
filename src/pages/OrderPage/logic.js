import { createLogic } from 'redux-logic'
import { apiRequest } from 'services/api/actions'
import { orderSubmit, orderSubmitResult } from './actions'

const submitLogic = createLogic({
  type: orderSubmit,
  latest: true,

  process({ action }, dispatch, done) {
    dispatch(apiRequest({
      endpoint: 'order',
      method: 'POST',
      body: action.payload,
      resultType: orderSubmitResult,
    }))

    done()
  },
})

export default [submitLogic]
