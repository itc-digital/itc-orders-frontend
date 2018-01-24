import React from 'react';
import injectSheet from 'react-jss';
import { makeStaticRoutes } from 'routes';
import SnackbarPortal from 'services/snackbar';
import Header from './Header';

const styles = {
    container: {
        width: '700px',
        margin: '0 auto',
        padding: '20px',
    },
};

const App = ({ classes }) => (
    <div className={classes.container}>
        <Header />
        {makeStaticRoutes()}
        <SnackbarPortal />
    </div>
);

export default injectSheet(styles)(App);
