/* global devToolsExtension:false */

import { compose, createStore, applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';

import { call } from 'services/api/call';
import { getAuthStatus } from 'services/auth/actions';
import rootReducer from './rootReducer';
import logic from './rootLogic';

const deps = {
    api: { call },
};

const enhanceMiddleware = middleware =>
    (typeof devToolsExtension !== 'undefined'
        ? compose(middleware, devToolsExtension())
        : middleware);

export default function configureStore(browserHistory) {
    const logicMiddleware = createLogicMiddleware(logic, deps);
    const routerMiddleware = createRouterMiddleware(browserHistory);
    const middleware = applyMiddleware(routerMiddleware, logicMiddleware);

    const store = createStore(rootReducer, enhanceMiddleware(middleware));

    store.dispatch(getAuthStatus());

    return store;
}
