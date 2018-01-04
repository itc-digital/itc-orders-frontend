import { handleActions } from 'redux-actions';
import { key, authSuccess, logOut, authRequired } from './actions';
import { roles } from './constants';

export const selectors = {
    authRole: state => state[key].authRole,
};

const initialState = {
    authRole: roles.GUEST,
};

export default handleActions(
    {
        [authSuccess]: state => ({
            ...state,
            authRole: roles.USER,
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
