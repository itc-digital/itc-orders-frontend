import React from 'react';
import { connect } from 'react-redux';
import { authFetch } from 'api/auth/actions';

class OAuthCallback extends React.Component {
    componentDidMount() {
        this.props.dispatch(authFetch());
    }

    render() {
        return null;
    }
}

export default connect()(OAuthCallback);
