import { createLogic } from 'redux-logic';
import { Observable } from 'rxjs';

import {
    privateFetch,
    privateFetchCancel,
    privateFetchFulfilled,
    privateFetchRejected,
} from './actions';

export const privateFetchLogic = createLogic({
    type: privateFetch,
    cancelType: privateFetchCancel,
    processOptions: {
        failType: privateFetchRejected,
    },
    latest: true,

    process({ api, action }, dispatch, done) {
        dispatch(api
            .fetchPrivate()
            .map((response) => {
                if (response.success) {
                    return Observable.of(privateFetchFulfilled({ ...action.payload, ...response }));
                }
                return Observable.of(privateFetchRejected(response));
            })
            .concatAll()
            .catch(err => Observable.of(privateFetchRejected(err))));
        done();
    },
});

export default [privateFetchLogic];
