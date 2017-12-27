/* global devToolsExtension:false */

import { compose, createStore, applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';

import 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ajax } from 'rxjs/observable/dom/ajax';

import rootReducer from './rootReducer';
import logic from './rootLogic';

const deps = {
    httpClient: ajax,
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
    return store;
}
