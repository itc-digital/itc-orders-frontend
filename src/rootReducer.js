import { combineReducers } from 'redux';
import { key as authKey, reducer as authReducer } from 'services/api/auth';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    routing: routerReducer,
    [authKey]: authReducer,
});
