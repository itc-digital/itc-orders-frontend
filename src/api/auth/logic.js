import { createLogic } from 'redux-logic';
import { Observable } from 'rxjs';
import { push } from 'react-router-redux';

import { maybeReadToken, writeToken, eraseToken } from 'utils/storage';

import {
    getAuthStatus,
    authRequest,
    authSuccess,
    authFailure,
    logOut,
    authRequired,
} from './actions';

const getAuthStatusLogic = createLogic({
    type: getAuthStatus,
    latest: true,

    process(deps, dispatch, done) {
        const token = maybeReadToken();
        if (token) {
            dispatch(authSuccess({ token }));
        }
        done();
    },
});

const authRequestLogic = createLogic({
    type: authRequest,
    latest: true,

    process({ api, action }, dispatch, done) {
        const { token } = action.payload;

        dispatch(api
            .authenticate(token)
            .map((response) => {
                if (response.success) {
                    writeToken(token);
                    return Observable.of(
                        authSuccess({ ...action.payload, ...response }),
                        push('/'),
                    );
                }

                return Observable.of(authFailure(response), push('/'));
            })
            .concatAll()
            .catch(err => Observable.of(authFailure(err))));
        done();
    },
});

const authFailureLogic = createLogic({
    type: authFailure,
    latest: true,

    process(deps, dispatch, done) {
        eraseToken();
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
        done();
    },
});

export default [
    authRequestLogic,
    authRequiredLogic,
    authFailureLogic,
    getAuthStatusLogic,
    logOutLogic,
];
