import React from 'react';
import { connect } from 'react-redux';
import mapValues from 'lodash/mapValues';
import { Snackbar } from 'rambler-ui/Snackbar';
import { selectors } from './reducer';
import { closeSnackbar } from './actions';

class SnackbarPortal extends React.Component {
    onRequestClose = () => this.props.dispatch(closeSnackbar())

    dispatchAction = () => {
        const { dispatch, fsaForAction } = this.props;
        if (fsaForAction) {
            dispatch(fsaForAction);
        }
    }

    render() {
        const {
            actionButton,
            isOpened,
            message,
            positionY,
            positionX,
            showClose,
            type,
        } = this.props;
        return (
            <Snackbar
                autoCloseDuration={0}
                actionButton={actionButton}
                isOpened={isOpened}
                positionY={positionY}
                positionX={positionX}
                onAction={this.dispatchAction}
                onRequestClose={this.onRequestClose}
                showClose={showClose}
                type={type}
            >
                {message}
            </Snackbar>
        );
    }
}

const mapStateToProps = state => mapValues(selectors, selector => selector(state));

export default connect(mapStateToProps)(SnackbarPortal);
