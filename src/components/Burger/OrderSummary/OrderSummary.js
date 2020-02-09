import React, { Fragment, Component } from 'react'

import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log('order summary will update')
  }
  
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(key => {
      return <li key={key}>
        <span
          style={{ textTransform: 'capitalize' }}
        >
          {key}
        </span>: {this.props.ingredients[key]}
      </li>
    })

    return (
      <Fragment>
        <h3>Your order</h3>
        <p>Burger with the following ingredients:</p>

        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button
          btnType='Danger'
          clicked={this.props.purchaseCancelled}
        >
          CANCEL
      </Button>
        <Button
          btnType='Success'
          clicked={this.props.purchaseContinued}
        >
          CONTINUE
      </Button>
      </Fragment>
    )
  }

}

export default OrderSummary