import React from 'react';
import Button from 'rambler-ui/Button';
import { oAuthUrl } from 'services/api/constants';

const OAuthButton = () => <Button href={oAuthUrl} target="_blank">Вход</Button>;

export default OAuthButton;
