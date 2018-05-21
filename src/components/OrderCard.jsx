import React from 'react'
import styled from 'styled-components'
import { Header } from 'semantic-ui-react'

const Card = styled.div`
  padding: 20px;
  border: 1px solid black;
  margin-bottom: 10px;
`

const OrderCard = ({ title, description, status }) => (
  <Card>
    <Header>Идея: {title}</Header>
    <p>Описание: {description}</p>
    <p>Статус: {status}</p>
  </Card>
)

export default OrderCard
