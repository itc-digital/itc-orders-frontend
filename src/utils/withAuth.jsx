import React from 'react';
import { connect } from 'react-redux';
import { roles } from 'services/auth/constants';
import { selectors } from 'services/auth/reducer';
import OAuthButton from 'components/OAuthButton';

const withAuth = Component => props =>
    (props.authRole === roles.USER ? <Component {...props} /> : <OAuthButton />);

const mapStateToProps = state => ({
    authRole: selectors.authRole(state),
});

export default Component => connect(mapStateToProps)(withAuth(Component));
