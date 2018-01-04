import { createAction } from 'redux-actions';

export const key = 'api/auth';

export const getAuthStatus = createAction(`${key}/GET_AUTH_STATUS`);
export const authRequest = createAction(`${key}/AUTH_REQUEST`);
export const authSuccess = createAction(`${key}/AUTH_SUCCESS`);
export const authFailure = createAction(`${key}/AUTH_FAILURE`);
export const authRequired = createAction(`${key}/AUTH_REQUIRED`);
export const logOut = createAction(`${key}/LOG_OUT`);

export default {
    getAuthStatus,
    authRequest,
    authSuccess,
    authFailure,
    authRequired,
    logOut,
};
