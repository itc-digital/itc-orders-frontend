import { createLogic } from 'redux-logic';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { authRequired } from 'services/auth/actions';
import { openSnackbar } from 'services/snackbar/actions';
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
                    return resultType({ ...params, ...response });
                }
                return resultType(new Error(response.error));
            })
            .catch((err) => {
                if (err.status === 401) {
                    return Observable.of(authRequired(), resultType(err));
                }

                // TODO: показать модалку с ошибкой и предложением повторить запрос
                return Observable.of(
                    openSnackbar({
                        type: 'danger',
                        message: 'Сервис недоступен. Проверьте подключение к сети.',
                        actionButton: 'Повторить',
                        fsaForAction: action,
                    }),
                    resultType(err),
                );
            }));
        done();
    },
});

export default [requestLogic];
