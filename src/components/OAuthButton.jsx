import React from 'react'
import { Button } from 'semantic-ui-react'
import { oAuthUrl } from 'services/api/constants'

const OAuthButton = ({ children }) => (
  <Button href={oAuthUrl} target="_blank">
    {children || 'Вход'}
  </Button>
)

export default OAuthButton
