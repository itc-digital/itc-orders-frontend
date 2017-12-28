import { createLogic } from 'redux-logic';
import { Observable } from 'rxjs';
import { push } from 'react-router-redux';

import { writeToken } from 'utils/storage';

import { authFetch, authFetchCancel, authFetchFulfilled, authFetchRejected } from './actions';

export const authFetchLogic = createLogic({
    type: authFetch,
    cancelType: authFetchCancel,
    processOptions: {
        failType: authFetchRejected,
    },
    latest: true,

    process({ api, action }, dispatch, done) {
        const hash = window.location.hash.substr(1);
        const token = hash.substring(hash.search('=') + 2, hash.search('&'));

        dispatch(api
            .authenticate(token)
            .map((response) => {
                if (response.success) {
                    writeToken(token);
                    return Observable.of(
                        authFetchFulfilled({ ...action.payload, ...response }),
                        push('/'),
                    );
                }

                return Observable.of(authFetchRejected(response), push('/'));
            })
            .concatAll()
            .catch(err => Observable.of(authFetchRejected(err))));
        done();
    },
});

export default [authFetchLogic];
