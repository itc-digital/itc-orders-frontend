import { handleActions } from 'redux-actions';
import { key, authFetchFulfilled, authFetchRejected } from './actions';
import { roles } from './constants';

export const selectors = {
    authRole: state => state[key].authRole,
};

const initialState = {
    authRole: roles.GUEST,
};

export default handleActions(
    {
        [authFetchFulfilled]: state => ({
            ...state,
            authRole: roles.USER,
        }),
        [authFetchRejected]: state => ({
            ...state,
            authRole: roles.GUEST,
        }),
    },
    initialState,
);
