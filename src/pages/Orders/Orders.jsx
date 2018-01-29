import React from 'react';
import { connect } from 'react-redux';
import { apiRequest } from 'services/api/actions';
import { H1, H2 } from 'rambler-ui/Typography';
import { ordersFetchResult } from './actions';
import { selectors } from './reducer';

class Orders extends React.Component {
    componentDidMount() {
        this.props.ordersFetch();
    }

    render() {
        const { orders } = this.props;
        return (
            <div>
                <H1>Мои заявки</H1>
                {orders && orders.length ? (
                    orders.map(order => <div>{order.title}</div>)
                ) : (
                    <H2>У вас нет поданных заявок</H2>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    orders: selectors.selectOrders(state),
});

const mapDispatchToProps = dispatch => ({
    ordersFetch: () =>
        dispatch(apiRequest({
            endpoint: 'orders',
            resultType: ordersFetchResult,
        })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
