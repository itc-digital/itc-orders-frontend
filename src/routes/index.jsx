import React from 'react';
import { Route, Switch } from 'react-router-dom';
import withAuth from 'utils/withAuth';
import Main from 'pages/Main';
import OAuthCallback from 'pages/OAuthCallback';
import Private from 'pages/Private';
import OrderForm from 'pages/OrderForm';

const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/oauth_callback',
        component: OAuthCallback,
    },
    {
        path: '/private',
        component: withAuth(Private),
    },
    {
        path: '/order',
        component: withAuth(OrderForm),
    },
];

export const makeStaticRoutes = () => (
    <Switch>
        {routes.map(({ path, component }, key) => (
            <Route exact path={path} component={component} key={key} />
        ))}
    </Switch>
);
