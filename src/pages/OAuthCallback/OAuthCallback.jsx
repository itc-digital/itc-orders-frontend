import React from 'react';
import { connect } from 'react-redux';
import { apiRequest } from 'api/actions';
import { authResult } from 'api/auth/actions';

class OAuthCallback extends React.Component {
    componentDidMount() {
        const hash = window.location.hash.substr(1);
        const token = hash.substring(hash.search('=') + 1, hash.search('&'));
        this.props.dispatch(apiRequest({
            endpoint: 'auth',
            params: { access_token: token },
            resultType: authResult,
        }));
    }

    render() {
        return null;
    }
}

export default connect()(OAuthCallback);
