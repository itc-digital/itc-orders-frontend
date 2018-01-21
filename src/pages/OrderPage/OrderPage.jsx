import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import OrderForm from 'components/OrderForm';

class OrderPage extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">Главная</Link>
                <OrderForm />
            </div>
        );
    }
}

export default connect()(OrderPage);
