// Write your code here

import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdraw = id => {
    let amount
    switch (id) {
      case 1:
        amount = 50
        break
      case 2:
        amount = 100
        break
      case 3:
        amount = 200
        break
      case 4:
        amount = 500
        break
      default:
        break
    }

    this.setState(prevState => ({balance: prevState.balance - amount}))
  }

  render() {
    const {balance} = this.state

    const {denominationsList} = this.props

    return (
      <div className="main-container">
        <div className="name-container">
          <div className="logo-container">
            <h1 className="logo-heading">S</h1>
          </div>
          <p className="name-heading">Sarah Williams</p>
        </div>
        <div className="balance-container">
          <p className="balance-heading">Your Balance</p>
          <p className="balance-heading">{balance}</p>
        </div>
        <p className="withdrawal">Withdraw</p>
        <p className="sum-heading">Choose SUM (In Rupees)</p>
        <ul className="lists">
          {denominationsList.map(eachItem => (
            <DenominationItem
              withdraw={this.withdraw}
              itemDetails={eachItem}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default CashWithdrawal
