import React, { Component } from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import {Button} from 'semantic-ui-react'


class CheckoutForm extends Component {

  state = {
    complete: false
  }

  submit = async () => {
    let {token} = await this.props.stripe.createToken({name: 'Name'});
    let response = await fetch('http://localhost:3000/charges', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      }, 
      body: JSON.stringify({
        token: token.id,
        orderId: this.props.orderId
      })
    })

    if (response.ok) {
      this.setState({
        complete: true
      })
    }
    this.props.payForItems()

    // try {
    //   const response = await fetch('/charge');
    //   const json = await response.json();
  
    //   const response2 = await fetch('charge again');
    // } catch (error) {
    //   // handle error here
    // }

  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete!</h1>

    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <Button size='small' onClick={this.submit} color="primary" size="lg">Purchase</Button>
      </div>
    )
  }
}
export default injectStripe(CheckoutForm);
