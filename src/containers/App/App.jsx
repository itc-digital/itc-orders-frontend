import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { makeRoutes } from 'routes';

const App = () => (
    <BrowserRouter>
        <Switch>
            {makeRoutes()}
        </Switch>
    </BrowserRouter>
);

export default App;
