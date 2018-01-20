import React from 'react';
import Button from 'rambler-ui/Button';
import { oAuthUrl } from 'api/vk';

const OAuthButton = () => <Button href={oAuthUrl}>Вход</Button>;

export default OAuthButton;
