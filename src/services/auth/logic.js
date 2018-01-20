import { createLogic } from 'redux-logic';
import { push } from 'react-router-redux';

import { maybeReadToken, writeToken, eraseToken } from 'utils/storage';

import { getAuthStatus, authResult, logOut, authRequired } from './actions';

const getAuthStatusLogic = createLogic({
    type: getAuthStatus,
    latest: true,

    process(deps, dispatch, done) {
        const token = maybeReadToken();
        if (token) {
            dispatch(authResult({ token }));
        }
        done();
    },
});

const authResultLogic = createLogic({
    type: authResult,

    process({ action }, dispatch, done) {
        if (action.error) {
            eraseToken();
            alert('Всё пошло не так');
        } else {
            writeToken(action.payload.token);
            dispatch(push('/'));
            done();
        }
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
        done();
    },
});

export default [authResultLogic, authRequiredLogic, getAuthStatusLogic, logOutLogic];
