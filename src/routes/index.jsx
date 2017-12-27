import React from 'react';
import { Route, Switch } from 'react-router-dom';
import OAuthButton from 'components/OAuthButton';
import OAuthCallback from 'components/OAuthCallback';

const routes = [
    {
        path: '/',
        component: OAuthButton,
    },
    {
        path: '/oauth_callback',
        component: OAuthCallback,
    },
];

export const makeStaticRoutes = () => (
    <Switch>
        {routes.map(({ path, component }, key) => (
            <Route exact path={path} component={component} key={key} />
        ))}
    </Switch>
);
