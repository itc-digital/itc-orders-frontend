import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'

const styles = {
  header: {
    marginBottom: '24px',
  },

  navItem: {
    textDecoration: 'none',
  },
}

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
  <div style={styles.header} value={location.pathname}>
    {navigation.map(({ title, path }) => (
      <NavLink to={path} key={title} exact>{title}</NavLink>
    ))}
  </div>
)

export default withRouter(Header)
