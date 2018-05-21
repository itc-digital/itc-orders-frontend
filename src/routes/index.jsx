import React from 'react'
import { Route, Switch } from 'react-router-dom'
import withAuth from 'utils/withAuth'
import Main from 'pages/Main'
import OAuthCallback from 'pages/OAuthCallback'
import Orders from 'pages/Orders'
import OrderPage from 'pages/OrderPage'

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
    path: '/orders',
    component: withAuth(Orders),
  },
  {
    path: '/order',
    component: withAuth(OrderPage),
  },
]

/* eslint-disable react/no-array-index-key */
export const makeStaticRoutes = () => (
  <Switch>
    {routes.map(({ path, component }, key) => (
      <Route exact path={path} component={component} key={key} />
    ))}
  </Switch>
)
