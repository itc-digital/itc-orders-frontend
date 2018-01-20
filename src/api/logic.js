import { createLogic } from 'redux-logic';
import { Observable } from 'rxjs/Observable';
import { authRequired } from 'api/auth/actions';
import { apiRequest, apiRequestCancel } from './actions';

export const requestLogic = createLogic({
    type: apiRequest,
    cancelType: apiRequestCancel,
    latest: false,

    process({ api, action }, dispatch, done) {
        const { endpoint, params, resultType } = action.payload;

        dispatch(api
            .call(endpoint, params)
            .map((response) => {
                if (response.success) {
                    return Observable.of(resultType({ ...action.payload, ...response }));
                }
                return Observable.of(resultType(new Error(response.error)));
            })
            .catch((err) => {
                if (err.status === 401) {
                    return Observable.of(authRequired(), resultType(err));
                }

                // TODO: показать модалку с ошибкой и предложением повторить запрос
                return Observable.of(resultType(err));
            }));
        done();
    },
});

export default [requestLogic];
