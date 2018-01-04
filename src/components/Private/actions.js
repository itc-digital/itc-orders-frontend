import { createAction } from 'redux-actions';

export const key = 'components/Private';

export const privateFetch = createAction(`${key}/FETCH`);
export const privateFetchCancel = createAction(`${key}/FETCH_CANCEL`);
export const privateFetchFulfilled = createAction(`${key}/FETCH_FULFILLED`);
export const privateFetchRejected = createAction(`${key}/FETCH_REJECTED`);

export default {
    privateFetch,
    privateFetchCancel,
    privateFetchFulfilled,
    privateFetchRejected,
};
