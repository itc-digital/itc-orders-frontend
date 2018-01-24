import React from 'react';
import { Tabs, TabsItem } from 'rambler-ui/Tabs';
import { withRouter, NavLink } from 'react-router-dom';

const styles = {
    header: {
        marginBottom: '24px',
    },

    navItem: {
        textDecoration: 'none',
    },
};

const navigation = [
    {
        path: '/',
        title: 'Главная',
    },
    {
        path: '/order',
        title: 'Работать с нами',
    },
];

const Header = ({ location }) => (
    <Tabs style={styles.header} value={location.pathname}>
        {navigation.map(({ title, path }) => (
            <TabsItem
                container={<NavLink to={path} exact />}
                style={styles.navItem}
                value={path}
                key={path}
            >
                {title}
            </TabsItem>
        ))}
    </Tabs>
);

export default withRouter(Header);
