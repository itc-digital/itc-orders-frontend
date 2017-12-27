import { handleActions } from 'redux-actions';
import { key, authFetch, authFetchCancel, authFetchFulfilled, authFetchRejected } from './actions';

export const selectors = {
    authStatus: state => state[key].authStatus,
    fetchStatus: state => state[key].fetchStatus,
};

const initialState = {
    authStatus: 'empty',
    fetchStatus: '',
};

export default handleActions(
    {
        [authFetch]: state => ({
            ...state,
            fetchStatus: `fetching... ${new Date().toLocaleString()}`,
            authStatus: 'empty',
        }),
        [authFetchFulfilled]: (state, action) => ({
            ...state,
            authStatus: action.payload,
            fetchStatus: `Results from ${new Date().toLocaleString()}`,
        }),
        [authFetchRejected]: (state, action) => ({
            ...state,
            fetchStatus: `errored: ${action.payload}`,
            authStatus: 'empty',
        }),
        [authFetchCancel]: state => ({
            ...state,
            fetchStatus: 'user cancelled',
            authStatus: 'empty',
        }),
    },
    initialState,
);
