import { createAction } from 'redux-actions';

export const key = 'services/auth';

export const authFetch = createAction(`${key}/FETCH`);
export const authFetchCancel = createAction(`${key}/FETCH_CANCEL`);
export const authFetchFulfilled = createAction(`${key}/FETCH_FULFILLED`);
export const authFetchRejected = createAction(`${key}/FETCH_REJECTED`);

export default {
    authFetch,
    authFetchCancel,
    authFetchFulfilled,
    authFetchRejected,
};
