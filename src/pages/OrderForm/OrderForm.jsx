import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class OrderForm extends React.Component {
    render() {
        return (
            <div>
                <p>Тут будет форма заказа</p>
                <Link to="/">Главная</Link>
            </div>
        );
    }
}

export default connect()(OrderForm);
