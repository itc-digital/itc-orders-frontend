import React from 'react';
import { withRouter } from 'react-router';
import { authenticate } from 'api/auth';

class OAuthCallback extends React.Component {
    componentDidMount() {
        authenticate()
            .then(() => {
                this.props.history.push('/');
            })
            .catch(e => console.log(e));
    }

    render() {
        return null;
    }
}

export default withRouter(OAuthCallback);
