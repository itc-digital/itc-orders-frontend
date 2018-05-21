import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const navigation = [
  {
    path: '/',
    title: 'Главная',
  },
  {
    path: '/order',
    title: 'Работать с нами',
  },
]

const Header = ({ location }) => (
  <Menu pointing secondary>
    {navigation.map(({ title, path }) => (
      <Menu.Item as="div" active={path === location.pathname} key={title}>
        <NavLink to={path} exact>
          {title}
        </NavLink>
      </Menu.Item>
    ))}
  </Menu>
)

export default withRouter(Header)
