import React from 'react'
import styled from 'styled-components'
import { H2, Text } from 'rambler-ui/Typography'

const Card = styled.div`
  padding: 20px;
  border: 1px solid black;
  margin-bottom: 10px;
`

const OrderCard = ({ title, description, status }) => (
  <Card>
    <H2>Идея: {title}</H2>
    <Text>Описание: {description}</Text>
    <Text>Статус: {status}</Text>
  </Card>
)

export default OrderCard
