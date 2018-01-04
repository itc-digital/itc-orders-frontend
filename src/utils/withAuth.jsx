import React from 'react';
import { connect } from 'react-redux';
import { roles } from 'api/auth/constants';
import { selectors } from 'api/auth/reducer';
import OAuthButton from 'components/OAuthButton';

const withAuth = Component => props =>
    (props.authRole === roles.USER ? <Component {...props} /> : <OAuthButton />);

const mapStateToProps = state => ({
    authRole: selectors.authRole(state),
});

export default Component => connect(mapStateToProps)(withAuth(Component));
