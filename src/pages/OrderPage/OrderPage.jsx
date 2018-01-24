import React from 'react';
import { connect } from 'react-redux';
import OrderForm from 'components/OrderForm';
import { apiRequest } from 'services/api/actions';
import { orderSubmitResult } from './actions';

const OrderPage = ({ onSubmit }) => (
    <div>
        <OrderForm onSubmit={onSubmit} />
    </div>
);

const mapDispatchToProps = {
    onSubmit: values =>
        apiRequest({
            endpoint: 'order',
            method: 'POST',
            body: values,
            resultType: orderSubmitResult,
        }),
};

export default connect(undefined, mapDispatchToProps)(OrderPage);
