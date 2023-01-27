// Write your code here
import './index.css'

const DenominationItem = props => {
  const {withdraw, itemDetails} = props
  const {value, id} = itemDetails

  const onWithdraw = () => {
    withdraw(id)
  }

  return (
    <li>
      <button className="button" type="button" onClick={onWithdraw}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
