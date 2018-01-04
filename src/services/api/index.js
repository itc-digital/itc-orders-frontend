import 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ajax } from 'rxjs/observable/dom/ajax';
import { objectToQueryString } from 'utils/objectToQueryString';
import { store } from 'index';
import { authRequired } from 'api/auth/actions';

const apiHost = process.env.REACT_APP_API_HOSTNAME;

const call = (endpoint, params) => {
    const query = params ? `?${objectToQueryString(params)}` : '';
    const ajaxCall = ajax({
        url: `${apiHost}/${endpoint}${query}`,
        withCredentials: true,
        responseType: 'json',
    }).map(x => x.response);

    return ajaxCall;
};

const callWithAuth = (endpoint, params) =>
    call(endpoint, params)
        .map(response => response)
        .catch((err) => {
            if (err.status === 401) {
                store.dispatch(authRequired());
            }
        });

export const authenticate = token => call('auth', { access_token: token });
export const fetchPrivate = () => callWithAuth('private');

export default {
    authenticate,
    fetchPrivate,
};
