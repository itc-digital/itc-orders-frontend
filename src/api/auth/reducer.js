import { handleActions } from 'redux-actions';
import { key, authResult, logOut, authRequired } from './actions';
import { roles } from './constants';

export const selectors = {
    authRole: state => state[key].authRole,
};

const initialState = {
    authRole: roles.GUEST,
};

export default handleActions(
    {
        [authResult]: (state, { payload }) => ({
            ...state,
            authRole: payload.error ? roles.GUEST : roles.USER,
        }),
        [authRequired]: state => ({
            ...state,
            authRole: roles.GUEST,
        }),
        [logOut]: state => ({
            ...state,
            authRole: roles.GUEST,
        }),
    },
    initialState,
);
