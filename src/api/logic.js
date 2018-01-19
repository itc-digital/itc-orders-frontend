import { createLogic } from 'redux-logic';
import { Observable } from 'rxjs/Observable';
import { authRequired } from 'api/auth/actions';
import { apiRequest } from './actions';

export const requestLogic = createLogic({
    type: apiRequest,
    latest: false,

    process({ api, action }, dispatch, done) {
        const { endpoint, params, resultType } = action.payload;

        dispatch(api
            .call(endpoint, params)
            .map((response) => {
                if (response.success) {
                    return Observable.of(resultType({ ...action.payload, ...response }));
                }
                // TODO: показать модалку с ошибкой и предложением повторить запрос
                return Observable.of(resultType(new Error(response.error)));
            })
            .concatAll()
            .catch((err) => {
                if (err.status === 401) {
                    return Observable.of(authRequired(), resultType(err));
                }

                return Observable.of(resultType(err));
            }));
        done();
    },
});

export default [requestLogic];
