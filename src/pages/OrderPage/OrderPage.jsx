import React from 'react';
import { connect } from 'react-redux';
import OrderForm from 'components/OrderForm';

class OrderPage extends React.Component {
    render() {
        return (
            <div>
                <OrderForm />
            </div>
        );
    }
}

export default connect()(OrderPage);
