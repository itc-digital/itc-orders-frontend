import { combineReducers } from 'redux';
import { key as authKey, reducer as authReducer } from 'api/auth';
import { key as privateKey, reducer as privateReducer } from 'pages/Private';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    routing: routerReducer,
    [authKey]: authReducer,
    [privateKey]: privateReducer,
});
