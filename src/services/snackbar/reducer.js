import { handleActions } from 'redux-actions';

import { openErrorSnackbar } from './actions';

const initialState = {
    
};

export default handleActions(
    {
        [authRequired]: state => ({
            ...state,
            authRole: roles.GUEST,
        }),
        [authResult]: (state, { payload }) => ({
            ...state,
            authRole: payload.error ? roles.GUEST : roles.USER,
        }),
        [logIn]: state => ({
            ...state,
            authRole: roles.USER,
        }),
        [logOut]: state => ({
            ...state,
            authRole: roles.GUEST,
        }),
    },
    initialState,
);
