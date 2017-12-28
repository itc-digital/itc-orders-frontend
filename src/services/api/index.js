import 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ajax } from 'rxjs/observable/dom/ajax';
import { objectToQueryString } from 'utils/objectToQueryString';
import { errorCodes } from './constants';

const apiHost = process.env.REACT_APP_API_HOSTNAME;

const call = (endpoint, params) => {
    const query = params ? objectToQueryString(params) : '';
    return ajax.getJSON(`${apiHost}/${endpoint}?${query}`);
};

const callWithAuth = (endpoint, params) =>
    call(endpoint, params).map((response) => {
        if (!response.success && response.error_code === errorCodes.INVALID_ACCESS_TOKEN) {
        }

        return response;
    });

export const authenticate = token => call('auth', { access_token: token });
export const fetchPrivate = token => call('private');

export default {
    authenticate,
};
