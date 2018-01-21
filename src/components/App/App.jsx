import React from 'react';
import injectSheet from 'react-jss';
import { makeStaticRoutes } from 'routes';

const styles = {
    container: {
        width: '700px',
        margin: '0 auto',
        padding: '20px',
    },
};

const App = ({ classes }) => <div className={classes.container}>{makeStaticRoutes()}</div>;

export default injectSheet(styles)(App);
