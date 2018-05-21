import React from 'react'
import { connect } from 'react-redux'
import { Header } from 'semantic-ui-react'
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
        <Header as="h1">Поданные заявки</Header>
        {orders && orders.length ? (
          orders.map(order => (
            <OrderCard title={order.title} description={order.description} status={order.status} />
          ))
        ) : (
          <Header as="h2">У вас нет поданных заявок</Header>
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
