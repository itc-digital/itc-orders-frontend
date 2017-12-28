import React from 'react';
import { makeStaticRoutes } from 'routes';
import styled from 'styled-components';

import Private from 'components/Private';

const Container = styled.div`
    width: 700px;
    margin: 0 auto;
    padding: 30px;
    background: #fddfdf;
`;

const App = () => (
    <Container>
        {makeStaticRoutes()}
        <Private />
    </Container>
);

export default App;
