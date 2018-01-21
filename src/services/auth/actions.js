import { createAction } from 'redux-actions';

export const key = 'services/auth';

export const getAuthStatus = createAction(`${key}/GET_AUTH_STATUS`);
export const authRequired = createAction(`${key}/AUTH_REQUIRED`);
export const authResult = createAction(`${key}/AUTH_RESULT`);
export const logIn = createAction(`${key}/LOG_IN`);
export const logOut = createAction(`${key}/LOG_OUT`);

export default {
    getAuthStatus,
    authRequired,
    authResult,
    logIn,
    logOut,
};
