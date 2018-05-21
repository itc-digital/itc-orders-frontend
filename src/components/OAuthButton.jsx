import React from 'react'
import Button from 'rambler-ui/Button'
import { oAuthUrl } from 'services/api/constants'

const OAuthButton = ({ children }) => (
  <Button href={oAuthUrl} target="_blank">
    {children || 'Вход'}
  </Button>
)

export default OAuthButton
