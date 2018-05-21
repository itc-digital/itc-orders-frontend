import React from 'react'
import { connect } from 'react-redux'
import { roles } from 'services/auth/constants'
import { selectors } from 'services/auth/reducer'
import OAuthButton from 'components/OAuthButton'
import { Header } from 'semantic-ui-react'

const NeedAuthNotice = () => (
  <div>
    <Header as="h3">Для продолжения необходимо зарегистрироваться или войти</Header>
    <OAuthButton>Продолжить</OAuthButton>
  </div>
)

const withAuth = Component => props =>
  (props.authRole === roles.USER ? <Component {...props} /> : <NeedAuthNotice />)

const mapStateToProps = state => ({
  authRole: selectors.authRole(state),
})

export default Component => connect(mapStateToProps)(withAuth(Component))
