import React from 'react';
import { Route } from 'react-router-dom';
import OAuthButton from 'components/OAuthButton';
import OAuthCallback from 'containers/OAuthCallback';

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

export const makeRoutes = () =>
    routes.map(({ path, component }) => (
        <Route exact path={path} component={component} key={path} />
    ));
