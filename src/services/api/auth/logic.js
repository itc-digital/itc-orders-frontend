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

    process({ httpClient, action }, dispatch, done) {
        const hash = window.location.hash.substr(1);
        const token = hash.substr(hash.search('=') + 1, hash.search('&'));
        console.log(push('/'));

        dispatch(httpClient
            .getJSON(`http://localhost:3001/auth?access_token=${token}`)
            .map((response) => {
                writeToken(token);
                return Observable.of(
                    {
                        type: '@@router/CALL_HISTORY_METHOD',
                        payload: { method: 'push', args: ['/'] },
                    },
                    authFetchFulfilled({ ...action.payload, ...response, token }),
                );
            })
            .concatAll()
            .catch(err => Observable.of(authFetchRejected(err))));
        done();
    },
});

export default [authFetchLogic];
