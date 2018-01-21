import React from 'react';
import { Snackbar, provideSnackbar } from 'rambler-ui/Snackbar';

class SnackbarProvider extends React.Component {
    snackbar() {
        const { props } = this;
        const snackbar = props.openSnackbar(<Snackbar
            positionX="top"
            autoCloseDuration={0}
            onAction={() => snackbar.close()}
            {...props}
        >
            {props.message}
        </Snackbar>); // eslint-disable-line react/jsx-closing-tag-location
    }

    render() {
        return null;
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = state => ({});

export default connect()(provideSnackbar(SnackbarProvider));
