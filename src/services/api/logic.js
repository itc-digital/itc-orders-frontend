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
        const {
            endpoint, params, method, body, resultType,
        } = action.payload;

        dispatch(api
            .call(endpoint, params, method, body)
            .map((response) => {
                if (response.success) {
                    return resultType({ ...params, ...response });
                }
                return resultType(new Error(response.error));
            })
            .catch((err) => {
                if (err.status === 401 || err.status === 403) {
                    return Observable.of(authRequired(), resultType(err));
                }

                if (err.status === 500) {
                    return Observable.of(
                        openSnackbar({
                            type: 'danger',
                            message: 'Внутренняя ошибка. Мы уже работаем над её исправлением',
                            actionButton: undefined,
                        }),
                        resultType(err),
                    );
                }

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
