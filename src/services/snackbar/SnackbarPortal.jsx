import React from 'react'
import { connect } from 'react-redux'
import mapValues from 'lodash/mapValues'
import { Button, Segment } from 'semantic-ui-react'
import { selectors } from './reducer'
import { closeSnackbar } from './actions'

class SnackbarPortal extends React.Component {
  onRequestClose = () => this.props.dispatch(closeSnackbar())

  dispatchAction = () => {
    const { dispatch, fsaForAction } = this.props
    if (fsaForAction) {
      dispatch(fsaForAction)
      dispatch(closeSnackbar)
    }
  }

  render() {
    const { actionButton, isOpened, message } = this.props
    return (
      isOpened && (
        <Segment raised>
          {message}
          {actionButton && <Button onClick={this.dispatchAction} />}
        </Segment>
      )
    )
  }
}

const mapStateToProps = state => mapValues(selectors, selector => selector(state))

export default connect(mapStateToProps)(SnackbarPortal)
