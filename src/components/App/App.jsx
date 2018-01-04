import React from 'react';
import styled from 'styled-components';
import { makeStaticRoutes } from 'routes';

const Container = styled.div`
    width: 700px;
    margin: 0 auto;
    padding: 30px;
    background: #fddfdf;
`;

const App = () => <Container>{makeStaticRoutes()}</Container>;

export default App;
