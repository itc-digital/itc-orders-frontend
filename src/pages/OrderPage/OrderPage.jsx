import React from 'react'
import { connect } from 'react-redux'
import { Header } from 'semantic-ui-react'
import OrderForm from 'components/OrderForm'
import { orderSubmit } from './actions'
import { selectors } from './reducer'

const OrderPage = ({ onSubmit, isSubmitted, isSubmitting }) => (
  <div>
    {!isSubmitted ? (
      <OrderForm onSubmit={onSubmit} isSubmitInProcess={isSubmitting} />
    ) : (
      <div>
        <Header>Заявка отправлена</Header>
        <p>Cпасибо! Мы свяжемся в ближайшее время.</p>
      </div>
    )}
  </div>
)

const mapStateToProps = state => ({
  isSubmitted: selectors.selectIsSubmitted(state),
  isSubmitting: selectors.selectIsSubmitting(state),
})

const mapDispatchToProps = {
  onSubmit: values => orderSubmit(values),
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage)
