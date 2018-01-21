import { createLogic } from 'redux-logic';
import { push } from 'react-router-redux';

import { maybeReadToken, writeToken, eraseToken } from 'utils/storage';

import { getAuthStatus, authRequired, authResult, logIn, logOut } from './actions';

const getAuthStatusLogic = createLogic({
    type: getAuthStatus,
    latest: true,

    process(deps, dispatch, done) {
        const token = maybeReadToken();
        if (token) {
            dispatch(logIn());
        }
        done();
    },
});

const authResultLogic = createLogic({
    type: authResult,

    process({ action }, dispatch, done) {
        if (action.error) {
            dispatch(logOut());
        } else {
            writeToken(action.payload.access_token);
            window.close();
        }
        done();
    },
});

const authRequiredLogic = createLogic({
    type: authRequired,
    latest: true,

    process(deps, dispatch, done) {
        eraseToken();
        done();
    },
});

const logOutLogic = createLogic({
    type: logOut,
    latest: true,

    process(deps, dispatch, done) {
        eraseToken();
        dispatch(push('/'));
        done();
    },
});

export default [authResultLogic, authRequiredLogic, getAuthStatusLogic, logOutLogic];
