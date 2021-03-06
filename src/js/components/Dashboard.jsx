import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Balance from './Balance'
import TransactionList from './TransactionList'

class Dashbaord extends React.Component {
  render () {
    if (!this.props.account) {
      return (
        <h1>Dashboard</h1>
      )
    }
    return (
      <div>
        <div className='balance-container'>
          <Balance account={this.props.account} utils={this.props.utils} />
        </div>
        <div className='dashboard'>

          <div className='transaction-list-container'>
            <TransactionList account={this.props.account} utils={this.props.utils} />
          </div>
        </div>
      </div>
    )
  }
}

Dashbaord.propTypes = {
  account: PropTypes.object
}

Dashbaord.defaultProps = {
  account: null
}

function mapStateToProps (state) {
  return {
    account: state.currentAccount
  }
}

function mapDispatchToProps (dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashbaord)
