import React from 'react'
import { connect } from 'react-redux'
import { H1, H2 } from 'rambler-ui/Typography'
import { apiRequest } from 'services/api/actions'
import OrderCard from 'components/OrderCard'
import { ordersFetchResult } from './actions'
import { selectors } from './reducer'

class Orders extends React.Component {
  componentDidMount() {
    this.props.ordersFetch()
  }

  render() {
    const { orders } = this.props
    return (
      <div>
        <H1>Поданные заявки</H1>
        {orders && orders.length ? (
          orders.map(order => (
            <OrderCard title={order.title} description={order.description} status={order.status} />
          ))
        ) : (
          <H2>У вас нет поданных заявок</H2>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  orders: selectors.selectOrders(state),
})

const mapDispatchToProps = dispatch => ({
  ordersFetch: () =>
    dispatch(apiRequest({
      endpoint: 'orders',
      resultType: ordersFetchResult,
    })),
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
