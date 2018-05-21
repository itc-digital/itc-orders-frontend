import 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import { ajax } from 'rxjs/observable/dom/ajax'
import { objectToQueryString } from 'utils/objectToQueryString'
import { apiHost } from './constants'

export const call = (endpoint, params, method = 'GET', body) => {
  const query = params ? `?${objectToQueryString(params)}` : ''
  const ajaxCall = ajax({
    url: `${apiHost}/${endpoint}${query}`,
    withCredentials: true,
    responseType: 'json',
    method,
    body,
  }).map(x => x.response)

  return ajaxCall
}
