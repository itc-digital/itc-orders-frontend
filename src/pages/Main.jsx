import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div>
        <h1>Главная страница</h1>
        <Link to="/private">Заказы</Link>
        {' '}
        <Link to="/order">Форма заявки</Link>
    </div>
);
