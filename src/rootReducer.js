import { combineReducers } from 'redux';
import { key as authKey, reducer as authReducer } from 'services/auth';
import { key as privateKey, reducer as privateReducer } from 'pages/Private';
import { key as snackbarKey, reducer as snackbarReducer } from 'services/snackbar';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    routing: routerReducer,
    [authKey]: authReducer,
    [privateKey]: privateReducer,
    [snackbarKey]: snackbarReducer,
});
