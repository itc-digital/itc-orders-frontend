import React from 'react';
import { connect } from 'react-redux';
import { H3, Text } from 'rambler-ui/Typography';
import OrderForm from 'components/OrderForm';
import { orderSubmit } from './actions';
import { selectors } from './reducer';

const OrderPage = ({ onSubmit, isSubmitted, isSubmitting }) => (
    <div>
        {!isSubmitted ? (
            <OrderForm onSubmit={onSubmit} isSubmitInProcess={isSubmitting} />
        ) : (
            <div>
                <H3>Заявка отправлена</H3>
                <Text>Cпасибо! Мы свяжемся в ближайшее время.</Text>
            </div>
        )}
    </div>
);

const mapStateToProps = state => ({
    isSubmitted: selectors.selectIsSubmitted(state),
    isSubmitting: selectors.selectIsSubmitting(state),
});

const mapDispatchToProps = {
    onSubmit: values => orderSubmit(values),
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
