import { createAction } from 'redux-actions';

export const key = 'components/Private';

export const privateFetch = createAction(`${key}/FETCH`);
export const privateFetchCancel = createAction(`${key}/FETCH_CANCEL`);
export const privateFetchResult = createAction(`${key}/FETCH_RESULT`);

export default {
    privateFetch,
    privateFetchCancel,
    privateFetchResult,
};
