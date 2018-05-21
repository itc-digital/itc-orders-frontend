import React from 'react'
import styled from 'styled-components'
import { makeStaticRoutes } from 'routes'
import SnackbarPortal from 'services/snackbar'
import Header from './Header'

const Container = styled.div`
  width: 700px;
  margin: 0 auto;
  padding: 20px;
`

const App = () => (
  <Container>
    <Header />
    {makeStaticRoutes()}
    <SnackbarPortal />
  </Container>
)

export default App
