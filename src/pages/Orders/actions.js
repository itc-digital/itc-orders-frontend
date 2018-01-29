import { createAction } from 'redux-actions';

export const key = 'components/Orders';

export const ordersFetchResult = createAction(`${key}/FETCH_RESULT`);

export default {
    ordersFetchResult,
};
