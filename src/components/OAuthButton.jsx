import React from 'react';
import styled from 'styled-components';
import { oAuthUrl } from 'api/vk';

const OAuthButtonStyled = styled.a`
    display: inline-block;
    padding: 12px;
    border-radius: 2px;
    text-decoration: none;
    background: #3a24ff;
    color: #fff;
`;

const OAuthButton = () => <OAuthButtonStyled href={oAuthUrl}>Вход</OAuthButtonStyled>;

export default OAuthButton;
